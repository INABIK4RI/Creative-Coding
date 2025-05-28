// Import Three.js and OrbitControls from a CDN
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/controls/OrbitControls.js';

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// Add OrbitControls for camera interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Load and parse the .las file
const loader = new Potree.LASLoader();
loader.load(
  '../../visp.las',
  function (geometry) {
    // Convert LAS data to Three.js points
    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true, // Use colors from the LAS file
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
  },
  undefined, // Optional onProgress callback
  function (error) {
    console.error('Error loading .las file:', error);
  }
);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Update OrbitControls
  renderer.render(scene, camera);
}
animate();
