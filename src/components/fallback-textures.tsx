"use client"

import React, { useEffect } from 'react'

export function FallbackTextures() {
  useEffect(() => {
    // Menambahkan CSS inline untuk tekstur fallback
    const style = document.createElement('style')
    style.textContent = `
      /* Fallback untuk western-divider jika gambar tidak ada */
      .western-divider {
        height: 30px;
        background: repeating-linear-gradient(
          90deg,
          transparent,
          transparent 10px,
          #8B4513 10px,
          #8B4513 12px
        );
        position: relative;
        margin: 20px 0;
      }
      
      .western-divider::before,
      .western-divider::after {
        content: "★";
        font-size: 20px;
        color: #B7410E;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      
      .western-divider::before {
        left: 20px;
      }
      
      .western-divider::after {
        right: 20px;
      }
      
      /* Fallback untuk rope-border jika gambar tidak ada */
      .rope-border {
        border: 8px solid transparent;
        border-image: repeating-linear-gradient(
          45deg,
          #8B4513,
          #B7410E 10px,
          #8B4513 20px
        ) 8;
        padding: 15px;
      }
      
      /* Fallback untuk revolver-icon jika gambar tidak ada */
      .revolver-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-color: #8B4513;
        border-radius: 50%;
        margin-right: 8px;
        position: relative;
      }
      
      .revolver-icon::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 4px;
        background-color: #8B4513;
        right: -8px;
        top: 6px;
        border-radius: 2px;
      }
      
      /* Fallback untuk sheriff-badge jika gambar tidak ada */
      .sheriff-badge {
        position: absolute;
        width: 60px;
        height: 60px;
        background-color: #DAA520;
        clip-path: polygon(
          50% 0%, 
          61% 35%, 
          98% 35%, 
          68% 57%, 
          79% 91%, 
          50% 70%, 
          21% 91%, 
          32% 57%, 
          2% 35%, 
          39% 35%
        );
        top: -20px;
        right: -20px;
        transform: rotate(15deg);
      }
      
      /* Fallback untuk bullet-holes jika tidak style tidak berfungsi */
      .bullet-holes {
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: radial-gradient(circle, #000 0%, #333 50%, #000 100%);
        box-shadow: 0 0 5px rgba(0,0,0,0.5), inset 0 0 2px rgba(255,255,255,0.3);
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])
  
  return null
} 