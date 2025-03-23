"use client"

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useTheme } from 'next-themes'

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    
    // Camera Position
    camera.position.z = 30;
    camera.position.y = 5;
    
    // Background color based on theme - warm desert colors
    const isDark = theme === 'dark';
    scene.background = new THREE.Color(isDark ? 0x2a1708 : 0xffd996); // Darker brown vs warm sand
    scene.fog = new THREE.Fog(isDark ? 0x2a1708 : 0xffd996, 20, 70);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(isDark ? 0x404040 : 0x909090, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);
    
    // Create western-themed objects
    const objects: THREE.Object3D[] = [];
    
    // GROUND - Desert floor
    const groundGeometry = new THREE.PlaneGeometry(500, 500);
    const groundMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x5e3a1c : 0xd2b48c, // Desert sand
      side: THREE.DoubleSide,
      wireframe: true
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = Math.PI / 2;
    ground.position.y = -15;
    ground.position.z = -20;
    scene.add(ground);
    objects.push(ground);
    
    // Load GLTF Models
    const gltfLoader = new GLTFLoader();
    const loadedModels: THREE.Group[] = [];
    const animationMixers: THREE.AnimationMixer[] = [];
    
    // Main model - drugs_wagoon
    let drugsWagon: THREE.Group | null = null;
    
    // Load the drugs wagon model
    gltfLoader.load(
        '/models/drugs_wagoon/scene.gltf',
        (gltf) => {
        drugsWagon = gltf.scene;
        
        // Position the wagon at center of scene
        drugsWagon.position.set(0, -10, -25);
        drugsWagon.rotation.set(0, Math.PI / 4, 0);
        drugsWagon.scale.set(0.5, 0.5, 0.5); // Adjust scale as needed
        
        // Make all materials wireframe and set colors
        drugsWagon.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(material => {
                  material.wireframe = true;
                  if (material.hasOwnProperty('color')) {
                    (material as THREE.MeshBasicMaterial).color.set(isDark ? 0x8b4513 : 0xcd853f);
                  }
                });
              } else {
                child.material.wireframe = true;
                if (child.material.hasOwnProperty('color')) {
                  (child.material as THREE.MeshBasicMaterial).color.set(isDark ? 0x8b4513 : 0xcd853f);
                }
              }
            }
          }
        });
        
        // Add to scene
        scene.add(drugsWagon);
        loadedModels.push(drugsWagon);
        objects.push(drugsWagon);
        
        // Setup animations if any
        if (gltf.animations && gltf.animations.length) {
          const mixer = new THREE.AnimationMixer(drugsWagon);
          const animation = mixer.clipAction(gltf.animations[0]);
          animation.play();
          animationMixers.push(mixer);
        }
        
        console.log('Drugs Wagon loaded successfully');
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error('Error loading Drugs Wagon model:', error);
        // Create a fallback wagon if model fails to load
        createFallbackWagon();
      }
    );
    
    // Fallback wagon in case model loading fails
    const createFallbackWagon = () => {
      const wagonGroup = new THREE.Group();
      
      // Wagon base/bed
      const wagonBaseGeometry = new THREE.BoxGeometry(6, 1, 3);
      const wagonMaterial = new THREE.MeshBasicMaterial({
        color: isDark ? 0x8b4513 : 0xcd853f,
        wireframe: true
      });
      const wagonBase = new THREE.Mesh(wagonBaseGeometry, wagonMaterial);
      wagonGroup.add(wagonBase);
      
      // Wagon cover (arch)
      const wagonCoverGroup = new THREE.Group();
      for (let i = 0; i < 5; i++) {
        const archGeometry = new THREE.TorusGeometry(1.5, 0.1, 8, 8, Math.PI);
        const archMaterial = new THREE.MeshBasicMaterial({
          color: isDark ? 0xd3d3d3 : 0xf5f5f5,
          wireframe: true
        });
        const arch = new THREE.Mesh(archGeometry, archMaterial);
        
        arch.rotation.x = Math.PI / 2;
        arch.position.x = -2 + i;
        arch.position.y = 1.5;
        
        wagonCoverGroup.add(arch);
      }
      
      // Canvas cover
      const canvasGeometry = new THREE.CylinderGeometry(1.5, 1.5, 4, 8, 1, true, 0, Math.PI);
      const canvasMaterial = new THREE.MeshBasicMaterial({
        color: isDark ? 0xd3d3d3 : 0xf5f5f5,
        wireframe: true,
        side: THREE.DoubleSide
      });
      const canvas = new THREE.Mesh(canvasGeometry, canvasMaterial);
      canvas.rotation.z = Math.PI / 2;
      canvas.position.y = 1.5;
      wagonCoverGroup.add(canvas);
      
      wagonGroup.add(wagonCoverGroup);
      
      // Wheels
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          const wheelGeometry = new THREE.TorusGeometry(0.8, 0.2, 8, 12);
          const wheelMaterial = new THREE.MeshBasicMaterial({
            color: isDark ? 0x654321 : 0x8b4513,
            wireframe: true
          });
          const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
          
          wheel.position.x = -2 + i * 4;
          wheel.position.y = -0.8;
          wheel.position.z = -1.5 + j * 3;
          wheel.rotation.y = Math.PI / 2;
          
          // Add spokes
          const spokesGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.6, 8);
          for (let k = 0; k < 6; k++) {
            const spoke = new THREE.Mesh(spokesGeometry, wheelMaterial);
            spoke.rotation.z = Math.PI / 3 * k;
            wheel.add(spoke);
          }
          
          wagonGroup.add(wheel);
        }
      }
      
      // Position wagon
      wagonGroup.position.set(0, -10, -25);
      wagonGroup.rotation.set(0, Math.PI / 4, 0);
      
      scene.add(wagonGroup);
      objects.push(wagonGroup);
      drugsWagon = wagonGroup as unknown as THREE.Group;
    };
    
    // Desert Mountains - Background
    const mountainsGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const mountainGeometry = new THREE.ConeGeometry(
        10 + Math.random() * 10, // Radius
        20 + Math.random() * 20, // Height
        4 + Math.floor(Math.random() * 3) // Segments - low poly look
      );
      const mountainMaterial = new THREE.MeshBasicMaterial({
        color: isDark ? 0x483018 : 0xbf8a60, // Mountain color
        wireframe: true
      });
      const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
      
      // Position
      mountain.position.x = (Math.random() - 0.5) * 150;
      mountain.position.y = -5 + Math.random() * 3;
      mountain.position.z = -50 - Math.random() * 50;
      
      // Random rotation for variety
      mountain.rotation.y = Math.random() * Math.PI;
      
      mountainsGroup.add(mountain);
      objects.push(mountain);
    }
    scene.add(mountainsGroup);
    
    // Tumbleweed (small spheres with wireframe)
    const tumbleweeds = new THREE.Group();
    
    for (let i = 0; i < 8; i++) {
      const tumbleweedGeometry = new THREE.SphereGeometry(1 + Math.random() * 1.5, 8, 8);
      const tumbleweedMaterial = new THREE.MeshBasicMaterial({
        color: isDark ? 0xbf852e : 0x8b4513,
        wireframe: true
      });
      const tumbleweed = new THREE.Mesh(tumbleweedGeometry, tumbleweedMaterial);
      
      // Random position
      tumbleweed.position.x = (Math.random() - 0.5) * 70;
      tumbleweed.position.y = (Math.random() - 0.5) * 10;
      tumbleweed.position.z = (Math.random() - 0.5) * 30 - 10;
      
      // Random rotation
      tumbleweed.rotation.x = Math.random() * Math.PI;
      tumbleweed.rotation.y = Math.random() * Math.PI;
      
      tumbleweeds.add(tumbleweed);
      objects.push(tumbleweed);
    }
    scene.add(tumbleweeds);
    
    // Cacti (cylinders with small branches)
    const cacti = new THREE.Group();
    
    for (let i = 0; i < 8; i++) {
      const cactusGroup = new THREE.Group();
      
      // Main body
      const bodyGeometry = new THREE.CylinderGeometry(0.7, 0.9, 5 + Math.random() * 3, 8);
      const cactusMaterial = new THREE.MeshBasicMaterial({
        color: isDark ? 0x5a7e58 : 0x2e4d2e,
        wireframe: true
      });
      const body = new THREE.Mesh(bodyGeometry, cactusMaterial);
      
      // Add arms (branches)
      const armCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < armCount; j++) {
        const armGeometry = new THREE.CylinderGeometry(0.4, 0.5, 2 + Math.random() * 2, 8);
        const arm = new THREE.Mesh(armGeometry, cactusMaterial);
        
        // Position arm on the main body
        arm.position.y = Math.random() * 2 - 1;
        arm.position.x = 1.2;
        arm.rotation.z = Math.PI / 2 - Math.random() * 0.5;
        
        body.add(arm);
      }
      
      cactusGroup.add(body);
      
      // Position cactus
      cactusGroup.position.x = (Math.random() - 0.5) * 100;
      cactusGroup.position.y = -10 + Math.random() * 3;
      cactusGroup.position.z = (Math.random() - 0.5) * 40 - 20;
      
      cacti.add(cactusGroup);
      objects.push(cactusGroup);
    }
    scene.add(cacti);
    
    // Desert rocks and boulders
    const rocksGroup = new THREE.Group();
    for (let i = 0; i < 15; i++) {
      const rockGeometry = new THREE.DodecahedronGeometry(
        0.5 + Math.random() * 2.5,
        0 // Low detail for western style
      );
      const rockMaterial = new THREE.MeshBasicMaterial({
        color: isDark ? 0x6b5b45 : 0xa0826d, 
        wireframe: true
      });
      const rock = new THREE.Mesh(rockGeometry, rockMaterial);
      
      // Position rocks
      rock.position.x = (Math.random() - 0.5) * 120;
      rock.position.y = -12;
      rock.position.z = (Math.random() - 0.5) * 40 - 10;
      
      // Random rotation and scale
      rock.rotation.x = Math.random() * Math.PI;
      rock.rotation.y = Math.random() * Math.PI;
      rock.rotation.z = Math.random() * Math.PI;
      
      rocksGroup.add(rock);
      objects.push(rock);
    }
    scene.add(rocksGroup);
    
    // Stars (small bright points)
    const starsGroup = new THREE.Group();
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: isDark ? 0xffffff : 0xbf852e,
      size: 0.1,
      sizeAttenuation: true
    });
    
    const starsVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = -50 - Math.random() * 50;
      starsVertices.push(x, y, z);
    }
    
    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    starsGroup.add(stars);
    scene.add(starsGroup);
    
    // Animation speed
    const speed = 0.001;
    let tumbleRotation = 0;
    const clock = new THREE.Clock();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      const delta = clock.getDelta();
      tumbleRotation += speed;
      
      // Update animation mixers
      animationMixers.forEach(mixer => mixer.update(delta));
      
      // Rotate tumbleweeds
      tumbleweeds.children.forEach((tumbleweed, i) => {
        tumbleweed.rotation.x += speed * (i + 1) * 0.5;
        tumbleweed.rotation.y += speed * (i + 1) * 0.3;
        tumbleweed.position.x += 0.01 * (i + 1);
        
        // Reset position when out of screen
        if (tumbleweed.position.x > 40) {
          tumbleweed.position.x = -40;
        }
      });
      
      // Gentle sway for cacti
      cacti.children.forEach((cactus, i) => {
        cactus.rotation.y = Math.sin(tumbleRotation * (i + 1) * 0.3) * 0.05;
      });
      
      // Gentle movement for wagon
      if (drugsWagon) {
        // Slight bobbing motion
        drugsWagon.position.y = -10 + Math.sin(tumbleRotation * 0.5) * 0.2;
        // Slight rotation
        drugsWagon.rotation.y = Math.PI / 4 + Math.sin(tumbleRotation * 0.3) * 0.05;
      }
      
      // Subtle camera movement
      camera.position.y = 5 + Math.sin(tumbleRotation * 0.3) * 0.5;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      objects.forEach(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
      
      // Dispose loaded models
      loadedModels.forEach(model => {
        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            if (node.geometry) node.geometry.dispose();
            
            if (node.material) {
              if (Array.isArray(node.material)) {
                node.material.forEach(material => material.dispose());
              } else {
                node.material.dispose();
              }
            }
          }
        });
      });
      
      if (stars.geometry) stars.geometry.dispose();
      if (stars.material instanceof THREE.Material) stars.material.dispose();
      
      renderer.dispose();
    };
  }, [theme]);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 opacity-50 pointer-events-none"
      aria-hidden="true"
    />
  );
};