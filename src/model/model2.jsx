import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from './OBJLoader';
import MockupModel from './MockupModel';
import roundedPlane from './roundedPlane';

const phoneObj = new URL('./iphone.obj', import.meta.url).href;

const Mockup = ({ screen, lightClr = 'white', phoneClr = 'white', position = {}, rotation = {}, linearFilter }) => {
  const containerRef = useRef(null);
  const [phones, setPhones] = useState([]);
  let camera, scene, renderer;
  let mouseX = 0, mouseY = 0;

  useEffect(() => {
    const init = () => {
      const environmentInit = () => {
        camera = new THREE.PerspectiveCamera(
          45,
          containerRef.current.clientWidth / containerRef.current.clientHeight,
          0.1,
          10000
        );
        scene = new THREE.Scene();

        const light = new THREE.DirectionalLight(lightClr);
        scene.add(light);

        light.position.set(0, 0, 300);
        camera.position.set(0, 0, 200);
      };

      const phoneInit = (screenSrc, home) => {
        const phone = new MockupModel({
          position: {
            x: 0,
            y: 0,
            z: 0,
            ...home.position,
          },
          rotation: {
            x: -0.2,
            y: 0.3,
            z: 0.06,
            ...home.rotation,
          },
        });

        const screenInit = () => {
          const scale = 6;
          const width = scale * 9;
          const height = scale * 19.3;
          const radius = 8;

          const geometry = roundedPlane(width, height, radius);

          let texture;

          if (typeof screenSrc === 'string') {
            const loader = new THREE.TextureLoader();
            texture = loader.load(screenSrc);
          } else {
            texture = new THREE.VideoTexture(screenSrc);
          }

          texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

          const material = new THREE.MeshLambertMaterial({ map: texture });

          if (linearFilter) {
            material.map.minFilter = THREE.LinearFilter;
          }

          const screen = new THREE.Mesh(geometry, material);

          const recomputeUVs = () => {
            const box = new THREE.Box3().setFromObject(screen);
            const size = new THREE.Vector3();
            box.getSize(size);
            const vec3 = new THREE.Vector3();
            const attPos = screen.geometry.attributes.position;
            const attUv = screen.geometry.attributes.uv;
            for (let i = 0; i < attPos.count; i += 1) {
              vec3.fromBufferAttribute(attPos, i);
              attUv.setXY(i,
                (vec3.x - box.min.x) / size.x,
                (vec3.y - box.min.y) / size.y
              );
            }
          };

          recomputeUVs();

          screen.translateZ(3.6);
          screen.geometry.center();
          phone.add(screen);
        };

        const bodyInit = () => {
          const loader = new OBJLoader();
          loader.load(phoneObj, (body) => {
            const bodyGroup = new THREE.Object3D();
            body.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshLambertMaterial({ color: phoneClr });
                child.geometry.center();
                const mesh = new THREE.Mesh(child.geometry, child.material);
                const scale = 8.6;
                mesh.rotateX(Math.PI / 2);
                mesh.scale.set(-scale, scale, scale);
                bodyGroup.add(mesh);
              }
            });

            phone.add(bodyGroup);
          });
        };

        phone.startFloat();
        scene.add(phone);
        screenInit();
        bodyInit();

        return phone;
      };

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);

      environmentInit();

      if (Array.isArray(screen)) {
        setPhones(screen.map((s, i) => phoneInit(s, {
          position: position[i],
          rotation: rotation[i],
        })));
      } else {
        setPhones([phoneInit(screen, { position, rotation })]);
      }

      containerRef.current.appendChild(renderer.domElement);
    };

    const animate = (currentTime) => {
      currentTime *= 0.001;
      const deltaTime = currentTime - previousTime;
      previousTime = currentTime;

      requestAnimationFrame(animate);

      if (phones.length) {
        phones.forEach((phone) => {
          phone.animation(deltaTime, { x: mouseX / 2, y: mouseY / 2, z: camera.position.z });
        });
      }

      renderer.render(scene, camera);
    };

    let previousTime = 0;

    init();
    animate(0);

    return () => {
      // Cleanup if necessary
    };
  }, [screen, lightClr, phoneClr, position, rotation, linearFilter]);

  const handleMouseEnter = () => {
    if (phones.length) {
      phones.forEach((phone) => {
        phone.animation = phone.lookAtAnim;
        phone.goingHome = false;
        clearTimeout(phone.homeTimeout);
      });
    }
  };

  const handleMouseLeave = () => {
    if (phones.length) {
      phones.forEach((phone) => {
        phone.animation = phone.homeAnim;
      });
    }
  };

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX = event.clientX - rect.left - rect.width / 2;
    mouseY = -(event.clientY - rect.top - rect.height / 2);
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    mouseX = event.touches[0].clientX - rect.left - rect.width / 2;
    mouseY = -(event.touches[0].clientY - rect.top - rect.height / 2);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onTouchMove={handleTouchMove}
    />
  );
};

export default Mockup;