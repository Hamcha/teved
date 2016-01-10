/* @flow */

import Three from "../vendor/three/three.js";
import OrbitControls from "../vendor/three/OrbitControls.js";

class ShaderViewRenderer {
	canvas       : HTMLCanvasElement;
	scene        : Three.Scene;
	camera       : Three.PerspectiveCamera;
	material     : Three.ShaderMaterial;
	mesh         : Three.Mesh;
	renderer     : Three.WebGLRenderer;
	controls     : OrbitControls;
	tev          : TEV;
	constructor(canvas: HTMLCanvasElement, tev: TEV) {
		this.tev = tev;

		const ratio = canvas.width / canvas.height;

		this.canvas = canvas;
		this.scene = new Three.Scene();
		this.camera = new Three.PerspectiveCamera(75, ratio, 0.1, 1000);
		this.camera.position.z = 2;

		let geometry = new Three.BoxGeometry(1, 1, 1);
		this.material = new Three.ShaderMaterial();

		this.mesh = new Three.Mesh(geometry, this.material);
		this.scene.add(this.mesh);

		this.renderer = new Three.WebGLRenderer({
			canvas: canvas,
			alpha : true
		});
		this.renderer.setClearColor(0xffffff, 0);

		this.controls = new OrbitControls(this.camera, this.canvas, this.render.bind(this));

		this.render();
	}
	render() {
		this.renderer.render(this.scene, this.camera);
	}
	resize() {
		this.camera.aspect = this.canvas.width / this.canvas.height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.canvas.width, this.canvas.height);
		this.render();
	}
	setShader(shader: string) {
		this.material = new Three.ShaderMaterial({
			fragmentShader: shader
		});
	}
}

export default ShaderViewRenderer;