declare module "../vendor/three/three.js" {
	declare class Vector3 {
		x: number;
		y: number;
		z: number;
	}
	declare class Mesh {}
	declare class Scene {
		add(mesh: Mesh): void;
	}
	declare class BoxGeometry {}
	declare class PerspectiveCamera {
		position: Vector3;
		aspect: number;
		updateProjectionMatrix(): void;
	}
	declare class ShaderMaterial {}
	declare class WebGLRenderer {
		setClearColor(color: number): void;
		render(scene: Scene, camera: PerspectiveCamera): void;
		setSize(width: number, height: number): void;
	}
}
declare module "../vendor/three/OrbitControls.js" {
	declare class OrbitControls {}
}