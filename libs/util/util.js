import * as THREE from '../../build/three.module.js';
import {TrackballControls} from '../../build/jsm/controls/TrackballControls.js';

/**
 * Get ASCII table code of a given character
 * Use character in uppercase
 *
 * @param {char} ch
 * @returns ASCII code of the caracter
 */
export function getCode(ch)
{
  var code = ch.charCodeAt(0);
  return code;
}

/**
 * Convert degrees to radians
 */
export function degreesToRadians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

/**
  * Class box - show information onscreen
  *
  */
 export class InfoBox {
  constructor() {
    this.infoBox = document.createElement('div');
    this.infoBox.id = "InfoxBox";
    this.infoBox.style.padding = "6px 14px";
    this.infoBox.style.position = "fixed";
    this.infoBox.style.bottom = "0";
    this.infoBox.style.right = "0";
    this.infoBox.style.backgroundColor = "rgba(255,255,255,0.2)";
    this.infoBox.style.color = "white";
    this.infoBox.style.fontFamily = "sans-serif";
    this.infoBox.style.userSelect = "none";
    this.infoBox.style.textAlign = "left";
  }

  addParagraph() {
    const paragraph = document.createElement("br")
    this.infoBox.appendChild(paragraph);              ;
  }

  add(text) {
    var textnode = document.createTextNode(text);
    this.infoBox.appendChild(textnode);
    this.addParagraph();
  }

  show() {
    document.body.appendChild(this.infoBox);
  }
}

/**
  * ...
  *
  */
export class SecondaryBox
{
  constructor(defaultText) {
    this.box = document.createElement('div');
    this.box.id = "box";
    this.box.style.padding = "6px 14px";
    this.box.style.bottom = "0";
    this.box.style.left= "0";
    this.box.style.position = "fixed";
    this.box.style.backgroundColor = "rgba(100,100,255,0.3)";
    this.box.style.color = "white";
    this.box.style.fontFamily = "sans-serif";
    this.box.style.fontSize = "26px";

    this.textnode = document.createTextNode(defaultText);
    this.box.appendChild(this.textnode);
    document.body.appendChild(this.box);
  }
  changeMessage(newText) {
    this.textnode.nodeValue = newText;
  }
}

/**
 * Makes a definite light follows the camera
 */
export function lightFollowingCamera(light, camera)
{
  light.position.copy( camera.position );
}


/**
 * Fix camera and renderer when window size changes
 */
export function onWindowResize(camera, renderer){

    if (camera instanceof THREE.PerspectiveCamera)
    {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }
    else {
      // TODO for other cameras
    }
}

/**
 * Initialize a simple default renderer and binds it to the "webgl-output" dom
* element.
 *
 * @param additionalProperties Additional properties to pass into the renderer
 */
export function initRenderer(additionalProperties) {

    var props = (typeof additionalProperties !== 'undefined' && additionalProperties) ? additionalProperties : {};
    var renderer = new THREE.WebGLRenderer(props);
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.setClearColor(new THREE.Color("rgb(0, 0, 0)"));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    return renderer;
}
