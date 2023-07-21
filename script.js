// script.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let mixer;

// Load the GLTF model
const loader = new THREE.GLTFLoader();
loader.load(
  "./Assets/moon_half_cut.gltf",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Add animations (if available)
    mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  },
  undefined,
  (error) => {
    console.error("Error loading the GLTF model:", error);
  }
);
loader.load(
  "./Assets/moon.gltf",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Add animations (if available)
    mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  },
  undefined,
  (error) => {
    console.error("Error loading the GLTF model:", error);
  }
);
loader.load(
  "./Assets/brain_right.gltf",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Add animations (if available)
    mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  },
  undefined,
  (error) => {
    console.error("Error loading the GLTF model:", error);
  }
);

loader.load(
  "./Assets/brain_left.gltf",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Add animations (if available)
    mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  },
  undefined,
  (error) => {
    console.error("Error loading the GLTF model:", error);
  }
);

loader.load(
  "./Assets/heart_shape.gltf",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Add animations (if available)
    mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  },
  undefined,
  (error) => {
    console.error("Error loading the GLTF model:", error);
  }
);

loader.load(
  "./Assets/gong.gltf",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    // Add animations (if available)
    mixer = new THREE.AnimationMixer(model);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  },
  undefined,
  (error) => {
    console.error("Error loading the GLTF model:", error);
  }
);

function animate() {
  requestAnimationFrame(animate);

  // Update the animations
  if (mixer) {
    mixer.update(0.01);
  }

  // ... Your other animation or rendering logic ...

  renderer.render(scene, camera);
}

animate();
