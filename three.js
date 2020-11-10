(function (r, wb) {
  "object" === typeof exports && "undefined" !== typeof module
    ? wb(exports)
    : "function" === typeof define && define.amd
    ? define(["exports"], wb)
    : ((r = "undefined" !== typeof globalThis ? globalThis : r || self),
      wb((r.THREE = {})));
})(this, function (r) {
  function wb() {}
  function Oa(c, a, b, d, e, f, g, h, k, l) {
    Object.defineProperty(this, "id", { value: hk++ });
    this.uuid = xa.generateUUID();
    this.name = "";
    this.image = void 0 !== c ? c : Oa.DEFAULT_IMAGE;
    this.mipmaps = [];
    this.mapping = void 0 !== a ? a : Oa.DEFAULT_MAPPING;
    this.wrapS = void 0 !== b ? b : 1001;
    this.wrapT = void 0 !== d ? d : 1001;
    this.magFilter = void 0 !== e ? e : 1006;
    this.minFilter = void 0 !== f ? f : 1008;
    this.anisotropy = void 0 !== k ? k : 1;
    this.format = void 0 !== g ? g : 1023;
    this.internalFormat = null;
    this.type = void 0 !== h ? h : 1009;
    this.offset = new L(0, 0);
    this.repeat = new L(1, 1);
    this.center = new L(0, 0);
    this.rotation = 0;
    this.matrixAutoUpdate = !0;
    this.matrix = new Da();
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.unpackAlignment = 4;
    this.encoding = void 0 !== l ? l : 3e3;
    this.version = 0;
    this.onUpdate = null;
  }
  function Db(c, a, b) {
    this.width = c;
    this.height = a;
    this.scissor = new ca(0, 0, c, a);
    this.scissorTest = !1;
    this.viewport = new ca(0, 0, c, a);
    b = b || {};
    this.texture = new Oa(
      void 0,
      b.mapping,
      b.wrapS,
      b.wrapT,
      b.magFilter,
      b.minFilter,
      b.format,
      b.type,
      b.anisotropy,
      b.encoding
    );
    this.texture.image = {};
    this.texture.image.width = c;
    this.texture.image.height = a;
    this.texture.generateMipmaps =
      void 0 !== b.generateMipmaps ? b.generateMipmaps : !1;
    this.texture.minFilter = void 0 !== b.minFilter ? b.minFilter : 1006;
    this.depthBuffer = void 0 !== b.depthBuffer ? b.depthBuffer : !0;
    this.stencilBuffer = void 0 !== b.stencilBuffer ? b.stencilBuffer : !1;
    this.depthTexture = void 0 !== b.depthTexture ? b.depthTexture : null;
  }
  function dh(c, a, b) {
    Db.call(this, c, a, b);
    this.samples = 4;
  }
  function eh(c, a, b, d, e) {
    for (var f = 0, g = c.length - 3; f <= g; f += 3) {
      Yc.fromArray(c, f);
      var h =
          e.x * Math.abs(Yc.x) + e.y * Math.abs(Yc.y) + e.z * Math.abs(Yc.z),
        k = a.dot(Yc),
        l = b.dot(Yc),
        m = d.dot(Yc);
      if (Math.max(-Math.max(k, l, m), Math.min(k, l, m)) > h) return !1;
    }
    return !0;
  }
  function ha() {
    Object.defineProperty(this, "id", { value: ik++ });
    this.uuid = xa.generateUUID();
    this.name = "";
    this.type = "Object3D";
    this.parent = null;
    this.children = [];
    this.up = ha.DefaultUp.clone();
    var c = new w(),
      a = new hb(),
      b = new ua(),
      d = new w(1, 1, 1);
    a._onChange(function () {
      b.setFromEuler(a, !1);
    });
    b._onChange(function () {
      a.setFromQuaternion(b, void 0, !1);
    });
    Object.defineProperties(this, {
      position: { configurable: !0, enumerable: !0, value: c },
      rotation: { configurable: !0, enumerable: !0, value: a },
      quaternion: { configurable: !0, enumerable: !0, value: b },
      scale: { configurable: !0, enumerable: !0, value: d },
      modelViewMatrix: { value: new da() },
      normalMatrix: { value: new Da() },
    });
    this.matrix = new da();
    this.matrixWorld = new da();
    this.matrixAutoUpdate = ha.DefaultMatrixAutoUpdate;
    this.matrixWorldNeedsUpdate = !1;
    this.layers = new $b();
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this.renderOrder = 0;
    this.userData = {};
  }
  function fh(c, a, b) {
    0 > b && (b += 1);
    1 < b && --b;
    return b < 1 / 6
      ? c + 6 * (a - c) * b
      : 0.5 > b
      ? a
      : b < 2 / 3
      ? c + 6 * (a - c) * (2 / 3 - b)
      : c;
  }
  function gh(c) {
    return 0.04045 > c
      ? 0.0773993808 * c
      : Math.pow(0.9478672986 * c + 0.0521327014, 2.4);
  }
  function hh(c) {
    return 0.0031308 > c ? 12.92 * c : 1.055 * Math.pow(c, 0.41666) - 0.055;
  }
  function ra() {
    Object.defineProperty(this, "id", { value: jk++ });
    this.uuid = xa.generateUUID();
    this.name = "";
    this.type = "Material";
    this.fog = !0;
    this.blending = 1;
    this.side = 0;
    this.vertexColors = this.flatShading = !1;
    this.opacity = 1;
    this.transparent = !1;
    this.blendSrc = 204;
    this.blendDst = 205;
    this.blendEquation = 100;
    this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null;
    this.depthFunc = 3;
    this.depthWrite = this.depthTest = !0;
    this.stencilWriteMask = 255;
    this.stencilFunc = 519;
    this.stencilRef = 0;
    this.stencilFuncMask = 255;
    this.stencilZPass = this.stencilZFail = this.stencilFail = 7680;
    this.stencilWrite = !1;
    this.clippingPlanes = null;
    this.clipShadows = this.clipIntersection = !1;
    this.shadowSide = null;
    this.colorWrite = !0;
    this.precision = null;
    this.polygonOffset = !1;
    this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this.dithering = !1;
    this.alphaTest = 0;
    this.premultipliedAlpha = !1;
    this.toneMapped = this.visible = !0;
    this.userData = {};
    this.version = 0;
  }
  function Kb(c) {
    ra.call(this);
    this.type = "MeshBasicMaterial";
    this.color = new S(16777215);
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphTargets = this.skinning = !1;
    this.setValues(c);
  }
  function pa(c, a, b) {
    if (Array.isArray(c))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    this.name = "";
    this.array = c;
    this.itemSize = a;
    this.count = void 0 !== c ? c.length / a : 0;
    this.normalized = !0 === b;
    this.usage = 35044;
    this.updateRange = { offset: 0, count: -1 };
    this.version = 0;
  }
  function Ce(c, a, b) {
    pa.call(this, new Int8Array(c), a, b);
  }
  function De(c, a, b) {
    pa.call(this, new Uint8Array(c), a, b);
  }
  function Ee(c, a, b) {
    pa.call(this, new Uint8ClampedArray(c), a, b);
  }
  function Fe(c, a, b) {
    pa.call(this, new Int16Array(c), a, b);
  }
  function Zc(c, a, b) {
    pa.call(this, new Uint16Array(c), a, b);
  }
  function Ge(c, a, b) {
    pa.call(this, new Int32Array(c), a, b);
  }
  function $c(c, a, b) {
    pa.call(this, new Uint32Array(c), a, b);
  }
  function ea(c, a, b) {
    pa.call(this, new Float32Array(c), a, b);
  }
  function He(c, a, b) {
    pa.call(this, new Float64Array(c), a, b);
  }
  function vi(c) {
    if (0 === c.length) return -Infinity;
    for (var a = c[0], b = 1, d = c.length; b < d; ++b) c[b] > a && (a = c[b]);
    return a;
  }
  function ka() {
    Object.defineProperty(this, "id", { value: (kk += 2) });
    this.uuid = xa.generateUUID();
    this.name = "";
    this.type = "BufferGeometry";
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.morphTargetsRelative = !1;
    this.groups = [];
    this.boundingSphere = this.boundingBox = null;
    this.drawRange = { start: 0, count: Infinity };
    this.userData = {};
  }
  function Qa(c, a) {
    ha.call(this);
    this.type = "Mesh";
    this.geometry = void 0 !== c ? c : new ka();
    this.material = void 0 !== a ? a : new Kb();
    this.updateMorphTargets();
  }
  function wi(c, a, b, d, e, f, g, h) {
    if (
      null ===
      (1 === a.side
        ? d.intersectTriangle(g, f, e, !0, h)
        : d.intersectTriangle(e, f, g, 2 !== a.side, h))
    )
      return null;
    Of.copy(h);
    Of.applyMatrix4(c.matrixWorld);
    a = b.ray.origin.distanceTo(Of);
    return a < b.near || a > b.far
      ? null
      : { distance: a, point: Of.clone(), object: c };
  }
  function Pf(c, a, b, d, e, f, g, h, k, l, m, n) {
    yc.fromBufferAttribute(e, l);
    zc.fromBufferAttribute(e, m);
    Ac.fromBufferAttribute(e, n);
    e = c.morphTargetInfluences;
    if (a.morphTargets && f && e) {
      Qf.set(0, 0, 0);
      Rf.set(0, 0, 0);
      Sf.set(0, 0, 0);
      for (var p = 0, t = f.length; p < t; p++) {
        var q = e[p],
          v = f[p];
        0 !== q &&
          (ih.fromBufferAttribute(v, l),
          jh.fromBufferAttribute(v, m),
          kh.fromBufferAttribute(v, n),
          g
            ? (Qf.addScaledVector(ih, q),
              Rf.addScaledVector(jh, q),
              Sf.addScaledVector(kh, q))
            : (Qf.addScaledVector(ih.sub(yc), q),
              Rf.addScaledVector(jh.sub(zc), q),
              Sf.addScaledVector(kh.sub(Ac), q)));
      }
      yc.add(Qf);
      zc.add(Rf);
      Ac.add(Sf);
    }
    c.isSkinnedMesh &&
      (c.boneTransform(l, yc), c.boneTransform(m, zc), c.boneTransform(n, Ac));
    if ((c = wi(c, a, b, d, yc, zc, Ac, Ie)))
      h &&
        (Cd.fromBufferAttribute(h, l),
        Dd.fromBufferAttribute(h, m),
        Ed.fromBufferAttribute(h, n),
        (c.uv = Ga.getUV(Ie, yc, zc, Ac, Cd, Dd, Ed, new L()))),
        k &&
          (Cd.fromBufferAttribute(k, l),
          Dd.fromBufferAttribute(k, m),
          Ed.fromBufferAttribute(k, n),
          (c.uv2 = Ga.getUV(Ie, yc, zc, Ac, Cd, Dd, Ed, new L()))),
        (h = new ad(l, m, n)),
        Ga.getNormal(yc, zc, Ac, h.normal),
        (c.face = h);
    return c;
  }
  function sa() {
    Object.defineProperty(this, "id", { value: (lk += 2) });
    this.uuid = xa.generateUUID();
    this.name = "";
    this.type = "Geometry";
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [[]];
    this.morphTargets = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1;
  }
  function Fd(c, a, b, d, e, f) {
    sa.call(this);
    this.type = "BoxGeometry";
    this.parameters = {
      width: c,
      height: a,
      depth: b,
      widthSegments: d,
      heightSegments: e,
      depthSegments: f,
    };
    this.fromBufferGeometry(new Bc(c, a, b, d, e, f));
    this.mergeVertices();
  }
  function Bc(c, a, b, d, e, f) {
    function g(q, v, u, A, B, D, G, I, E, H, M) {
      var F = D / E,
        K = G / H,
        P = D / 2,
        V = G / 2,
        ia = I / 2;
      G = E + 1;
      for (var W = H + 1, aa = (D = 0), Z = new w(), ja = 0; ja < W; ja++)
        for (var Aa = ja * K - V, Xa = 0; Xa < G; Xa++)
          (Z[q] = (Xa * F - P) * A),
            (Z[v] = Aa * B),
            (Z[u] = ia),
            l.push(Z.x, Z.y, Z.z),
            (Z[q] = 0),
            (Z[v] = 0),
            (Z[u] = 0 < I ? 1 : -1),
            m.push(Z.x, Z.y, Z.z),
            n.push(Xa / E),
            n.push(1 - ja / H),
            (D += 1);
      for (q = 0; q < H; q++)
        for (v = 0; v < E; v++)
          (u = p + v + G * (q + 1)),
            (A = p + (v + 1) + G * (q + 1)),
            (B = p + (v + 1) + G * q),
            k.push(p + v + G * q, u, B),
            k.push(u, A, B),
            (aa += 6);
      h.addGroup(t, aa, M);
      t += aa;
      p += D;
    }
    void 0 === c && (c = 1);
    void 0 === a && (a = 1);
    void 0 === b && (b = 1);
    void 0 === d && (d = 1);
    void 0 === e && (e = 1);
    void 0 === f && (f = 1);
    ka.call(this);
    this.type = "BoxBufferGeometry";
    this.parameters = {
      width: c,
      height: a,
      depth: b,
      widthSegments: d,
      heightSegments: e,
      depthSegments: f,
    };
    var h = this;
    d = Math.floor(d);
    e = Math.floor(e);
    f = Math.floor(f);
    var k = [],
      l = [],
      m = [],
      n = [],
      p = 0,
      t = 0;
    g("z", "y", "x", -1, -1, b, a, c, f, e, 0);
    g("z", "y", "x", 1, -1, b, a, -c, f, e, 1);
    g("x", "z", "y", 1, 1, c, b, a, d, f, 2);
    g("x", "z", "y", 1, -1, c, b, -a, d, f, 3);
    g("x", "y", "z", 1, -1, c, a, b, d, e, 4);
    g("x", "y", "z", -1, -1, c, a, -b, d, e, 5);
    this.setIndex(k);
    this.setAttribute("position", new ea(l, 3));
    this.setAttribute("normal", new ea(m, 3));
    this.setAttribute("uv", new ea(n, 2));
  }
  function Gd(c) {
    var a = {},
      b;
    for (b in c) {
      a[b] = {};
      for (var d in c[b]) {
        var e = c[b][d];
        e &&
        (e.isColor ||
          e.isMatrix3 ||
          e.isMatrix4 ||
          e.isVector2 ||
          e.isVector3 ||
          e.isVector4 ||
          e.isTexture)
          ? (a[b][d] = e.clone())
          : Array.isArray(e)
          ? (a[b][d] = e.slice())
          : (a[b][d] = e);
      }
    }
    return a;
  }
  function nb(c) {
    for (var a = {}, b = 0; b < c.length; b++) {
      var d = Gd(c[b]),
        e;
      for (e in d) a[e] = d[e];
    }
    return a;
  }
  function sb(c) {
    ra.call(this);
    this.type = "ShaderMaterial";
    this.defines = {};
    this.uniforms = {};
    this.vertexShader =
      "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
    this.fragmentShader =
      "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
    this.linewidth = 1;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1;
    this.extensions = {
      derivatives: !1,
      fragDepth: !1,
      drawBuffers: !1,
      shaderTextureLOD: !1,
    };
    this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] };
    this.index0AttributeName = void 0;
    this.uniformsNeedUpdate = !1;
    this.glslVersion = null;
    void 0 !== c &&
      (void 0 !== c.attributes &&
        console.error(
          "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
        ),
      this.setValues(c));
  }
  function ac() {
    ha.call(this);
    this.type = "Camera";
    this.matrixWorldInverse = new da();
    this.projectionMatrix = new da();
    this.projectionMatrixInverse = new da();
  }
  function eb(c, a, b, d) {
    ac.call(this);
    this.type = "PerspectiveCamera";
    this.fov = void 0 !== c ? c : 50;
    this.zoom = 1;
    this.near = void 0 !== b ? b : 0.1;
    this.far = void 0 !== d ? d : 2e3;
    this.focus = 10;
    this.aspect = void 0 !== a ? a : 1;
    this.view = null;
    this.filmGauge = 35;
    this.filmOffset = 0;
    this.updateProjectionMatrix();
  }
  function Hd(c, a, b) {
    ha.call(this);
    this.type = "CubeCamera";
    if (!0 !== b.isWebGLCubeRenderTarget)
      console.error(
        "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
    else {
      this.renderTarget = b;
      var d = new eb(90, 1, c, a);
      d.layers = this.layers;
      d.up.set(0, -1, 0);
      d.lookAt(new w(1, 0, 0));
      this.add(d);
      var e = new eb(90, 1, c, a);
      e.layers = this.layers;
      e.up.set(0, -1, 0);
      e.lookAt(new w(-1, 0, 0));
      this.add(e);
      var f = new eb(90, 1, c, a);
      f.layers = this.layers;
      f.up.set(0, 0, 1);
      f.lookAt(new w(0, 1, 0));
      this.add(f);
      var g = new eb(90, 1, c, a);
      g.layers = this.layers;
      g.up.set(0, 0, -1);
      g.lookAt(new w(0, -1, 0));
      this.add(g);
      var h = new eb(90, 1, c, a);
      h.layers = this.layers;
      h.up.set(0, -1, 0);
      h.lookAt(new w(0, 0, 1));
      this.add(h);
      var k = new eb(90, 1, c, a);
      k.layers = this.layers;
      k.up.set(0, -1, 0);
      k.lookAt(new w(0, 0, -1));
      this.add(k);
      this.update = function (l, m) {
        null === this.parent && this.updateMatrixWorld();
        var n = l.xr.enabled,
          p = l.getRenderTarget();
        l.xr.enabled = !1;
        var t = b.texture.generateMipmaps;
        b.texture.generateMipmaps = !1;
        l.setRenderTarget(b, 0);
        l.render(m, d);
        l.setRenderTarget(b, 1);
        l.render(m, e);
        l.setRenderTarget(b, 2);
        l.render(m, f);
        l.setRenderTarget(b, 3);
        l.render(m, g);
        l.setRenderTarget(b, 4);
        l.render(m, h);
        b.texture.generateMipmaps = t;
        l.setRenderTarget(b, 5);
        l.render(m, k);
        l.setRenderTarget(p);
        l.xr.enabled = n;
      };
      this.clear = function (l, m, n, p) {
        for (var t = l.getRenderTarget(), q = 0; 6 > q; q++)
          l.setRenderTarget(b, q), l.clear(m, n, p);
        l.setRenderTarget(t);
      };
    }
  }
  function Cc(c, a, b) {
    Number.isInteger(a) &&
      (console.warn(
        "THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"
      ),
      (a = b));
    Db.call(this, c, c, a);
    this.texture.isWebGLCubeRenderTargetTexture = !0;
  }
  function bd(c, a, b, d, e, f, g, h, k, l, m, n) {
    Oa.call(this, null, f, g, h, k, l, d, e, m, n);
    this.image = { data: c || null, width: a || 1, height: b || 1 };
    this.magFilter = void 0 !== k ? k : 1003;
    this.minFilter = void 0 !== l ? l : 1003;
    this.flipY = this.generateMipmaps = !1;
    this.unpackAlignment = 1;
    this.needsUpdate = !0;
  }
  function xi() {
    function c(f, g) {
      d(f, g);
      e = a.requestAnimationFrame(c);
    }
    var a = null,
      b = !1,
      d = null,
      e = null;
    return {
      start: function () {
        !0 !== b && null !== d && ((e = a.requestAnimationFrame(c)), (b = !0));
      },
      stop: function () {
        a.cancelAnimationFrame(e);
        b = !1;
      },
      setAnimationLoop: function (f) {
        d = f;
      },
      setContext: function (f) {
        a = f;
      },
    };
  }
  function mk(c, a) {
    function b(f, g) {
      var h = f.array,
        k = f.usage,
        l = c.createBuffer();
      c.bindBuffer(g, l);
      c.bufferData(g, h, k);
      f.onUploadCallback();
      g = 5126;
      h instanceof Float32Array
        ? (g = 5126)
        : h instanceof Float64Array
        ? console.warn(
            "THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."
          )
        : h instanceof Uint16Array
        ? (g = 5123)
        : h instanceof Int16Array
        ? (g = 5122)
        : h instanceof Uint32Array
        ? (g = 5125)
        : h instanceof Int32Array
        ? (g = 5124)
        : h instanceof Int8Array
        ? (g = 5120)
        : h instanceof Uint8Array && (g = 5121);
      return {
        buffer: l,
        type: g,
        bytesPerElement: h.BYTES_PER_ELEMENT,
        version: f.version,
      };
    }
    var d = a.isWebGL2,
      e = new WeakMap();
    return {
      get: function (f) {
        f.isInterleavedBufferAttribute && (f = f.data);
        return e.get(f);
      },
      remove: function (f) {
        f.isInterleavedBufferAttribute && (f = f.data);
        var g = e.get(f);
        g && (c.deleteBuffer(g.buffer), e.delete(f));
      },
      update: function (f, g) {
        if (f.isGLBufferAttribute)
          (g = e.get(f)),
            (!g || g.version < f.version) &&
              e.set(f, {
                buffer: f.buffer,
                type: f.type,
                bytesPerElement: f.elementSize,
                version: f.version,
              });
        else {
          f.isInterleavedBufferAttribute && (f = f.data);
          var h = e.get(f);
          if (void 0 === h) e.set(f, b(f, g));
          else if (h.version < f.version) {
            var k = f.array,
              l = f.updateRange;
            c.bindBuffer(g, h.buffer);
            -1 === l.count
              ? c.bufferSubData(g, 0, k)
              : (d
                  ? c.bufferSubData(
                      g,
                      l.offset * k.BYTES_PER_ELEMENT,
                      k,
                      l.offset,
                      l.count
                    )
                  : c.bufferSubData(
                      g,
                      l.offset * k.BYTES_PER_ELEMENT,
                      k.subarray(l.offset, l.offset + l.count)
                    ),
                (l.count = -1));
            h.version = f.version;
          }
        }
      },
    };
  }
  function Je(c, a, b, d) {
    sa.call(this);
    this.type = "PlaneGeometry";
    this.parameters = {
      width: c,
      height: a,
      widthSegments: b,
      heightSegments: d,
    };
    this.fromBufferGeometry(new cd(c, a, b, d));
    this.mergeVertices();
  }
  function cd(c, a, b, d) {
    ka.call(this);
    this.type = "PlaneBufferGeometry";
    this.parameters = {
      width: c,
      height: a,
      widthSegments: b,
      heightSegments: d,
    };
    c = c || 1;
    a = a || 1;
    var e = c / 2,
      f = a / 2;
    b = Math.floor(b) || 1;
    d = Math.floor(d) || 1;
    var g = b + 1,
      h = d + 1,
      k = c / b,
      l = a / d;
    a = [];
    c = [];
    for (var m = [], n = [], p = 0; p < h; p++)
      for (var t = p * l - f, q = 0; q < g; q++)
        c.push(q * k - e, -t, 0),
          m.push(0, 0, 1),
          n.push(q / b),
          n.push(1 - p / d);
    for (e = 0; e < d; e++)
      for (f = 0; f < b; f++)
        (h = f + g * (e + 1)),
          (k = f + 1 + g * (e + 1)),
          (l = f + 1 + g * e),
          a.push(f + g * e, h, l),
          a.push(h, k, l);
    this.setIndex(a);
    this.setAttribute("position", new ea(c, 3));
    this.setAttribute("normal", new ea(m, 3));
    this.setAttribute("uv", new ea(n, 2));
  }
  function nk(c, a, b, d, e) {
    function f(t, q) {
      b.buffers.color.setClear(t.r, t.g, t.b, q, e);
    }
    var g = new S(0),
      h = 0,
      k,
      l,
      m = null,
      n = 0,
      p = null;
    return {
      getClearColor: function () {
        return g;
      },
      setClearColor: function (t, q) {
        g.set(t);
        h = void 0 !== q ? q : 1;
        f(g, h);
      },
      getClearAlpha: function () {
        return h;
      },
      setClearAlpha: function (t) {
        h = t;
        f(g, h);
      },
      render: function (t, q, v, u) {
        (q = !0 === q.isScene ? q.background : null) &&
          q.isTexture &&
          (q = a.get(q));
        v = c.xr;
        (v = v.getSession && v.getSession()) &&
          "additive" === v.environmentBlendMode &&
          (q = null);
        null === q ? f(g, h) : q && q.isColor && (f(q, 1), (u = !0));
        (c.autoClear || u) &&
          c.clear(c.autoClearColor, c.autoClearDepth, c.autoClearStencil);
        if (
          q &&
          (q.isCubeTexture ||
            q.isWebGLCubeRenderTarget ||
            q.isWebGLCubeRenderTargetTexture ||
            306 === q.mapping)
        ) {
          void 0 === l &&
            ((l = new Qa(
              new Bc(1, 1, 1),
              new sb({
                name: "BackgroundCubeMaterial",
                uniforms: Gd(Pb.cube.uniforms),
                vertexShader: Pb.cube.vertexShader,
                fragmentShader: Pb.cube.fragmentShader,
                side: 1,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            l.geometry.deleteAttribute("uv"),
            (l.onBeforeRender = function (A, B, D) {
              this.matrixWorld.copyPosition(D.matrixWorld);
            }),
            Object.defineProperty(l.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            d.update(l));
          q.isWebGLCubeRenderTarget && (q = q.texture);
          l.material.uniforms.envMap.value = q;
          l.material.uniforms.flipEnvMap.value = q.isCubeTexture ? -1 : 1;
          if (m !== q || n !== q.version || p !== c.toneMapping)
            (l.material.needsUpdate = !0),
              (m = q),
              (n = q.version),
              (p = c.toneMapping);
          t.unshift(l, l.geometry, l.material, 0, 0, null);
        } else if (q && q.isTexture) {
          void 0 === k &&
            ((k = new Qa(
              new cd(2, 2),
              new sb({
                name: "BackgroundMaterial",
                uniforms: Gd(Pb.background.uniforms),
                vertexShader: Pb.background.vertexShader,
                fragmentShader: Pb.background.fragmentShader,
                side: 0,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            k.geometry.deleteAttribute("normal"),
            Object.defineProperty(k.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            d.update(k));
          k.material.uniforms.t2D.value = q;
          !0 === q.matrixAutoUpdate && q.updateMatrix();
          k.material.uniforms.uvTransform.value.copy(q.matrix);
          if (m !== q || n !== q.version || p !== c.toneMapping)
            (k.material.needsUpdate = !0),
              (m = q),
              (n = q.version),
              (p = c.toneMapping);
          t.unshift(k, k.geometry, k.material, 0, 0, null);
        }
      },
    };
  }
  function ok(c, a, b, d) {
    function e(D) {
      return d.isWebGL2 ? c.bindVertexArray(D) : q.bindVertexArrayOES(D);
    }
    function f(D) {
      return d.isWebGL2 ? c.deleteVertexArray(D) : q.deleteVertexArrayOES(D);
    }
    function g(D) {
      for (var G = [], I = [], E = [], H = 0; H < t; H++)
        (G[H] = 0), (I[H] = 0), (E[H] = 0);
      return {
        geometry: null,
        program: null,
        wireframe: !1,
        newAttributes: G,
        enabledAttributes: I,
        attributeDivisors: E,
        object: D,
        attributes: {},
        index: null,
      };
    }
    function h() {
      for (var D = B.newAttributes, G = 0, I = D.length; G < I; G++) D[G] = 0;
    }
    function k(D) {
      l(D, 0);
    }
    function l(D, G) {
      var I = B.enabledAttributes,
        E = B.attributeDivisors;
      B.newAttributes[D] = 1;
      0 === I[D] && (c.enableVertexAttribArray(D), (I[D] = 1));
      E[D] !== G &&
        ((d.isWebGL2 ? c : a.get("ANGLE_instanced_arrays"))[
          d.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](D, G),
        (E[D] = G));
    }
    function m() {
      for (
        var D = B.newAttributes, G = B.enabledAttributes, I = 0, E = G.length;
        I < E;
        I++
      )
        G[I] !== D[I] && (c.disableVertexAttribArray(I), (G[I] = 0));
    }
    function n() {
      p();
      B !== A && ((B = A), e(B.object));
    }
    function p() {
      A.geometry = null;
      A.program = null;
      A.wireframe = !1;
    }
    var t = c.getParameter(34921),
      q = d.isWebGL2 ? null : a.get("OES_vertex_array_object"),
      v = d.isWebGL2 || null !== q,
      u = {},
      A = g(null),
      B = A;
    return {
      setup: function (D, G, I, E, H) {
        var M = !1;
        if (v) {
          M = !0 === G.wireframe;
          var F = u[E.id];
          void 0 === F && ((F = {}), (u[E.id] = F));
          var K = F[I.id];
          void 0 === K && ((K = {}), (F[I.id] = K));
          F = K[M];
          void 0 === F &&
            ((F = g(
              d.isWebGL2 ? c.createVertexArray() : q.createVertexArrayOES()
            )),
            (K[M] = F));
          M = F;
          B !== M && ((B = M), e(B.object));
          a: if (
            ((M = B.attributes),
            (K = E.attributes),
            Object.keys(M).length !== Object.keys(K).length)
          )
            M = !0;
          else {
            for (var P in K) {
              F = M[P];
              var V = K[P];
              if (void 0 === F || F.attribute !== V || F.data !== V.data) {
                M = !0;
                break a;
              }
            }
            M = B.index !== H ? !0 : !1;
          }
          if (M) {
            P = {};
            K = E.attributes;
            for (var ia in K)
              (F = K[ia]),
                (V = {}),
                (V.attribute = F),
                F.data && (V.data = F.data),
                (P[ia] = V);
            B.attributes = P;
            B.index = H;
          }
        } else if (
          ((ia = !0 === G.wireframe),
          B.geometry !== E.id || B.program !== I.id || B.wireframe !== ia)
        )
          (B.geometry = E.id), (B.program = I.id), (B.wireframe = ia), (M = !0);
        !0 === D.isInstancedMesh && (M = !0);
        null !== H && b.update(H, 34963);
        if (M) {
          if (
            !1 !== d.isWebGL2 ||
            (!D.isInstancedMesh && !E.isInstancedBufferGeometry) ||
            null !== a.get("ANGLE_instanced_arrays")
          ) {
            h();
            ia = E.attributes;
            I = I.getAttributes();
            G = G.defaultAttributeValues;
            for (var W in I)
              if (((M = I[W]), 0 <= M)) {
                var aa = ia[W];
                if (void 0 !== aa) {
                  if (
                    ((P = aa.normalized),
                    (V = aa.itemSize),
                    (F = b.get(aa)),
                    void 0 !== F)
                  ) {
                    var Z = F.buffer;
                    K = F.type;
                    F = F.bytesPerElement;
                    if (aa.isInterleavedBufferAttribute) {
                      var ja = aa.data,
                        Aa = ja.stride;
                      aa = aa.offset;
                      ja && ja.isInstancedInterleavedBuffer
                        ? (l(M, ja.meshPerAttribute),
                          void 0 === E._maxInstanceCount &&
                            (E._maxInstanceCount =
                              ja.meshPerAttribute * ja.count))
                        : k(M);
                      c.bindBuffer(34962, Z);
                      Aa *= F;
                      F *= aa;
                      !0 !== d.isWebGL2 || (5124 !== K && 5125 !== K)
                        ? c.vertexAttribPointer(M, V, K, P, Aa, F)
                        : c.vertexAttribIPointer(M, V, K, Aa, F);
                    } else
                      aa.isInstancedBufferAttribute
                        ? (l(M, aa.meshPerAttribute),
                          void 0 === E._maxInstanceCount &&
                            (E._maxInstanceCount =
                              aa.meshPerAttribute * aa.count))
                        : k(M),
                        c.bindBuffer(34962, Z),
                        (F = V),
                        !0 !== d.isWebGL2 || (5124 !== K && 5125 !== K)
                          ? c.vertexAttribPointer(M, F, K, P, 0, 0)
                          : c.vertexAttribIPointer(M, F, K, 0, 0);
                  }
                } else if ("instanceMatrix" === W)
                  (K = b.get(D.instanceMatrix)),
                    void 0 !== K &&
                      ((P = K.buffer),
                      (K = K.type),
                      l(M + 0, 1),
                      l(M + 1, 1),
                      l(M + 2, 1),
                      l(M + 3, 1),
                      c.bindBuffer(34962, P),
                      c.vertexAttribPointer(M + 0, 4, K, !1, 64, 0),
                      c.vertexAttribPointer(M + 1, 4, K, !1, 64, 16),
                      c.vertexAttribPointer(M + 2, 4, K, !1, 64, 32),
                      c.vertexAttribPointer(M + 3, 4, K, !1, 64, 48));
                else if ("instanceColor" === W)
                  (K = b.get(D.instanceColor)),
                    void 0 !== K &&
                      ((P = K.buffer),
                      (K = K.type),
                      l(M, 1),
                      c.bindBuffer(34962, P),
                      c.vertexAttribPointer(M, 3, K, !1, 12, 0));
                else if (void 0 !== G && ((P = G[W]), void 0 !== P))
                  switch (P.length) {
                    case 2:
                      c.vertexAttrib2fv(M, P);
                      break;
                    case 3:
                      c.vertexAttrib3fv(M, P);
                      break;
                    case 4:
                      c.vertexAttrib4fv(M, P);
                      break;
                    default:
                      c.vertexAttrib1fv(M, P);
                  }
              }
            m();
          }
          null !== H && c.bindBuffer(34963, b.get(H).buffer);
        }
      },
      reset: n,
      resetDefaultState: p,
      dispose: function () {
        n();
        for (var D in u) {
          var G = u[D],
            I;
          for (I in G) {
            var E = G[I],
              H;
            for (H in E) f(E[H].object), delete E[H];
            delete G[I];
          }
          delete u[D];
        }
      },
      releaseStatesOfGeometry: function (D) {
        if (void 0 !== u[D.id]) {
          var G = u[D.id],
            I;
          for (I in G) {
            var E = G[I],
              H;
            for (H in E) f(E[H].object), delete E[H];
            delete G[I];
          }
          delete u[D.id];
        }
      },
      releaseStatesOfProgram: function (D) {
        for (var G in u) {
          var I = u[G];
          if (void 0 !== I[D.id]) {
            var E = I[D.id],
              H;
            for (H in E) f(E[H].object), delete E[H];
            delete I[D.id];
          }
        }
      },
      initAttributes: h,
      enableAttribute: k,
      disableUnusedAttributes: m,
    };
  }
  function pk(c, a, b, d) {
    var e = d.isWebGL2,
      f;
    this.setMode = function (g) {
      f = g;
    };
    this.render = function (g, h) {
      c.drawArrays(f, g, h);
      b.update(h, f, 1);
    };
    this.renderInstances = function (g, h, k) {
      if (0 !== k) {
        if (e) {
          var l = c;
          var m = "drawArraysInstanced";
        } else if (
          ((l = a.get("ANGLE_instanced_arrays")),
          (m = "drawArraysInstancedANGLE"),
          null === l)
        ) {
          console.error(
            "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
          return;
        }
        l[m](f, g, h, k);
        b.update(h, f, k);
      }
    };
  }
  function qk(c, a, b) {
    function d(D) {
      if ("highp" === D) {
        if (
          0 < c.getShaderPrecisionFormat(35633, 36338).precision &&
          0 < c.getShaderPrecisionFormat(35632, 36338).precision
        )
          return "highp";
        D = "mediump";
      }
      return "mediump" === D &&
        0 < c.getShaderPrecisionFormat(35633, 36337).precision &&
        0 < c.getShaderPrecisionFormat(35632, 36337).precision
        ? "mediump"
        : "lowp";
    }
    var e,
      f =
        ("undefined" !== typeof WebGL2RenderingContext &&
          c instanceof WebGL2RenderingContext) ||
        ("undefined" !== typeof WebGL2ComputeRenderingContext &&
          c instanceof WebGL2ComputeRenderingContext),
      g = void 0 !== b.precision ? b.precision : "highp",
      h = d(g);
    h !== g &&
      (console.warn(
        "THREE.WebGLRenderer:",
        g,
        "not supported, using",
        h,
        "instead."
      ),
      (g = h));
    b = !0 === b.logarithmicDepthBuffer;
    h = c.getParameter(34930);
    var k = c.getParameter(35660),
      l = c.getParameter(3379),
      m = c.getParameter(34076),
      n = c.getParameter(34921),
      p = c.getParameter(36347),
      t = c.getParameter(36348),
      q = c.getParameter(36349),
      v = 0 < k,
      u = f || !!a.get("OES_texture_float"),
      A = v && u,
      B = f ? c.getParameter(36183) : 0;
    return {
      isWebGL2: f,
      getMaxAnisotropy: function () {
        if (void 0 !== e) return e;
        var D = a.get("EXT_texture_filter_anisotropic");
        return (e =
          null !== D ? c.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0);
      },
      getMaxPrecision: d,
      precision: g,
      logarithmicDepthBuffer: b,
      maxTextures: h,
      maxVertexTextures: k,
      maxTextureSize: l,
      maxCubemapSize: m,
      maxAttributes: n,
      maxVertexUniforms: p,
      maxVaryings: t,
      maxFragmentUniforms: q,
      vertexTextures: v,
      floatFragmentTextures: u,
      floatVertexTextures: A,
      maxSamples: B,
    };
  }
  function rk(c) {
    function a() {
      m.value !== e && ((m.value = e), (m.needsUpdate = 0 < f));
      d.numPlanes = f;
      d.numIntersection = 0;
    }
    function b(n, p, t, q) {
      var v = null !== n ? n.length : 0,
        u = null;
      if (0 !== v) {
        u = m.value;
        if (!0 !== q || null === u) {
          q = t + 4 * v;
          p = p.matrixWorldInverse;
          l.getNormalMatrix(p);
          if (null === u || u.length < q) u = new Float32Array(q);
          for (q = 0; q !== v; ++q, t += 4)
            k.copy(n[q]).applyMatrix4(p, l),
              k.normal.toArray(u, t),
              (u[t + 3] = k.constant);
        }
        m.value = u;
        m.needsUpdate = !0;
      }
      d.numPlanes = v;
      d.numIntersection = 0;
      return u;
    }
    var d = this,
      e = null,
      f = 0,
      g = !1,
      h = !1,
      k = new Na(),
      l = new Da(),
      m = { value: null, needsUpdate: !1 };
    this.uniform = m;
    this.numIntersection = this.numPlanes = 0;
    this.init = function (n, p, t) {
      var q = 0 !== n.length || p || 0 !== f || g;
      g = p;
      e = b(n, t, 0);
      f = n.length;
      return q;
    };
    this.beginShadows = function () {
      h = !0;
      b(null);
    };
    this.endShadows = function () {
      h = !1;
      a();
    };
    this.setState = function (n, p, t) {
      var q = n.clippingPlanes,
        v = n.clipIntersection,
        u = n.clipShadows;
      n = c.get(n);
      if (!g || null === q || 0 === q.length || (h && !u)) h ? b(null) : a();
      else {
        u = h ? 0 : f;
        var A = 4 * u,
          B = n.clippingState || null;
        m.value = B;
        B = b(q, p, A, t);
        for (p = 0; p !== A; ++p) B[p] = e[p];
        n.clippingState = B;
        this.numIntersection = v ? this.numPlanes : 0;
        this.numPlanes += u;
      }
    };
  }
  function sk(c) {
    function a(d, e) {
      303 === e ? (d.mapping = 301) : 304 === e && (d.mapping = 302);
      return d;
    }
    var b = new WeakMap();
    return {
      get: function (d) {
        if (d && d.isTexture) {
          var e = d.mapping;
          if (303 === e || 304 === e) {
            if (b.has(d)) return (e = b.get(d).texture), a(e, d.mapping);
            var f = d.image;
            if (f && 0 < f.height) {
              e = c.getRenderList();
              var g = c.getRenderTarget(),
                h = c.getRenderState();
              f = new Cc(f.height / 2);
              f.fromEquirectangularTexture(c, d);
              b.set(d, f);
              c.setRenderTarget(g);
              c.setRenderList(e);
              c.setRenderState(h);
              return a(f.texture, d.mapping);
            }
            return null;
          }
        }
        return d;
      },
      dispose: function () {
        b = new WeakMap();
      },
    };
  }
  function tk(c) {
    var a = {};
    return {
      has: function (b) {
        if (void 0 !== a[b]) return null !== a[b];
        switch (b) {
          case "WEBGL_depth_texture":
            var d =
              c.getExtension("WEBGL_depth_texture") ||
              c.getExtension("MOZ_WEBGL_depth_texture") ||
              c.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
          case "EXT_texture_filter_anisotropic":
            d =
              c.getExtension("EXT_texture_filter_anisotropic") ||
              c.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
              c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
          case "WEBGL_compressed_texture_s3tc":
            d =
              c.getExtension("WEBGL_compressed_texture_s3tc") ||
              c.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
              c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
          case "WEBGL_compressed_texture_pvrtc":
            d =
              c.getExtension("WEBGL_compressed_texture_pvrtc") ||
              c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
          default:
            d = c.getExtension(b);
        }
        a[b] = d;
        return null !== d;
      },
      get: function (b) {
        this.has(b) ||
          console.warn(
            "THREE.WebGLRenderer: " + b + " extension not supported."
          );
        return a[b];
      },
    };
  }
  function uk(c, a, b, d) {
    function e(k) {
      k = k.target;
      var l = g.get(k);
      null !== l.index && a.remove(l.index);
      for (var m in l.attributes) a.remove(l.attributes[m]);
      k.removeEventListener("dispose", e);
      g.delete(k);
      if ((m = h.get(l))) a.remove(m), h.delete(l);
      d.releaseStatesOfGeometry(k);
      !0 === k.isInstancedBufferGeometry && delete k._maxInstanceCount;
      b.memory.geometries--;
    }
    function f(k) {
      var l = [],
        m = k.index,
        n = k.attributes.position;
      if (null !== m) {
        n = m.array;
        m = m.version;
        for (var p = 0, t = n.length; p < t; p += 3) {
          var q = n[p + 0],
            v = n[p + 1],
            u = n[p + 2];
          l.push(q, v, v, u, u, q);
        }
      } else for (p = n.array, m = n.version, n = 0, p = p.length / 3 - 1; n < p; n += 3) (t = n + 0), (q = n + 1), (v = n + 2), l.push(t, q, q, v, v, t);
      l = new (65535 < vi(l) ? $c : Zc)(l, 1);
      l.version = m;
      (m = h.get(k)) && a.remove(m);
      h.set(k, l);
    }
    var g = new WeakMap(),
      h = new WeakMap();
    return {
      get: function (k, l) {
        var m = g.get(l);
        if (m) return m;
        l.addEventListener("dispose", e);
        l.isBufferGeometry
          ? (m = l)
          : l.isGeometry &&
            (void 0 === l._bufferGeometry &&
              (l._bufferGeometry = new ka().setFromObject(k)),
            (m = l._bufferGeometry));
        g.set(l, m);
        b.memory.geometries++;
        return m;
      },
      update: function (k) {
        var l = k.attributes;
        for (n in l) a.update(l[n], 34962);
        k = k.morphAttributes;
        for (var m in k) {
          l = k[m];
          var n = 0;
          for (var p = l.length; n < p; n++) a.update(l[n], 34962);
        }
      },
      getWireframeAttribute: function (k) {
        var l = h.get(k);
        if (l) {
          var m = k.index;
          null !== m && l.version < m.version && f(k);
        } else f(k);
        return h.get(k);
      },
    };
  }
  function vk(c, a, b, d) {
    var e = d.isWebGL2,
      f,
      g,
      h;
    this.setMode = function (k) {
      f = k;
    };
    this.setIndex = function (k) {
      g = k.type;
      h = k.bytesPerElement;
    };
    this.render = function (k, l) {
      c.drawElements(f, l, g, k * h);
      b.update(l, f, 1);
    };
    this.renderInstances = function (k, l, m) {
      if (0 !== m) {
        if (e) {
          var n = c;
          var p = "drawElementsInstanced";
        } else if (
          ((n = a.get("ANGLE_instanced_arrays")),
          (p = "drawElementsInstancedANGLE"),
          null === n)
        ) {
          console.error(
            "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
          );
          return;
        }
        n[p](f, l, g, k * h, m);
        b.update(l, f, m);
      }
    };
  }
  function wk(c) {
    var a = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return {
      memory: { geometries: 0, textures: 0 },
      render: a,
      programs: null,
      autoReset: !0,
      reset: function () {
        a.frame++;
        a.calls = 0;
        a.triangles = 0;
        a.points = 0;
        a.lines = 0;
      },
      update: function (b, d, e) {
        a.calls++;
        switch (d) {
          case 4:
            a.triangles += (b / 3) * e;
            break;
          case 1:
            a.lines += (b / 2) * e;
            break;
          case 3:
            a.lines += e * (b - 1);
            break;
          case 2:
            a.lines += e * b;
            break;
          case 0:
            a.points += e * b;
            break;
          default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", d);
        }
      },
    };
  }
  function xk(c, a) {
    return c[0] - a[0];
  }
  function yk(c, a) {
    return Math.abs(a[1]) - Math.abs(c[1]);
  }
  function zk(c) {
    for (var a = {}, b = new Float32Array(8), d = [], e = 0; 8 > e; e++)
      d[e] = [e, 0];
    return {
      update: function (f, g, h, k) {
        var l = f.morphTargetInfluences;
        f = void 0 === l ? 0 : l.length;
        var m = a[g.id];
        if (void 0 === m) {
          m = [];
          for (var n = 0; n < f; n++) m[n] = [n, 0];
          a[g.id] = m;
        }
        for (n = 0; n < f; n++) {
          var p = m[n];
          p[0] = n;
          p[1] = l[n];
        }
        m.sort(yk);
        for (l = 0; 8 > l; l++)
          l < f && m[l][1]
            ? ((d[l][0] = m[l][0]), (d[l][1] = m[l][1]))
            : ((d[l][0] = Number.MAX_SAFE_INTEGER), (d[l][1] = 0));
        d.sort(xk);
        f = h.morphTargets && g.morphAttributes.position;
        h = h.morphNormals && g.morphAttributes.normal;
        for (l = m = 0; 8 > l; l++)
          (p = d[l]),
            (n = p[0]),
            (p = p[1]),
            n !== Number.MAX_SAFE_INTEGER && p
              ? (f &&
                  g.getAttribute("morphTarget" + l) !== f[n] &&
                  g.setAttribute("morphTarget" + l, f[n]),
                h &&
                  g.getAttribute("morphNormal" + l) !== h[n] &&
                  g.setAttribute("morphNormal" + l, h[n]),
                (b[l] = p),
                (m += p))
              : (f &&
                  void 0 !== g.getAttribute("morphTarget" + l) &&
                  g.deleteAttribute("morphTarget" + l),
                h &&
                  void 0 !== g.getAttribute("morphNormal" + l) &&
                  g.deleteAttribute("morphNormal" + l),
                (b[l] = 0));
        g = g.morphTargetsRelative ? 1 : 1 - m;
        k.getUniforms().setValue(c, "morphTargetBaseInfluence", g);
        k.getUniforms().setValue(c, "morphTargetInfluences", b);
      },
    };
  }
  function Ak(c, a, b, d) {
    var e = new WeakMap();
    return {
      update: function (f) {
        var g = d.render.frame,
          h = f.geometry,
          k = a.get(f, h);
        e.get(k) !== g &&
          (h.isGeometry && k.updateFromObject(f), a.update(k), e.set(k, g));
        f.isInstancedMesh &&
          (b.update(f.instanceMatrix, 34962),
          null !== f.instanceColor && b.update(f.instanceColor, 34962));
        return k;
      },
      dispose: function () {
        e = new WeakMap();
      },
    };
  }
  function kc(c, a, b, d, e, f, g, h, k, l) {
    c = void 0 !== c ? c : [];
    Oa.call(
      this,
      c,
      void 0 !== a ? a : 301,
      b,
      d,
      e,
      f,
      void 0 !== g ? g : 1022,
      h,
      k,
      l
    );
    this.flipY = !1;
  }
  function Id(c, a, b, d) {
    Oa.call(this, null);
    this.image = {
      data: c || null,
      width: a || 1,
      height: b || 1,
      depth: d || 1,
    };
    this.minFilter = this.magFilter = 1003;
    this.wrapR = 1001;
    this.flipY = this.generateMipmaps = !1;
    this.needsUpdate = !0;
  }
  function Jd(c, a, b, d) {
    Oa.call(this, null);
    this.image = {
      data: c || null,
      width: a || 1,
      height: b || 1,
      depth: d || 1,
    };
    this.minFilter = this.magFilter = 1003;
    this.wrapR = 1001;
    this.flipY = this.generateMipmaps = !1;
    this.needsUpdate = !0;
  }
  function Kd(c, a, b) {
    var d = c[0];
    if (0 >= d || 0 < d) return c;
    var e = a * b,
      f = yi[e];
    void 0 === f && ((f = new Float32Array(e)), (yi[e] = f));
    if (0 !== a)
      for (d.toArray(f, 0), d = 1, e = 0; d !== a; ++d)
        (e += b), c[d].toArray(f, e);
    return f;
  }
  function Lb(c, a) {
    if (c.length !== a.length) return !1;
    for (var b = 0, d = c.length; b < d; b++) if (c[b] !== a[b]) return !1;
    return !0;
  }
  function Eb(c, a) {
    for (var b = 0, d = a.length; b < d; b++) c[b] = a[b];
  }
  function zi(c, a) {
    var b = Ai[a];
    void 0 === b && ((b = new Int32Array(a)), (Ai[a] = b));
    for (var d = 0; d !== a; ++d) b[d] = c.allocateTextureUnit();
    return b;
  }
  function Bk(c, a) {
    var b = this.cache;
    b[0] !== a && (c.uniform1f(this.addr, a), (b[0] = a));
  }
  function Ck(c, a) {
    var b = this.cache;
    if (void 0 !== a.x) {
      if (b[0] !== a.x || b[1] !== a.y)
        c.uniform2f(this.addr, a.x, a.y), (b[0] = a.x), (b[1] = a.y);
    } else Lb(b, a) || (c.uniform2fv(this.addr, a), Eb(b, a));
  }
  function Dk(c, a) {
    var b = this.cache;
    if (void 0 !== a.x) {
      if (b[0] !== a.x || b[1] !== a.y || b[2] !== a.z)
        c.uniform3f(this.addr, a.x, a.y, a.z),
          (b[0] = a.x),
          (b[1] = a.y),
          (b[2] = a.z);
    } else if (void 0 !== a.r) {
      if (b[0] !== a.r || b[1] !== a.g || b[2] !== a.b)
        c.uniform3f(this.addr, a.r, a.g, a.b),
          (b[0] = a.r),
          (b[1] = a.g),
          (b[2] = a.b);
    } else Lb(b, a) || (c.uniform3fv(this.addr, a), Eb(b, a));
  }
  function Ek(c, a) {
    var b = this.cache;
    if (void 0 !== a.x) {
      if (b[0] !== a.x || b[1] !== a.y || b[2] !== a.z || b[3] !== a.w)
        c.uniform4f(this.addr, a.x, a.y, a.z, a.w),
          (b[0] = a.x),
          (b[1] = a.y),
          (b[2] = a.z),
          (b[3] = a.w);
    } else Lb(b, a) || (c.uniform4fv(this.addr, a), Eb(b, a));
  }
  function Fk(c, a) {
    var b = this.cache,
      d = a.elements;
    void 0 === d
      ? Lb(b, a) || (c.uniformMatrix2fv(this.addr, !1, a), Eb(b, a))
      : Lb(b, d) ||
        (Bi.set(d), c.uniformMatrix2fv(this.addr, !1, Bi), Eb(b, d));
  }
  function Gk(c, a) {
    var b = this.cache,
      d = a.elements;
    void 0 === d
      ? Lb(b, a) || (c.uniformMatrix3fv(this.addr, !1, a), Eb(b, a))
      : Lb(b, d) ||
        (Ci.set(d), c.uniformMatrix3fv(this.addr, !1, Ci), Eb(b, d));
  }
  function Hk(c, a) {
    var b = this.cache,
      d = a.elements;
    void 0 === d
      ? Lb(b, a) || (c.uniformMatrix4fv(this.addr, !1, a), Eb(b, a))
      : Lb(b, d) ||
        (Di.set(d), c.uniformMatrix4fv(this.addr, !1, Di), Eb(b, d));
  }
  function Ik(c, a, b) {
    var d = this.cache,
      e = b.allocateTextureUnit();
    d[0] !== e && (c.uniform1i(this.addr, e), (d[0] = e));
    b.safeSetTexture2D(a || Ei, e);
  }
  function Jk(c, a, b) {
    var d = this.cache,
      e = b.allocateTextureUnit();
    d[0] !== e && (c.uniform1i(this.addr, e), (d[0] = e));
    b.setTexture2DArray(a || Kk, e);
  }
  function Lk(c, a, b) {
    var d = this.cache,
      e = b.allocateTextureUnit();
    d[0] !== e && (c.uniform1i(this.addr, e), (d[0] = e));
    b.setTexture3D(a || Mk, e);
  }
  function Nk(c, a, b) {
    var d = this.cache,
      e = b.allocateTextureUnit();
    d[0] !== e && (c.uniform1i(this.addr, e), (d[0] = e));
    b.safeSetTextureCube(a || Fi, e);
  }
  function Ok(c, a) {
    var b = this.cache;
    b[0] !== a && (c.uniform1i(this.addr, a), (b[0] = a));
  }
  function Pk(c, a) {
    var b = this.cache;
    Lb(b, a) || (c.uniform2iv(this.addr, a), Eb(b, a));
  }
  function Qk(c, a) {
    var b = this.cache;
    Lb(b, a) || (c.uniform3iv(this.addr, a), Eb(b, a));
  }
  function Rk(c, a) {
    var b = this.cache;
    Lb(b, a) || (c.uniform4iv(this.addr, a), Eb(b, a));
  }
  function Sk(c, a) {
    var b = this.cache;
    b[0] !== a && (c.uniform1ui(this.addr, a), (b[0] = a));
  }
  function Tk(c) {
    switch (c) {
      case 5126:
        return Bk;
      case 35664:
        return Ck;
      case 35665:
        return Dk;
      case 35666:
        return Ek;
      case 35674:
        return Fk;
      case 35675:
        return Gk;
      case 35676:
        return Hk;
      case 5124:
      case 35670:
        return Ok;
      case 35667:
      case 35671:
        return Pk;
      case 35668:
      case 35672:
        return Qk;
      case 35669:
      case 35673:
        return Rk;
      case 5125:
        return Sk;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return Ik;
      case 35679:
      case 36299:
      case 36307:
        return Lk;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return Nk;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return Jk;
    }
  }
  function Uk(c, a) {
    c.uniform1fv(this.addr, a);
  }
  function Vk(c, a) {
    c.uniform1iv(this.addr, a);
  }
  function Wk(c, a) {
    c.uniform2iv(this.addr, a);
  }
  function Xk(c, a) {
    c.uniform3iv(this.addr, a);
  }
  function Yk(c, a) {
    c.uniform4iv(this.addr, a);
  }
  function Zk(c, a) {
    a = Kd(a, this.size, 2);
    c.uniform2fv(this.addr, a);
  }
  function $k(c, a) {
    a = Kd(a, this.size, 3);
    c.uniform3fv(this.addr, a);
  }
  function al(c, a) {
    a = Kd(a, this.size, 4);
    c.uniform4fv(this.addr, a);
  }
  function bl(c, a) {
    a = Kd(a, this.size, 4);
    c.uniformMatrix2fv(this.addr, !1, a);
  }
  function cl(c, a) {
    a = Kd(a, this.size, 9);
    c.uniformMatrix3fv(this.addr, !1, a);
  }
  function dl(c, a) {
    a = Kd(a, this.size, 16);
    c.uniformMatrix4fv(this.addr, !1, a);
  }
  function el(c, a, b) {
    var d = a.length,
      e = zi(b, d);
    c.uniform1iv(this.addr, e);
    for (c = 0; c !== d; ++c) b.safeSetTexture2D(a[c] || Ei, e[c]);
  }
  function fl(c, a, b) {
    var d = a.length,
      e = zi(b, d);
    c.uniform1iv(this.addr, e);
    for (c = 0; c !== d; ++c) b.safeSetTextureCube(a[c] || Fi, e[c]);
  }
  function gl(c) {
    switch (c) {
      case 5126:
        return Uk;
      case 35664:
        return Zk;
      case 35665:
        return $k;
      case 35666:
        return al;
      case 35674:
        return bl;
      case 35675:
        return cl;
      case 35676:
        return dl;
      case 5124:
      case 35670:
        return Vk;
      case 35667:
      case 35671:
        return Wk;
      case 35668:
      case 35672:
        return Xk;
      case 35669:
      case 35673:
        return Yk;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return el;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return fl;
    }
  }
  function hl(c, a, b) {
    this.id = c;
    this.addr = b;
    this.cache = [];
    this.setValue = Tk(a.type);
  }
  function Gi(c, a, b) {
    this.id = c;
    this.addr = b;
    this.cache = [];
    this.size = a.size;
    this.setValue = gl(a.type);
  }
  function Hi(c) {
    this.id = c;
    this.seq = [];
    this.map = {};
  }
  function Dc(c, a) {
    this.seq = [];
    this.map = {};
    for (var b = c.getProgramParameter(a, 35718), d = 0; d < b; ++d) {
      var e = c.getActiveUniform(a, d),
        f = c.getUniformLocation(a, e.name),
        g = this,
        h = e.name,
        k = h.length;
      for (lh.lastIndex = 0; ; ) {
        var l = lh.exec(h),
          m = lh.lastIndex,
          n = l[1],
          p = l[3];
        "]" === l[2] && (n |= 0);
        if (void 0 === p || ("[" === p && m + 2 === k)) {
          h = g;
          e = void 0 === p ? new hl(n, e, f) : new Gi(n, e, f);
          h.seq.push(e);
          h.map[e.id] = e;
          break;
        } else
          (p = g.map[n]),
            void 0 === p &&
              ((p = new Hi(n)),
              (n = g),
              (g = p),
              n.seq.push(g),
              (n.map[g.id] = g)),
            (g = p);
      }
    }
  }
  function Ii(c, a, b) {
    a = c.createShader(a);
    c.shaderSource(a, b);
    c.compileShader(a);
    return a;
  }
  function Ji(c) {
    switch (c) {
      case 3e3:
        return ["Linear", "( value )"];
      case 3001:
        return ["sRGB", "( value )"];
      case 3002:
        return ["RGBE", "( value )"];
      case 3004:
        return ["RGBM", "( value, 7.0 )"];
      case 3005:
        return ["RGBM", "( value, 16.0 )"];
      case 3006:
        return ["RGBD", "( value, 256.0 )"];
      case 3007:
        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
      case 3003:
        return ["LogLuv", "( value )"];
      default:
        return (
          console.warn("THREE.WebGLProgram: Unsupported encoding:", c),
          ["Linear", "( value )"]
        );
    }
  }
  function Ki(c, a, b) {
    var d = c.getShaderParameter(a, 35713),
      e = c.getShaderInfoLog(a).trim();
    if (d && "" === e) return "";
    c = c.getShaderSource(a).split("\n");
    for (a = 0; a < c.length; a++) c[a] = a + 1 + ": " + c[a];
    c = c.join("\n");
    return "THREE.WebGLShader: gl.getShaderInfoLog() " + b + "\n" + e + c;
  }
  function Ke(c, a) {
    a = Ji(a);
    return (
      "vec4 " +
      c +
      "( vec4 value ) { return " +
      a[0] +
      "ToLinear" +
      a[1] +
      "; }"
    );
  }
  function il(c, a) {
    a = Ji(a);
    return (
      "vec4 " + c + "( vec4 value ) { return LinearTo" + a[0] + a[1] + "; }"
    );
  }
  function jl(c, a) {
    switch (a) {
      case 1:
        a = "Linear";
        break;
      case 2:
        a = "Reinhard";
        break;
      case 3:
        a = "OptimizedCineon";
        break;
      case 4:
        a = "ACESFilmic";
        break;
      case 5:
        a = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", a),
          (a = "Linear");
    }
    return (
      "vec3 " + c + "( vec3 color ) { return " + a + "ToneMapping( color ); }"
    );
  }
  function kl(c) {
    var a = [],
      b;
    for (b in c) {
      var d = c[b];
      !1 !== d && a.push("#define " + b + " " + d);
    }
    return a.join("\n");
  }
  function Le(c) {
    return "" !== c;
  }
  function Li(c, a) {
    return c
      .replace(/NUM_DIR_LIGHTS/g, a.numDirLights)
      .replace(/NUM_SPOT_LIGHTS/g, a.numSpotLights)
      .replace(/NUM_RECT_AREA_LIGHTS/g, a.numRectAreaLights)
      .replace(/NUM_POINT_LIGHTS/g, a.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g, a.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, a.numDirLightShadows)
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, a.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, a.numPointLightShadows);
  }
  function Mi(c, a) {
    return c
      .replace(/NUM_CLIPPING_PLANES/g, a.numClippingPlanes)
      .replace(
        /UNION_CLIPPING_PLANES/g,
        a.numClippingPlanes - a.numClipIntersection
      );
  }
  function mh(c, a) {
    c = Ba[a];
    if (void 0 === c) throw Error("Can not resolve #include <" + a + ">");
    return c.replace(nh, mh);
  }
  function Ni(c, a, b, d) {
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    );
    return oh(c, a, b, d);
  }
  function oh(c, a, b, d) {
    c = "";
    for (a = parseInt(a); a < parseInt(b); a++)
      c += d
        .replace(/\[\s*i\s*\]/g, "[ " + a + " ]")
        .replace(/UNROLLED_LOOP_INDEX/g, a);
    return c;
  }
  function Oi(c) {
    var a =
      "precision " +
      c.precision +
      " float;\nprecision " +
      c.precision +
      " int;";
    "highp" === c.precision
      ? (a += "\n#define HIGH_PRECISION")
      : "mediump" === c.precision
      ? (a += "\n#define MEDIUM_PRECISION")
      : "lowp" === c.precision && (a += "\n#define LOW_PRECISION");
    return a;
  }
  function ll(c) {
    var a = "SHADOWMAP_TYPE_BASIC";
    1 === c.shadowMapType
      ? (a = "SHADOWMAP_TYPE_PCF")
      : 2 === c.shadowMapType
      ? (a = "SHADOWMAP_TYPE_PCF_SOFT")
      : 3 === c.shadowMapType && (a = "SHADOWMAP_TYPE_VSM");
    return a;
  }
  function ml(c) {
    var a = "ENVMAP_TYPE_CUBE";
    if (c.envMap)
      switch (c.envMapMode) {
        case 301:
        case 302:
          a = "ENVMAP_TYPE_CUBE";
          break;
        case 306:
        case 307:
          a = "ENVMAP_TYPE_CUBE_UV";
      }
    return a;
  }
  function nl(c) {
    var a = "ENVMAP_MODE_REFLECTION";
    if (c.envMap)
      switch (c.envMapMode) {
        case 302:
        case 307:
          a = "ENVMAP_MODE_REFRACTION";
      }
    return a;
  }
  function ol(c) {
    var a = "ENVMAP_BLENDING_NONE";
    if (c.envMap)
      switch (c.combine) {
        case 0:
          a = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case 1:
          a = "ENVMAP_BLENDING_MIX";
          break;
        case 2:
          a = "ENVMAP_BLENDING_ADD";
      }
    return a;
  }
  function pl(c, a, b, d) {
    var e = c.getContext(),
      f = b.defines,
      g = b.vertexShader,
      h = b.fragmentShader,
      k = ll(b),
      l = ml(b),
      m = nl(b),
      n = ol(b),
      p = 0 < c.gammaFactor ? c.gammaFactor : 1,
      t = b.isWebGL2
        ? ""
        : [
            b.extensionDerivatives ||
            b.envMapCubeUV ||
            b.bumpMap ||
            b.tangentSpaceNormalMap ||
            b.clearcoatNormalMap ||
            b.flatShading ||
            "physical" === b.shaderID
              ? "#extension GL_OES_standard_derivatives : enable"
              : "",
            (b.extensionFragDepth || b.logarithmicDepthBuffer) &&
            b.rendererExtensionFragDepth
              ? "#extension GL_EXT_frag_depth : enable"
              : "",
            b.extensionDrawBuffers && b.rendererExtensionDrawBuffers
              ? "#extension GL_EXT_draw_buffers : require"
              : "",
            (b.extensionShaderTextureLOD || b.envMap) &&
            b.rendererExtensionShaderTextureLod
              ? "#extension GL_EXT_shader_texture_lod : enable"
              : "",
          ]
            .filter(Le)
            .join("\n"),
      q = kl(f),
      v = e.createProgram(),
      u = b.glslVersion ? "#version " + b.glslVersion + "\n" : "";
    b.isRawShaderMaterial
      ? ((f = [q].filter(Le).join("\n")),
        0 < f.length && (f += "\n"),
        (k = [t, q].filter(Le).join("\n")),
        0 < k.length && (k += "\n"))
      : ((f = [
          Oi(b),
          "#define SHADER_NAME " + b.shaderName,
          q,
          b.instancing ? "#define USE_INSTANCING" : "",
          b.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
          b.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
          "#define GAMMA_FACTOR " + p,
          "#define MAX_BONES " + b.maxBones,
          b.useFog && b.fog ? "#define USE_FOG" : "",
          b.useFog && b.fogExp2 ? "#define FOG_EXP2" : "",
          b.map ? "#define USE_MAP" : "",
          b.envMap ? "#define USE_ENVMAP" : "",
          b.envMap ? "#define " + m : "",
          b.lightMap ? "#define USE_LIGHTMAP" : "",
          b.aoMap ? "#define USE_AOMAP" : "",
          b.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          b.bumpMap ? "#define USE_BUMPMAP" : "",
          b.normalMap ? "#define USE_NORMALMAP" : "",
          b.normalMap && b.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          b.normalMap && b.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          b.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          b.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          b.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          b.displacementMap && b.supportsVertexTextures
            ? "#define USE_DISPLACEMENTMAP"
            : "",
          b.specularMap ? "#define USE_SPECULARMAP" : "",
          b.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          b.metalnessMap ? "#define USE_METALNESSMAP" : "",
          b.alphaMap ? "#define USE_ALPHAMAP" : "",
          b.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          b.vertexTangents ? "#define USE_TANGENT" : "",
          b.vertexColors ? "#define USE_COLOR" : "",
          b.vertexUvs ? "#define USE_UV" : "",
          b.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          b.flatShading ? "#define FLAT_SHADED" : "",
          b.skinning ? "#define USE_SKINNING" : "",
          b.useVertexTexture ? "#define BONE_TEXTURE" : "",
          b.morphTargets ? "#define USE_MORPHTARGETS" : "",
          b.morphNormals && !1 === b.flatShading
            ? "#define USE_MORPHNORMALS"
            : "",
          b.doubleSided ? "#define DOUBLE_SIDED" : "",
          b.flipSided ? "#define FLIP_SIDED" : "",
          b.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          b.shadowMapEnabled ? "#define " + k : "",
          b.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
          b.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          b.logarithmicDepthBuffer && b.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          "uniform mat4 modelMatrix;",
          "uniform mat4 modelViewMatrix;",
          "uniform mat4 projectionMatrix;",
          "uniform mat4 viewMatrix;",
          "uniform mat3 normalMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          "#ifdef USE_INSTANCING",
          "\tattribute mat4 instanceMatrix;",
          "#endif",
          "#ifdef USE_INSTANCING_COLOR",
          "\tattribute vec3 instanceColor;",
          "#endif",
          "attribute vec3 position;",
          "attribute vec3 normal;",
          "attribute vec2 uv;",
          "#ifdef USE_TANGENT",
          "\tattribute vec4 tangent;",
          "#endif",
          "#ifdef USE_COLOR",
          "\tattribute vec3 color;",
          "#endif",
          "#ifdef USE_MORPHTARGETS",
          "\tattribute vec3 morphTarget0;",
          "\tattribute vec3 morphTarget1;",
          "\tattribute vec3 morphTarget2;",
          "\tattribute vec3 morphTarget3;",
          "\t#ifdef USE_MORPHNORMALS",
          "\t\tattribute vec3 morphNormal0;",
          "\t\tattribute vec3 morphNormal1;",
          "\t\tattribute vec3 morphNormal2;",
          "\t\tattribute vec3 morphNormal3;",
          "\t#else",
          "\t\tattribute vec3 morphTarget4;",
          "\t\tattribute vec3 morphTarget5;",
          "\t\tattribute vec3 morphTarget6;",
          "\t\tattribute vec3 morphTarget7;",
          "\t#endif",
          "#endif",
          "#ifdef USE_SKINNING",
          "\tattribute vec4 skinIndex;",
          "\tattribute vec4 skinWeight;",
          "#endif",
          "\n",
        ]
          .filter(Le)
          .join("\n")),
        (k = [
          t,
          Oi(b),
          "#define SHADER_NAME " + b.shaderName,
          q,
          b.alphaTest
            ? "#define ALPHATEST " + b.alphaTest + (b.alphaTest % 1 ? "" : ".0")
            : "",
          "#define GAMMA_FACTOR " + p,
          b.useFog && b.fog ? "#define USE_FOG" : "",
          b.useFog && b.fogExp2 ? "#define FOG_EXP2" : "",
          b.map ? "#define USE_MAP" : "",
          b.matcap ? "#define USE_MATCAP" : "",
          b.envMap ? "#define USE_ENVMAP" : "",
          b.envMap ? "#define " + l : "",
          b.envMap ? "#define " + m : "",
          b.envMap ? "#define " + n : "",
          b.lightMap ? "#define USE_LIGHTMAP" : "",
          b.aoMap ? "#define USE_AOMAP" : "",
          b.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
          b.bumpMap ? "#define USE_BUMPMAP" : "",
          b.normalMap ? "#define USE_NORMALMAP" : "",
          b.normalMap && b.objectSpaceNormalMap
            ? "#define OBJECTSPACE_NORMALMAP"
            : "",
          b.normalMap && b.tangentSpaceNormalMap
            ? "#define TANGENTSPACE_NORMALMAP"
            : "",
          b.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
          b.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
          b.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
          b.specularMap ? "#define USE_SPECULARMAP" : "",
          b.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
          b.metalnessMap ? "#define USE_METALNESSMAP" : "",
          b.alphaMap ? "#define USE_ALPHAMAP" : "",
          b.sheen ? "#define USE_SHEEN" : "",
          b.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
          b.vertexTangents ? "#define USE_TANGENT" : "",
          b.vertexColors || b.instancingColor ? "#define USE_COLOR" : "",
          b.vertexUvs ? "#define USE_UV" : "",
          b.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
          b.gradientMap ? "#define USE_GRADIENTMAP" : "",
          b.flatShading ? "#define FLAT_SHADED" : "",
          b.doubleSided ? "#define DOUBLE_SIDED" : "",
          b.flipSided ? "#define FLIP_SIDED" : "",
          b.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
          b.shadowMapEnabled ? "#define " + k : "",
          b.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
          b.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
          b.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
          b.logarithmicDepthBuffer && b.rendererExtensionFragDepth
            ? "#define USE_LOGDEPTHBUF_EXT"
            : "",
          (b.extensionShaderTextureLOD || b.envMap) &&
          b.rendererExtensionShaderTextureLod
            ? "#define TEXTURE_LOD_EXT"
            : "",
          "uniform mat4 viewMatrix;",
          "uniform vec3 cameraPosition;",
          "uniform bool isOrthographic;",
          0 !== b.toneMapping ? "#define TONE_MAPPING" : "",
          0 !== b.toneMapping ? Ba.tonemapping_pars_fragment : "",
          0 !== b.toneMapping ? jl("toneMapping", b.toneMapping) : "",
          b.dithering ? "#define DITHERING" : "",
          Ba.encodings_pars_fragment,
          b.map ? Ke("mapTexelToLinear", b.mapEncoding) : "",
          b.matcap ? Ke("matcapTexelToLinear", b.matcapEncoding) : "",
          b.envMap ? Ke("envMapTexelToLinear", b.envMapEncoding) : "",
          b.emissiveMap
            ? Ke("emissiveMapTexelToLinear", b.emissiveMapEncoding)
            : "",
          b.lightMap ? Ke("lightMapTexelToLinear", b.lightMapEncoding) : "",
          il("linearToOutputTexel", b.outputEncoding),
          b.depthPacking ? "#define DEPTH_PACKING " + b.depthPacking : "",
          "\n",
        ]
          .filter(Le)
          .join("\n")));
    g = g.replace(nh, mh);
    g = Li(g, b);
    g = Mi(g, b);
    h = h.replace(nh, mh);
    h = Li(h, b);
    h = Mi(h, b);
    g = g.replace(Pi, oh).replace(Qi, Ni);
    h = h.replace(Pi, oh).replace(Qi, Ni);
    b.isWebGL2 &&
      !0 !== b.isRawShaderMaterial &&
      ((u = "#version 300 es\n"),
      (f =
        "#define attribute in\n#define varying out\n#define texture2D texture\n" +
        f),
      (k =
        [
          "#define varying in",
          "300 es" === b.glslVersion ? "" : "out highp vec4 pc_fragColor;",
          "300 es" === b.glslVersion ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        k));
    h = u + k + h;
    g = Ii(e, 35633, u + f + g);
    h = Ii(e, 35632, h);
    e.attachShader(v, g);
    e.attachShader(v, h);
    void 0 !== b.index0AttributeName
      ? e.bindAttribLocation(v, 0, b.index0AttributeName)
      : !0 === b.morphTargets && e.bindAttribLocation(v, 0, "position");
    e.linkProgram(v);
    if (c.debug.checkShaderErrors) {
      c = e.getProgramInfoLog(v).trim();
      u = e.getShaderInfoLog(g).trim();
      l = e.getShaderInfoLog(h).trim();
      n = m = !0;
      if (!1 === e.getProgramParameter(v, 35714))
        (m = !1),
          (p = Ki(e, g, "vertex")),
          (t = Ki(e, h, "fragment")),
          console.error(
            "THREE.WebGLProgram: shader error: ",
            e.getError(),
            "35715",
            e.getProgramParameter(v, 35715),
            "gl.getProgramInfoLog",
            c,
            p,
            t
          );
      else if ("" !== c)
        console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", c);
      else if ("" === u || "" === l) n = !1;
      n &&
        (this.diagnostics = {
          runnable: m,
          programLog: c,
          vertexShader: { log: u, prefix: f },
          fragmentShader: { log: l, prefix: k },
        });
    }
    e.deleteShader(g);
    e.deleteShader(h);
    var A;
    this.getUniforms = function () {
      void 0 === A && (A = new Dc(e, v));
      return A;
    };
    var B;
    this.getAttributes = function () {
      if (void 0 === B) {
        for (
          var D = {}, G = e.getProgramParameter(v, 35721), I = 0;
          I < G;
          I++
        ) {
          var E = e.getActiveAttrib(v, I).name;
          D[E] = e.getAttribLocation(v, E);
        }
        B = D;
      }
      return B;
    };
    this.destroy = function () {
      d.releaseStatesOfProgram(this);
      e.deleteProgram(v);
      this.program = void 0;
    };
    this.name = b.shaderName;
    this.id = ql++;
    this.cacheKey = a;
    this.usedTimes = 1;
    this.program = v;
    this.vertexShader = g;
    this.fragmentShader = h;
    return this;
  }
  function rl(c, a, b, d, e, f) {
    function g(u) {
      if (u)
        u.isTexture
          ? (A = u.encoding)
          : u.isWebGLRenderTarget &&
            (console.warn(
              "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
            ),
            (A = u.texture.encoding));
      else var A = 3e3;
      return A;
    }
    var h = [],
      k = d.isWebGL2,
      l = d.logarithmicDepthBuffer,
      m = d.floatVertexTextures,
      n = d.maxVertexUniforms,
      p = d.vertexTextures,
      t = d.precision,
      q = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite",
      },
      v = "precision isWebGL2 supportsVertexTextures outputEncoding instancing instancingColor map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap lightMapEncoding aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatMap clearcoatRoughnessMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen transmissionMap".split(
        " "
      );
    return {
      getParameters: function (u, A, B, D, G) {
        var I = D.fog;
        D = u.isMeshStandardMaterial ? D.environment : null;
        D = a.get(u.envMap || D);
        var E = q[u.type];
        if (G.isSkinnedMesh) {
          var H = G.skeleton.bones;
          if (m) H = 1024;
          else {
            var M = Math.min(Math.floor((n - 20) / 4), H.length);
            M < H.length
              ? (console.warn(
                  "THREE.WebGLRenderer: Skeleton has " +
                    H.length +
                    " bones. This GPU supports " +
                    M +
                    "."
                ),
                (H = 0))
              : (H = M);
          }
        } else H = 0;
        null !== u.precision &&
          ((t = d.getMaxPrecision(u.precision)),
          t !== u.precision &&
            console.warn(
              "THREE.WebGLProgram.getParameters:",
              u.precision,
              "not supported, using",
              t,
              "instead."
            ));
        if (E) {
          var F = Pb[E];
          M = F.vertexShader;
          F = F.fragmentShader;
        } else (M = u.vertexShader), (F = u.fragmentShader);
        var K = c.getRenderTarget();
        return {
          isWebGL2: k,
          shaderID: E,
          shaderName: u.type,
          vertexShader: M,
          fragmentShader: F,
          defines: u.defines,
          isRawShaderMaterial: !0 === u.isRawShaderMaterial,
          glslVersion: u.glslVersion,
          precision: t,
          instancing: !0 === G.isInstancedMesh,
          instancingColor: !0 === G.isInstancedMesh && null !== G.instanceColor,
          supportsVertexTextures: p,
          outputEncoding: null !== K ? g(K.texture) : c.outputEncoding,
          map: !!u.map,
          mapEncoding: g(u.map),
          matcap: !!u.matcap,
          matcapEncoding: g(u.matcap),
          envMap: !!D,
          envMapMode: D && D.mapping,
          envMapEncoding: g(D),
          envMapCubeUV: !!D && (306 === D.mapping || 307 === D.mapping),
          lightMap: !!u.lightMap,
          lightMapEncoding: g(u.lightMap),
          aoMap: !!u.aoMap,
          emissiveMap: !!u.emissiveMap,
          emissiveMapEncoding: g(u.emissiveMap),
          bumpMap: !!u.bumpMap,
          normalMap: !!u.normalMap,
          objectSpaceNormalMap: 1 === u.normalMapType,
          tangentSpaceNormalMap: 0 === u.normalMapType,
          clearcoatMap: !!u.clearcoatMap,
          clearcoatRoughnessMap: !!u.clearcoatRoughnessMap,
          clearcoatNormalMap: !!u.clearcoatNormalMap,
          displacementMap: !!u.displacementMap,
          roughnessMap: !!u.roughnessMap,
          metalnessMap: !!u.metalnessMap,
          specularMap: !!u.specularMap,
          alphaMap: !!u.alphaMap,
          gradientMap: !!u.gradientMap,
          sheen: !!u.sheen,
          transmissionMap: !!u.transmissionMap,
          combine: u.combine,
          vertexTangents: u.normalMap && u.vertexTangents,
          vertexColors: u.vertexColors,
          vertexUvs:
            !!u.map ||
            !!u.bumpMap ||
            !!u.normalMap ||
            !!u.specularMap ||
            !!u.alphaMap ||
            !!u.emissiveMap ||
            !!u.roughnessMap ||
            !!u.metalnessMap ||
            !!u.clearcoatMap ||
            !!u.clearcoatRoughnessMap ||
            !!u.clearcoatNormalMap ||
            !!u.displacementMap ||
            !!u.transmissionMap,
          uvsVertexOnly:
            !(
              u.map ||
              u.bumpMap ||
              u.normalMap ||
              u.specularMap ||
              u.alphaMap ||
              u.emissiveMap ||
              u.roughnessMap ||
              u.metalnessMap ||
              u.clearcoatNormalMap ||
              u.transmissionMap
            ) && !!u.displacementMap,
          fog: !!I,
          useFog: u.fog,
          fogExp2: I && I.isFogExp2,
          flatShading: u.flatShading,
          sizeAttenuation: u.sizeAttenuation,
          logarithmicDepthBuffer: l,
          skinning: u.skinning && 0 < H,
          maxBones: H,
          useVertexTexture: m,
          morphTargets: u.morphTargets,
          morphNormals: u.morphNormals,
          maxMorphTargets: c.maxMorphTargets,
          maxMorphNormals: c.maxMorphNormals,
          numDirLights: A.directional.length,
          numPointLights: A.point.length,
          numSpotLights: A.spot.length,
          numRectAreaLights: A.rectArea.length,
          numHemiLights: A.hemi.length,
          numDirLightShadows: A.directionalShadowMap.length,
          numPointLightShadows: A.pointShadowMap.length,
          numSpotLightShadows: A.spotShadowMap.length,
          numClippingPlanes: f.numPlanes,
          numClipIntersection: f.numIntersection,
          dithering: u.dithering,
          shadowMapEnabled: c.shadowMap.enabled && 0 < B.length,
          shadowMapType: c.shadowMap.type,
          toneMapping: u.toneMapped ? c.toneMapping : 0,
          physicallyCorrectLights: c.physicallyCorrectLights,
          premultipliedAlpha: u.premultipliedAlpha,
          alphaTest: u.alphaTest,
          doubleSided: 2 === u.side,
          flipSided: 1 === u.side,
          depthPacking: void 0 !== u.depthPacking ? u.depthPacking : !1,
          index0AttributeName: u.index0AttributeName,
          extensionDerivatives: u.extensions && u.extensions.derivatives,
          extensionFragDepth: u.extensions && u.extensions.fragDepth,
          extensionDrawBuffers: u.extensions && u.extensions.drawBuffers,
          extensionShaderTextureLOD:
            u.extensions && u.extensions.shaderTextureLOD,
          rendererExtensionFragDepth: k || b.has("EXT_frag_depth"),
          rendererExtensionDrawBuffers: k || b.has("WEBGL_draw_buffers"),
          rendererExtensionShaderTextureLod:
            k || b.has("EXT_shader_texture_lod"),
          customProgramCacheKey: u.customProgramCacheKey(),
        };
      },
      getProgramCacheKey: function (u) {
        var A = [];
        u.shaderID
          ? A.push(u.shaderID)
          : (A.push(u.fragmentShader), A.push(u.vertexShader));
        if (void 0 !== u.defines)
          for (var B in u.defines) A.push(B), A.push(u.defines[B]);
        if (!1 === u.isRawShaderMaterial) {
          for (B = 0; B < v.length; B++) A.push(u[v[B]]);
          A.push(c.outputEncoding);
          A.push(c.gammaFactor);
        }
        A.push(u.customProgramCacheKey);
        return A.join();
      },
      getUniforms: function (u) {
        var A = q[u.type];
        return A ? Ri.clone(Pb[A].uniforms) : u.uniforms;
      },
      acquireProgram: function (u, A) {
        for (var B, D = 0, G = h.length; D < G; D++) {
          var I = h[D];
          if (I.cacheKey === A) {
            B = I;
            ++B.usedTimes;
            break;
          }
        }
        void 0 === B && ((B = new pl(c, A, u, e)), h.push(B));
        return B;
      },
      releaseProgram: function (u) {
        if (0 === --u.usedTimes) {
          var A = h.indexOf(u);
          h[A] = h[h.length - 1];
          h.pop();
          u.destroy();
        }
      },
      programs: h,
    };
  }
  function sl() {
    var c = new WeakMap();
    return {
      get: function (a) {
        var b = c.get(a);
        void 0 === b && ((b = {}), c.set(a, b));
        return b;
      },
      remove: function (a) {
        c.delete(a);
      },
      update: function (a, b, d) {
        c.get(a)[b] = d;
      },
      dispose: function () {
        c = new WeakMap();
      },
    };
  }
  function tl(c, a) {
    return c.groupOrder !== a.groupOrder
      ? c.groupOrder - a.groupOrder
      : c.renderOrder !== a.renderOrder
      ? c.renderOrder - a.renderOrder
      : c.program !== a.program
      ? c.program.id - a.program.id
      : c.material.id !== a.material.id
      ? c.material.id - a.material.id
      : c.z !== a.z
      ? c.z - a.z
      : c.id - a.id;
  }
  function ul(c, a) {
    return c.groupOrder !== a.groupOrder
      ? c.groupOrder - a.groupOrder
      : c.renderOrder !== a.renderOrder
      ? c.renderOrder - a.renderOrder
      : c.z !== a.z
      ? a.z - c.z
      : c.id - a.id;
  }
  function Si(c) {
    function a(h, k, l, m, n, p) {
      var t = b[d],
        q = c.get(l);
      void 0 === t
        ? ((t = {
            id: h.id,
            object: h,
            geometry: k,
            material: l,
            program: q.program || g,
            groupOrder: m,
            renderOrder: h.renderOrder,
            z: n,
            group: p,
          }),
          (b[d] = t))
        : ((t.id = h.id),
          (t.object = h),
          (t.geometry = k),
          (t.material = l),
          (t.program = q.program || g),
          (t.groupOrder = m),
          (t.renderOrder = h.renderOrder),
          (t.z = n),
          (t.group = p));
      d++;
      return t;
    }
    var b = [],
      d = 0,
      e = [],
      f = [],
      g = { id: -1 };
    return {
      opaque: e,
      transparent: f,
      init: function () {
        d = 0;
        e.length = 0;
        f.length = 0;
      },
      push: function (h, k, l, m, n, p) {
        h = a(h, k, l, m, n, p);
        (!0 === l.transparent ? f : e).push(h);
      },
      unshift: function (h, k, l, m, n, p) {
        h = a(h, k, l, m, n, p);
        (!0 === l.transparent ? f : e).unshift(h);
      },
      finish: function () {
        for (var h = d, k = b.length; h < k; h++) {
          var l = b[h];
          if (null === l.id) break;
          l.id = null;
          l.object = null;
          l.geometry = null;
          l.material = null;
          l.program = null;
          l.group = null;
        }
      },
      sort: function (h, k) {
        1 < e.length && e.sort(h || tl);
        1 < f.length && f.sort(k || ul);
      },
    };
  }
  function vl(c) {
    var a = new WeakMap();
    return {
      get: function (b, d) {
        var e = a.get(b);
        if (void 0 === e) {
          var f = new Si(c);
          a.set(b, new WeakMap());
          a.get(b).set(d, f);
        } else (f = e.get(d)), void 0 === f && ((f = new Si(c)), e.set(d, f));
        return f;
      },
      dispose: function () {
        a = new WeakMap();
      },
    };
  }
  function wl() {
    var c = {};
    return {
      get: function (a) {
        if (void 0 !== c[a.id]) return c[a.id];
        switch (a.type) {
          case "DirectionalLight":
            var b = { direction: new w(), color: new S() };
            break;
          case "SpotLight":
            b = {
              position: new w(),
              direction: new w(),
              color: new S(),
              distance: 0,
              coneCos: 0,
              penumbraCos: 0,
              decay: 0,
            };
            break;
          case "PointLight":
            b = { position: new w(), color: new S(), distance: 0, decay: 0 };
            break;
          case "HemisphereLight":
            b = { direction: new w(), skyColor: new S(), groundColor: new S() };
            break;
          case "RectAreaLight":
            b = {
              color: new S(),
              position: new w(),
              halfWidth: new w(),
              halfHeight: new w(),
            };
        }
        return (c[a.id] = b);
      },
    };
  }
  function xl() {
    var c = {};
    return {
      get: function (a) {
        if (void 0 !== c[a.id]) return c[a.id];
        switch (a.type) {
          case "DirectionalLight":
            var b = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new L(),
            };
            break;
          case "SpotLight":
            b = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new L(),
            };
            break;
          case "PointLight":
            b = {
              shadowBias: 0,
              shadowNormalBias: 0,
              shadowRadius: 1,
              shadowMapSize: new L(),
              shadowCameraNear: 1,
              shadowCameraFar: 1e3,
            };
        }
        return (c[a.id] = b);
      },
    };
  }
  function yl(c, a) {
    return (a.castShadow ? 1 : 0) - (c.castShadow ? 1 : 0);
  }
  function zl() {
    for (
      var c = new wl(),
        a = xl(),
        b = {
          version: 0,
          hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
          },
          ambient: [0, 0, 0],
          probe: [],
          directional: [],
          directionalShadow: [],
          directionalShadowMap: [],
          directionalShadowMatrix: [],
          spot: [],
          spotShadow: [],
          spotShadowMap: [],
          spotShadowMatrix: [],
          rectArea: [],
          rectAreaLTC1: null,
          rectAreaLTC2: null,
          point: [],
          pointShadow: [],
          pointShadowMap: [],
          pointShadowMatrix: [],
          hemi: [],
        },
        d = 0;
      9 > d;
      d++
    )
      b.probe.push(new w());
    var e = new w(),
      f = new da(),
      g = new da();
    return {
      setup: function (h, k, l) {
        for (var m = (k = 0), n = 0, p = 0; 9 > p; p++) b.probe[p].set(0, 0, 0);
        var t = (p = 0),
          q = 0,
          v = 0,
          u = 0,
          A = 0,
          B = 0,
          D = 0;
        l = l.matrixWorldInverse;
        h.sort(yl);
        for (var G = 0, I = h.length; G < I; G++) {
          var E = h[G],
            H = E.color,
            M = E.intensity,
            F = E.distance,
            K = E.shadow && E.shadow.map ? E.shadow.map.texture : null;
          if (E.isAmbientLight) (k += H.r * M), (m += H.g * M), (n += H.b * M);
          else if (E.isLightProbe)
            for (K = 0; 9 > K; K++)
              b.probe[K].addScaledVector(E.sh.coefficients[K], M);
          else if (E.isDirectionalLight) {
            M = c.get(E);
            M.color.copy(E.color).multiplyScalar(E.intensity);
            M.direction.setFromMatrixPosition(E.matrixWorld);
            e.setFromMatrixPosition(E.target.matrixWorld);
            M.direction.sub(e);
            M.direction.transformDirection(l);
            if (E.castShadow) {
              var P = E.shadow;
              H = a.get(E);
              H.shadowBias = P.bias;
              H.shadowNormalBias = P.normalBias;
              H.shadowRadius = P.radius;
              H.shadowMapSize = P.mapSize;
              b.directionalShadow[p] = H;
              b.directionalShadowMap[p] = K;
              b.directionalShadowMatrix[p] = E.shadow.matrix;
              A++;
            }
            b.directional[p] = M;
            p++;
          } else
            E.isSpotLight
              ? ((P = c.get(E)),
                P.position.setFromMatrixPosition(E.matrixWorld),
                P.position.applyMatrix4(l),
                P.color.copy(H).multiplyScalar(M),
                (P.distance = F),
                P.direction.setFromMatrixPosition(E.matrixWorld),
                e.setFromMatrixPosition(E.target.matrixWorld),
                P.direction.sub(e),
                P.direction.transformDirection(l),
                (P.coneCos = Math.cos(E.angle)),
                (P.penumbraCos = Math.cos(E.angle * (1 - E.penumbra))),
                (P.decay = E.decay),
                E.castShadow &&
                  ((M = E.shadow),
                  (H = a.get(E)),
                  (H.shadowBias = M.bias),
                  (H.shadowNormalBias = M.normalBias),
                  (H.shadowRadius = M.radius),
                  (H.shadowMapSize = M.mapSize),
                  (b.spotShadow[q] = H),
                  (b.spotShadowMap[q] = K),
                  (b.spotShadowMatrix[q] = E.shadow.matrix),
                  D++),
                (b.spot[q] = P),
                q++)
              : E.isRectAreaLight
              ? ((K = c.get(E)),
                K.color.copy(H).multiplyScalar(M),
                K.position.setFromMatrixPosition(E.matrixWorld),
                K.position.applyMatrix4(l),
                g.identity(),
                f.copy(E.matrixWorld),
                f.premultiply(l),
                g.extractRotation(f),
                K.halfWidth.set(0.5 * E.width, 0, 0),
                K.halfHeight.set(0, 0.5 * E.height, 0),
                K.halfWidth.applyMatrix4(g),
                K.halfHeight.applyMatrix4(g),
                (b.rectArea[v] = K),
                v++)
              : E.isPointLight
              ? ((M = c.get(E)),
                M.position.setFromMatrixPosition(E.matrixWorld),
                M.position.applyMatrix4(l),
                M.color.copy(E.color).multiplyScalar(E.intensity),
                (M.distance = E.distance),
                (M.decay = E.decay),
                E.castShadow &&
                  ((P = E.shadow),
                  (H = a.get(E)),
                  (H.shadowBias = P.bias),
                  (H.shadowNormalBias = P.normalBias),
                  (H.shadowRadius = P.radius),
                  (H.shadowMapSize = P.mapSize),
                  (H.shadowCameraNear = P.camera.near),
                  (H.shadowCameraFar = P.camera.far),
                  (b.pointShadow[t] = H),
                  (b.pointShadowMap[t] = K),
                  (b.pointShadowMatrix[t] = E.shadow.matrix),
                  B++),
                (b.point[t] = M),
                t++)
              : E.isHemisphereLight &&
                ((K = c.get(E)),
                K.direction.setFromMatrixPosition(E.matrixWorld),
                K.direction.transformDirection(l),
                K.direction.normalize(),
                K.skyColor.copy(E.color).multiplyScalar(M),
                K.groundColor.copy(E.groundColor).multiplyScalar(M),
                (b.hemi[u] = K),
                u++);
        }
        0 < v && ((b.rectAreaLTC1 = fa.LTC_1), (b.rectAreaLTC2 = fa.LTC_2));
        b.ambient[0] = k;
        b.ambient[1] = m;
        b.ambient[2] = n;
        h = b.hash;
        if (
          h.directionalLength !== p ||
          h.pointLength !== t ||
          h.spotLength !== q ||
          h.rectAreaLength !== v ||
          h.hemiLength !== u ||
          h.numDirectionalShadows !== A ||
          h.numPointShadows !== B ||
          h.numSpotShadows !== D
        )
          (b.directional.length = p),
            (b.spot.length = q),
            (b.rectArea.length = v),
            (b.point.length = t),
            (b.hemi.length = u),
            (b.directionalShadow.length = A),
            (b.directionalShadowMap.length = A),
            (b.pointShadow.length = B),
            (b.pointShadowMap.length = B),
            (b.spotShadow.length = D),
            (b.spotShadowMap.length = D),
            (b.directionalShadowMatrix.length = A),
            (b.pointShadowMatrix.length = B),
            (b.spotShadowMatrix.length = D),
            (h.directionalLength = p),
            (h.pointLength = t),
            (h.spotLength = q),
            (h.rectAreaLength = v),
            (h.hemiLength = u),
            (h.numDirectionalShadows = A),
            (h.numPointShadows = B),
            (h.numSpotShadows = D),
            (b.version = Al++);
      },
      state: b,
    };
  }
  function Ti() {
    var c = new zl(),
      a = [],
      b = [];
    return {
      init: function () {
        a.length = 0;
        b.length = 0;
      },
      state: { lightsArray: a, shadowsArray: b, lights: c },
      setupLights: function (d) {
        c.setup(a, b, d);
      },
      pushLight: function (d) {
        a.push(d);
      },
      pushShadow: function (d) {
        b.push(d);
      },
    };
  }
  function Bl() {
    var c = new WeakMap();
    return {
      get: function (a, b) {
        if (!1 === c.has(a)) {
          var d = new Ti();
          c.set(a, new WeakMap());
          c.get(a).set(b, d);
        } else
          !1 === c.get(a).has(b)
            ? ((d = new Ti()), c.get(a).set(b, d))
            : (d = c.get(a).get(b));
        return d;
      },
      dispose: function () {
        c = new WeakMap();
      },
    };
  }
  function Ec(c) {
    ra.call(this);
    this.type = "MeshDepthMaterial";
    this.depthPacking = 3200;
    this.morphTargets = this.skinning = !1;
    this.displacementMap = this.alphaMap = this.map = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.fog = !1;
    this.setValues(c);
  }
  function Fc(c) {
    ra.call(this);
    this.type = "MeshDistanceMaterial";
    this.referencePosition = new w();
    this.nearDistance = 1;
    this.farDistance = 1e3;
    this.morphTargets = this.skinning = !1;
    this.displacementMap = this.alphaMap = this.map = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.fog = !1;
    this.setValues(c);
  }
  function Ui(c, a, b) {
    function d(G, I, E) {
      E = (G << 0) | (I << 1) | (E << 2);
      var H = n[E];
      void 0 === H &&
        ((H = new Ec({ depthPacking: 3201, morphTargets: G, skinning: I })),
        (n[E] = H));
      return H;
    }
    function e(G, I, E) {
      E = (G << 0) | (I << 1) | (E << 2);
      var H = p[E];
      void 0 === H &&
        ((H = new Fc({ morphTargets: G, skinning: I })), (p[E] = H));
      return H;
    }
    function f(G, I, E, H, M, F, K) {
      var P = d,
        V = G.customDepthMaterial;
      !0 === H.isPointLight && ((P = e), (V = G.customDistanceMaterial));
      void 0 === V
        ? ((V = !1),
          !0 === E.morphTargets &&
            (V =
              I.morphAttributes &&
              I.morphAttributes.position &&
              0 < I.morphAttributes.position.length),
          (I = !1),
          !0 === G.isSkinnedMesh &&
            (!0 === E.skinning
              ? (I = !0)
              : console.warn(
                  "THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",
                  G
                )),
          (G = P(V, I, !0 === G.isInstancedMesh)))
        : (G = V);
      c.localClippingEnabled &&
        !0 === E.clipShadows &&
        0 !== E.clippingPlanes.length &&
        ((V = G.uuid),
        (P = E.uuid),
        (I = t[V]),
        void 0 === I && ((I = {}), (t[V] = I)),
        (V = I[P]),
        void 0 === V && ((V = G.clone()), (I[P] = V)),
        (G = V));
      G.visible = E.visible;
      G.wireframe = E.wireframe;
      G.side =
        3 === K
          ? null !== E.shadowSide
            ? E.shadowSide
            : E.side
          : null !== E.shadowSide
          ? E.shadowSide
          : q[E.side];
      G.clipShadows = E.clipShadows;
      G.clippingPlanes = E.clippingPlanes;
      G.clipIntersection = E.clipIntersection;
      G.wireframeLinewidth = E.wireframeLinewidth;
      G.linewidth = E.linewidth;
      !0 === H.isPointLight &&
        !0 === G.isMeshDistanceMaterial &&
        (G.referencePosition.setFromMatrixPosition(H.matrixWorld),
        (G.nearDistance = M),
        (G.farDistance = F));
      return G;
    }
    function g(G, I, E, H, M) {
      if (!1 !== G.visible) {
        if (
          G.layers.test(I.layers) &&
          (G.isMesh || G.isLine || G.isPoints) &&
          (G.castShadow || (G.receiveShadow && 3 === M)) &&
          (!G.frustumCulled || h.intersectsObject(G))
        ) {
          G.modelViewMatrix.multiplyMatrices(
            E.matrixWorldInverse,
            G.matrixWorld
          );
          var F = a.update(G),
            K = G.material;
          if (Array.isArray(K))
            for (var P = F.groups, V = 0, ia = P.length; V < ia; V++) {
              var W = P[V],
                aa = K[W.materialIndex];
              aa &&
                aa.visible &&
                ((aa = f(G, F, aa, H, E.near, E.far, M)),
                c.renderBufferDirect(E, null, F, aa, G, W));
            }
          else
            K.visible &&
              ((K = f(G, F, K, H, E.near, E.far, M)),
              c.renderBufferDirect(E, null, F, K, G, null));
        }
        G = G.children;
        F = 0;
        for (K = G.length; F < K; F++) g(G[F], I, E, H, M);
      }
    }
    var h = new xb(),
      k = new L(),
      l = new L(),
      m = new ca(),
      n = [],
      p = [],
      t = {},
      q = { 0: 1, 1: 0, 2: 2 },
      v = new sb({
        defines: { SAMPLE_RATE: 0.25, HALF_SAMPLE_RATE: 0.125 },
        uniforms: {
          shadow_pass: { value: null },
          resolution: { value: new L() },
          radius: { value: 4 },
        },
        vertexShader:
          "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
        fragmentShader:
          "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
      }),
      u = v.clone();
    u.defines.HORIZONAL_PASS = 1;
    var A = new ka();
    A.setAttribute(
      "position",
      new pa(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
    );
    var B = new Qa(A, v),
      D = this;
    this.enabled = !1;
    this.autoUpdate = !0;
    this.needsUpdate = !1;
    this.type = 1;
    this.render = function (G, I, E) {
      if (
        !1 !== D.enabled &&
        (!1 !== D.autoUpdate || !1 !== D.needsUpdate) &&
        0 !== G.length
      ) {
        var H = c.getRenderTarget(),
          M = c.getActiveCubeFace(),
          F = c.getActiveMipmapLevel(),
          K = c.state;
        K.setBlending(0);
        K.buffers.color.setClear(1, 1, 1, 1);
        K.buffers.depth.setTest(!0);
        K.setScissorTest(!1);
        for (var P = 0, V = G.length; P < V; P++) {
          var ia = G[P],
            W = ia.shadow;
          if (!1 !== W.autoUpdate || !1 !== W.needsUpdate)
            if (void 0 === W)
              console.warn("THREE.WebGLShadowMap:", ia, "has no shadow.");
            else {
              k.copy(W.mapSize);
              var aa = W.getFrameExtents();
              k.multiply(aa);
              l.copy(W.mapSize);
              if (k.x > b || k.y > b)
                k.x > b &&
                  ((l.x = Math.floor(b / aa.x)),
                  (k.x = l.x * aa.x),
                  (W.mapSize.x = l.x)),
                  k.y > b &&
                    ((l.y = Math.floor(b / aa.y)),
                    (k.y = l.y * aa.y),
                    (W.mapSize.y = l.y));
              null !== W.map ||
                W.isPointLightShadow ||
                3 !== this.type ||
                ((aa = { minFilter: 1006, magFilter: 1006, format: 1023 }),
                (W.map = new Db(k.x, k.y, aa)),
                (W.map.texture.name = ia.name + ".shadowMap"),
                (W.mapPass = new Db(k.x, k.y, aa)),
                W.camera.updateProjectionMatrix());
              null === W.map &&
                ((W.map = new Db(k.x, k.y, {
                  minFilter: 1003,
                  magFilter: 1003,
                  format: 1023,
                })),
                (W.map.texture.name = ia.name + ".shadowMap"),
                W.camera.updateProjectionMatrix());
              c.setRenderTarget(W.map);
              c.clear();
              aa = W.getViewportCount();
              for (var Z = 0; Z < aa; Z++) {
                var ja = W.getViewport(Z);
                m.set(l.x * ja.x, l.y * ja.y, l.x * ja.z, l.y * ja.w);
                K.viewport(m);
                W.updateMatrices(ia, Z);
                h = W.getFrustum();
                g(I, E, W.camera, ia, this.type);
              }
              W.isPointLightShadow ||
                3 !== this.type ||
                ((ia = W),
                (aa = E),
                (Z = a.update(B)),
                (v.uniforms.shadow_pass.value = ia.map.texture),
                (v.uniforms.resolution.value = ia.mapSize),
                (v.uniforms.radius.value = ia.radius),
                c.setRenderTarget(ia.mapPass),
                c.clear(),
                c.renderBufferDirect(aa, null, Z, v, B, null),
                (u.uniforms.shadow_pass.value = ia.mapPass.texture),
                (u.uniforms.resolution.value = ia.mapSize),
                (u.uniforms.radius.value = ia.radius),
                c.setRenderTarget(ia.map),
                c.clear(),
                c.renderBufferDirect(aa, null, Z, u, B, null));
              W.needsUpdate = !1;
            }
        }
        D.needsUpdate = !1;
        c.setRenderTarget(H, M, F);
      }
    };
  }
  function Cl(c, a, b) {
    function d(y, Q, T) {
      var ba = new Uint8Array(4),
        X = c.createTexture();
      c.bindTexture(y, X);
      c.texParameteri(y, 10241, 9728);
      c.texParameteri(y, 10240, 9728);
      for (y = 0; y < T; y++)
        c.texImage2D(Q + y, 0, 6408, 1, 1, 0, 6408, 5121, ba);
      return X;
    }
    function e(y) {
      !0 !== q[y] && (c.enable(y), (q[y] = !0));
    }
    function f(y) {
      !1 !== q[y] && (c.disable(y), (q[y] = !1));
    }
    function g(y, Q, T, ba, X, ta, va, ya) {
      if (0 === y) u && (f(3042), (u = !1));
      else if ((u || (e(3042), (u = !0)), 5 !== y)) {
        if (y !== A || ya !== M) {
          if (100 !== B || 100 !== I) c.blendEquation(32774), (I = B = 100);
          if (ya)
            switch (y) {
              case 1:
                c.blendFuncSeparate(1, 771, 1, 771);
                break;
              case 2:
                c.blendFunc(1, 1);
                break;
              case 3:
                c.blendFuncSeparate(0, 0, 769, 771);
                break;
              case 4:
                c.blendFuncSeparate(0, 768, 0, 770);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", y);
            }
          else
            switch (y) {
              case 1:
                c.blendFuncSeparate(770, 771, 1, 771);
                break;
              case 2:
                c.blendFunc(770, 1);
                break;
              case 3:
                c.blendFunc(0, 769);
                break;
              case 4:
                c.blendFunc(0, 768);
                break;
              default:
                console.error("THREE.WebGLState: Invalid blending: ", y);
            }
          H = E = G = D = null;
          A = y;
          M = ya;
        }
      } else {
        X = X || Q;
        ta = ta || T;
        va = va || ba;
        if (Q !== B || X !== I)
          c.blendEquationSeparate(z[Q], z[X]), (B = Q), (I = X);
        if (T !== D || ba !== G || ta !== E || va !== H)
          c.blendFuncSeparate(C[T], C[ba], C[ta], C[va]),
            (D = T),
            (G = ba),
            (E = ta),
            (H = va);
        A = y;
        M = null;
      }
    }
    function h(y) {
      F !== y && (y ? c.frontFace(2304) : c.frontFace(2305), (F = y));
    }
    function k(y) {
      0 !== y
        ? (e(2884),
          y !== K &&
            (1 === y
              ? c.cullFace(1029)
              : 2 === y
              ? c.cullFace(1028)
              : c.cullFace(1032)))
        : f(2884);
      K = y;
    }
    function l(y, Q, T) {
      if (y) {
        if ((e(32823), V !== Q || ia !== T))
          c.polygonOffset(Q, T), (V = Q), (ia = T);
      } else f(32823);
    }
    function m(y) {
      void 0 === y && (y = 33984 + W - 1);
      ja !== y && (c.activeTexture(y), (ja = y));
    }
    b = b.isWebGL2;
    var n = new (function () {
        var y = !1,
          Q = new ca(),
          T = null,
          ba = new ca(0, 0, 0, 0);
        return {
          setMask: function (X) {
            T === X || y || (c.colorMask(X, X, X, X), (T = X));
          },
          setLocked: function (X) {
            y = X;
          },
          setClear: function (X, ta, va, ya, Pa) {
            !0 === Pa && ((X *= ya), (ta *= ya), (va *= ya));
            Q.set(X, ta, va, ya);
            !1 === ba.equals(Q) && (c.clearColor(X, ta, va, ya), ba.copy(Q));
          },
          reset: function () {
            y = !1;
            T = null;
            ba.set(-1, 0, 0, 0);
          },
        };
      })(),
      p = new (function () {
        var y = !1,
          Q = null,
          T = null,
          ba = null;
        return {
          setTest: function (X) {
            X ? e(2929) : f(2929);
          },
          setMask: function (X) {
            Q === X || y || (c.depthMask(X), (Q = X));
          },
          setFunc: function (X) {
            if (T !== X) {
              if (X)
                switch (X) {
                  case 0:
                    c.depthFunc(512);
                    break;
                  case 1:
                    c.depthFunc(519);
                    break;
                  case 2:
                    c.depthFunc(513);
                    break;
                  case 3:
                    c.depthFunc(515);
                    break;
                  case 4:
                    c.depthFunc(514);
                    break;
                  case 5:
                    c.depthFunc(518);
                    break;
                  case 6:
                    c.depthFunc(516);
                    break;
                  case 7:
                    c.depthFunc(517);
                    break;
                  default:
                    c.depthFunc(515);
                }
              else c.depthFunc(515);
              T = X;
            }
          },
          setLocked: function (X) {
            y = X;
          },
          setClear: function (X) {
            ba !== X && (c.clearDepth(X), (ba = X));
          },
          reset: function () {
            y = !1;
            ba = T = Q = null;
          },
        };
      })(),
      t = new (function () {
        var y = !1,
          Q = null,
          T = null,
          ba = null,
          X = null,
          ta = null,
          va = null,
          ya = null,
          Pa = null;
        return {
          setTest: function (U) {
            y || (U ? e(2960) : f(2960));
          },
          setMask: function (U) {
            Q === U || y || (c.stencilMask(U), (Q = U));
          },
          setFunc: function (U, la, wa) {
            if (T !== U || ba !== la || X !== wa)
              c.stencilFunc(U, la, wa), (T = U), (ba = la), (X = wa);
          },
          setOp: function (U, la, wa) {
            if (ta !== U || va !== la || ya !== wa)
              c.stencilOp(U, la, wa), (ta = U), (va = la), (ya = wa);
          },
          setLocked: function (U) {
            y = U;
          },
          setClear: function (U) {
            Pa !== U && (c.clearStencil(U), (Pa = U));
          },
          reset: function () {
            y = !1;
            Pa = ya = va = ta = X = ba = T = Q = null;
          },
        };
      })(),
      q = {},
      v = null,
      u = null,
      A = null,
      B = null,
      D = null,
      G = null,
      I = null,
      E = null,
      H = null,
      M = !1,
      F = null,
      K = null,
      P = null,
      V = null,
      ia = null,
      W = c.getParameter(35661),
      aa = !1,
      Z = 0;
    Z = c.getParameter(7938);
    -1 !== Z.indexOf("WebGL")
      ? ((Z = parseFloat(/^WebGL ([0-9])/.exec(Z)[1])), (aa = 1 <= Z))
      : -1 !== Z.indexOf("OpenGL ES") &&
        ((Z = parseFloat(/^OpenGL ES ([0-9])/.exec(Z)[1])), (aa = 2 <= Z));
    var ja = null,
      Aa = {},
      Xa = new ca(),
      bb = new ca(),
      fb = {};
    fb[3553] = d(3553, 3553, 1);
    fb[34067] = d(34067, 34069, 6);
    n.setClear(0, 0, 0, 1);
    p.setClear(1);
    t.setClear(0);
    e(2929);
    p.setFunc(3);
    h(!1);
    k(1);
    e(2884);
    g(0);
    var z = { 100: 32774, 101: 32778, 102: 32779 };
    b
      ? ((z[103] = 32775), (z[104] = 32776))
      : ((a = a.get("EXT_blend_minmax")),
        null !== a && ((z[103] = a.MIN_EXT), (z[104] = a.MAX_EXT)));
    var C = {
      200: 0,
      201: 1,
      202: 768,
      204: 770,
      210: 776,
      208: 774,
      206: 772,
      203: 769,
      205: 771,
      209: 775,
      207: 773,
    };
    return {
      buffers: { color: n, depth: p, stencil: t },
      enable: e,
      disable: f,
      useProgram: function (y) {
        return v !== y ? (c.useProgram(y), (v = y), !0) : !1;
      },
      setBlending: g,
      setMaterial: function (y, Q) {
        2 === y.side ? f(2884) : e(2884);
        var T = 1 === y.side;
        Q && (T = !T);
        h(T);
        1 === y.blending && !1 === y.transparent
          ? g(0)
          : g(
              y.blending,
              y.blendEquation,
              y.blendSrc,
              y.blendDst,
              y.blendEquationAlpha,
              y.blendSrcAlpha,
              y.blendDstAlpha,
              y.premultipliedAlpha
            );
        p.setFunc(y.depthFunc);
        p.setTest(y.depthTest);
        p.setMask(y.depthWrite);
        n.setMask(y.colorWrite);
        Q = y.stencilWrite;
        t.setTest(Q);
        Q &&
          (t.setMask(y.stencilWriteMask),
          t.setFunc(y.stencilFunc, y.stencilRef, y.stencilFuncMask),
          t.setOp(y.stencilFail, y.stencilZFail, y.stencilZPass));
        l(y.polygonOffset, y.polygonOffsetFactor, y.polygonOffsetUnits);
      },
      setFlipSided: h,
      setCullFace: k,
      setLineWidth: function (y) {
        y !== P && (aa && c.lineWidth(y), (P = y));
      },
      setPolygonOffset: l,
      setScissorTest: function (y) {
        y ? e(3089) : f(3089);
      },
      activeTexture: m,
      bindTexture: function (y, Q) {
        null === ja && m();
        var T = Aa[ja];
        void 0 === T && ((T = { type: void 0, texture: void 0 }), (Aa[ja] = T));
        if (T.type !== y || T.texture !== Q)
          c.bindTexture(y, Q || fb[y]), (T.type = y), (T.texture = Q);
      },
      unbindTexture: function () {
        var y = Aa[ja];
        void 0 !== y &&
          void 0 !== y.type &&
          (c.bindTexture(y.type, null),
          (y.type = void 0),
          (y.texture = void 0));
      },
      compressedTexImage2D: function () {
        try {
          c.compressedTexImage2D.apply(c, arguments);
        } catch (y) {
          console.error("THREE.WebGLState:", y);
        }
      },
      texImage2D: function () {
        try {
          c.texImage2D.apply(c, arguments);
        } catch (y) {
          console.error("THREE.WebGLState:", y);
        }
      },
      texImage3D: function () {
        try {
          c.texImage3D.apply(c, arguments);
        } catch (y) {
          console.error("THREE.WebGLState:", y);
        }
      },
      scissor: function (y) {
        !1 === Xa.equals(y) && (c.scissor(y.x, y.y, y.z, y.w), Xa.copy(y));
      },
      viewport: function (y) {
        !1 === bb.equals(y) && (c.viewport(y.x, y.y, y.z, y.w), bb.copy(y));
      },
      reset: function () {
        q = {};
        ja = null;
        Aa = {};
        K = F = A = v = null;
        n.reset();
        p.reset();
        t.reset();
      },
    };
  }
  function Dl(c, a, b, d, e, f, g) {
    function h(z, C) {
      return Z
        ? new OffscreenCanvas(z, C)
        : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }
    function k(z, C, y, Q) {
      var T = 1;
      if (z.width > Q || z.height > Q) T = Q / Math.max(z.width, z.height);
      if (1 > T || !0 === C) {
        if (
          ("undefined" !== typeof HTMLImageElement &&
            z instanceof HTMLImageElement) ||
          ("undefined" !== typeof HTMLCanvasElement &&
            z instanceof HTMLCanvasElement) ||
          ("undefined" !== typeof ImageBitmap && z instanceof ImageBitmap)
        )
          return (
            (Q = C ? xa.floorPowerOfTwo : Math.floor),
            (C = Q(T * z.width)),
            (T = Q(T * z.height)),
            void 0 === aa && (aa = h(C, T)),
            (y = y ? h(C, T) : aa),
            (y.width = C),
            (y.height = T),
            y.getContext("2d").drawImage(z, 0, 0, C, T),
            console.warn(
              "THREE.WebGLRenderer: Texture has been resized from (" +
                z.width +
                "x" +
                z.height +
                ") to (" +
                C +
                "x" +
                T +
                ")."
            ),
            y
          );
        "data" in z &&
          console.warn(
            "THREE.WebGLRenderer: Image in DataTexture is too big (" +
              z.width +
              "x" +
              z.height +
              ")."
          );
      }
      return z;
    }
    function l(z) {
      return xa.isPowerOfTwo(z.width) && xa.isPowerOfTwo(z.height);
    }
    function m(z, C) {
      return (
        z.generateMipmaps && C && 1003 !== z.minFilter && 1006 !== z.minFilter
      );
    }
    function n(z, C, y, Q) {
      c.generateMipmap(z);
      d.get(C).__maxMipLevel = Math.log(Math.max(y, Q)) * Math.LOG2E;
    }
    function p(z, C, y) {
      if (!1 === F) return C;
      if (null !== z) {
        if (void 0 !== c[z]) return c[z];
        console.warn(
          "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
            z +
            "'"
        );
      }
      z = C;
      6403 === C &&
        (5126 === y && (z = 33326),
        5131 === y && (z = 33325),
        5121 === y && (z = 33321));
      6407 === C &&
        (5126 === y && (z = 34837),
        5131 === y && (z = 34843),
        5121 === y && (z = 32849));
      6408 === C &&
        (5126 === y && (z = 34836),
        5131 === y && (z = 34842),
        5121 === y && (z = 32856));
      (33325 !== z && 33326 !== z && 34842 !== z && 34836 !== z) ||
        a.get("EXT_color_buffer_float");
      return z;
    }
    function t(z) {
      return 1003 === z || 1004 === z || 1005 === z ? 9728 : 9729;
    }
    function q(z) {
      z = z.target;
      z.removeEventListener("dispose", q);
      var C = d.get(z);
      void 0 !== C.__webglInit &&
        (c.deleteTexture(C.__webglTexture), d.remove(z));
      z.isVideoTexture && W.delete(z);
      g.memory.textures--;
    }
    function v(z) {
      z = z.target;
      z.removeEventListener("dispose", v);
      var C = d.get(z),
        y = d.get(z.texture);
      if (z) {
        void 0 !== y.__webglTexture && c.deleteTexture(y.__webglTexture);
        z.depthTexture && z.depthTexture.dispose();
        if (z.isWebGLCubeRenderTarget)
          for (y = 0; 6 > y; y++)
            c.deleteFramebuffer(C.__webglFramebuffer[y]),
              C.__webglDepthbuffer &&
                c.deleteRenderbuffer(C.__webglDepthbuffer[y]);
        else
          c.deleteFramebuffer(C.__webglFramebuffer),
            C.__webglDepthbuffer && c.deleteRenderbuffer(C.__webglDepthbuffer),
            C.__webglMultisampledFramebuffer &&
              c.deleteFramebuffer(C.__webglMultisampledFramebuffer),
            C.__webglColorRenderbuffer &&
              c.deleteRenderbuffer(C.__webglColorRenderbuffer),
            C.__webglDepthRenderbuffer &&
              c.deleteRenderbuffer(C.__webglDepthRenderbuffer);
        d.remove(z.texture);
        d.remove(z);
      }
      g.memory.textures--;
    }
    function u(z, C) {
      var y = d.get(z);
      if (z.isVideoTexture) {
        var Q = g.render.frame;
        W.get(z) !== Q && (W.set(z, Q), z.update());
      }
      if (0 < z.version && y.__version !== z.version)
        if (((Q = z.image), void 0 === Q))
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is undefined"
          );
        else if (!1 === Q.complete)
          console.warn(
            "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
          );
        else {
          I(y, z, C);
          return;
        }
      b.activeTexture(33984 + C);
      b.bindTexture(3553, y.__webglTexture);
    }
    function A(z, C) {
      if (6 === z.image.length) {
        var y = d.get(z);
        if (0 < z.version && y.__version !== z.version) {
          G(y, z);
          b.activeTexture(33984 + C);
          b.bindTexture(34067, y.__webglTexture);
          c.pixelStorei(37440, z.flipY);
          var Q =
              z && (z.isCompressedTexture || z.image[0].isCompressedTexture),
            T = z.image[0] && z.image[0].isDataTexture;
          C = [];
          for (var ba = 0; 6 > ba; ba++)
            C[ba] =
              Q || T
                ? T
                  ? z.image[ba].image
                  : z.image[ba]
                : k(z.image[ba], !1, !0, P);
          ba = C[0];
          var X = l(ba) || F,
            ta = f.convert(z.format),
            va = f.convert(z.type),
            ya = p(z.internalFormat, ta, va);
          D(34067, z, X);
          if (Q) {
            for (T = 0; 6 > T; T++) {
              var Pa = C[T].mipmaps;
              for (Q = 0; Q < Pa.length; Q++) {
                var U = Pa[Q];
                1023 !== z.format && 1022 !== z.format
                  ? null !== ta
                    ? b.compressedTexImage2D(
                        34069 + T,
                        Q,
                        ya,
                        U.width,
                        U.height,
                        0,
                        U.data
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                      )
                  : b.texImage2D(
                      34069 + T,
                      Q,
                      ya,
                      U.width,
                      U.height,
                      0,
                      ta,
                      va,
                      U.data
                    );
              }
            }
            y.__maxMipLevel = Pa.length - 1;
          } else {
            Pa = z.mipmaps;
            for (Q = 0; 6 > Q; Q++)
              if (T)
                for (
                  b.texImage2D(
                    34069 + Q,
                    0,
                    ya,
                    C[Q].width,
                    C[Q].height,
                    0,
                    ta,
                    va,
                    C[Q].data
                  ),
                    U = 0;
                  U < Pa.length;
                  U++
                ) {
                  var la = Pa[U].image[Q].image;
                  b.texImage2D(
                    34069 + Q,
                    U + 1,
                    ya,
                    la.width,
                    la.height,
                    0,
                    ta,
                    va,
                    la.data
                  );
                }
              else
                for (
                  b.texImage2D(34069 + Q, 0, ya, ta, va, C[Q]), U = 0;
                  U < Pa.length;
                  U++
                )
                  b.texImage2D(34069 + Q, U + 1, ya, ta, va, Pa[U].image[Q]);
            y.__maxMipLevel = Pa.length;
          }
          m(z, X) && n(34067, z, ba.width, ba.height);
          y.__version = z.version;
          if (z.onUpdate) z.onUpdate(z);
        } else
          b.activeTexture(33984 + C), b.bindTexture(34067, y.__webglTexture);
      }
    }
    function B(z, C) {
      b.activeTexture(33984 + C);
      b.bindTexture(34067, d.get(z).__webglTexture);
    }
    function D(z, C, y) {
      y
        ? (c.texParameteri(z, 10242, Aa[C.wrapS]),
          c.texParameteri(z, 10243, Aa[C.wrapT]),
          (32879 !== z && 35866 !== z) ||
            c.texParameteri(z, 32882, Aa[C.wrapR]),
          c.texParameteri(z, 10240, Xa[C.magFilter]),
          c.texParameteri(z, 10241, Xa[C.minFilter]))
        : (c.texParameteri(z, 10242, 33071),
          c.texParameteri(z, 10243, 33071),
          (32879 !== z && 35866 !== z) || c.texParameteri(z, 32882, 33071),
          (1001 === C.wrapS && 1001 === C.wrapT) ||
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          c.texParameteri(z, 10240, t(C.magFilter)),
          c.texParameteri(z, 10241, t(C.minFilter)),
          1003 !== C.minFilter &&
            1006 !== C.minFilter &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            ));
      !(y = a.get("EXT_texture_filter_anisotropic")) ||
        (1015 === C.type && null === a.get("OES_texture_float_linear")) ||
        (1016 === C.type &&
          null === (F || a.get("OES_texture_half_float_linear"))) ||
        !(1 < C.anisotropy || d.get(C).__currentAnisotropy) ||
        (c.texParameterf(
          z,
          y.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(C.anisotropy, e.getMaxAnisotropy())
        ),
        (d.get(C).__currentAnisotropy = C.anisotropy));
    }
    function G(z, C) {
      void 0 === z.__webglInit &&
        ((z.__webglInit = !0),
        C.addEventListener("dispose", q),
        (z.__webglTexture = c.createTexture()),
        g.memory.textures++);
    }
    function I(z, C, y) {
      var Q = 3553;
      C.isDataTexture2DArray && (Q = 35866);
      C.isDataTexture3D && (Q = 32879);
      G(z, C);
      b.activeTexture(33984 + y);
      b.bindTexture(Q, z.__webglTexture);
      c.pixelStorei(37440, C.flipY);
      c.pixelStorei(37441, C.premultiplyAlpha);
      c.pixelStorei(3317, C.unpackAlignment);
      y = F
        ? !1
        : 1001 !== C.wrapS ||
          1001 !== C.wrapT ||
          (1003 !== C.minFilter && 1006 !== C.minFilter);
      y = y && !1 === l(C.image);
      y = k(C.image, y, !1, V);
      var T = l(y) || F,
        ba = f.convert(C.format),
        X = f.convert(C.type),
        ta = p(C.internalFormat, ba, X);
      D(Q, C, T);
      var va = C.mipmaps;
      if (C.isDepthTexture)
        (ta = 6402),
          F
            ? (ta =
                1015 === C.type
                  ? 36012
                  : 1014 === C.type
                  ? 33190
                  : 1020 === C.type
                  ? 35056
                  : 33189)
            : 1015 === C.type &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          1026 === C.format &&
            6402 === ta &&
            1012 !== C.type &&
            1014 !== C.type &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (C.type = 1012),
            (X = f.convert(C.type))),
          1027 === C.format &&
            6402 === ta &&
            ((ta = 34041),
            1020 !== C.type &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (C.type = 1020),
              (X = f.convert(C.type)))),
          b.texImage2D(3553, 0, ta, y.width, y.height, 0, ba, X, null);
      else if (C.isDataTexture)
        if (0 < va.length && T) {
          for (var ya = 0, Pa = va.length; ya < Pa; ya++) {
            var U = va[ya];
            b.texImage2D(3553, ya, ta, U.width, U.height, 0, ba, X, U.data);
          }
          C.generateMipmaps = !1;
          z.__maxMipLevel = va.length - 1;
        } else
          b.texImage2D(3553, 0, ta, y.width, y.height, 0, ba, X, y.data),
            (z.__maxMipLevel = 0);
      else if (C.isCompressedTexture) {
        ya = 0;
        for (Pa = va.length; ya < Pa; ya++)
          (U = va[ya]),
            1023 !== C.format && 1022 !== C.format
              ? null !== ba
                ? b.compressedTexImage2D(
                    3553,
                    ya,
                    ta,
                    U.width,
                    U.height,
                    0,
                    U.data
                  )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : b.texImage2D(3553, ya, ta, U.width, U.height, 0, ba, X, U.data);
        z.__maxMipLevel = va.length - 1;
      } else if (C.isDataTexture2DArray)
        b.texImage3D(
          35866,
          0,
          ta,
          y.width,
          y.height,
          y.depth,
          0,
          ba,
          X,
          y.data
        ),
          (z.__maxMipLevel = 0);
      else if (C.isDataTexture3D)
        b.texImage3D(
          32879,
          0,
          ta,
          y.width,
          y.height,
          y.depth,
          0,
          ba,
          X,
          y.data
        ),
          (z.__maxMipLevel = 0);
      else if (0 < va.length && T) {
        ya = 0;
        for (Pa = va.length; ya < Pa; ya++)
          (U = va[ya]), b.texImage2D(3553, ya, ta, ba, X, U);
        C.generateMipmaps = !1;
        z.__maxMipLevel = va.length - 1;
      } else b.texImage2D(3553, 0, ta, ba, X, y), (z.__maxMipLevel = 0);
      m(C, T) && n(Q, C, y.width, y.height);
      z.__version = C.version;
      if (C.onUpdate) C.onUpdate(C);
    }
    function E(z, C, y, Q) {
      var T = f.convert(C.texture.format),
        ba = f.convert(C.texture.type),
        X = p(C.texture.internalFormat, T, ba);
      b.texImage2D(Q, 0, X, C.width, C.height, 0, T, ba, null);
      c.bindFramebuffer(36160, z);
      c.framebufferTexture2D(36160, y, Q, d.get(C.texture).__webglTexture, 0);
      c.bindFramebuffer(36160, null);
    }
    function H(z, C, y) {
      c.bindRenderbuffer(36161, z);
      if (C.depthBuffer && !C.stencilBuffer) {
        var Q = 33189;
        y
          ? ((y = C.depthTexture) &&
              y.isDepthTexture &&
              (1015 === y.type ? (Q = 36012) : 1014 === y.type && (Q = 33190)),
            (y = M(C)),
            c.renderbufferStorageMultisample(36161, y, Q, C.width, C.height))
          : c.renderbufferStorage(36161, Q, C.width, C.height);
        c.framebufferRenderbuffer(36160, 36096, 36161, z);
      } else C.depthBuffer && C.stencilBuffer ? (y ? ((y = M(C)), c.renderbufferStorageMultisample(36161, y, 35056, C.width, C.height)) : c.renderbufferStorage(36161, 34041, C.width, C.height), c.framebufferRenderbuffer(36160, 33306, 36161, z)) : ((z = f.convert(C.texture.format)), (Q = f.convert(C.texture.type)), (z = p(C.texture.internalFormat, z, Q)), y ? ((y = M(C)), c.renderbufferStorageMultisample(36161, y, z, C.width, C.height)) : c.renderbufferStorage(36161, z, C.width, C.height));
      c.bindRenderbuffer(36161, null);
    }
    function M(z) {
      return F && z.isWebGLMultisampleRenderTarget
        ? Math.min(ia, z.samples)
        : 0;
    }
    var F = e.isWebGL2,
      K = e.maxTextures,
      P = e.maxCubemapSize,
      V = e.maxTextureSize,
      ia = e.maxSamples,
      W = new WeakMap(),
      aa,
      Z = !1;
    try {
      Z =
        "undefined" !== typeof OffscreenCanvas &&
        null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (z) {}
    var ja = 0,
      Aa = { 1e3: 10497, 1001: 33071, 1002: 33648 },
      Xa = {
        1003: 9728,
        1004: 9984,
        1005: 9986,
        1006: 9729,
        1007: 9985,
        1008: 9987,
      },
      bb = !1,
      fb = !1;
    this.allocateTextureUnit = function () {
      var z = ja;
      z >= K &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            z +
            " texture units while this GPU supports only " +
            K
        );
      ja += 1;
      return z;
    };
    this.resetTextureUnits = function () {
      ja = 0;
    };
    this.setTexture2D = u;
    this.setTexture2DArray = function (z, C) {
      var y = d.get(z);
      0 < z.version && y.__version !== z.version
        ? I(y, z, C)
        : (b.activeTexture(33984 + C), b.bindTexture(35866, y.__webglTexture));
    };
    this.setTexture3D = function (z, C) {
      var y = d.get(z);
      0 < z.version && y.__version !== z.version
        ? I(y, z, C)
        : (b.activeTexture(33984 + C), b.bindTexture(32879, y.__webglTexture));
    };
    this.setTextureCube = A;
    this.setTextureCubeDynamic = B;
    this.setupRenderTarget = function (z) {
      var C = d.get(z),
        y = d.get(z.texture);
      z.addEventListener("dispose", v);
      y.__webglTexture = c.createTexture();
      g.memory.textures++;
      var Q = !0 === z.isWebGLCubeRenderTarget,
        T = !0 === z.isWebGLMultisampleRenderTarget,
        ba = l(z) || F;
      !F ||
        1022 !== z.texture.format ||
        (1015 !== z.texture.type && 1016 !== z.texture.type) ||
        ((z.texture.format = 1023),
        console.warn(
          "THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead."
        ));
      if (Q)
        for (C.__webglFramebuffer = [], T = 0; 6 > T; T++)
          C.__webglFramebuffer[T] = c.createFramebuffer();
      else if (((C.__webglFramebuffer = c.createFramebuffer()), T))
        if (F) {
          C.__webglMultisampledFramebuffer = c.createFramebuffer();
          C.__webglColorRenderbuffer = c.createRenderbuffer();
          c.bindRenderbuffer(36161, C.__webglColorRenderbuffer);
          T = f.convert(z.texture.format);
          var X = f.convert(z.texture.type);
          T = p(z.texture.internalFormat, T, X);
          X = M(z);
          c.renderbufferStorageMultisample(36161, X, T, z.width, z.height);
          c.bindFramebuffer(36160, C.__webglMultisampledFramebuffer);
          c.framebufferRenderbuffer(
            36160,
            36064,
            36161,
            C.__webglColorRenderbuffer
          );
          c.bindRenderbuffer(36161, null);
          z.depthBuffer &&
            ((C.__webglDepthRenderbuffer = c.createRenderbuffer()),
            H(C.__webglDepthRenderbuffer, z, !0));
          c.bindFramebuffer(36160, null);
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
          );
      if (Q) {
        b.bindTexture(34067, y.__webglTexture);
        D(34067, z.texture, ba);
        for (y = 0; 6 > y; y++) E(C.__webglFramebuffer[y], z, 36064, 34069 + y);
        m(z.texture, ba) && n(34067, z.texture, z.width, z.height);
        b.bindTexture(34067, null);
      } else
        b.bindTexture(3553, y.__webglTexture),
          D(3553, z.texture, ba),
          E(C.__webglFramebuffer, z, 36064, 3553),
          m(z.texture, ba) && n(3553, z.texture, z.width, z.height),
          b.bindTexture(3553, null);
      if (z.depthBuffer) {
        C = d.get(z);
        ba = !0 === z.isWebGLCubeRenderTarget;
        if (z.depthTexture) {
          if (ba)
            throw Error(
              "target.depthTexture not supported in Cube render targets"
            );
          if (z && z.isWebGLCubeRenderTarget)
            throw Error(
              "Depth Texture with cube render targets is not supported"
            );
          c.bindFramebuffer(36160, C.__webglFramebuffer);
          if (!z.depthTexture || !z.depthTexture.isDepthTexture)
            throw Error(
              "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
            );
          (d.get(z.depthTexture).__webglTexture &&
            z.depthTexture.image.width === z.width &&
            z.depthTexture.image.height === z.height) ||
            ((z.depthTexture.image.width = z.width),
            (z.depthTexture.image.height = z.height),
            (z.depthTexture.needsUpdate = !0));
          u(z.depthTexture, 0);
          C = d.get(z.depthTexture).__webglTexture;
          if (1026 === z.depthTexture.format)
            c.framebufferTexture2D(36160, 36096, 3553, C, 0);
          else if (1027 === z.depthTexture.format)
            c.framebufferTexture2D(36160, 33306, 3553, C, 0);
          else throw Error("Unknown depthTexture format");
        } else if (ba)
          for (C.__webglDepthbuffer = [], ba = 0; 6 > ba; ba++)
            c.bindFramebuffer(36160, C.__webglFramebuffer[ba]),
              (C.__webglDepthbuffer[ba] = c.createRenderbuffer()),
              H(C.__webglDepthbuffer[ba], z, !1);
        else
          c.bindFramebuffer(36160, C.__webglFramebuffer),
            (C.__webglDepthbuffer = c.createRenderbuffer()),
            H(C.__webglDepthbuffer, z, !1);
        c.bindFramebuffer(36160, null);
      }
    };
    this.updateRenderTargetMipmap = function (z) {
      var C = z.texture,
        y = l(z) || F;
      if (m(C, y)) {
        y = z.isWebGLCubeRenderTarget ? 34067 : 3553;
        var Q = d.get(C).__webglTexture;
        b.bindTexture(y, Q);
        n(y, C, z.width, z.height);
        b.bindTexture(y, null);
      }
    };
    this.updateMultisampleRenderTarget = function (z) {
      if (z.isWebGLMultisampleRenderTarget)
        if (F) {
          var C = d.get(z);
          c.bindFramebuffer(36008, C.__webglMultisampledFramebuffer);
          c.bindFramebuffer(36009, C.__webglFramebuffer);
          var y = z.width,
            Q = z.height,
            T = 16384;
          z.depthBuffer && (T |= 256);
          z.stencilBuffer && (T |= 1024);
          c.blitFramebuffer(0, 0, y, Q, 0, 0, y, Q, T, 9728);
          c.bindFramebuffer(36160, C.__webglMultisampledFramebuffer);
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2."
          );
    };
    this.safeSetTexture2D = function (z, C) {
      z &&
        z.isWebGLRenderTarget &&
        (!1 === bb &&
          (console.warn(
            "THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
          ),
          (bb = !0)),
        (z = z.texture));
      u(z, C);
    };
    this.safeSetTextureCube = function (z, C) {
      z &&
        z.isWebGLCubeRenderTarget &&
        (!1 === fb &&
          (console.warn(
            "THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
          ),
          (fb = !0)),
        (z = z.texture));
      (z && z.isCubeTexture) || (Array.isArray(z.image) && 6 === z.image.length)
        ? A(z, C)
        : B(z, C);
    };
  }
  function Vi(c, a, b) {
    var d = b.isWebGL2;
    return {
      convert: function (e) {
        if (1009 === e) return 5121;
        if (1017 === e) return 32819;
        if (1018 === e) return 32820;
        if (1019 === e) return 33635;
        if (1010 === e) return 5120;
        if (1011 === e) return 5122;
        if (1012 === e) return 5123;
        if (1013 === e) return 5124;
        if (1014 === e) return 5125;
        if (1015 === e) return 5126;
        if (1016 === e) {
          if (d) return 5131;
          var f = a.get("OES_texture_half_float");
          return null !== f ? f.HALF_FLOAT_OES : null;
        }
        if (1021 === e) return 6406;
        if (1022 === e) return 6407;
        if (1023 === e) return 6408;
        if (1024 === e) return 6409;
        if (1025 === e) return 6410;
        if (1026 === e) return 6402;
        if (1027 === e) return 34041;
        if (1028 === e) return 6403;
        if (1029 === e) return 36244;
        if (1030 === e) return 33319;
        if (1031 === e) return 33320;
        if (1032 === e) return 36248;
        if (1033 === e) return 36249;
        if (33776 === e || 33777 === e || 33778 === e || 33779 === e)
          if (((f = a.get("WEBGL_compressed_texture_s3tc")), null !== f)) {
            if (33776 === e) return f.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (33777 === e) return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (33778 === e) return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (33779 === e) return f.COMPRESSED_RGBA_S3TC_DXT5_EXT;
          } else return null;
        if (35840 === e || 35841 === e || 35842 === e || 35843 === e)
          if (((f = a.get("WEBGL_compressed_texture_pvrtc")), null !== f)) {
            if (35840 === e) return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (35841 === e) return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (35842 === e) return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (35843 === e) return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
          } else return null;
        if (36196 === e)
          return (
            (f = a.get("WEBGL_compressed_texture_etc1")),
            null !== f ? f.COMPRESSED_RGB_ETC1_WEBGL : null
          );
        if (37492 === e || 37496 === e)
          if (((f = a.get("WEBGL_compressed_texture_etc")), null !== f)) {
            if (37492 === e) return f.COMPRESSED_RGB8_ETC2;
            if (37496 === e) return f.COMPRESSED_RGBA8_ETC2_EAC;
          }
        if (
          37808 === e ||
          37809 === e ||
          37810 === e ||
          37811 === e ||
          37812 === e ||
          37813 === e ||
          37814 === e ||
          37815 === e ||
          37816 === e ||
          37817 === e ||
          37818 === e ||
          37819 === e ||
          37820 === e ||
          37821 === e ||
          37840 === e ||
          37841 === e ||
          37842 === e ||
          37843 === e ||
          37844 === e ||
          37845 === e ||
          37846 === e ||
          37847 === e ||
          37848 === e ||
          37849 === e ||
          37850 === e ||
          37851 === e ||
          37852 === e ||
          37853 === e
        )
          return (
            (f = a.get("WEBGL_compressed_texture_astc")), null !== f ? e : null
          );
        if (36492 === e)
          return (
            (f = a.get("EXT_texture_compression_bptc")), null !== f ? e : null
          );
        if (1020 === e) {
          if (d) return 34042;
          f = a.get("WEBGL_depth_texture");
          return null !== f ? f.UNSIGNED_INT_24_8_WEBGL : null;
        }
      },
    };
  }
  function Tf(c) {
    eb.call(this);
    this.cameras = c || [];
  }
  function Gc() {
    ha.call(this);
    this.type = "Group";
  }
  function Me() {
    this._hand = this._grip = this._targetRay = null;
  }
  function Wi(c, a) {
    function b(F) {
      var K = q.get(F.inputSource);
      K && K.dispatchEvent({ type: F.type });
    }
    function d() {
      q.forEach(function (F, K) {
        F.disconnect(K);
      });
      q.clear();
      c.setFramebuffer(null);
      c.setRenderTarget(c.getRenderTarget());
      M.stop();
      h.isPresenting = !1;
      h.dispatchEvent({ type: "sessionend" });
    }
    function e(F) {
      m = F;
      M.setContext(k);
      M.start();
      h.isPresenting = !0;
      h.dispatchEvent({ type: "sessionstart" });
    }
    function f(F) {
      for (var K = k.inputSources, P = 0; P < t.length; P++) q.set(K[P], t[P]);
      for (K = 0; K < F.removed.length; K++) {
        P = F.removed[K];
        var V = q.get(P);
        V && (V.dispatchEvent({ type: "disconnected", data: P }), q.delete(P));
      }
      for (K = 0; K < F.added.length; K++)
        (P = F.added[K]),
          (V = q.get(P)) && V.dispatchEvent({ type: "connected", data: P });
    }
    function g(F, K) {
      null === K
        ? F.matrixWorld.copy(F.matrix)
        : F.matrixWorld.multiplyMatrices(K.matrixWorld, F.matrix);
      F.matrixWorldInverse.getInverse(F.matrixWorld);
    }
    var h = this,
      k = null,
      l = 1,
      m = null,
      n = "local-floor",
      p = null,
      t = [],
      q = new Map(),
      v = new eb();
    v.layers.enable(1);
    v.viewport = new ca();
    var u = new eb();
    u.layers.enable(2);
    u.viewport = new ca();
    var A = [v, u],
      B = new Tf();
    B.layers.enable(1);
    B.layers.enable(2);
    var D = null,
      G = null;
    this.isPresenting = this.enabled = !1;
    this.getController = function (F) {
      var K = t[F];
      void 0 === K && ((K = new Me()), (t[F] = K));
      return K.getTargetRaySpace();
    };
    this.getControllerGrip = function (F) {
      var K = t[F];
      void 0 === K && ((K = new Me()), (t[F] = K));
      return K.getGripSpace();
    };
    this.getHand = function (F) {
      var K = t[F];
      void 0 === K && ((K = new Me()), (t[F] = K));
      return K.getHandSpace();
    };
    this.setFramebufferScaleFactor = function (F) {
      l = F;
      !0 === h.isPresenting &&
        console.warn(
          "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
        );
    };
    this.setReferenceSpaceType = function (F) {
      n = F;
      !0 === h.isPresenting &&
        console.warn(
          "THREE.WebXRManager: Cannot change reference space type while presenting."
        );
    };
    this.getReferenceSpace = function () {
      return m;
    };
    this.getSession = function () {
      return k;
    };
    this.setSession = function (F) {
      k = F;
      null !== k &&
        (k.addEventListener("select", b),
        k.addEventListener("selectstart", b),
        k.addEventListener("selectend", b),
        k.addEventListener("squeeze", b),
        k.addEventListener("squeezestart", b),
        k.addEventListener("squeezeend", b),
        k.addEventListener("end", d),
        (F = a.getContextAttributes()),
        !0 !== F.xrCompatible && a.makeXRCompatible(),
        (F = new XRWebGLLayer(k, a, {
          antialias: F.antialias,
          alpha: F.alpha,
          depth: F.depth,
          stencil: F.stencil,
          framebufferScaleFactor: l,
        })),
        k.updateRenderState({ baseLayer: F }),
        k.requestReferenceSpace(n).then(e),
        k.addEventListener("inputsourceschange", f));
    };
    var I = new w(),
      E = new w();
    this.getCamera = function (F) {
      B.near = u.near = v.near = F.near;
      B.far = u.far = v.far = F.far;
      if (D !== B.near || G !== B.far)
        k.updateRenderState({ depthNear: B.near, depthFar: B.far }),
          (D = B.near),
          (G = B.far);
      var K = F.parent,
        P = B.cameras;
      g(B, K);
      for (var V = 0; V < P.length; V++) g(P[V], K);
      F.matrixWorld.copy(B.matrixWorld);
      F = F.children;
      K = 0;
      for (V = F.length; K < V; K++) F[K].updateMatrixWorld(!0);
      if (2 === P.length) {
        I.setFromMatrixPosition(v.matrixWorld);
        E.setFromMatrixPosition(u.matrixWorld);
        P = I.distanceTo(E);
        var ia = v.projectionMatrix.elements,
          W = u.projectionMatrix.elements,
          aa = ia[14] / (ia[10] - 1);
        F = ia[14] / (ia[10] + 1);
        K = (ia[9] + 1) / ia[5];
        V = (ia[9] - 1) / ia[5];
        var Z = (ia[8] - 1) / ia[0],
          ja = (W[8] + 1) / W[0];
        W = aa * Z;
        ia = aa * ja;
        ja = P / (-Z + ja);
        Z = ja * -Z;
        v.matrixWorld.decompose(B.position, B.quaternion, B.scale);
        B.translateX(Z);
        B.translateZ(ja);
        B.matrixWorld.compose(B.position, B.quaternion, B.scale);
        B.matrixWorldInverse.getInverse(B.matrixWorld);
        aa += ja;
        ja = F + ja;
        B.projectionMatrix.makePerspective(
          W - Z,
          ia + (P - Z),
          ((K * F) / ja) * aa,
          ((V * F) / ja) * aa,
          aa,
          ja
        );
      } else B.projectionMatrix.copy(v.projectionMatrix);
      return B;
    };
    var H = null,
      M = new xi();
    M.setAnimationLoop(function (F, K) {
      p = K.getViewerPose(m);
      if (null !== p) {
        var P = p.views,
          V = k.renderState.baseLayer;
        c.setFramebuffer(V.framebuffer);
        var ia = !1;
        P.length !== B.cameras.length && ((B.cameras.length = 0), (ia = !0));
        for (var W = 0; W < P.length; W++) {
          var aa = P[W],
            Z = V.getViewport(aa),
            ja = A[W];
          ja.matrix.fromArray(aa.transform.matrix);
          ja.projectionMatrix.fromArray(aa.projectionMatrix);
          ja.viewport.set(Z.x, Z.y, Z.width, Z.height);
          0 === W && B.matrix.copy(ja.matrix);
          !0 === ia && B.cameras.push(ja);
        }
      }
      P = k.inputSources;
      for (V = 0; V < t.length; V++) t[V].update(P[V], K, m);
      H && H(F, K);
    });
    this.setAnimationLoop = function (F) {
      H = F;
    };
    this.dispose = function () {};
  }
  function El(c) {
    function a(d, e) {
      d.opacity.value = e.opacity;
      e.color && d.diffuse.value.copy(e.color);
      e.emissive &&
        d.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity);
      e.map && (d.map.value = e.map);
      e.alphaMap && (d.alphaMap.value = e.alphaMap);
      e.specularMap && (d.specularMap.value = e.specularMap);
      var f = c.get(e).envMap;
      f &&
        ((d.envMap.value = f),
        (d.flipEnvMap.value = f.isCubeTexture ? -1 : 1),
        (d.reflectivity.value = e.reflectivity),
        (d.refractionRatio.value = e.refractionRatio),
        (f = c.get(f).__maxMipLevel),
        void 0 !== f && (d.maxMipLevel.value = f));
      e.lightMap &&
        ((d.lightMap.value = e.lightMap),
        (d.lightMapIntensity.value = e.lightMapIntensity));
      e.aoMap &&
        ((d.aoMap.value = e.aoMap),
        (d.aoMapIntensity.value = e.aoMapIntensity));
      if (e.map) var g = e.map;
      else
        e.specularMap
          ? (g = e.specularMap)
          : e.displacementMap
          ? (g = e.displacementMap)
          : e.normalMap
          ? (g = e.normalMap)
          : e.bumpMap
          ? (g = e.bumpMap)
          : e.roughnessMap
          ? (g = e.roughnessMap)
          : e.metalnessMap
          ? (g = e.metalnessMap)
          : e.alphaMap
          ? (g = e.alphaMap)
          : e.emissiveMap
          ? (g = e.emissiveMap)
          : e.clearcoatMap
          ? (g = e.clearcoatMap)
          : e.clearcoatNormalMap
          ? (g = e.clearcoatNormalMap)
          : e.clearcoatRoughnessMap && (g = e.clearcoatRoughnessMap);
      void 0 !== g &&
        (g.isWebGLRenderTarget && (g = g.texture),
        !0 === g.matrixAutoUpdate && g.updateMatrix(),
        d.uvTransform.value.copy(g.matrix));
      if (e.aoMap) var h = e.aoMap;
      else e.lightMap && (h = e.lightMap);
      void 0 !== h &&
        (h.isWebGLRenderTarget && (h = h.texture),
        !0 === h.matrixAutoUpdate && h.updateMatrix(),
        d.uv2Transform.value.copy(h.matrix));
    }
    function b(d, e) {
      d.roughness.value = e.roughness;
      d.metalness.value = e.metalness;
      e.roughnessMap && (d.roughnessMap.value = e.roughnessMap);
      e.metalnessMap && (d.metalnessMap.value = e.metalnessMap);
      e.emissiveMap && (d.emissiveMap.value = e.emissiveMap);
      e.bumpMap &&
        ((d.bumpMap.value = e.bumpMap),
        (d.bumpScale.value = e.bumpScale),
        1 === e.side && (d.bumpScale.value *= -1));
      e.normalMap &&
        ((d.normalMap.value = e.normalMap),
        d.normalScale.value.copy(e.normalScale),
        1 === e.side && d.normalScale.value.negate());
      e.displacementMap &&
        ((d.displacementMap.value = e.displacementMap),
        (d.displacementScale.value = e.displacementScale),
        (d.displacementBias.value = e.displacementBias));
      c.get(e).envMap && (d.envMapIntensity.value = e.envMapIntensity);
    }
    return {
      refreshFogUniforms: function (d, e) {
        d.fogColor.value.copy(e.color);
        e.isFog
          ? ((d.fogNear.value = e.near), (d.fogFar.value = e.far))
          : e.isFogExp2 && (d.fogDensity.value = e.density);
      },
      refreshMaterialUniforms: function (d, e, f, g) {
        if (e.isMeshBasicMaterial) a(d, e);
        else if (e.isMeshLambertMaterial)
          a(d, e), e.emissiveMap && (d.emissiveMap.value = e.emissiveMap);
        else if (e.isMeshToonMaterial)
          a(d, e),
            e.gradientMap && (d.gradientMap.value = e.gradientMap),
            e.emissiveMap && (d.emissiveMap.value = e.emissiveMap),
            e.bumpMap &&
              ((d.bumpMap.value = e.bumpMap),
              (d.bumpScale.value = e.bumpScale),
              1 === e.side && (d.bumpScale.value *= -1)),
            e.normalMap &&
              ((d.normalMap.value = e.normalMap),
              d.normalScale.value.copy(e.normalScale),
              1 === e.side && d.normalScale.value.negate()),
            e.displacementMap &&
              ((d.displacementMap.value = e.displacementMap),
              (d.displacementScale.value = e.displacementScale),
              (d.displacementBias.value = e.displacementBias));
        else if (e.isMeshPhongMaterial)
          a(d, e),
            d.specular.value.copy(e.specular),
            (d.shininess.value = Math.max(e.shininess, 1e-4)),
            e.emissiveMap && (d.emissiveMap.value = e.emissiveMap),
            e.bumpMap &&
              ((d.bumpMap.value = e.bumpMap),
              (d.bumpScale.value = e.bumpScale),
              1 === e.side && (d.bumpScale.value *= -1)),
            e.normalMap &&
              ((d.normalMap.value = e.normalMap),
              d.normalScale.value.copy(e.normalScale),
              1 === e.side && d.normalScale.value.negate()),
            e.displacementMap &&
              ((d.displacementMap.value = e.displacementMap),
              (d.displacementScale.value = e.displacementScale),
              (d.displacementBias.value = e.displacementBias));
        else if (e.isMeshStandardMaterial)
          a(d, e),
            e.isMeshPhysicalMaterial
              ? (b(d, e),
                (d.reflectivity.value = e.reflectivity),
                (d.clearcoat.value = e.clearcoat),
                (d.clearcoatRoughness.value = e.clearcoatRoughness),
                e.sheen && d.sheen.value.copy(e.sheen),
                e.clearcoatMap && (d.clearcoatMap.value = e.clearcoatMap),
                e.clearcoatRoughnessMap &&
                  (d.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap),
                e.clearcoatNormalMap &&
                  (d.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                  (d.clearcoatNormalMap.value = e.clearcoatNormalMap),
                  1 === e.side && d.clearcoatNormalScale.value.negate()),
                (d.transmission.value = e.transmission),
                e.transmissionMap &&
                  (d.transmissionMap.value = e.transmissionMap))
              : b(d, e);
        else if (e.isMeshMatcapMaterial)
          a(d, e),
            e.matcap && (d.matcap.value = e.matcap),
            e.bumpMap &&
              ((d.bumpMap.value = e.bumpMap),
              (d.bumpScale.value = e.bumpScale),
              1 === e.side && (d.bumpScale.value *= -1)),
            e.normalMap &&
              ((d.normalMap.value = e.normalMap),
              d.normalScale.value.copy(e.normalScale),
              1 === e.side && d.normalScale.value.negate()),
            e.displacementMap &&
              ((d.displacementMap.value = e.displacementMap),
              (d.displacementScale.value = e.displacementScale),
              (d.displacementBias.value = e.displacementBias));
        else if (e.isMeshDepthMaterial)
          a(d, e),
            e.displacementMap &&
              ((d.displacementMap.value = e.displacementMap),
              (d.displacementScale.value = e.displacementScale),
              (d.displacementBias.value = e.displacementBias));
        else if (e.isMeshDistanceMaterial)
          a(d, e),
            e.displacementMap &&
              ((d.displacementMap.value = e.displacementMap),
              (d.displacementScale.value = e.displacementScale),
              (d.displacementBias.value = e.displacementBias)),
            d.referencePosition.value.copy(e.referencePosition),
            (d.nearDistance.value = e.nearDistance),
            (d.farDistance.value = e.farDistance);
        else if (e.isMeshNormalMaterial)
          a(d, e),
            e.bumpMap &&
              ((d.bumpMap.value = e.bumpMap),
              (d.bumpScale.value = e.bumpScale),
              1 === e.side && (d.bumpScale.value *= -1)),
            e.normalMap &&
              ((d.normalMap.value = e.normalMap),
              d.normalScale.value.copy(e.normalScale),
              1 === e.side && d.normalScale.value.negate()),
            e.displacementMap &&
              ((d.displacementMap.value = e.displacementMap),
              (d.displacementScale.value = e.displacementScale),
              (d.displacementBias.value = e.displacementBias));
        else if (e.isLineBasicMaterial)
          d.diffuse.value.copy(e.color),
            (d.opacity.value = e.opacity),
            e.isLineDashedMaterial &&
              ((d.dashSize.value = e.dashSize),
              (d.totalSize.value = e.dashSize + e.gapSize),
              (d.scale.value = e.scale));
        else if (e.isPointsMaterial) {
          d.diffuse.value.copy(e.color);
          d.opacity.value = e.opacity;
          d.size.value = e.size * f;
          d.scale.value = 0.5 * g;
          e.map && (d.map.value = e.map);
          e.alphaMap && (d.alphaMap.value = e.alphaMap);
          if (e.map) var h = e.map;
          else e.alphaMap && (h = e.alphaMap);
          void 0 !== h &&
            (!0 === h.matrixAutoUpdate && h.updateMatrix(),
            d.uvTransform.value.copy(h.matrix));
        } else if (e.isSpriteMaterial) {
          d.diffuse.value.copy(e.color);
          d.opacity.value = e.opacity;
          d.rotation.value = e.rotation;
          e.map && (d.map.value = e.map);
          e.alphaMap && (d.alphaMap.value = e.alphaMap);
          if (e.map) var k = e.map;
          else e.alphaMap && (k = e.alphaMap);
          void 0 !== k &&
            (!0 === k.matrixAutoUpdate && k.updateMatrix(),
            d.uvTransform.value.copy(k.matrix));
        } else
          e.isShadowMaterial
            ? (d.color.value.copy(e.color), (d.opacity.value = e.opacity))
            : e.isShaderMaterial && (e.uniformsNeedUpdate = !1);
      },
    };
  }
  function Ne(c) {
    function a(x, N) {
      for (var J = 0; J < x.length; J++) {
        var O = t.getContext(x[J], N);
        if (null !== O) return O;
      }
      return null;
    }
    function b() {
      qa = new tk(R);
      Ea = new qk(R, qa, c);
      !1 === Ea.isWebGL2 &&
        (qa.get("WEBGL_depth_texture"),
        qa.get("OES_texture_float"),
        qa.get("OES_texture_half_float"),
        qa.get("OES_texture_half_float_linear"),
        qa.get("OES_standard_derivatives"),
        qa.get("OES_element_index_uint"),
        qa.get("OES_vertex_array_object"),
        qa.get("ANGLE_instanced_arrays"));
      qa.get("OES_texture_float_linear");
      lc = new Vi(R, qa, Ea);
      Ca = new Cl(R, qa, Ea);
      Ca.scissor(bb.copy(X).multiplyScalar(y).floor());
      Ca.viewport(Xa.copy(ba).multiplyScalar(y).floor());
      Ka = new wk(R);
      Ra = new sl();
      kb = new Dl(R, qa, Ca, Ra, Ea, lc, Ka);
      mc = new sk(F);
      Oe = new mk(R, Ea);
      Fb = new ok(R, qa, Oe, Ea);
      ph = new uk(R, Oe, Ka, Fb);
      Ld = new Ak(R, ph, Oe, Ka);
      Xi = new zk(R);
      Qb = new rk(Ra);
      dd = new rl(F, mc, qa, Ea, Fb, Qb);
      qh = new El(Ra);
      Uf = new vl(Ra);
      Md = new Bl();
      Hc = new nk(F, mc, Ca, Ld, D);
      Yi = new pk(R, qa, Ka, Ea);
      Zi = new vk(R, qa, Ka, Ea);
      Ka.programs = dd.programs;
      F.capabilities = Ea;
      F.extensions = qa;
      F.properties = Ra;
      F.renderLists = Uf;
      F.state = Ca;
      F.info = Ka;
    }
    function d(x) {
      x.preventDefault();
      console.log("THREE.WebGLRenderer: Context Lost.");
      K = !0;
    }
    function e() {
      console.log("THREE.WebGLRenderer: Context Restored.");
      K = !1;
      b();
    }
    function f(x) {
      x = x.target;
      x.removeEventListener("dispose", f);
      g(x);
      Ra.remove(x);
    }
    function g(x) {
      x = Ra.get(x).program;
      void 0 !== x && dd.releaseProgram(x);
    }
    function h(x, N) {
      x.render(function (J) {
        F.renderBufferImmediate(J, N);
      });
    }
    function k(x, N, J, O) {
      if (!1 !== x.visible) {
        if (x.layers.test(N.layers))
          if (x.isGroup) J = x.renderOrder;
          else if (x.isLOD) !0 === x.autoUpdate && x.update(N);
          else if (x.isLight) M.pushLight(x), x.castShadow && M.pushShadow(x);
          else if (x.isSprite) {
            if (!x.frustumCulled || va.intersectsSprite(x)) {
              O && la.setFromMatrixPosition(x.matrixWorld).applyMatrix4(U);
              var Y = Ld.update(x),
                ma = x.material;
              ma.visible && H.push(x, Y, ma, J, la.z, null);
            }
          } else if (x.isImmediateRenderObject)
            O && la.setFromMatrixPosition(x.matrixWorld).applyMatrix4(U),
              H.push(x, null, x.material, J, la.z, null);
          else if (x.isMesh || x.isLine || x.isPoints)
            if (
              (x.isSkinnedMesh &&
                x.skeleton.frame !== Ka.render.frame &&
                (x.skeleton.update(), (x.skeleton.frame = Ka.render.frame)),
              !x.frustumCulled || va.intersectsObject(x))
            )
              if (
                (O && la.setFromMatrixPosition(x.matrixWorld).applyMatrix4(U),
                (Y = Ld.update(x)),
                (ma = x.material),
                Array.isArray(ma))
              )
                for (var na = Y.groups, Ha = 0, Fa = na.length; Ha < Fa; Ha++) {
                  var ib = na[Ha],
                    Ia = ma[ib.materialIndex];
                  Ia && Ia.visible && H.push(x, Y, Ia, J, la.z, ib);
                }
              else ma.visible && H.push(x, Y, ma, J, la.z, null);
        x = x.children;
        Y = 0;
        for (ma = x.length; Y < ma; Y++) k(x[Y], N, J, O);
      }
    }
    function l(x, N, J) {
      for (
        var O = !0 === N.isScene ? N.overrideMaterial : null,
          Y = 0,
          ma = x.length;
        Y < ma;
        Y++
      ) {
        var na = x[Y],
          Ha = na.object,
          Fa = na.geometry,
          ib = null === O ? na.material : O;
        na = na.group;
        if (J.isArrayCamera) {
          Aa = J;
          for (var Ia = J.cameras, ed = 0, rh = Ia.length; ed < rh; ed++) {
            var Vf = Ia[ed];
            Ha.layers.test(Vf.layers) &&
              (Ca.viewport(Xa.copy(Vf.viewport)),
              M.setupLights(Vf),
              m(Ha, N, Vf, Fa, ib, na));
          }
        } else (Aa = null), m(Ha, N, J, Fa, ib, na);
      }
    }
    function m(x, N, J, O, Y, ma) {
      x.onBeforeRender(F, N, J, O, Y, ma);
      M = Md.get(N, Aa || J);
      x.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse, x.matrixWorld);
      x.normalMatrix.getNormalMatrix(x.modelViewMatrix);
      if (x.isImmediateRenderObject) {
        var na = p(J, N, Y, x);
        Ca.setMaterial(Y);
        Fb.reset();
        h(x, na);
      } else F.renderBufferDirect(J, N, O, Y, x, ma);
      x.onAfterRender(F, N, J, O, Y, ma);
      M = Md.get(N, Aa || J);
    }
    function n(x, N, J) {
      !0 !== N.isScene && (N = wa);
      var O = Ra.get(x),
        Y = M.state.lights,
        ma = Y.state.version;
      J = dd.getParameters(x, Y.state, M.state.shadowsArray, N, J);
      var na = dd.getProgramCacheKey(J),
        Ha = O.program,
        Fa = !0;
      if (void 0 === Ha) x.addEventListener("dispose", f);
      else if (Ha.cacheKey !== na) g(x);
      else {
        if (O.lightsStateVersion === ma && void 0 !== J.shaderID) {
          N = x.isMeshStandardMaterial ? N.environment : null;
          O.envMap = mc.get(x.envMap || N);
          return;
        }
        Fa = !1;
      }
      Fa &&
        ((J.uniforms = dd.getUniforms(x)),
        x.onBeforeCompile(J, F),
        (Ha = dd.acquireProgram(J, na)),
        (O.program = Ha),
        (O.uniforms = J.uniforms),
        (O.outputEncoding = J.outputEncoding));
      J = O.uniforms;
      if ((!x.isShaderMaterial && !x.isRawShaderMaterial) || !0 === x.clipping)
        (O.numClippingPlanes = Qb.numPlanes),
          (O.numIntersection = Qb.numIntersection),
          (J.clippingPlanes = Qb.uniform);
      O.environment = x.isMeshStandardMaterial ? N.environment : null;
      O.fog = N.fog;
      O.envMap = mc.get(x.envMap || O.environment);
      O.needsLights =
        x.isMeshLambertMaterial ||
        x.isMeshToonMaterial ||
        x.isMeshPhongMaterial ||
        x.isMeshStandardMaterial ||
        x.isShadowMaterial ||
        (x.isShaderMaterial && !0 === x.lights);
      O.lightsStateVersion = ma;
      O.needsLights &&
        ((J.ambientLightColor.value = Y.state.ambient),
        (J.lightProbe.value = Y.state.probe),
        (J.directionalLights.value = Y.state.directional),
        (J.directionalLightShadows.value = Y.state.directionalShadow),
        (J.spotLights.value = Y.state.spot),
        (J.spotLightShadows.value = Y.state.spotShadow),
        (J.rectAreaLights.value = Y.state.rectArea),
        (J.ltc_1.value = Y.state.rectAreaLTC1),
        (J.ltc_2.value = Y.state.rectAreaLTC2),
        (J.pointLights.value = Y.state.point),
        (J.pointLightShadows.value = Y.state.pointShadow),
        (J.hemisphereLights.value = Y.state.hemi),
        (J.directionalShadowMap.value = Y.state.directionalShadowMap),
        (J.directionalShadowMatrix.value = Y.state.directionalShadowMatrix),
        (J.spotShadowMap.value = Y.state.spotShadowMap),
        (J.spotShadowMatrix.value = Y.state.spotShadowMatrix),
        (J.pointShadowMap.value = Y.state.pointShadowMap),
        (J.pointShadowMatrix.value = Y.state.pointShadowMatrix));
      x = O.program.getUniforms();
      x = Dc.seqWithValue(x.seq, J);
      O.uniformsList = x;
    }
    function p(x, N, J, O) {
      !0 !== N.isScene && (N = wa);
      kb.resetTextureUnits();
      var Y = N.fog,
        ma = J.isMeshStandardMaterial ? N.environment : null,
        na = null === W ? F.outputEncoding : W.texture.encoding,
        Ha = mc.get(J.envMap || ma),
        Fa = Ra.get(J),
        ib = M.state.lights;
      !0 !== ya ||
        (!0 !== Pa && x === ja) ||
        Qb.setState(J, x, x === ja && J.id === Z);
      J.version === Fa.__version
        ? J.fog && Fa.fog !== Y
          ? n(J, N, O)
          : Fa.environment !== ma
          ? n(J, N, O)
          : Fa.needsLights && Fa.lightsStateVersion !== ib.state.version
          ? n(J, N, O)
          : void 0 === Fa.numClippingPlanes ||
            (Fa.numClippingPlanes === Qb.numPlanes &&
              Fa.numIntersection === Qb.numIntersection)
          ? Fa.outputEncoding !== na
            ? n(J, N, O)
            : Fa.envMap !== Ha && n(J, N, O)
          : n(J, N, O)
        : (n(J, N, O), (Fa.__version = J.version));
      var Ia = !1;
      ib = Ha = !1;
      N = Fa.program;
      ma = N.getUniforms();
      na = Fa.uniforms;
      Ca.useProgram(N.program) && (ib = Ha = Ia = !0);
      J.id !== Z && ((Z = J.id), (Ha = !0));
      if (Ia || ja !== x) {
        ma.setValue(R, "projectionMatrix", x.projectionMatrix);
        Ea.logarithmicDepthBuffer &&
          ma.setValue(R, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2));
        ja !== x && ((ja = x), (ib = Ha = !0));
        if (
          J.isShaderMaterial ||
          J.isMeshPhongMaterial ||
          J.isMeshToonMaterial ||
          J.isMeshStandardMaterial ||
          J.envMap
        )
          (Ia = ma.map.cameraPosition),
            void 0 !== Ia &&
              Ia.setValue(R, la.setFromMatrixPosition(x.matrixWorld));
        (J.isMeshPhongMaterial ||
          J.isMeshToonMaterial ||
          J.isMeshLambertMaterial ||
          J.isMeshBasicMaterial ||
          J.isMeshStandardMaterial ||
          J.isShaderMaterial) &&
          ma.setValue(R, "isOrthographic", !0 === x.isOrthographicCamera);
        (J.isMeshPhongMaterial ||
          J.isMeshToonMaterial ||
          J.isMeshLambertMaterial ||
          J.isMeshBasicMaterial ||
          J.isMeshStandardMaterial ||
          J.isShaderMaterial ||
          J.isShadowMaterial ||
          J.skinning) &&
          ma.setValue(R, "viewMatrix", x.matrixWorldInverse);
      }
      if (
        J.skinning &&
        (ma.setOptional(R, O, "bindMatrix"),
        ma.setOptional(R, O, "bindMatrixInverse"),
        (x = O.skeleton))
      )
        if (((Ia = x.bones), Ea.floatVertexTextures)) {
          if (void 0 === x.boneTexture) {
            Ia = Math.sqrt(4 * Ia.length);
            Ia = xa.ceilPowerOfTwo(Ia);
            Ia = Math.max(Ia, 4);
            var ed = new Float32Array(Ia * Ia * 4);
            ed.set(x.boneMatrices);
            var rh = new bd(ed, Ia, Ia, 1023, 1015);
            x.boneMatrices = ed;
            x.boneTexture = rh;
            x.boneTextureSize = Ia;
          }
          ma.setValue(R, "boneTexture", x.boneTexture, kb);
          ma.setValue(R, "boneTextureSize", x.boneTextureSize);
        } else ma.setOptional(R, x, "boneMatrices");
      if (Ha || Fa.receiveShadow !== O.receiveShadow)
        (Fa.receiveShadow = O.receiveShadow),
          ma.setValue(R, "receiveShadow", O.receiveShadow);
      Ha &&
        (ma.setValue(R, "toneMappingExposure", F.toneMappingExposure),
        Fa.needsLights &&
          ((x = ib),
          (na.ambientLightColor.needsUpdate = x),
          (na.lightProbe.needsUpdate = x),
          (na.directionalLights.needsUpdate = x),
          (na.directionalLightShadows.needsUpdate = x),
          (na.pointLights.needsUpdate = x),
          (na.pointLightShadows.needsUpdate = x),
          (na.spotLights.needsUpdate = x),
          (na.spotLightShadows.needsUpdate = x),
          (na.rectAreaLights.needsUpdate = x),
          (na.hemisphereLights.needsUpdate = x)),
        Y && J.fog && qh.refreshFogUniforms(na, Y),
        qh.refreshMaterialUniforms(na, J, y, C),
        Dc.upload(R, Fa.uniformsList, na, kb));
      J.isShaderMaterial &&
        !0 === J.uniformsNeedUpdate &&
        (Dc.upload(R, Fa.uniformsList, na, kb), (J.uniformsNeedUpdate = !1));
      J.isSpriteMaterial && ma.setValue(R, "center", O.center);
      ma.setValue(R, "modelViewMatrix", O.modelViewMatrix);
      ma.setValue(R, "normalMatrix", O.normalMatrix);
      ma.setValue(R, "modelMatrix", O.matrixWorld);
      return N;
    }
    c = c || {};
    var t =
        void 0 !== c.canvas
          ? c.canvas
          : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
      q = void 0 !== c.context ? c.context : null,
      v = void 0 !== c.alpha ? c.alpha : !1,
      u = void 0 !== c.depth ? c.depth : !0,
      A = void 0 !== c.stencil ? c.stencil : !0,
      B = void 0 !== c.antialias ? c.antialias : !1,
      D = void 0 !== c.premultipliedAlpha ? c.premultipliedAlpha : !0,
      G = void 0 !== c.preserveDrawingBuffer ? c.preserveDrawingBuffer : !1,
      I = void 0 !== c.powerPreference ? c.powerPreference : "default",
      E =
        void 0 !== c.failIfMajorPerformanceCaveat
          ? c.failIfMajorPerformanceCaveat
          : !1,
      H = null,
      M = null;
    this.domElement = t;
    this.debug = { checkShaderErrors: !0 };
    this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.clippingPlanes = [];
    this.localClippingEnabled = !1;
    this.gammaFactor = 2;
    this.outputEncoding = 3e3;
    this.physicallyCorrectLights = !1;
    this.toneMapping = 0;
    this.toneMappingExposure = 1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    var F = this,
      K = !1,
      P = null,
      V = 0,
      ia = 0,
      W = null,
      aa = null,
      Z = -1,
      ja = null,
      Aa = null,
      Xa = new ca(),
      bb = new ca(),
      fb = null,
      z = t.width,
      C = t.height,
      y = 1,
      Q = null,
      T = null,
      ba = new ca(0, 0, z, C),
      X = new ca(0, 0, z, C),
      ta = !1,
      va = new xb(),
      ya = !1,
      Pa = !1,
      U = new da(),
      la = new w(),
      wa = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      },
      R = q;
    try {
      q = {
        alpha: v,
        depth: u,
        stencil: A,
        antialias: B,
        premultipliedAlpha: D,
        preserveDrawingBuffer: G,
        powerPreference: I,
        failIfMajorPerformanceCaveat: E,
      };
      t.addEventListener("webglcontextlost", d, !1);
      t.addEventListener("webglcontextrestored", e, !1);
      if (
        null === R &&
        ((v = ["webgl2", "webgl", "experimental-webgl"]),
        !0 === F.isWebGL1Renderer && v.shift(),
        (R = a(v, q)),
        null === R)
      ) {
        if (a(v))
          throw Error(
            "Error creating WebGL context with your selected attributes."
          );
        throw Error("Error creating WebGL context.");
      }
      void 0 === R.getShaderPrecisionFormat &&
        (R.getShaderPrecisionFormat = function () {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    } catch (x) {
      throw (console.error("THREE.WebGLRenderer: " + x.message), x);
    }
    var qa,
      Ea,
      Ca,
      Ka,
      Ra,
      kb,
      mc,
      Oe,
      ph,
      Ld,
      dd,
      qh,
      Uf,
      Md,
      Qb,
      Hc,
      Xi,
      Yi,
      Zi,
      lc,
      Fb;
    b();
    var Ic = new Wi(F, R);
    this.xr = Ic;
    var $i = new Ui(F, Ld, Ea.maxTextureSize);
    this.shadowMap = $i;
    this.getContext = function () {
      return R;
    };
    this.getContextAttributes = function () {
      return R.getContextAttributes();
    };
    this.forceContextLoss = function () {
      var x = qa.get("WEBGL_lose_context");
      x && x.loseContext();
    };
    this.forceContextRestore = function () {
      var x = qa.get("WEBGL_lose_context");
      x && x.restoreContext();
    };
    this.getPixelRatio = function () {
      return y;
    };
    this.setPixelRatio = function (x) {
      void 0 !== x && ((y = x), this.setSize(z, C, !1));
    };
    this.getSize = function (x) {
      void 0 === x &&
        (console.warn(
          "WebGLRenderer: .getsize() now requires a Vector2 as an argument"
        ),
        (x = new L()));
      return x.set(z, C);
    };
    this.setSize = function (x, N, J) {
      Ic.isPresenting
        ? console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          )
        : ((z = x),
          (C = N),
          (t.width = Math.floor(x * y)),
          (t.height = Math.floor(N * y)),
          !1 !== J && ((t.style.width = x + "px"), (t.style.height = N + "px")),
          this.setViewport(0, 0, x, N));
    };
    this.getDrawingBufferSize = function (x) {
      void 0 === x &&
        (console.warn(
          "WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"
        ),
        (x = new L()));
      return x.set(z * y, C * y).floor();
    };
    this.setDrawingBufferSize = function (x, N, J) {
      z = x;
      C = N;
      y = J;
      t.width = Math.floor(x * J);
      t.height = Math.floor(N * J);
      this.setViewport(0, 0, x, N);
    };
    this.getCurrentViewport = function (x) {
      void 0 === x &&
        (console.warn(
          "WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"
        ),
        (x = new ca()));
      return x.copy(Xa);
    };
    this.getViewport = function (x) {
      return x.copy(ba);
    };
    this.setViewport = function (x, N, J, O) {
      x.isVector4 ? ba.set(x.x, x.y, x.z, x.w) : ba.set(x, N, J, O);
      Ca.viewport(Xa.copy(ba).multiplyScalar(y).floor());
    };
    this.getScissor = function (x) {
      return x.copy(X);
    };
    this.setScissor = function (x, N, J, O) {
      x.isVector4 ? X.set(x.x, x.y, x.z, x.w) : X.set(x, N, J, O);
      Ca.scissor(bb.copy(X).multiplyScalar(y).floor());
    };
    this.getScissorTest = function () {
      return ta;
    };
    this.setScissorTest = function (x) {
      Ca.setScissorTest((ta = x));
    };
    this.setOpaqueSort = function (x) {
      Q = x;
    };
    this.setTransparentSort = function (x) {
      T = x;
    };
    this.getClearColor = function () {
      return Hc.getClearColor();
    };
    this.setClearColor = function () {
      Hc.setClearColor.apply(Hc, arguments);
    };
    this.getClearAlpha = function () {
      return Hc.getClearAlpha();
    };
    this.setClearAlpha = function () {
      Hc.setClearAlpha.apply(Hc, arguments);
    };
    this.clear = function (x, N, J) {
      var O = 0;
      if (void 0 === x || x) O |= 16384;
      if (void 0 === N || N) O |= 256;
      if (void 0 === J || J) O |= 1024;
      R.clear(O);
    };
    this.clearColor = function () {
      this.clear(!0, !1, !1);
    };
    this.clearDepth = function () {
      this.clear(!1, !0, !1);
    };
    this.clearStencil = function () {
      this.clear(!1, !1, !0);
    };
    this.dispose = function () {
      t.removeEventListener("webglcontextlost", d, !1);
      t.removeEventListener("webglcontextrestored", e, !1);
      Uf.dispose();
      Md.dispose();
      Ra.dispose();
      mc.dispose();
      Ld.dispose();
      Fb.dispose();
      Ic.dispose();
      Pe.stop();
    };
    this.renderBufferImmediate = function (x, N) {
      Fb.initAttributes();
      var J = Ra.get(x);
      x.hasPositions && !J.position && (J.position = R.createBuffer());
      x.hasNormals && !J.normal && (J.normal = R.createBuffer());
      x.hasUvs && !J.uv && (J.uv = R.createBuffer());
      x.hasColors && !J.color && (J.color = R.createBuffer());
      N = N.getAttributes();
      x.hasPositions &&
        (R.bindBuffer(34962, J.position),
        R.bufferData(34962, x.positionArray, 35048),
        Fb.enableAttribute(N.position),
        R.vertexAttribPointer(N.position, 3, 5126, !1, 0, 0));
      x.hasNormals &&
        (R.bindBuffer(34962, J.normal),
        R.bufferData(34962, x.normalArray, 35048),
        Fb.enableAttribute(N.normal),
        R.vertexAttribPointer(N.normal, 3, 5126, !1, 0, 0));
      x.hasUvs &&
        (R.bindBuffer(34962, J.uv),
        R.bufferData(34962, x.uvArray, 35048),
        Fb.enableAttribute(N.uv),
        R.vertexAttribPointer(N.uv, 2, 5126, !1, 0, 0));
      x.hasColors &&
        (R.bindBuffer(34962, J.color),
        R.bufferData(34962, x.colorArray, 35048),
        Fb.enableAttribute(N.color),
        R.vertexAttribPointer(N.color, 3, 5126, !1, 0, 0));
      Fb.disableUnusedAttributes();
      R.drawArrays(4, 0, x.count);
      x.count = 0;
    };
    this.renderBufferDirect = function (x, N, J, O, Y, ma) {
      null === N && (N = wa);
      var na = Y.isMesh && 0 > Y.matrixWorld.determinant();
      x = p(x, N, O, Y);
      Ca.setMaterial(O, na);
      na = J.index;
      N = J.attributes.position;
      if (null === na) {
        if (void 0 === N || 0 === N.count) return;
      } else if (0 === na.count) return;
      var Ha = 1;
      !0 === O.wireframe && ((na = ph.getWireframeAttribute(J)), (Ha = 2));
      (O.morphTargets || O.morphNormals) && Xi.update(Y, J, O, x);
      Fb.setup(Y, O, x, J, na);
      x = Yi;
      if (null !== na) {
        var Fa = Oe.get(na);
        x = Zi;
        x.setIndex(Fa);
      }
      var ib = J.drawRange.start * Ha,
        Ia = null !== ma ? ma.start * Ha : 0;
      Fa = Math.max(ib, Ia);
      ma = Math.max(
        0,
        Math.min(
          null !== na ? na.count : N.count,
          ib + J.drawRange.count * Ha,
          Ia + (null !== ma ? ma.count * Ha : Infinity)
        ) -
          1 -
          Fa +
          1
      );
      0 !== ma &&
        (Y.isMesh
          ? !0 === O.wireframe
            ? (Ca.setLineWidth(O.wireframeLinewidth * (null === W ? y : 1)),
              x.setMode(1))
            : x.setMode(4)
          : Y.isLine
          ? ((O = O.linewidth),
            void 0 === O && (O = 1),
            Ca.setLineWidth(O * (null === W ? y : 1)),
            Y.isLineSegments
              ? x.setMode(1)
              : Y.isLineLoop
              ? x.setMode(2)
              : x.setMode(3))
          : Y.isPoints
          ? x.setMode(0)
          : Y.isSprite && x.setMode(4),
        Y.isInstancedMesh
          ? x.renderInstances(Fa, ma, Y.count)
          : J.isInstancedBufferGeometry
          ? x.renderInstances(
              Fa,
              ma,
              Math.min(J.instanceCount, J._maxInstanceCount)
            )
          : x.render(Fa, ma));
    };
    this.compile = function (x, N) {
      M = Md.get(x, N);
      M.init();
      x.traverse(function (O) {
        O.isLight && (M.pushLight(O), O.castShadow && M.pushShadow(O));
      });
      M.setupLights(N);
      var J = new WeakMap();
      x.traverse(function (O) {
        var Y = O.material;
        if (Y)
          if (Array.isArray(Y))
            for (var ma = 0; ma < Y.length; ma++) {
              var na = Y[ma];
              !1 === J.has(na) && (n(na, x, O), J.set(na));
            }
          else !1 === J.has(Y) && (n(Y, x, O), J.set(Y));
      });
    };
    var sh = null,
      Pe = new xi();
    Pe.setAnimationLoop(function (x) {
      Ic.isPresenting || (sh && sh(x));
    });
    "undefined" !== typeof window && Pe.setContext(window);
    this.setAnimationLoop = function (x) {
      sh = x;
      Ic.setAnimationLoop(x);
      null === x ? Pe.stop() : Pe.start();
    };
    this.render = function (x, N, J, O) {
      if (void 0 !== J) {
        console.warn(
          "THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."
        );
        var Y = J;
      }
      if (void 0 !== O) {
        console.warn(
          "THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."
        );
        var ma = O;
      }
      if (void 0 !== N && !0 !== N.isCamera)
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
      else if (!0 !== K) {
        Fb.resetDefaultState();
        Z = -1;
        ja = null;
        !0 === x.autoUpdate && x.updateMatrixWorld();
        null === N.parent && N.updateMatrixWorld();
        !0 === Ic.enabled && !0 === Ic.isPresenting && (N = Ic.getCamera(N));
        if (!0 === x.isScene) x.onBeforeRender(F, x, N, Y || W);
        M = Md.get(x, N);
        M.init();
        U.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse);
        va.setFromProjectionMatrix(U);
        Pa = this.localClippingEnabled;
        ya = Qb.init(this.clippingPlanes, Pa, N);
        H = Uf.get(x, N);
        H.init();
        k(x, N, 0, F.sortObjects);
        H.finish();
        !0 === F.sortObjects && H.sort(Q, T);
        !0 === ya && Qb.beginShadows();
        $i.render(M.state.shadowsArray, x, N);
        M.setupLights(N);
        !0 === ya && Qb.endShadows();
        !0 === this.info.autoReset && this.info.reset();
        void 0 !== Y && this.setRenderTarget(Y);
        Hc.render(H, x, N, ma);
        J = H.opaque;
        O = H.transparent;
        0 < J.length && l(J, x, N);
        0 < O.length && l(O, x, N);
        if (!0 === x.isScene) x.onAfterRender(F, x, N);
        null !== W &&
          (kb.updateRenderTargetMipmap(W), kb.updateMultisampleRenderTarget(W));
        Ca.buffers.depth.setTest(!0);
        Ca.buffers.depth.setMask(!0);
        Ca.buffers.color.setMask(!0);
        Ca.setPolygonOffset(!1);
        M = H = null;
      }
    };
    this.setFramebuffer = function (x) {
      P !== x && null === W && R.bindFramebuffer(36160, x);
      P = x;
    };
    this.getActiveCubeFace = function () {
      return V;
    };
    this.getActiveMipmapLevel = function () {
      return ia;
    };
    this.getRenderList = function () {
      return H;
    };
    this.setRenderList = function (x) {
      H = x;
    };
    this.getRenderState = function () {
      return M;
    };
    this.setRenderState = function (x) {
      M = x;
    };
    this.getRenderTarget = function () {
      return W;
    };
    this.setRenderTarget = function (x, N, J) {
      void 0 === N && (N = 0);
      void 0 === J && (J = 0);
      W = x;
      V = N;
      ia = J;
      x && void 0 === Ra.get(x).__webglFramebuffer && kb.setupRenderTarget(x);
      var O = P,
        Y = !1;
      x
        ? ((O = Ra.get(x).__webglFramebuffer),
          x.isWebGLCubeRenderTarget
            ? ((O = O[N]), (Y = !0))
            : (O = x.isWebGLMultisampleRenderTarget
                ? Ra.get(x).__webglMultisampledFramebuffer
                : O),
          Xa.copy(x.viewport),
          bb.copy(x.scissor),
          (fb = x.scissorTest))
        : (Xa.copy(ba).multiplyScalar(y).floor(),
          bb.copy(X).multiplyScalar(y).floor(),
          (fb = ta));
      aa !== O && (R.bindFramebuffer(36160, O), (aa = O));
      Ca.viewport(Xa);
      Ca.scissor(bb);
      Ca.setScissorTest(fb);
      Y &&
        ((x = Ra.get(x.texture)),
        R.framebufferTexture2D(36160, 36064, 34069 + N, x.__webglTexture, J));
    };
    this.readRenderTargetPixels = function (x, N, J, O, Y, ma, na) {
      if (x && x.isWebGLRenderTarget) {
        var Ha = Ra.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget && void 0 !== na && (Ha = Ha[na]);
        if (Ha) {
          na = !1;
          Ha !== aa && (R.bindFramebuffer(36160, Ha), (na = !0));
          try {
            var Fa = x.texture,
              ib = Fa.format,
              Ia = Fa.type;
            1023 !== ib && lc.convert(ib) !== R.getParameter(35739)
              ? console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                )
              : 1009 === Ia ||
                lc.convert(Ia) === R.getParameter(35738) ||
                (1015 === Ia &&
                  (Ea.isWebGL2 ||
                    qa.get("OES_texture_float") ||
                    qa.get("WEBGL_color_buffer_float"))) ||
                (1016 === Ia &&
                  (Ea.isWebGL2
                    ? qa.get("EXT_color_buffer_float")
                    : qa.get("EXT_color_buffer_half_float")))
              ? 36053 === R.checkFramebufferStatus(36160)
                ? 0 <= N &&
                  N <= x.width - O &&
                  0 <= J &&
                  J <= x.height - Y &&
                  R.readPixels(N, J, O, Y, lc.convert(ib), lc.convert(Ia), ma)
                : console.error(
                    "THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."
                  )
              : console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                );
          } finally {
            na && R.bindFramebuffer(36160, aa);
          }
        }
      } else
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
    };
    this.copyFramebufferToTexture = function (x, N, J) {
      void 0 === J && (J = 0);
      var O = Math.pow(2, -J),
        Y = Math.floor(N.image.width * O);
      O = Math.floor(N.image.height * O);
      var ma = lc.convert(N.format);
      kb.setTexture2D(N, 0);
      R.copyTexImage2D(3553, J, ma, x.x, x.y, Y, O, 0);
      Ca.unbindTexture();
    };
    this.copyTextureToTexture = function (x, N, J, O) {
      void 0 === O && (O = 0);
      var Y = N.image.width,
        ma = N.image.height,
        na = lc.convert(J.format),
        Ha = lc.convert(J.type);
      kb.setTexture2D(J, 0);
      R.pixelStorei(37440, J.flipY);
      R.pixelStorei(37441, J.premultiplyAlpha);
      R.pixelStorei(3317, J.unpackAlignment);
      N.isDataTexture
        ? R.texSubImage2D(3553, O, x.x, x.y, Y, ma, na, Ha, N.image.data)
        : N.isCompressedTexture
        ? R.compressedTexSubImage2D(
            3553,
            O,
            x.x,
            x.y,
            N.mipmaps[0].width,
            N.mipmaps[0].height,
            na,
            N.mipmaps[0].data
          )
        : R.texSubImage2D(3553, O, x.x, x.y, na, Ha, N.image);
      0 === O && J.generateMipmaps && R.generateMipmap(3553);
      Ca.unbindTexture();
    };
    this.initTexture = function (x) {
      kb.setTexture2D(x, 0);
      Ca.unbindTexture();
    };
    "undefined" !== typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
  }
  function th(c) {
    Ne.call(this, c);
  }
  function Jc() {
    ha.call(this);
    Object.defineProperty(this, "isScene", { value: !0 });
    this.type = "Scene";
    this.overrideMaterial = this.fog = this.environment = this.background = null;
    this.autoUpdate = !0;
    "undefined" !== typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
  }
  function Gb(c, a) {
    this.array = c;
    this.stride = a;
    this.count = void 0 !== c ? c.length / a : 0;
    this.usage = 35044;
    this.updateRange = { offset: 0, count: -1 };
    this.version = 0;
    this.uuid = xa.generateUUID();
  }
  function Kc(c, a, b, d) {
    this.name = "";
    this.data = c;
    this.itemSize = a;
    this.offset = b;
    this.normalized = !0 === d;
  }
  function Lc(c) {
    ra.call(this);
    this.type = "SpriteMaterial";
    this.color = new S(16777215);
    this.alphaMap = this.map = null;
    this.rotation = 0;
    this.transparent = this.sizeAttenuation = !0;
    this.setValues(c);
  }
  function Qe(c) {
    ha.call(this);
    this.type = "Sprite";
    if (void 0 === Nd) {
      Nd = new ka();
      var a = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1,
      ]);
      a = new Gb(a, 5);
      Nd.setIndex([0, 1, 2, 0, 2, 3]);
      Nd.setAttribute("position", new Kc(a, 3, 0, !1));
      Nd.setAttribute("uv", new Kc(a, 2, 3, !1));
    }
    this.geometry = Nd;
    this.material = void 0 !== c ? c : new Lc();
    this.center = new L(0.5, 0.5);
  }
  function Wf(c, a, b, d, e, f) {
    Od.subVectors(c, b).addScalar(0.5).multiply(d);
    void 0 !== e
      ? ((Re.x = f * Od.x - e * Od.y), (Re.y = e * Od.x + f * Od.y))
      : Re.copy(Od);
    c.copy(a);
    c.x += Re.x;
    c.y += Re.y;
    c.applyMatrix4(aj);
  }
  function Se() {
    ha.call(this);
    this._currentLevel = 0;
    this.type = "LOD";
    Object.defineProperties(this, { levels: { enumerable: !0, value: [] } });
    this.autoUpdate = !0;
  }
  function Xf(c, a) {
    c &&
      c.isGeometry &&
      console.error(
        "THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
      );
    Qa.call(this, c, a);
    this.type = "SkinnedMesh";
    this.bindMode = "attached";
    this.bindMatrix = new da();
    this.bindMatrixInverse = new da();
  }
  function Yf(c, a) {
    c = c || [];
    this.bones = c.slice(0);
    this.boneMatrices = new Float32Array(16 * this.bones.length);
    this.frame = -1;
    if (void 0 === a) this.calculateInverses();
    else if (this.bones.length === a.length) this.boneInverses = a.slice(0);
    else
      for (
        console.warn("THREE.Skeleton boneInverses is the wrong length."),
          this.boneInverses = [],
          c = 0,
          a = this.bones.length;
        c < a;
        c++
      )
        this.boneInverses.push(new da());
  }
  function uh() {
    ha.call(this);
    this.type = "Bone";
  }
  function Zf(c, a, b) {
    Qa.call(this, c, a);
    this.instanceMatrix = new pa(new Float32Array(16 * b), 16);
    this.instanceColor = null;
    this.count = b;
    this.frustumCulled = !1;
  }
  function Ya(c) {
    ra.call(this);
    this.type = "LineBasicMaterial";
    this.color = new S(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.morphTargets = !1;
    this.setValues(c);
  }
  function yb(c, a, b) {
    1 === b &&
      console.error(
        "THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."
      );
    ha.call(this);
    this.type = "Line";
    this.geometry = void 0 !== c ? c : new ka();
    this.material = void 0 !== a ? a : new Ya();
    this.updateMorphTargets();
  }
  function Za(c, a) {
    yb.call(this, c, a);
    this.type = "LineSegments";
  }
  function $f(c, a) {
    yb.call(this, c, a);
    this.type = "LineLoop";
  }
  function Rb(c) {
    ra.call(this);
    this.type = "PointsMaterial";
    this.color = new S(16777215);
    this.alphaMap = this.map = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.morphTargets = !1;
    this.setValues(c);
  }
  function Pd(c, a) {
    ha.call(this);
    this.type = "Points";
    this.geometry = void 0 !== c ? c : new ka();
    this.material = void 0 !== a ? a : new Rb();
    this.updateMorphTargets();
  }
  function vh(c, a, b, d, e, f, g) {
    var h = wh.distanceSqToPoint(c);
    h < b &&
      ((b = new w()),
      wh.closestPointToPoint(c, b),
      b.applyMatrix4(d),
      (c = e.ray.origin.distanceTo(b)),
      c < e.near ||
        c > e.far ||
        f.push({
          distance: c,
          distanceToRay: Math.sqrt(h),
          point: b,
          index: a,
          face: null,
          object: g,
        }));
  }
  function xh(c, a, b, d, e, f, g, h, k) {
    function l() {
      m.needsUpdate = !0;
      c.requestVideoFrameCallback(l);
    }
    Oa.call(this, c, a, b, d, e, f, g, h, k);
    this.format = void 0 !== g ? g : 1022;
    this.minFilter = void 0 !== f ? f : 1006;
    this.magFilter = void 0 !== e ? e : 1006;
    this.generateMipmaps = !1;
    var m = this;
    "requestVideoFrameCallback" in c && c.requestVideoFrameCallback(l);
  }
  function Qd(c, a, b, d, e, f, g, h, k, l, m, n) {
    Oa.call(this, null, f, g, h, k, l, d, e, m, n);
    this.image = { width: a, height: b };
    this.mipmaps = c;
    this.generateMipmaps = this.flipY = !1;
  }
  function Te(c, a, b, d, e, f, g, h, k) {
    Oa.call(this, c, a, b, d, e, f, g, h, k);
    this.needsUpdate = !0;
  }
  function Ue(c, a, b, d, e, f, g, h, k, l) {
    l = void 0 !== l ? l : 1026;
    if (1026 !== l && 1027 !== l)
      throw Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === b && 1026 === l && (b = 1012);
    void 0 === b && 1027 === l && (b = 1020);
    Oa.call(this, null, d, e, f, g, h, l, b, k);
    this.image = { width: c, height: a };
    this.magFilter = void 0 !== g ? g : 1003;
    this.minFilter = void 0 !== h ? h : 1003;
    this.generateMipmaps = this.flipY = !1;
  }
  function Rd(c) {
    ka.call(this);
    this.type = "WireframeGeometry";
    var a = [],
      b = [0, 0],
      d = {},
      e = ["a", "b", "c"];
    if (c && c.isGeometry) {
      for (var f = c.faces, g = 0, h = f.length; g < h; g++)
        for (var k = f[g], l = 0; 3 > l; l++) {
          var m = k[e[l]],
            n = k[e[(l + 1) % 3]];
          b[0] = Math.min(m, n);
          b[1] = Math.max(m, n);
          m = b[0] + "," + b[1];
          void 0 === d[m] && (d[m] = { index1: b[0], index2: b[1] });
        }
      for (var p in d)
        (b = d[p]),
          (f = c.vertices[b.index1]),
          a.push(f.x, f.y, f.z),
          (f = c.vertices[b.index2]),
          a.push(f.x, f.y, f.z);
    } else if (c && c.isBufferGeometry)
      if (((p = new w()), null !== c.index)) {
        e = c.attributes.position;
        g = c.index;
        c = c.groups;
        0 === c.length &&
          (c = [{ start: 0, count: g.count, materialIndex: 0 }]);
        h = 0;
        for (k = c.length; h < k; ++h)
          for (m = c[h], l = n = m.start, m = n + m.count; l < m; l += 3)
            for (n = 0; 3 > n; n++) {
              var t = g.getX(l + n),
                q = g.getX(l + ((n + 1) % 3));
              b[0] = Math.min(t, q);
              b[1] = Math.max(t, q);
              t = b[0] + "," + b[1];
              void 0 === d[t] && (d[t] = { index1: b[0], index2: b[1] });
            }
        for (f in d)
          (b = d[f]),
            p.fromBufferAttribute(e, b.index1),
            a.push(p.x, p.y, p.z),
            p.fromBufferAttribute(e, b.index2),
            a.push(p.x, p.y, p.z);
      } else
        for (d = c.attributes.position, b = 0, f = d.count / 3; b < f; b++)
          for (c = 0; 3 > c; c++)
            p.fromBufferAttribute(d, 3 * b + c),
              a.push(p.x, p.y, p.z),
              p.fromBufferAttribute(d, 3 * b + ((c + 1) % 3)),
              a.push(p.x, p.y, p.z);
    this.setAttribute("position", new ea(a, 3));
  }
  function Ve(c, a, b) {
    sa.call(this);
    this.type = "ParametricGeometry";
    this.parameters = { func: c, slices: a, stacks: b };
    this.fromBufferGeometry(new Sd(c, a, b));
    this.mergeVertices();
  }
  function Sd(c, a, b) {
    ka.call(this);
    this.type = "ParametricBufferGeometry";
    this.parameters = { func: c, slices: a, stacks: b };
    var d = [],
      e = [],
      f = [],
      g = [],
      h = new w(),
      k = new w(),
      l = new w(),
      m = new w(),
      n = new w();
    3 > c.length &&
      console.error(
        "THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter."
      );
    for (var p = a + 1, t = 0; t <= b; t++)
      for (var q = t / b, v = 0; v <= a; v++) {
        var u = v / a;
        c(u, q, k);
        e.push(k.x, k.y, k.z);
        0 <= u - 1e-5
          ? (c(u - 1e-5, q, l), m.subVectors(k, l))
          : (c(u + 1e-5, q, l), m.subVectors(l, k));
        0 <= q - 1e-5
          ? (c(u, q - 1e-5, l), n.subVectors(k, l))
          : (c(u, q + 1e-5, l), n.subVectors(l, k));
        h.crossVectors(m, n).normalize();
        f.push(h.x, h.y, h.z);
        g.push(u, q);
      }
    for (c = 0; c < b; c++)
      for (h = 0; h < a; h++)
        (k = c * p + h + 1),
          (l = (c + 1) * p + h + 1),
          (m = (c + 1) * p + h),
          d.push(c * p + h, k, m),
          d.push(k, l, m);
    this.setIndex(d);
    this.setAttribute("position", new ea(e, 3));
    this.setAttribute("normal", new ea(f, 3));
    this.setAttribute("uv", new ea(g, 2));
  }
  function We(c, a, b, d) {
    sa.call(this);
    this.type = "PolyhedronGeometry";
    this.parameters = { vertices: c, indices: a, radius: b, detail: d };
    this.fromBufferGeometry(new zb(c, a, b, d));
    this.mergeVertices();
  }
  function zb(c, a, b, d) {
    function e(l) {
      h.push(l.x, l.y, l.z);
    }
    function f(l, m) {
      l *= 3;
      m.x = c[l + 0];
      m.y = c[l + 1];
      m.z = c[l + 2];
    }
    function g(l, m, n, p) {
      0 > p && 1 === l.x && (k[m] = l.x - 1);
      0 === n.x && 0 === n.z && (k[m] = p / 2 / Math.PI + 0.5);
    }
    ka.call(this);
    this.type = "PolyhedronBufferGeometry";
    this.parameters = { vertices: c, indices: a, radius: b, detail: d };
    b = b || 1;
    d = d || 0;
    var h = [],
      k = [];
    (function (l) {
      for (
        var m = new w(), n = new w(), p = new w(), t = 0;
        t < a.length;
        t += 3
      ) {
        f(a[t + 0], m);
        f(a[t + 1], n);
        f(a[t + 2], p);
        for (
          var q = m, v = n, u = p, A = Math.pow(2, l), B = [], D = 0;
          D <= A;
          D++
        ) {
          B[D] = [];
          for (
            var G = q.clone().lerp(u, D / A),
              I = v.clone().lerp(u, D / A),
              E = A - D,
              H = 0;
            H <= E;
            H++
          )
            B[D][H] = 0 === H && D === A ? G : G.clone().lerp(I, H / E);
        }
        for (q = 0; q < A; q++)
          for (v = 0; v < 2 * (A - q) - 1; v++)
            (u = Math.floor(v / 2)),
              0 === v % 2
                ? (e(B[q][u + 1]), e(B[q + 1][u]), e(B[q][u]))
                : (e(B[q][u + 1]), e(B[q + 1][u + 1]), e(B[q + 1][u]));
      }
    })(d);
    (function (l) {
      for (var m = new w(), n = 0; n < h.length; n += 3)
        (m.x = h[n + 0]),
          (m.y = h[n + 1]),
          (m.z = h[n + 2]),
          m.normalize().multiplyScalar(l),
          (h[n + 0] = m.x),
          (h[n + 1] = m.y),
          (h[n + 2] = m.z);
    })(b);
    (function () {
      for (var l = new w(), m = 0; m < h.length; m += 3)
        (l.x = h[m + 0]),
          (l.y = h[m + 1]),
          (l.z = h[m + 2]),
          k.push(
            Math.atan2(l.z, -l.x) / 2 / Math.PI + 0.5,
            1 -
              (Math.atan2(-l.y, Math.sqrt(l.x * l.x + l.z * l.z)) / Math.PI +
                0.5)
          );
      l = new w();
      m = new w();
      for (
        var n = new w(),
          p = new w(),
          t = new L(),
          q = new L(),
          v = new L(),
          u = 0,
          A = 0;
        u < h.length;
        u += 9, A += 6
      ) {
        l.set(h[u + 0], h[u + 1], h[u + 2]);
        m.set(h[u + 3], h[u + 4], h[u + 5]);
        n.set(h[u + 6], h[u + 7], h[u + 8]);
        t.set(k[A + 0], k[A + 1]);
        q.set(k[A + 2], k[A + 3]);
        v.set(k[A + 4], k[A + 5]);
        p.copy(l).add(m).add(n).divideScalar(3);
        var B = Math.atan2(p.z, -p.x);
        g(t, A + 0, l, B);
        g(q, A + 2, m, B);
        g(v, A + 4, n, B);
      }
      for (l = 0; l < k.length; l += 6)
        (m = k[l + 0]),
          (n = k[l + 2]),
          (p = k[l + 4]),
          (t = Math.min(m, n, p)),
          0.9 < Math.max(m, n, p) &&
            0.1 > t &&
            (0.2 > m && (k[l + 0] += 1),
            0.2 > n && (k[l + 2] += 1),
            0.2 > p && (k[l + 4] += 1));
    })();
    this.setAttribute("position", new ea(h, 3));
    this.setAttribute("normal", new ea(h.slice(), 3));
    this.setAttribute("uv", new ea(k, 2));
    0 === d ? this.computeVertexNormals() : this.normalizeNormals();
  }
  function Xe(c, a) {
    sa.call(this);
    this.type = "TetrahedronGeometry";
    this.parameters = { radius: c, detail: a };
    this.fromBufferGeometry(new Td(c, a));
    this.mergeVertices();
  }
  function Td(c, a) {
    zb.call(
      this,
      [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
      c,
      a
    );
    this.type = "TetrahedronBufferGeometry";
    this.parameters = { radius: c, detail: a };
  }
  function Ye(c, a) {
    sa.call(this);
    this.type = "OctahedronGeometry";
    this.parameters = { radius: c, detail: a };
    this.fromBufferGeometry(new fd(c, a));
    this.mergeVertices();
  }
  function fd(c, a) {
    zb.call(
      this,
      [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2],
      c,
      a
    );
    this.type = "OctahedronBufferGeometry";
    this.parameters = { radius: c, detail: a };
  }
  function Ze(c, a) {
    sa.call(this);
    this.type = "IcosahedronGeometry";
    this.parameters = { radius: c, detail: a };
    this.fromBufferGeometry(new Ud(c, a));
    this.mergeVertices();
  }
  function Ud(c, a) {
    var b = (1 + Math.sqrt(5)) / 2;
    zb.call(
      this,
      [
        -1,
        b,
        0,
        1,
        b,
        0,
        -1,
        -b,
        0,
        1,
        -b,
        0,
        0,
        -1,
        b,
        0,
        1,
        b,
        0,
        -1,
        -b,
        0,
        1,
        -b,
        b,
        0,
        -1,
        b,
        0,
        1,
        -b,
        0,
        -1,
        -b,
        0,
        1,
      ],
      [
        0,
        11,
        5,
        0,
        5,
        1,
        0,
        1,
        7,
        0,
        7,
        10,
        0,
        10,
        11,
        1,
        5,
        9,
        5,
        11,
        4,
        11,
        10,
        2,
        10,
        7,
        6,
        7,
        1,
        8,
        3,
        9,
        4,
        3,
        4,
        2,
        3,
        2,
        6,
        3,
        6,
        8,
        3,
        8,
        9,
        4,
        9,
        5,
        2,
        4,
        11,
        6,
        2,
        10,
        8,
        6,
        7,
        9,
        8,
        1,
      ],
      c,
      a
    );
    this.type = "IcosahedronBufferGeometry";
    this.parameters = { radius: c, detail: a };
  }
  function $e(c, a) {
    sa.call(this);
    this.type = "DodecahedronGeometry";
    this.parameters = { radius: c, detail: a };
    this.fromBufferGeometry(new Vd(c, a));
    this.mergeVertices();
  }
  function Vd(c, a) {
    var b = (1 + Math.sqrt(5)) / 2,
      d = 1 / b;
    zb.call(
      this,
      [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -d,
        -b,
        0,
        -d,
        b,
        0,
        d,
        -b,
        0,
        d,
        b,
        -d,
        -b,
        0,
        -d,
        b,
        0,
        d,
        -b,
        0,
        d,
        b,
        0,
        -b,
        0,
        -d,
        b,
        0,
        -d,
        -b,
        0,
        d,
        b,
        0,
        d,
      ],
      [
        3,
        11,
        7,
        3,
        7,
        15,
        3,
        15,
        13,
        7,
        19,
        17,
        7,
        17,
        6,
        7,
        6,
        15,
        17,
        4,
        8,
        17,
        8,
        10,
        17,
        10,
        6,
        8,
        0,
        16,
        8,
        16,
        2,
        8,
        2,
        10,
        0,
        12,
        1,
        0,
        1,
        18,
        0,
        18,
        16,
        6,
        10,
        2,
        6,
        2,
        13,
        6,
        13,
        15,
        2,
        16,
        18,
        2,
        18,
        3,
        2,
        3,
        13,
        18,
        1,
        9,
        18,
        9,
        11,
        18,
        11,
        3,
        4,
        14,
        12,
        4,
        12,
        0,
        4,
        0,
        8,
        11,
        9,
        5,
        11,
        5,
        19,
        11,
        19,
        7,
        19,
        5,
        14,
        19,
        14,
        4,
        19,
        4,
        17,
        1,
        12,
        14,
        1,
        14,
        5,
        1,
        5,
        9,
      ],
      c,
      a
    );
    this.type = "DodecahedronBufferGeometry";
    this.parameters = { radius: c, detail: a };
  }
  function af(c, a, b, d, e, f) {
    sa.call(this);
    this.type = "TubeGeometry";
    this.parameters = {
      path: c,
      tubularSegments: a,
      radius: b,
      radialSegments: d,
      closed: e,
    };
    void 0 !== f && console.warn("THREE.TubeGeometry: taper has been removed.");
    c = new gd(c, a, b, d, e);
    this.tangents = c.tangents;
    this.normals = c.normals;
    this.binormals = c.binormals;
    this.fromBufferGeometry(c);
    this.mergeVertices();
  }
  function gd(c, a, b, d, e) {
    function f(v) {
      m = c.getPointAt(v / a, m);
      var u = g.normals[v];
      v = g.binormals[v];
      for (var A = 0; A <= d; A++) {
        var B = (A / d) * Math.PI * 2,
          D = Math.sin(B);
        B = -Math.cos(B);
        k.x = B * u.x + D * v.x;
        k.y = B * u.y + D * v.y;
        k.z = B * u.z + D * v.z;
        k.normalize();
        p.push(k.x, k.y, k.z);
        h.x = m.x + b * k.x;
        h.y = m.y + b * k.y;
        h.z = m.z + b * k.z;
        n.push(h.x, h.y, h.z);
      }
    }
    ka.call(this);
    this.type = "TubeBufferGeometry";
    this.parameters = {
      path: c,
      tubularSegments: a,
      radius: b,
      radialSegments: d,
      closed: e,
    };
    a = a || 64;
    b = b || 1;
    d = d || 8;
    e = e || !1;
    var g = c.computeFrenetFrames(a, e);
    this.tangents = g.tangents;
    this.normals = g.normals;
    this.binormals = g.binormals;
    var h = new w(),
      k = new w(),
      l = new L(),
      m = new w(),
      n = [],
      p = [],
      t = [],
      q = [];
    (function () {
      for (var v = 0; v < a; v++) f(v);
      f(!1 === e ? a : 0);
      for (v = 0; v <= a; v++)
        for (var u = 0; u <= d; u++)
          (l.x = v / a), (l.y = u / d), t.push(l.x, l.y);
      for (v = 1; v <= a; v++)
        for (u = 1; u <= d; u++) {
          var A = (d + 1) * v + (u - 1),
            B = (d + 1) * v + u,
            D = (d + 1) * (v - 1) + u;
          q.push((d + 1) * (v - 1) + (u - 1), A, D);
          q.push(A, B, D);
        }
    })();
    this.setIndex(q);
    this.setAttribute("position", new ea(n, 3));
    this.setAttribute("normal", new ea(p, 3));
    this.setAttribute("uv", new ea(t, 2));
  }
  function bf(c, a, b, d, e, f, g) {
    sa.call(this);
    this.type = "TorusKnotGeometry";
    this.parameters = {
      radius: c,
      tube: a,
      tubularSegments: b,
      radialSegments: d,
      p: e,
      q: f,
    };
    void 0 !== g &&
      console.warn(
        "THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."
      );
    this.fromBufferGeometry(new Wd(c, a, b, d, e, f));
    this.mergeVertices();
  }
  function Wd(c, a, b, d, e, f) {
    function g(E, H, M, F, K) {
      var P = Math.sin(E);
      H = (M / H) * E;
      M = Math.cos(H);
      K.x = F * (2 + M) * 0.5 * Math.cos(E);
      K.y = F * (2 + M) * P * 0.5;
      K.z = F * Math.sin(H) * 0.5;
    }
    ka.call(this);
    this.type = "TorusKnotBufferGeometry";
    this.parameters = {
      radius: c,
      tube: a,
      tubularSegments: b,
      radialSegments: d,
      p: e,
      q: f,
    };
    c = c || 1;
    a = a || 0.4;
    b = Math.floor(b) || 64;
    d = Math.floor(d) || 8;
    e = e || 2;
    f = f || 3;
    for (
      var h = [],
        k = [],
        l = [],
        m = [],
        n = new w(),
        p = new w(),
        t = new w(),
        q = new w(),
        v = new w(),
        u = new w(),
        A = new w(),
        B = 0;
      B <= b;
      ++B
    ) {
      var D = (B / b) * e * Math.PI * 2;
      g(D, e, f, c, t);
      g(D + 0.01, e, f, c, q);
      u.subVectors(q, t);
      A.addVectors(q, t);
      v.crossVectors(u, A);
      A.crossVectors(v, u);
      v.normalize();
      A.normalize();
      for (D = 0; D <= d; ++D) {
        var G = (D / d) * Math.PI * 2,
          I = -a * Math.cos(G);
        G = a * Math.sin(G);
        n.x = t.x + (I * A.x + G * v.x);
        n.y = t.y + (I * A.y + G * v.y);
        n.z = t.z + (I * A.z + G * v.z);
        k.push(n.x, n.y, n.z);
        p.subVectors(n, t).normalize();
        l.push(p.x, p.y, p.z);
        m.push(B / b);
        m.push(D / d);
      }
    }
    for (c = 1; c <= b; c++)
      for (a = 1; a <= d; a++)
        (e = (d + 1) * c + (a - 1)),
          (f = (d + 1) * c + a),
          (n = (d + 1) * (c - 1) + a),
          h.push((d + 1) * (c - 1) + (a - 1), e, n),
          h.push(e, f, n);
    this.setIndex(h);
    this.setAttribute("position", new ea(k, 3));
    this.setAttribute("normal", new ea(l, 3));
    this.setAttribute("uv", new ea(m, 2));
  }
  function cf(c, a, b, d, e) {
    sa.call(this);
    this.type = "TorusGeometry";
    this.parameters = {
      radius: c,
      tube: a,
      radialSegments: b,
      tubularSegments: d,
      arc: e,
    };
    this.fromBufferGeometry(new Xd(c, a, b, d, e));
    this.mergeVertices();
  }
  function Xd(c, a, b, d, e) {
    ka.call(this);
    this.type = "TorusBufferGeometry";
    this.parameters = {
      radius: c,
      tube: a,
      radialSegments: b,
      tubularSegments: d,
      arc: e,
    };
    c = c || 1;
    a = a || 0.4;
    b = Math.floor(b) || 8;
    d = Math.floor(d) || 6;
    e = e || 2 * Math.PI;
    for (
      var f = [],
        g = [],
        h = [],
        k = [],
        l = new w(),
        m = new w(),
        n = new w(),
        p = 0;
      p <= b;
      p++
    )
      for (var t = 0; t <= d; t++) {
        var q = (t / d) * e,
          v = (p / b) * Math.PI * 2;
        m.x = (c + a * Math.cos(v)) * Math.cos(q);
        m.y = (c + a * Math.cos(v)) * Math.sin(q);
        m.z = a * Math.sin(v);
        g.push(m.x, m.y, m.z);
        l.x = c * Math.cos(q);
        l.y = c * Math.sin(q);
        n.subVectors(m, l).normalize();
        h.push(n.x, n.y, n.z);
        k.push(t / d);
        k.push(p / b);
      }
    for (c = 1; c <= b; c++)
      for (a = 1; a <= d; a++)
        (e = (d + 1) * (c - 1) + a - 1),
          (l = (d + 1) * (c - 1) + a),
          (m = (d + 1) * c + a),
          f.push((d + 1) * c + a - 1, e, m),
          f.push(e, l, m);
    this.setIndex(f);
    this.setAttribute("position", new ea(g, 3));
    this.setAttribute("normal", new ea(h, 3));
    this.setAttribute("uv", new ea(k, 2));
  }
  function bj(c, a, b, d, e) {
    for (var f, g = 0, h = a, k = b - d; h < b; h += d)
      (g += (c[k] - c[h]) * (c[h + 1] + c[k + 1])), (k = h);
    if (e === 0 < g) for (e = a; e < b; e += d) f = cj(e, c[e], c[e + 1], f);
    else for (e = b - d; e >= a; e -= d) f = cj(e, c[e], c[e + 1], f);
    f && ag(f, f.next) && (df(f), (f = f.next));
    return f;
  }
  function Mc(c, a) {
    if (!c) return c;
    a || (a = c);
    do {
      var b = !1;
      if (c.steiner || (!ag(c, c.next) && 0 !== ab(c.prev, c, c.next)))
        c = c.next;
      else {
        df(c);
        c = a = c.prev;
        if (c === c.next) break;
        b = !0;
      }
    } while (b || c !== a);
    return a;
  }
  function ef(c, a, b, d, e, f, g) {
    if (c) {
      if (!g && f) {
        var h = c,
          k = h;
        do
          null === k.z && (k.z = yh(k.x, k.y, d, e, f)),
            (k.prevZ = k.prev),
            (k = k.nextZ = k.next);
        while (k !== h);
        k.prevZ.nextZ = null;
        k.prevZ = null;
        h = k;
        var l,
          m,
          n,
          p,
          t = 1;
        do {
          k = h;
          var q = (h = null);
          for (m = 0; k; ) {
            m++;
            var v = k;
            for (l = n = 0; l < t && (n++, (v = v.nextZ), v); l++);
            for (p = t; 0 < n || (0 < p && v); )
              0 !== n && (0 === p || !v || k.z <= v.z)
                ? ((l = k), (k = k.nextZ), n--)
                : ((l = v), (v = v.nextZ), p--),
                q ? (q.nextZ = l) : (h = l),
                (l.prevZ = q),
                (q = l);
            k = v;
          }
          q.nextZ = null;
          t *= 2;
        } while (1 < m);
      }
      for (h = c; c.prev !== c.next; ) {
        k = c.prev;
        v = c.next;
        if (f) q = Fl(c, d, e, f);
        else
          a: if (
            ((q = c), (m = q.prev), (n = q), (t = q.next), 0 <= ab(m, n, t))
          )
            q = !1;
          else {
            for (l = q.next.next; l !== q.prev; ) {
              if (
                Yd(m.x, m.y, n.x, n.y, t.x, t.y, l.x, l.y) &&
                0 <= ab(l.prev, l, l.next)
              ) {
                q = !1;
                break a;
              }
              l = l.next;
            }
            q = !0;
          }
        if (q)
          a.push(k.i / b),
            a.push(c.i / b),
            a.push(v.i / b),
            df(c),
            (h = c = v.next);
        else if (((c = v), c === h)) {
          if (!g) ef(Mc(c), a, b, d, e, f, 1);
          else if (1 === g) {
            c = Mc(c);
            g = a;
            h = b;
            k = c;
            do
              (v = k.prev),
                (q = k.next.next),
                !ag(v, q) &&
                  dj(v, k, k.next, q) &&
                  ff(v, q) &&
                  ff(q, v) &&
                  (g.push(v.i / h),
                  g.push(k.i / h),
                  g.push(q.i / h),
                  df(k),
                  df(k.next),
                  (k = c = q)),
                (k = k.next);
            while (k !== c);
            c = Mc(k);
            ef(c, a, b, d, e, f, 2);
          } else if (2 === g)
            a: {
              g = c;
              do {
                for (h = g.next.next; h !== g.prev; ) {
                  if ((k = g.i !== h.i)) {
                    k = g;
                    v = h;
                    if ((q = k.next.i !== v.i && k.prev.i !== v.i)) {
                      b: {
                        q = k;
                        do {
                          if (
                            q.i !== k.i &&
                            q.next.i !== k.i &&
                            q.i !== v.i &&
                            q.next.i !== v.i &&
                            dj(q, q.next, k, v)
                          ) {
                            q = !0;
                            break b;
                          }
                          q = q.next;
                        } while (q !== k);
                        q = !1;
                      }
                      q = !q;
                    }
                    if (q) {
                      if ((q = ff(k, v) && ff(v, k))) {
                        q = k;
                        m = !1;
                        n = (k.x + v.x) / 2;
                        t = (k.y + v.y) / 2;
                        do
                          q.y > t !== q.next.y > t &&
                            q.next.y !== q.y &&
                            n <
                              ((q.next.x - q.x) * (t - q.y)) /
                                (q.next.y - q.y) +
                                q.x &&
                            (m = !m),
                            (q = q.next);
                        while (q !== k);
                        q = m;
                      }
                      q =
                        (q && (ab(k.prev, k, v.prev) || ab(k, v.prev, v))) ||
                        (ag(k, v) &&
                          0 < ab(k.prev, k, k.next) &&
                          0 < ab(v.prev, v, v.next));
                    }
                    k = q;
                  }
                  if (k) {
                    c = ej(g, h);
                    g = Mc(g, g.next);
                    c = Mc(c, c.next);
                    ef(g, a, b, d, e, f);
                    ef(c, a, b, d, e, f);
                    break a;
                  }
                  h = h.next;
                }
                g = g.next;
              } while (g !== c);
            }
          break;
        }
      }
    }
  }
  function Fl(c, a, b, d) {
    var e = c.prev,
      f = c.next;
    if (0 <= ab(e, c, f)) return !1;
    var g = e.x > c.x ? (e.x > f.x ? e.x : f.x) : c.x > f.x ? c.x : f.x,
      h = e.y > c.y ? (e.y > f.y ? e.y : f.y) : c.y > f.y ? c.y : f.y,
      k = yh(
        e.x < c.x ? (e.x < f.x ? e.x : f.x) : c.x < f.x ? c.x : f.x,
        e.y < c.y ? (e.y < f.y ? e.y : f.y) : c.y < f.y ? c.y : f.y,
        a,
        b,
        d
      );
    a = yh(g, h, a, b, d);
    b = c.prevZ;
    for (d = c.nextZ; b && b.z >= k && d && d.z <= a; ) {
      if (
        b !== c.prev &&
        b !== c.next &&
        Yd(e.x, e.y, c.x, c.y, f.x, f.y, b.x, b.y) &&
        0 <= ab(b.prev, b, b.next)
      )
        return !1;
      b = b.prevZ;
      if (
        d !== c.prev &&
        d !== c.next &&
        Yd(e.x, e.y, c.x, c.y, f.x, f.y, d.x, d.y) &&
        0 <= ab(d.prev, d, d.next)
      )
        return !1;
      d = d.nextZ;
    }
    for (; b && b.z >= k; ) {
      if (
        b !== c.prev &&
        b !== c.next &&
        Yd(e.x, e.y, c.x, c.y, f.x, f.y, b.x, b.y) &&
        0 <= ab(b.prev, b, b.next)
      )
        return !1;
      b = b.prevZ;
    }
    for (; d && d.z <= a; ) {
      if (
        d !== c.prev &&
        d !== c.next &&
        Yd(e.x, e.y, c.x, c.y, f.x, f.y, d.x, d.y) &&
        0 <= ab(d.prev, d, d.next)
      )
        return !1;
      d = d.nextZ;
    }
    return !0;
  }
  function Gl(c, a) {
    return c.x - a.x;
  }
  function Hl(c, a) {
    var b = a,
      d = c.x,
      e = c.y,
      f = -Infinity;
    do {
      if (e <= b.y && e >= b.next.y && b.next.y !== b.y) {
        var g = b.x + ((e - b.y) * (b.next.x - b.x)) / (b.next.y - b.y);
        if (g <= d && g > f) {
          f = g;
          if (g === d) {
            if (e === b.y) return b;
            if (e === b.next.y) return b.next;
          }
          var h = b.x < b.next.x ? b : b.next;
        }
      }
      b = b.next;
    } while (b !== a);
    if (!h) return null;
    if (d === f) return h;
    a = h;
    g = h.x;
    var k = h.y,
      l = Infinity;
    b = h;
    do {
      if (
        d >= b.x &&
        b.x >= g &&
        d !== b.x &&
        Yd(e < k ? d : f, e, g, k, e < k ? f : d, e, b.x, b.y)
      ) {
        var m = Math.abs(e - b.y) / (d - b.x);
        var n;
        if (
          (n = ff(b, c)) &&
          !(n = m < l) &&
          (n = m === l) &&
          !(n = b.x > h.x) &&
          (n = b.x === h.x)
        ) {
          n = h;
          var p = b;
          n = 0 > ab(n.prev, n, p.prev) && 0 > ab(p.next, n, n.next);
        }
        n && ((h = b), (l = m));
      }
      b = b.next;
    } while (b !== a);
    return h;
  }
  function yh(c, a, b, d, e) {
    c = 32767 * (c - b) * e;
    a = 32767 * (a - d) * e;
    c = (c | (c << 8)) & 16711935;
    c = (c | (c << 4)) & 252645135;
    c = (c | (c << 2)) & 858993459;
    a = (a | (a << 8)) & 16711935;
    a = (a | (a << 4)) & 252645135;
    a = (a | (a << 2)) & 858993459;
    return ((c | (c << 1)) & 1431655765) | (((a | (a << 1)) & 1431655765) << 1);
  }
  function Il(c) {
    var a = c,
      b = c;
    do {
      if (a.x < b.x || (a.x === b.x && a.y < b.y)) b = a;
      a = a.next;
    } while (a !== c);
    return b;
  }
  function Yd(c, a, b, d, e, f, g, h) {
    return (
      0 <= (e - g) * (a - h) - (c - g) * (f - h) &&
      0 <= (c - g) * (d - h) - (b - g) * (a - h) &&
      0 <= (b - g) * (f - h) - (e - g) * (d - h)
    );
  }
  function ab(c, a, b) {
    return (a.y - c.y) * (b.x - a.x) - (a.x - c.x) * (b.y - a.y);
  }
  function ag(c, a) {
    return c.x === a.x && c.y === a.y;
  }
  function dj(c, a, b, d) {
    var e = bg(ab(c, a, b)),
      f = bg(ab(c, a, d)),
      g = bg(ab(b, d, c)),
      h = bg(ab(b, d, a));
    return (e !== f && g !== h) ||
      (0 === e && cg(c, b, a)) ||
      (0 === f && cg(c, d, a)) ||
      (0 === g && cg(b, c, d)) ||
      (0 === h && cg(b, a, d))
      ? !0
      : !1;
  }
  function cg(c, a, b) {
    return (
      a.x <= Math.max(c.x, b.x) &&
      a.x >= Math.min(c.x, b.x) &&
      a.y <= Math.max(c.y, b.y) &&
      a.y >= Math.min(c.y, b.y)
    );
  }
  function bg(c) {
    return 0 < c ? 1 : 0 > c ? -1 : 0;
  }
  function ff(c, a) {
    return 0 > ab(c.prev, c, c.next)
      ? 0 <= ab(c, a, c.next) && 0 <= ab(c, c.prev, a)
      : 0 > ab(c, a, c.prev) || 0 > ab(c, c.next, a);
  }
  function ej(c, a) {
    var b = new zh(c.i, c.x, c.y),
      d = new zh(a.i, a.x, a.y),
      e = c.next,
      f = a.prev;
    c.next = a;
    a.prev = c;
    b.next = e;
    e.prev = b;
    d.next = b;
    b.prev = d;
    f.next = d;
    d.prev = f;
    return d;
  }
  function cj(c, a, b, d) {
    c = new zh(c, a, b);
    d
      ? ((c.next = d.next), (c.prev = d), (d.next.prev = c), (d.next = c))
      : ((c.prev = c), (c.next = c));
    return c;
  }
  function df(c) {
    c.next.prev = c.prev;
    c.prev.next = c.next;
    c.prevZ && (c.prevZ.nextZ = c.nextZ);
    c.nextZ && (c.nextZ.prevZ = c.prevZ);
  }
  function zh(c, a, b) {
    this.i = c;
    this.x = a;
    this.y = b;
    this.nextZ = this.prevZ = this.z = this.next = this.prev = null;
    this.steiner = !1;
  }
  function fj(c) {
    var a = c.length;
    2 < a && c[a - 1].equals(c[0]) && c.pop();
  }
  function gj(c, a) {
    for (var b = 0; b < a.length; b++) c.push(a[b].x), c.push(a[b].y);
  }
  function hd(c, a) {
    sa.call(this);
    this.type = "ExtrudeGeometry";
    this.parameters = { shapes: c, options: a };
    this.fromBufferGeometry(new bc(c, a));
    this.mergeVertices();
  }
  function bc(c, a) {
    function b(k) {
      function l(U, la, wa) {
        la || console.error("THREE.ExtrudeGeometry: vec does not exist");
        return la.clone().multiplyScalar(wa).add(U);
      }
      function m(U, la, wa) {
        var R = U.x - la.x;
        var qa = U.y - la.y;
        var Ea = wa.x - U.x;
        var Ca = wa.y - U.y,
          Ka = R * R + qa * qa;
        if (Math.abs(R * Ca - qa * Ea) > Number.EPSILON) {
          var Ra = Math.sqrt(Ka),
            kb = Math.sqrt(Ea * Ea + Ca * Ca);
          Ka = la.x - qa / Ra;
          la = la.y + R / Ra;
          Ca =
            ((wa.x - Ca / kb - Ka) * Ca - (wa.y + Ea / kb - la) * Ea) /
            (R * Ca - qa * Ea);
          Ea = Ka + R * Ca - U.x;
          R = la + qa * Ca - U.y;
          qa = Ea * Ea + R * R;
          if (2 >= qa) return new L(Ea, R);
          qa = Math.sqrt(qa / 2);
        } else (U = !1), R > Number.EPSILON ? Ea > Number.EPSILON && (U = !0) : R < -Number.EPSILON ? Ea < -Number.EPSILON && (U = !0) : Math.sign(qa) === Math.sign(Ca) && (U = !0), U ? ((Ea = -qa), (qa = Math.sqrt(Ka))) : ((Ea = R), (R = qa), (qa = Math.sqrt(Ka / 2)));
        return new L(Ea / qa, R / qa);
      }
      function n(U, la) {
        for (var wa = U.length; 0 <= --wa; ) {
          var R = wa,
            qa = wa - 1;
          0 > qa && (qa = U.length - 1);
          for (var Ea = 0, Ca = B + 2 * M; Ea < Ca; Ea++) {
            var Ka = fb * Ea,
              Ra = fb * (Ea + 1),
              kb = la + qa + Ka,
              mc = la + qa + Ra;
            Ra = la + R + Ra;
            q(la + R + Ka);
            q(kb);
            q(Ra);
            q(kb);
            q(mc);
            q(Ra);
            Ka = e.length / 3;
            Ka = K.generateSideWallUV(d, e, Ka - 6, Ka - 3, Ka - 2, Ka - 1);
            v(Ka[0]);
            v(Ka[1]);
            v(Ka[3]);
            v(Ka[1]);
            v(Ka[2]);
            v(Ka[3]);
          }
        }
      }
      function p(U, la, wa) {
        u.push(U);
        u.push(la);
        u.push(wa);
      }
      function t(U, la, wa) {
        q(U);
        q(la);
        q(wa);
        U = e.length / 3;
        U = K.generateTopUV(d, e, U - 3, U - 2, U - 1);
        v(U[0]);
        v(U[1]);
        v(U[2]);
      }
      function q(U) {
        e.push(u[3 * U]);
        e.push(u[3 * U + 1]);
        e.push(u[3 * U + 2]);
      }
      function v(U) {
        f.push(U.x);
        f.push(U.y);
      }
      var u = [],
        A = void 0 !== a.curveSegments ? a.curveSegments : 12,
        B = void 0 !== a.steps ? a.steps : 1,
        D = void 0 !== a.depth ? a.depth : 100,
        G = void 0 !== a.bevelEnabled ? a.bevelEnabled : !0,
        I = void 0 !== a.bevelThickness ? a.bevelThickness : 6,
        E = void 0 !== a.bevelSize ? a.bevelSize : I - 2,
        H = void 0 !== a.bevelOffset ? a.bevelOffset : 0,
        M = void 0 !== a.bevelSegments ? a.bevelSegments : 3,
        F = a.extrudePath,
        K = void 0 !== a.UVGenerator ? a.UVGenerator : Jl;
      void 0 !== a.amount &&
        (console.warn(
          "THREE.ExtrudeBufferGeometry: amount has been renamed to depth."
        ),
        (D = a.amount));
      var P = !1;
      if (F) {
        var V = F.getSpacedPoints(B);
        P = !0;
        G = !1;
        var ia = F.computeFrenetFrames(B, !1);
        var W = new w();
        var aa = new w();
        var Z = new w();
      }
      G || (H = E = I = M = 0);
      k = k.extractPoints(A);
      F = k.shape;
      var ja = k.holes;
      if (!nc.isClockWise(F))
        for (F = F.reverse(), k = 0, A = ja.length; k < A; k++) {
          var Aa = ja[k];
          nc.isClockWise(Aa) && (ja[k] = Aa.reverse());
        }
      var Xa = nc.triangulateShape(F, ja),
        bb = F;
      k = 0;
      for (A = ja.length; k < A; k++) F = F.concat(ja[k]);
      var fb = F.length,
        z = Xa.length;
      k = [];
      A = 0;
      Aa = bb.length;
      for (var C = Aa - 1, y = A + 1; A < Aa; A++, C++, y++)
        C === Aa && (C = 0),
          y === Aa && (y = 0),
          (k[A] = m(bb[A], bb[C], bb[y]));
      A = [];
      Aa = k.concat();
      y = 0;
      for (var Q = ja.length; y < Q; y++) {
        var T = ja[y];
        C = [];
        for (
          var ba = 0, X = T.length, ta = X - 1, va = ba + 1;
          ba < X;
          ba++, ta++, va++
        )
          ta === X && (ta = 0),
            va === X && (va = 0),
            (C[ba] = m(T[ba], T[ta], T[va]));
        A.push(C);
        Aa = Aa.concat(C);
      }
      for (y = 0; y < M; y++) {
        C = y / M;
        Q = I * Math.cos((C * Math.PI) / 2);
        T = E * Math.sin((C * Math.PI) / 2) + H;
        C = 0;
        for (ba = bb.length; C < ba; C++)
          (X = l(bb[C], k[C], T)), p(X.x, X.y, -Q);
        ba = 0;
        for (X = ja.length; ba < X; ba++) {
          ta = ja[ba];
          C = A[ba];
          va = 0;
          for (var ya = ta.length; va < ya; va++) {
            var Pa = l(ta[va], C[va], T);
            p(Pa.x, Pa.y, -Q);
          }
        }
      }
      C = E + H;
      for (y = 0; y < fb; y++)
        (Q = G ? l(F[y], Aa[y], C) : F[y]),
          P
            ? (aa.copy(ia.normals[0]).multiplyScalar(Q.x),
              W.copy(ia.binormals[0]).multiplyScalar(Q.y),
              Z.copy(V[0]).add(aa).add(W),
              p(Z.x, Z.y, Z.z))
            : p(Q.x, Q.y, 0);
      for (y = 1; y <= B; y++)
        for (Q = 0; Q < fb; Q++)
          (T = G ? l(F[Q], Aa[Q], C) : F[Q]),
            P
              ? (aa.copy(ia.normals[y]).multiplyScalar(T.x),
                W.copy(ia.binormals[y]).multiplyScalar(T.y),
                Z.copy(V[y]).add(aa).add(W),
                p(Z.x, Z.y, Z.z))
              : p(T.x, T.y, (D / B) * y);
      for (ia = M - 1; 0 <= ia; ia--) {
        aa = ia / M;
        W = I * Math.cos((aa * Math.PI) / 2);
        aa = E * Math.sin((aa * Math.PI) / 2) + H;
        Z = 0;
        for (F = bb.length; Z < F; Z++)
          (Aa = l(bb[Z], k[Z], aa)), p(Aa.x, Aa.y, D + W);
        Z = 0;
        for (F = ja.length; Z < F; Z++)
          for (Aa = ja[Z], C = A[Z], y = 0, Q = Aa.length; y < Q; y++)
            (T = l(Aa[y], C[y], aa)),
              P ? p(T.x, T.y + V[B - 1].y, V[B - 1].x + W) : p(T.x, T.y, D + W);
      }
      (function () {
        var U = e.length / 3;
        if (G) {
          for (var la = 0 * fb, wa = 0; wa < z; wa++) {
            var R = Xa[wa];
            t(R[2] + la, R[1] + la, R[0] + la);
          }
          la = fb * (B + 2 * M);
          for (wa = 0; wa < z; wa++)
            (R = Xa[wa]), t(R[0] + la, R[1] + la, R[2] + la);
        } else {
          for (la = 0; la < z; la++) (wa = Xa[la]), t(wa[2], wa[1], wa[0]);
          for (la = 0; la < z; la++)
            (wa = Xa[la]), t(wa[0] + fb * B, wa[1] + fb * B, wa[2] + fb * B);
        }
        d.addGroup(U, e.length / 3 - U, 0);
      })();
      (function () {
        var U = e.length / 3,
          la = 0;
        n(bb, la);
        la += bb.length;
        for (var wa = 0, R = ja.length; wa < R; wa++) {
          var qa = ja[wa];
          n(qa, la);
          la += qa.length;
        }
        d.addGroup(U, e.length / 3 - U, 1);
      })();
    }
    ka.call(this);
    this.type = "ExtrudeBufferGeometry";
    this.parameters = { shapes: c, options: a };
    c = Array.isArray(c) ? c : [c];
    for (var d = this, e = [], f = [], g = 0, h = c.length; g < h; g++) b(c[g]);
    this.setAttribute("position", new ea(e, 3));
    this.setAttribute("uv", new ea(f, 2));
    this.computeVertexNormals();
  }
  function hj(c, a, b) {
    b.shapes = [];
    if (Array.isArray(c))
      for (var d = 0, e = c.length; d < e; d++) b.shapes.push(c[d].uuid);
    else b.shapes.push(c.uuid);
    void 0 !== a.extrudePath &&
      (b.options.extrudePath = a.extrudePath.toJSON());
    return b;
  }
  function gf(c, a) {
    sa.call(this);
    this.type = "TextGeometry";
    this.parameters = { text: c, parameters: a };
    this.fromBufferGeometry(new Zd(c, a));
    this.mergeVertices();
  }
  function Zd(c, a) {
    a = a || {};
    var b = a.font;
    if (!b || !b.isFont)
      return (
        console.error(
          "THREE.TextGeometry: font parameter is not an instance of THREE.Font."
        ),
        new sa()
      );
    c = b.generateShapes(c, a.size);
    a.depth = void 0 !== a.height ? a.height : 50;
    void 0 === a.bevelThickness && (a.bevelThickness = 10);
    void 0 === a.bevelSize && (a.bevelSize = 8);
    void 0 === a.bevelEnabled && (a.bevelEnabled = !1);
    bc.call(this, c, a);
    this.type = "TextBufferGeometry";
  }
  function hf(c, a, b, d, e, f, g) {
    sa.call(this);
    this.type = "SphereGeometry";
    this.parameters = {
      radius: c,
      widthSegments: a,
      heightSegments: b,
      phiStart: d,
      phiLength: e,
      thetaStart: f,
      thetaLength: g,
    };
    this.fromBufferGeometry(new id(c, a, b, d, e, f, g));
    this.mergeVertices();
  }
  function id(c, a, b, d, e, f, g) {
    ka.call(this);
    this.type = "SphereBufferGeometry";
    this.parameters = {
      radius: c,
      widthSegments: a,
      heightSegments: b,
      phiStart: d,
      phiLength: e,
      thetaStart: f,
      thetaLength: g,
    };
    c = c || 1;
    a = Math.max(3, Math.floor(a) || 8);
    b = Math.max(2, Math.floor(b) || 6);
    d = void 0 !== d ? d : 0;
    e = void 0 !== e ? e : 2 * Math.PI;
    f = void 0 !== f ? f : 0;
    g = void 0 !== g ? g : Math.PI;
    for (
      var h = Math.min(f + g, Math.PI),
        k = 0,
        l = [],
        m = new w(),
        n = new w(),
        p = [],
        t = [],
        q = [],
        v = [],
        u = 0;
      u <= b;
      u++
    ) {
      var A = [],
        B = u / b,
        D = 0;
      0 == u && 0 == f
        ? (D = 0.5 / a)
        : u == b && h == Math.PI && (D = -0.5 / a);
      for (var G = 0; G <= a; G++) {
        var I = G / a;
        m.x = -c * Math.cos(d + I * e) * Math.sin(f + B * g);
        m.y = c * Math.cos(f + B * g);
        m.z = c * Math.sin(d + I * e) * Math.sin(f + B * g);
        t.push(m.x, m.y, m.z);
        n.copy(m).normalize();
        q.push(n.x, n.y, n.z);
        v.push(I + D, 1 - B);
        A.push(k++);
      }
      l.push(A);
    }
    for (c = 0; c < b; c++)
      for (d = 0; d < a; d++)
        (e = l[c][d + 1]),
          (g = l[c][d]),
          (k = l[c + 1][d]),
          (m = l[c + 1][d + 1]),
          (0 !== c || 0 < f) && p.push(e, g, m),
          (c !== b - 1 || h < Math.PI) && p.push(g, k, m);
    this.setIndex(p);
    this.setAttribute("position", new ea(t, 3));
    this.setAttribute("normal", new ea(q, 3));
    this.setAttribute("uv", new ea(v, 2));
  }
  function jf(c, a, b, d, e, f) {
    sa.call(this);
    this.type = "RingGeometry";
    this.parameters = {
      innerRadius: c,
      outerRadius: a,
      thetaSegments: b,
      phiSegments: d,
      thetaStart: e,
      thetaLength: f,
    };
    this.fromBufferGeometry(new $d(c, a, b, d, e, f));
    this.mergeVertices();
  }
  function $d(c, a, b, d, e, f) {
    ka.call(this);
    this.type = "RingBufferGeometry";
    this.parameters = {
      innerRadius: c,
      outerRadius: a,
      thetaSegments: b,
      phiSegments: d,
      thetaStart: e,
      thetaLength: f,
    };
    c = c || 0.5;
    a = a || 1;
    e = void 0 !== e ? e : 0;
    f = void 0 !== f ? f : 2 * Math.PI;
    b = void 0 !== b ? Math.max(3, b) : 8;
    d = void 0 !== d ? Math.max(1, d) : 1;
    var g = [],
      h = [],
      k = [],
      l = [],
      m = c;
    c = (a - c) / d;
    for (var n = new w(), p = new L(), t = 0; t <= d; t++) {
      for (var q = 0; q <= b; q++) {
        var v = e + (q / b) * f;
        n.x = m * Math.cos(v);
        n.y = m * Math.sin(v);
        h.push(n.x, n.y, n.z);
        k.push(0, 0, 1);
        p.x = (n.x / a + 1) / 2;
        p.y = (n.y / a + 1) / 2;
        l.push(p.x, p.y);
      }
      m += c;
    }
    for (a = 0; a < d; a++)
      for (e = a * (b + 1), f = 0; f < b; f++)
        (m = f + e),
          (c = m + b + 1),
          (n = m + b + 2),
          (p = m + 1),
          g.push(m, c, p),
          g.push(c, n, p);
    this.setIndex(g);
    this.setAttribute("position", new ea(h, 3));
    this.setAttribute("normal", new ea(k, 3));
    this.setAttribute("uv", new ea(l, 2));
  }
  function kf(c, a, b, d) {
    sa.call(this);
    this.type = "LatheGeometry";
    this.parameters = { points: c, segments: a, phiStart: b, phiLength: d };
    this.fromBufferGeometry(new ae(c, a, b, d));
    this.mergeVertices();
  }
  function ae(c, a, b, d) {
    ka.call(this);
    this.type = "LatheBufferGeometry";
    this.parameters = { points: c, segments: a, phiStart: b, phiLength: d };
    a = Math.floor(a) || 12;
    b = b || 0;
    d = d || 2 * Math.PI;
    d = xa.clamp(d, 0, 2 * Math.PI);
    for (
      var e = [], f = [], g = [], h = 1 / a, k = new w(), l = new L(), m = 0;
      m <= a;
      m++
    ) {
      var n = b + m * h * d,
        p = Math.sin(n);
      n = Math.cos(n);
      for (var t = 0; t <= c.length - 1; t++)
        (k.x = c[t].x * p),
          (k.y = c[t].y),
          (k.z = c[t].x * n),
          f.push(k.x, k.y, k.z),
          (l.x = m / a),
          (l.y = t / (c.length - 1)),
          g.push(l.x, l.y);
    }
    for (b = 0; b < a; b++)
      for (h = 0; h < c.length - 1; h++)
        (k = h + b * c.length),
          (l = k + c.length),
          (m = k + c.length + 1),
          (p = k + 1),
          e.push(k, l, p),
          e.push(l, m, p);
    this.setIndex(e);
    this.setAttribute("position", new ea(f, 3));
    this.setAttribute("uv", new ea(g, 2));
    this.computeVertexNormals();
    if (d === 2 * Math.PI)
      for (
        d = this.attributes.normal.array,
          e = new w(),
          f = new w(),
          g = new w(),
          a = a * c.length * 3,
          h = b = 0;
        b < c.length;
        b++, h += 3
      )
        (e.x = d[h + 0]),
          (e.y = d[h + 1]),
          (e.z = d[h + 2]),
          (f.x = d[a + h + 0]),
          (f.y = d[a + h + 1]),
          (f.z = d[a + h + 2]),
          g.addVectors(e, f).normalize(),
          (d[h + 0] = d[a + h + 0] = g.x),
          (d[h + 1] = d[a + h + 1] = g.y),
          (d[h + 2] = d[a + h + 2] = g.z);
  }
  function jd(c, a) {
    sa.call(this);
    this.type = "ShapeGeometry";
    "object" === typeof a &&
      (console.warn("THREE.ShapeGeometry: Options parameter has been removed."),
      (a = a.curveSegments));
    this.parameters = { shapes: c, curveSegments: a };
    this.fromBufferGeometry(new kd(c, a));
    this.mergeVertices();
  }
  function kd(c, a) {
    function b(m) {
      var n = e.length / 3,
        p = m.extractPoints(a);
      m = p.shape;
      var t = p.holes;
      !1 === nc.isClockWise(m) && (m = m.reverse());
      p = 0;
      for (var q = t.length; p < q; p++) {
        var v = t[p];
        !0 === nc.isClockWise(v) && (t[p] = v.reverse());
      }
      p = nc.triangulateShape(m, t);
      q = 0;
      for (v = t.length; q < v; q++) m = m.concat(t[q]);
      t = 0;
      for (q = m.length; t < q; t++)
        (v = m[t]), e.push(v.x, v.y, 0), f.push(0, 0, 1), g.push(v.x, v.y);
      m = 0;
      for (t = p.length; m < t; m++)
        (q = p[m]), d.push(q[0] + n, q[1] + n, q[2] + n), (k += 3);
    }
    ka.call(this);
    this.type = "ShapeBufferGeometry";
    this.parameters = { shapes: c, curveSegments: a };
    a = a || 12;
    var d = [],
      e = [],
      f = [],
      g = [],
      h = 0,
      k = 0;
    if (!1 === Array.isArray(c)) b(c);
    else
      for (var l = 0; l < c.length; l++)
        b(c[l]), this.addGroup(h, k, l), (h += k), (k = 0);
    this.setIndex(d);
    this.setAttribute("position", new ea(e, 3));
    this.setAttribute("normal", new ea(f, 3));
    this.setAttribute("uv", new ea(g, 2));
  }
  function ij(c, a) {
    a.shapes = [];
    if (Array.isArray(c))
      for (var b = 0, d = c.length; b < d; b++) a.shapes.push(c[b].uuid);
    else a.shapes.push(c.uuid);
    return a;
  }
  function be(c, a) {
    ka.call(this);
    this.type = "EdgesGeometry";
    this.parameters = { thresholdAngle: a };
    var b = [];
    a = Math.cos(xa.DEG2RAD * (void 0 !== a ? a : 1));
    var d = [0, 0],
      e = {},
      f = ["a", "b", "c"];
    if (c.isBufferGeometry) {
      var g = new sa();
      g.fromBufferGeometry(c);
    } else g = c.clone();
    g.mergeVertices();
    g.computeFaceNormals();
    c = g.vertices;
    g = g.faces;
    for (var h = 0, k = g.length; h < k; h++)
      for (var l = g[h], m = 0; 3 > m; m++) {
        var n = l[f[m]];
        var p = l[f[(m + 1) % 3]];
        d[0] = Math.min(n, p);
        d[1] = Math.max(n, p);
        n = d[0] + "," + d[1];
        void 0 === e[n]
          ? (e[n] = { index1: d[0], index2: d[1], face1: h, face2: void 0 })
          : (e[n].face2 = h);
      }
    for (n in e)
      if (
        ((d = e[n]),
        void 0 === d.face2 || g[d.face1].normal.dot(g[d.face2].normal) <= a)
      )
        (f = c[d.index1]),
          b.push(f.x, f.y, f.z),
          (f = c[d.index2]),
          b.push(f.x, f.y, f.z);
    this.setAttribute("position", new ea(b, 3));
  }
  function ld(c, a, b, d, e, f, g, h) {
    sa.call(this);
    this.type = "CylinderGeometry";
    this.parameters = {
      radiusTop: c,
      radiusBottom: a,
      height: b,
      radialSegments: d,
      heightSegments: e,
      openEnded: f,
      thetaStart: g,
      thetaLength: h,
    };
    this.fromBufferGeometry(new oc(c, a, b, d, e, f, g, h));
    this.mergeVertices();
  }
  function oc(c, a, b, d, e, f, g, h) {
    function k(B) {
      for (
        var D = q,
          G = new L(),
          I = new w(),
          E = 0,
          H = !0 === B ? c : a,
          M = !0 === B ? 1 : -1,
          F = 1;
        F <= d;
        F++
      )
        n.push(0, u * M, 0), p.push(0, M, 0), t.push(0.5, 0.5), q++;
      F = q;
      for (var K = 0; K <= d; K++) {
        var P = (K / d) * h + g,
          V = Math.cos(P);
        P = Math.sin(P);
        I.x = H * P;
        I.y = u * M;
        I.z = H * V;
        n.push(I.x, I.y, I.z);
        p.push(0, M, 0);
        G.x = 0.5 * V + 0.5;
        G.y = 0.5 * P * M + 0.5;
        t.push(G.x, G.y);
        q++;
      }
      for (G = 0; G < d; G++)
        (I = D + G),
          (H = F + G),
          !0 === B ? m.push(H, H + 1, I) : m.push(H + 1, H, I),
          (E += 3);
      l.addGroup(A, E, !0 === B ? 1 : 2);
      A += E;
    }
    ka.call(this);
    this.type = "CylinderBufferGeometry";
    this.parameters = {
      radiusTop: c,
      radiusBottom: a,
      height: b,
      radialSegments: d,
      heightSegments: e,
      openEnded: f,
      thetaStart: g,
      thetaLength: h,
    };
    var l = this;
    c = void 0 !== c ? c : 1;
    a = void 0 !== a ? a : 1;
    b = b || 1;
    d = Math.floor(d) || 8;
    e = Math.floor(e) || 1;
    f = void 0 !== f ? f : !1;
    g = void 0 !== g ? g : 0;
    h = void 0 !== h ? h : 2 * Math.PI;
    var m = [],
      n = [],
      p = [],
      t = [],
      q = 0,
      v = [],
      u = b / 2,
      A = 0;
    (function () {
      for (
        var B = new w(), D = new w(), G = 0, I = (a - c) / b, E = 0;
        E <= e;
        E++
      ) {
        for (var H = [], M = E / e, F = M * (a - c) + c, K = 0; K <= d; K++) {
          var P = K / d,
            V = P * h + g,
            ia = Math.sin(V);
          V = Math.cos(V);
          D.x = F * ia;
          D.y = -M * b + u;
          D.z = F * V;
          n.push(D.x, D.y, D.z);
          B.set(ia, I, V).normalize();
          p.push(B.x, B.y, B.z);
          t.push(P, 1 - M);
          H.push(q++);
        }
        v.push(H);
      }
      for (B = 0; B < d; B++)
        for (D = 0; D < e; D++)
          (I = v[D + 1][B]),
            (E = v[D + 1][B + 1]),
            (H = v[D][B + 1]),
            m.push(v[D][B], I, H),
            m.push(I, E, H),
            (G += 6);
      l.addGroup(A, G, 0);
      A += G;
    })();
    !1 === f && (0 < c && k(!0), 0 < a && k(!1));
    this.setIndex(m);
    this.setAttribute("position", new ea(n, 3));
    this.setAttribute("normal", new ea(p, 3));
    this.setAttribute("uv", new ea(t, 2));
  }
  function lf(c, a, b, d, e, f, g) {
    ld.call(this, 0, c, a, b, d, e, f, g);
    this.type = "ConeGeometry";
    this.parameters = {
      radius: c,
      height: a,
      radialSegments: b,
      heightSegments: d,
      openEnded: e,
      thetaStart: f,
      thetaLength: g,
    };
  }
  function mf(c, a, b, d, e, f, g) {
    oc.call(this, 0, c, a, b, d, e, f, g);
    this.type = "ConeBufferGeometry";
    this.parameters = {
      radius: c,
      height: a,
      radialSegments: b,
      heightSegments: d,
      openEnded: e,
      thetaStart: f,
      thetaLength: g,
    };
  }
  function nf(c, a, b, d) {
    sa.call(this);
    this.type = "CircleGeometry";
    this.parameters = { radius: c, segments: a, thetaStart: b, thetaLength: d };
    this.fromBufferGeometry(new ce(c, a, b, d));
    this.mergeVertices();
  }
  function ce(c, a, b, d) {
    ka.call(this);
    this.type = "CircleBufferGeometry";
    this.parameters = { radius: c, segments: a, thetaStart: b, thetaLength: d };
    c = c || 1;
    a = void 0 !== a ? Math.max(3, a) : 8;
    b = void 0 !== b ? b : 0;
    d = void 0 !== d ? d : 2 * Math.PI;
    var e = [],
      f = [],
      g = [],
      h = [],
      k = new w(),
      l = new L();
    f.push(0, 0, 0);
    g.push(0, 0, 1);
    h.push(0.5, 0.5);
    for (var m = 0, n = 3; m <= a; m++, n += 3) {
      var p = b + (m / a) * d;
      k.x = c * Math.cos(p);
      k.y = c * Math.sin(p);
      f.push(k.x, k.y, k.z);
      g.push(0, 0, 1);
      l.x = (f[n] / c + 1) / 2;
      l.y = (f[n + 1] / c + 1) / 2;
      h.push(l.x, l.y);
    }
    for (c = 1; c <= a; c++) e.push(c, c + 1, 0);
    this.setIndex(e);
    this.setAttribute("position", new ea(f, 3));
    this.setAttribute("normal", new ea(g, 3));
    this.setAttribute("uv", new ea(h, 2));
  }
  function md(c) {
    ra.call(this);
    this.type = "ShadowMaterial";
    this.color = new S(0);
    this.transparent = !0;
    this.setValues(c);
  }
  function pc(c) {
    sb.call(this, c);
    this.type = "RawShaderMaterial";
  }
  function cc(c) {
    ra.call(this);
    this.defines = { STANDARD: "" };
    this.type = "MeshStandardMaterial";
    this.color = new S(16777215);
    this.roughness = 1;
    this.metalness = 0;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new S(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new L(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null;
    this.envMapIntensity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexTangents = this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(c);
  }
  function Nc(c) {
    cc.call(this);
    this.defines = { STANDARD: "", PHYSICAL: "" };
    this.type = "MeshPhysicalMaterial";
    this.clearcoat = 0;
    this.clearcoatMap = null;
    this.clearcoatRoughness = 0;
    this.clearcoatRoughnessMap = null;
    this.clearcoatNormalScale = new L(1, 1);
    this.clearcoatNormalMap = null;
    this.reflectivity = 0.5;
    this.sheen = null;
    this.transmission = 0;
    this.transmissionMap = null;
    this.setValues(c);
  }
  function Oc(c) {
    ra.call(this);
    this.type = "MeshPhongMaterial";
    this.color = new S(16777215);
    this.specular = new S(1118481);
    this.shininess = 30;
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new S(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new L(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.envMap = this.alphaMap = this.specularMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(c);
  }
  function nd(c) {
    ra.call(this);
    this.defines = { TOON: "" };
    this.type = "MeshToonMaterial";
    this.color = new S(16777215);
    this.lightMap = this.gradientMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new S(0);
    this.emissiveIntensity = 1;
    this.bumpMap = this.emissiveMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new L(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(c);
  }
  function od(c) {
    ra.call(this);
    this.type = "MeshNormalMaterial";
    this.bumpMap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new L(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.morphNormals = this.morphTargets = this.skinning = this.fog = !1;
    this.setValues(c);
  }
  function pd(c) {
    ra.call(this);
    this.type = "MeshLambertMaterial";
    this.color = new S(16777215);
    this.lightMap = this.map = null;
    this.lightMapIntensity = 1;
    this.aoMap = null;
    this.aoMapIntensity = 1;
    this.emissive = new S(0);
    this.emissiveIntensity = 1;
    this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null;
    this.combine = 0;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(c);
  }
  function qd(c) {
    ra.call(this);
    this.defines = { MATCAP: "" };
    this.type = "MeshMatcapMaterial";
    this.color = new S(16777215);
    this.bumpMap = this.map = this.matcap = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalMapType = 0;
    this.normalScale = new L(1, 1);
    this.displacementMap = null;
    this.displacementScale = 1;
    this.displacementBias = 0;
    this.alphaMap = null;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(c);
  }
  function rd(c) {
    Ya.call(this);
    this.type = "LineDashedMaterial";
    this.scale = 1;
    this.dashSize = 3;
    this.gapSize = 1;
    this.setValues(c);
  }
  function Hb(c, a, b, d) {
    this.parameterPositions = c;
    this._cachedIndex = 0;
    this.resultBuffer = void 0 !== d ? d : new a.constructor(b);
    this.sampleValues = a;
    this.valueSize = b;
  }
  function dg(c, a, b, d) {
    Hb.call(this, c, a, b, d);
    this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0;
  }
  function of(c, a, b, d) {
    Hb.call(this, c, a, b, d);
  }
  function eg(c, a, b, d) {
    Hb.call(this, c, a, b, d);
  }
  function lb(c, a, b, d) {
    if (void 0 === c)
      throw Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === a || 0 === a.length)
      throw Error("THREE.KeyframeTrack: no keyframes in track named " + c);
    this.name = c;
    this.times = Va.convertArray(a, this.TimeBufferType);
    this.values = Va.convertArray(b, this.ValueBufferType);
    this.setInterpolation(d || this.DefaultInterpolation);
  }
  function fg(c, a, b) {
    lb.call(this, c, a, b);
  }
  function gg(c, a, b, d) {
    lb.call(this, c, a, b, d);
  }
  function de(c, a, b, d) {
    lb.call(this, c, a, b, d);
  }
  function hg(c, a, b, d) {
    Hb.call(this, c, a, b, d);
  }
  function pf(c, a, b, d) {
    lb.call(this, c, a, b, d);
  }
  function ig(c, a, b, d) {
    lb.call(this, c, a, b, d);
  }
  function ee(c, a, b, d) {
    lb.call(this, c, a, b, d);
  }
  function Mb(c, a, b, d) {
    this.name = c;
    this.tracks = b;
    this.duration = void 0 !== a ? a : -1;
    this.blendMode = void 0 !== d ? d : 2500;
    this.uuid = xa.generateUUID();
    0 > this.duration && this.resetDuration();
  }
  function Kl(c) {
    switch (c.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return de;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return ee;
      case "color":
        return gg;
      case "quaternion":
        return pf;
      case "bool":
      case "boolean":
        return fg;
      case "string":
        return ig;
    }
    throw Error("THREE.KeyframeTrack: Unsupported typeName: " + c);
  }
  function Ll(c) {
    if (void 0 === c.type)
      throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
    var a = Kl(c.type);
    if (void 0 === c.times) {
      var b = [],
        d = [];
      Va.flattenJSON(c.keys, b, d, "value");
      c.times = b;
      c.values = d;
    }
    return void 0 !== a.parse
      ? a.parse(c)
      : new a(c.name, c.times, c.values, c.interpolation);
  }
  function Ah(c, a, b) {
    var d = this,
      e = !1,
      f = 0,
      g = 0,
      h = void 0,
      k = [];
    this.onStart = void 0;
    this.onLoad = c;
    this.onProgress = a;
    this.onError = b;
    this.itemStart = function (l) {
      g++;
      if (!1 === e && void 0 !== d.onStart) d.onStart(l, f, g);
      e = !0;
    };
    this.itemEnd = function (l) {
      f++;
      if (void 0 !== d.onProgress) d.onProgress(l, f, g);
      if (f === g && ((e = !1), void 0 !== d.onLoad)) d.onLoad();
    };
    this.itemError = function (l) {
      if (void 0 !== d.onError) d.onError(l);
    };
    this.resolveURL = function (l) {
      return h ? h(l) : l;
    };
    this.setURLModifier = function (l) {
      h = l;
      return this;
    };
    this.addHandler = function (l, m) {
      k.push(l, m);
      return this;
    };
    this.removeHandler = function (l) {
      l = k.indexOf(l);
      -1 !== l && k.splice(l, 2);
      return this;
    };
    this.getHandler = function (l) {
      for (var m = 0, n = k.length; m < n; m += 2) {
        var p = k[m],
          t = k[m + 1];
        p.global && (p.lastIndex = 0);
        if (p.test(l)) return t;
      }
      return null;
    };
  }
  function Ma(c) {
    this.manager = void 0 !== c ? c : jj;
    this.crossOrigin = "anonymous";
    this.resourcePath = this.path = "";
    this.requestHeader = {};
  }
  function Nb(c) {
    Ma.call(this, c);
  }
  function Bh(c) {
    Ma.call(this, c);
  }
  function Ch(c) {
    Ma.call(this, c);
  }
  function fe(c) {
    Ma.call(this, c);
  }
  function jg(c) {
    Ma.call(this, c);
  }
  function kg(c) {
    Ma.call(this, c);
  }
  function lg(c) {
    Ma.call(this, c);
  }
  function oa() {
    this.type = "Curve";
    this.arcLengthDivisions = 200;
  }
  function Ib(c, a, b, d, e, f, g, h) {
    oa.call(this);
    this.type = "EllipseCurve";
    this.aX = c || 0;
    this.aY = a || 0;
    this.xRadius = b || 1;
    this.yRadius = d || 1;
    this.aStartAngle = e || 0;
    this.aEndAngle = f || 2 * Math.PI;
    this.aClockwise = g || !1;
    this.aRotation = h || 0;
  }
  function ge(c, a, b, d, e, f) {
    Ib.call(this, c, a, b, b, d, e, f);
    this.type = "ArcCurve";
  }
  function Dh() {
    var c = 0,
      a = 0,
      b = 0,
      d = 0;
    return {
      initCatmullRom: function (e, f, g, h, k) {
        e = k * (g - e);
        h = k * (h - f);
        c = f;
        a = e;
        b = -3 * f + 3 * g - 2 * e - h;
        d = 2 * f - 2 * g + e + h;
      },
      initNonuniformCatmullRom: function (e, f, g, h, k, l, m) {
        e = ((f - e) / k - (g - e) / (k + l) + (g - f) / l) * l;
        h = ((g - f) / l - (h - f) / (l + m) + (h - g) / m) * l;
        c = f;
        a = e;
        b = -3 * f + 3 * g - 2 * e - h;
        d = 2 * f - 2 * g + e + h;
      },
      calc: function (e) {
        var f = e * e;
        return c + a * e + b * f + d * f * e;
      },
    };
  }
  function ob(c, a, b, d) {
    oa.call(this);
    this.type = "CatmullRomCurve3";
    this.points = c || [];
    this.closed = a || !1;
    this.curveType = b || "centripetal";
    this.tension = void 0 !== d ? d : 0.5;
  }
  function kj(c, a, b, d, e) {
    a = 0.5 * (d - a);
    e = 0.5 * (e - b);
    var f = c * c;
    return (
      (2 * b - 2 * d + a + e) * c * f +
      (-3 * b + 3 * d - 2 * a - e) * f +
      a * c +
      b
    );
  }
  function qf(c, a, b, d) {
    var e = 1 - c;
    return e * e * a + 2 * (1 - c) * c * b + c * c * d;
  }
  function rf(c, a, b, d, e) {
    var f = 1 - c,
      g = 1 - c;
    return (
      f * f * f * a +
      3 * g * g * c * b +
      3 * (1 - c) * c * c * d +
      c * c * c * e
    );
  }
  function Sb(c, a, b, d) {
    oa.call(this);
    this.type = "CubicBezierCurve";
    this.v0 = c || new L();
    this.v1 = a || new L();
    this.v2 = b || new L();
    this.v3 = d || new L();
  }
  function dc(c, a, b, d) {
    oa.call(this);
    this.type = "CubicBezierCurve3";
    this.v0 = c || new w();
    this.v1 = a || new w();
    this.v2 = b || new w();
    this.v3 = d || new w();
  }
  function Ab(c, a) {
    oa.call(this);
    this.type = "LineCurve";
    this.v1 = c || new L();
    this.v2 = a || new L();
  }
  function Tb(c, a) {
    oa.call(this);
    this.type = "LineCurve3";
    this.v1 = c || new w();
    this.v2 = a || new w();
  }
  function Ub(c, a, b) {
    oa.call(this);
    this.type = "QuadraticBezierCurve";
    this.v0 = c || new L();
    this.v1 = a || new L();
    this.v2 = b || new L();
  }
  function ec(c, a, b) {
    oa.call(this);
    this.type = "QuadraticBezierCurve3";
    this.v0 = c || new w();
    this.v1 = a || new w();
    this.v2 = b || new w();
  }
  function Vb(c) {
    oa.call(this);
    this.type = "SplineCurve";
    this.points = c || [];
  }
  function qc() {
    oa.call(this);
    this.type = "CurvePath";
    this.curves = [];
    this.autoClose = !1;
  }
  function Wb(c) {
    qc.call(this);
    this.type = "Path";
    this.currentPoint = new L();
    c && this.setFromPoints(c);
  }
  function Pc(c) {
    Wb.call(this, c);
    this.uuid = xa.generateUUID();
    this.type = "Shape";
    this.holes = [];
  }
  function Sa(c, a) {
    ha.call(this);
    this.type = "Light";
    this.color = new S(c);
    this.intensity = void 0 !== a ? a : 1;
    this.receiveShadow = void 0;
  }
  function mg(c, a, b) {
    Sa.call(this, c, b);
    this.type = "HemisphereLight";
    this.castShadow = void 0;
    this.position.copy(ha.DefaultUp);
    this.updateMatrix();
    this.groundColor = new S(a);
  }
  function fc(c) {
    this.camera = c;
    this.normalBias = this.bias = 0;
    this.radius = 1;
    this.mapSize = new L(512, 512);
    this.mapPass = this.map = null;
    this.matrix = new da();
    this.autoUpdate = !0;
    this.needsUpdate = !1;
    this._frustum = new xb();
    this._frameExtents = new L(1, 1);
    this._viewportCount = 1;
    this._viewports = [new ca(0, 0, 1, 1)];
  }
  function Eh() {
    fc.call(this, new eb(50, 1, 0.5, 500));
  }
  function ng(c, a, b, d, e, f) {
    Sa.call(this, c, a);
    this.type = "SpotLight";
    this.position.copy(ha.DefaultUp);
    this.updateMatrix();
    this.target = new ha();
    Object.defineProperty(this, "power", {
      get: function () {
        return this.intensity * Math.PI;
      },
      set: function (g) {
        this.intensity = g / Math.PI;
      },
    });
    this.distance = void 0 !== b ? b : 0;
    this.angle = void 0 !== d ? d : Math.PI / 3;
    this.penumbra = void 0 !== e ? e : 0;
    this.decay = void 0 !== f ? f : 1;
    this.shadow = new Eh();
  }
  function Fh() {
    fc.call(this, new eb(90, 1, 0.5, 500));
    this._frameExtents = new L(4, 2);
    this._viewportCount = 6;
    this._viewports = [
      new ca(2, 1, 1, 1),
      new ca(0, 1, 1, 1),
      new ca(3, 1, 1, 1),
      new ca(1, 1, 1, 1),
      new ca(3, 0, 1, 1),
      new ca(1, 0, 1, 1),
    ];
    this._cubeDirections = [
      new w(1, 0, 0),
      new w(-1, 0, 0),
      new w(0, 0, 1),
      new w(0, 0, -1),
      new w(0, 1, 0),
      new w(0, -1, 0),
    ];
    this._cubeUps = [
      new w(0, 1, 0),
      new w(0, 1, 0),
      new w(0, 1, 0),
      new w(0, 1, 0),
      new w(0, 0, 1),
      new w(0, 0, -1),
    ];
  }
  function og(c, a, b, d) {
    Sa.call(this, c, a);
    this.type = "PointLight";
    Object.defineProperty(this, "power", {
      get: function () {
        return 4 * this.intensity * Math.PI;
      },
      set: function (e) {
        this.intensity = e / (4 * Math.PI);
      },
    });
    this.distance = void 0 !== b ? b : 0;
    this.decay = void 0 !== d ? d : 1;
    this.shadow = new Fh();
  }
  function he(c, a, b, d, e, f) {
    ac.call(this);
    this.type = "OrthographicCamera";
    this.zoom = 1;
    this.view = null;
    this.left = void 0 !== c ? c : -1;
    this.right = void 0 !== a ? a : 1;
    this.top = void 0 !== b ? b : 1;
    this.bottom = void 0 !== d ? d : -1;
    this.near = void 0 !== e ? e : 0.1;
    this.far = void 0 !== f ? f : 2e3;
    this.updateProjectionMatrix();
  }
  function Gh() {
    fc.call(this, new he(-5, 5, 5, -5, 0.5, 500));
  }
  function pg(c, a) {
    Sa.call(this, c, a);
    this.type = "DirectionalLight";
    this.position.copy(ha.DefaultUp);
    this.updateMatrix();
    this.target = new ha();
    this.shadow = new Gh();
  }
  function qg(c, a) {
    Sa.call(this, c, a);
    this.type = "AmbientLight";
    this.castShadow = void 0;
  }
  function rg(c, a, b, d) {
    Sa.call(this, c, a);
    this.type = "RectAreaLight";
    this.width = void 0 !== b ? b : 10;
    this.height = void 0 !== d ? d : 10;
  }
  function Ob(c, a) {
    Sa.call(this, void 0, a);
    this.type = "LightProbe";
    this.sh = void 0 !== c ? c : new pb();
  }
  function sg(c) {
    Ma.call(this, c);
    this.textures = {};
  }
  function sf() {
    ka.call(this);
    this.type = "InstancedBufferGeometry";
    this.instanceCount = Infinity;
  }
  function tg(c, a, b, d) {
    "number" === typeof b &&
      ((d = b),
      (b = !1),
      console.error(
        "THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."
      ));
    pa.call(this, c, a, b);
    this.meshPerAttribute = d || 1;
  }
  function ug(c) {
    Ma.call(this, c);
  }
  function vg(c) {
    Ma.call(this, c);
  }
  function Hh(c) {
    "undefined" === typeof createImageBitmap &&
      console.warn(
        "THREE.ImageBitmapLoader: createImageBitmap() not supported."
      );
    "undefined" === typeof fetch &&
      console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
    Ma.call(this, c);
    this.options = { premultiplyAlpha: "none" };
  }
  function Ih() {
    this.type = "ShapePath";
    this.color = new S();
    this.subPaths = [];
    this.currentPath = null;
  }
  function Jh(c) {
    this.type = "Font";
    this.data = c;
  }
  function Kh(c) {
    Ma.call(this, c);
  }
  function wg(c) {
    Ma.call(this, c);
  }
  function Lh(c, a, b) {
    Ob.call(this, void 0, b);
    c = new S().set(c);
    b = new S().set(a);
    a = new w(c.r, c.g, c.b);
    c = new w(b.r, b.g, b.b);
    b = Math.sqrt(Math.PI);
    var d = b * Math.sqrt(0.75);
    this.sh.coefficients[0].copy(a).add(c).multiplyScalar(b);
    this.sh.coefficients[1].copy(a).sub(c).multiplyScalar(d);
  }
  function Mh(c, a) {
    Ob.call(this, void 0, a);
    c = new S().set(c);
    this.sh.coefficients[0]
      .set(c.r, c.g, c.b)
      .multiplyScalar(2 * Math.sqrt(Math.PI));
  }
  function lj() {
    this.type = "StereoCamera";
    this.aspect = 1;
    this.eyeSep = 0.064;
    this.cameraL = new eb();
    this.cameraL.layers.enable(1);
    this.cameraL.matrixAutoUpdate = !1;
    this.cameraR = new eb();
    this.cameraR.layers.enable(2);
    this.cameraR.matrixAutoUpdate = !1;
    this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null,
    };
  }
  function Xb() {
    ha.call(this);
    this.type = "AudioListener";
    this.context = Nh.getContext();
    this.gain = this.context.createGain();
    this.gain.connect(this.context.destination);
    this.filter = null;
    this.timeDelta = 0;
    this._clock = new ie();
  }
  function Ja(c) {
    ha.call(this);
    this.type = "Audio";
    this.listener = c;
    this.context = c.context;
    this.gain = this.context.createGain();
    this.gain.connect(c.getInput());
    this.autoplay = !1;
    this.buffer = null;
    this.detune = 0;
    this.loop = !1;
    this.offset = this.loopEnd = this.loopStart = 0;
    this.duration = void 0;
    this.playbackRate = 1;
    this.isPlaying = !1;
    this.hasPlaybackControl = !0;
    this.source = null;
    this.sourceType = "empty";
    this._progress = this._startedAt = 0;
    this._connected = !1;
    this.filters = [];
  }
  function tb(c) {
    Ja.call(this, c);
    this.panner = this.context.createPanner();
    this.panner.panningModel = "HRTF";
    this.panner.connect(this.gain);
  }
  function Oh(c, a, b) {
    this.binding = c;
    this.valueSize = b;
    switch (a) {
      case "quaternion":
        c = this._slerp;
        a = this._slerpAdditive;
        var d = this._setAdditiveIdentityQuaternion;
        this.buffer = new Float64Array(6 * b);
        this._workIndex = 5;
        break;
      case "string":
      case "bool":
        a = c = this._select;
        d = this._setAdditiveIdentityOther;
        this.buffer = Array(5 * b);
        break;
      default:
        (c = this._lerp),
          (a = this._lerpAdditive),
          (d = this._setAdditiveIdentityNumeric),
          (this.buffer = new Float64Array(5 * b));
    }
    this._mixBufferRegion = c;
    this._mixBufferRegionAdditive = a;
    this._setIdentity = d;
    this._origIndex = 3;
    this._addIndex = 4;
    this.referenceCount = this.useCount = this.cumulativeWeightAdditive = this.cumulativeWeight = 0;
  }
  function mj(c, a, b) {
    b = b || qb.parseTrackName(a);
    this._targetGroup = c;
    this._bindings = c.subscribe_(a, b);
  }
  function qb(c, a, b) {
    this.path = a;
    this.parsedPath = b || qb.parseTrackName(a);
    this.node = qb.findNode(c, this.parsedPath.nodeName) || c;
    this.rootNode = c;
  }
  function nj() {
    this.uuid = xa.generateUUID();
    this._objects = Array.prototype.slice.call(arguments);
    this.nCachedObjects_ = 0;
    var c = {};
    this._indicesByUUID = c;
    for (var a = 0, b = arguments.length; a !== b; ++a)
      c[arguments[a].uuid] = a;
    this._paths = [];
    this._parsedPaths = [];
    this._bindings = [];
    this._bindingsIndicesByPath = {};
    var d = this;
    this.stats = {
      objects: {
        get total() {
          return d._objects.length;
        },
        get inUse() {
          return this.total - d.nCachedObjects_;
        },
      },
      get bindingsPerObject() {
        return d._bindings.length;
      },
    };
  }
  function Ph(c) {
    this._root = c;
    this._initMemoryManager();
    this.time = this._accuIndex = 0;
    this.timeScale = 1;
  }
  function Qh(c, a, b) {
    Gb.call(this, c, a);
    this.meshPerAttribute = b || 1;
  }
  function Rh(c, a, b, d, e) {
    this.buffer = c;
    this.type = a;
    this.itemSize = b;
    this.elementSize = d;
    this.count = e;
    this.version = 0;
  }
  function Sh(c, a, b, d) {
    this.ray = new Ta(c, a);
    this.near = b || 0;
    this.far = d || Infinity;
    this.camera = null;
    this.layers = new $b();
    this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {},
    };
    Object.defineProperties(this.params, {
      PointCloud: {
        get: function () {
          console.warn(
            "THREE.Raycaster: params.PointCloud has been renamed to params.Points."
          );
          return this.Points;
        },
      },
    });
  }
  function oj(c, a) {
    return c.distance - a.distance;
  }
  function Th(c, a, b, d) {
    c.layers.test(a.layers) && c.raycast(a, b);
    if (!0 === d) {
      c = c.children;
      d = 0;
      for (var e = c.length; d < e; d++) Th(c[d], a, b, !0);
    }
  }
  function tf(c) {
    ha.call(this);
    this.material = c;
    this.render = function () {};
    this.hasUvs = this.hasColors = this.hasNormals = this.hasPositions = !1;
    this.uvArray = this.colorArray = this.normalArray = this.positionArray = null;
    this.count = 0;
  }
  function je(c, a) {
    ha.call(this);
    this.light = c;
    this.light.updateMatrixWorld();
    this.matrix = c.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = a;
    c = new ka();
    a = [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      -1,
      1,
    ];
    for (var b = 0, d = 1; 32 > b; b++, d++) {
      var e = (b / 32) * Math.PI * 2,
        f = (d / 32) * Math.PI * 2;
      a.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1);
    }
    c.setAttribute("position", new ea(a, 3));
    a = new Ya({ fog: !1, toneMapped: !1 });
    this.cone = new Za(c, a);
    this.add(this.cone);
    this.update();
  }
  function ke(c) {
    for (
      var a = pj(c),
        b = new ka(),
        d = [],
        e = [],
        f = new S(0, 0, 1),
        g = new S(0, 1, 0),
        h = 0;
      h < a.length;
      h++
    ) {
      var k = a[h];
      k.parent &&
        k.parent.isBone &&
        (d.push(0, 0, 0),
        d.push(0, 0, 0),
        e.push(f.r, f.g, f.b),
        e.push(g.r, g.g, g.b));
    }
    b.setAttribute("position", new ea(d, 3));
    b.setAttribute("color", new ea(e, 3));
    d = new Ya({
      vertexColors: !0,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
      transparent: !0,
    });
    Za.call(this, b, d);
    this.type = "SkeletonHelper";
    this.isSkeletonHelper = !0;
    this.root = c;
    this.bones = a;
    this.matrix = c.matrixWorld;
    this.matrixAutoUpdate = !1;
  }
  function pj(c) {
    var a = [];
    c && c.isBone && a.push(c);
    for (var b = 0; b < c.children.length; b++)
      a.push.apply(a, pj(c.children[b]));
    return a;
  }
  function le(c, a, b) {
    a = new id(a, 4, 2);
    var d = new Kb({ wireframe: !0, fog: !1, toneMapped: !1 });
    Qa.call(this, a, d);
    this.light = c;
    this.light.updateMatrixWorld();
    this.color = b;
    this.type = "PointLightHelper";
    this.matrix = this.light.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.update();
  }
  function me(c, a, b) {
    ha.call(this);
    this.light = c;
    this.light.updateMatrixWorld();
    this.matrix = c.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = b;
    c = new fd(a);
    c.rotateY(0.5 * Math.PI);
    this.material = new Kb({ wireframe: !0, fog: !1, toneMapped: !1 });
    void 0 === this.color && (this.material.vertexColors = !0);
    a = c.getAttribute("position");
    a = new Float32Array(3 * a.count);
    c.setAttribute("color", new pa(a, 3));
    this.add(new Qa(c, this.material));
    this.update();
  }
  function uf(c, a, b, d) {
    c = c || 10;
    a = a || 10;
    b = new S(void 0 !== b ? b : 4473924);
    d = new S(void 0 !== d ? d : 8947848);
    var e = a / 2,
      f = c / a,
      g = c / 2;
    c = [];
    for (var h = [], k = 0, l = 0, m = -g; k <= a; k++, m += f) {
      c.push(-g, 0, m, g, 0, m);
      c.push(m, 0, -g, m, 0, g);
      var n = k === e ? b : d;
      n.toArray(h, l);
      l += 3;
      n.toArray(h, l);
      l += 3;
      n.toArray(h, l);
      l += 3;
      n.toArray(h, l);
      l += 3;
    }
    a = new ka();
    a.setAttribute("position", new ea(c, 3));
    a.setAttribute("color", new ea(h, 3));
    b = new Ya({ vertexColors: !0, toneMapped: !1 });
    Za.call(this, a, b);
    this.type = "GridHelper";
  }
  function xg(c, a, b, d, e, f) {
    c = c || 10;
    a = a || 16;
    b = b || 8;
    d = d || 64;
    e = new S(void 0 !== e ? e : 4473924);
    f = new S(void 0 !== f ? f : 8947848);
    for (var g = [], h = [], k = 0; k <= a; k++) {
      var l = (k / a) * 2 * Math.PI,
        m = Math.sin(l) * c;
      l = Math.cos(l) * c;
      g.push(0, 0, 0);
      g.push(m, 0, l);
      m = k & 1 ? e : f;
      h.push(m.r, m.g, m.b);
      h.push(m.r, m.g, m.b);
    }
    for (a = 0; a <= b; a++)
      for (k = a & 1 ? e : f, m = c - (c / b) * a, l = 0; l < d; l++) {
        var n = (l / d) * 2 * Math.PI,
          p = Math.sin(n) * m;
        n = Math.cos(n) * m;
        g.push(p, 0, n);
        h.push(k.r, k.g, k.b);
        n = ((l + 1) / d) * 2 * Math.PI;
        p = Math.sin(n) * m;
        n = Math.cos(n) * m;
        g.push(p, 0, n);
        h.push(k.r, k.g, k.b);
      }
    c = new ka();
    c.setAttribute("position", new ea(g, 3));
    c.setAttribute("color", new ea(h, 3));
    g = new Ya({ vertexColors: !0, toneMapped: !1 });
    Za.call(this, c, g);
    this.type = "PolarGridHelper";
  }
  function ne(c, a, b) {
    ha.call(this);
    this.light = c;
    this.light.updateMatrixWorld();
    this.matrix = c.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.color = b;
    void 0 === a && (a = 1);
    c = new ka();
    c.setAttribute(
      "position",
      new ea([-a, a, 0, a, a, 0, a, -a, 0, -a, -a, 0, -a, a, 0], 3)
    );
    a = new Ya({ fog: !1, toneMapped: !1 });
    this.lightPlane = new yb(c, a);
    this.add(this.lightPlane);
    c = new ka();
    c.setAttribute("position", new ea([0, 0, 0, 0, 0, 1], 3));
    this.targetLine = new yb(c, a);
    this.add(this.targetLine);
    this.update();
  }
  function vf(c) {
    function a(t, q, v) {
      b(t, v);
      b(q, v);
    }
    function b(t, q) {
      f.push(0, 0, 0);
      g.push(q.r, q.g, q.b);
      void 0 === h[t] && (h[t] = []);
      h[t].push(f.length / 3 - 1);
    }
    var d = new ka(),
      e = new Ya({ color: 16777215, vertexColors: !0, toneMapped: !1 }),
      f = [],
      g = [],
      h = {},
      k = new S(16755200),
      l = new S(16711680),
      m = new S(43775),
      n = new S(16777215),
      p = new S(3355443);
    a("n1", "n2", k);
    a("n2", "n4", k);
    a("n4", "n3", k);
    a("n3", "n1", k);
    a("f1", "f2", k);
    a("f2", "f4", k);
    a("f4", "f3", k);
    a("f3", "f1", k);
    a("n1", "f1", k);
    a("n2", "f2", k);
    a("n3", "f3", k);
    a("n4", "f4", k);
    a("p", "n1", l);
    a("p", "n2", l);
    a("p", "n3", l);
    a("p", "n4", l);
    a("u1", "u2", m);
    a("u2", "u3", m);
    a("u3", "u1", m);
    a("c", "t", n);
    a("p", "c", p);
    a("cn1", "cn2", p);
    a("cn3", "cn4", p);
    a("cf1", "cf2", p);
    a("cf3", "cf4", p);
    d.setAttribute("position", new ea(f, 3));
    d.setAttribute("color", new ea(g, 3));
    Za.call(this, d, e);
    this.type = "CameraHelper";
    this.camera = c;
    this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix();
    this.matrix = c.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.pointMap = h;
    this.update();
  }
  function db(c, a, b, d, e, f, g) {
    yg.set(e, f, g).unproject(d);
    c = a[c];
    if (void 0 !== c)
      for (b = b.getAttribute("position"), a = 0, d = c.length; a < d; a++)
        b.setXYZ(c[a], yg.x, yg.y, yg.z);
  }
  function Qc(c, a) {
    void 0 === a && (a = 16776960);
    var b = new Uint16Array([
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        0,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        4,
        0,
        4,
        1,
        5,
        2,
        6,
        3,
        7,
      ]),
      d = new Float32Array(24),
      e = new ka();
    e.setIndex(new pa(b, 1));
    e.setAttribute("position", new pa(d, 3));
    Za.call(this, e, new Ya({ color: a, toneMapped: !1 }));
    this.object = c;
    this.type = "BoxHelper";
    this.matrixAutoUpdate = !1;
    this.update();
  }
  function wf(c, a) {
    void 0 === a && (a = 16776960);
    var b = new Uint16Array([
        0,
        1,
        1,
        2,
        2,
        3,
        3,
        0,
        4,
        5,
        5,
        6,
        6,
        7,
        7,
        4,
        0,
        4,
        1,
        5,
        2,
        6,
        3,
        7,
      ]),
      d = new ka();
    d.setIndex(new pa(b, 1));
    d.setAttribute(
      "position",
      new ea(
        [
          1,
          1,
          1,
          -1,
          1,
          1,
          -1,
          -1,
          1,
          1,
          -1,
          1,
          1,
          1,
          -1,
          -1,
          1,
          -1,
          -1,
          -1,
          -1,
          1,
          -1,
          -1,
        ],
        3
      )
    );
    Za.call(this, d, new Ya({ color: a, toneMapped: !1 }));
    this.box = c;
    this.type = "Box3Helper";
    this.geometry.computeBoundingSphere();
  }
  function xf(c, a, b) {
    b = void 0 !== b ? b : 16776960;
    var d = new ka();
    d.setAttribute(
      "position",
      new ea(
        [
          1,
          -1,
          1,
          -1,
          1,
          1,
          -1,
          -1,
          1,
          1,
          1,
          1,
          -1,
          1,
          1,
          -1,
          -1,
          1,
          1,
          -1,
          1,
          1,
          1,
          1,
          0,
          0,
          1,
          0,
          0,
          0,
        ],
        3
      )
    );
    d.computeBoundingSphere();
    yb.call(this, d, new Ya({ color: b, toneMapped: !1 }));
    this.type = "PlaneHelper";
    this.plane = c;
    this.size = void 0 === a ? 1 : a;
    c = new ka();
    c.setAttribute(
      "position",
      new ea([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)
    );
    c.computeBoundingSphere();
    this.add(
      new Qa(
        c,
        new Kb({
          color: b,
          opacity: 0.2,
          transparent: !0,
          depthWrite: !1,
          toneMapped: !1,
        })
      )
    );
  }
  function Rc(c, a, b, d, e, f) {
    ha.call(this);
    this.type = "ArrowHelper";
    void 0 === c && (c = new w(0, 0, 1));
    void 0 === a && (a = new w(0, 0, 0));
    void 0 === b && (b = 1);
    void 0 === d && (d = 16776960);
    void 0 === e && (e = 0.2 * b);
    void 0 === f && (f = 0.2 * e);
    void 0 === zg &&
      ((zg = new ka()),
      zg.setAttribute("position", new ea([0, 0, 0, 0, 1, 0], 3)),
      (Uh = new oc(0, 0.5, 1, 5, 1)),
      Uh.translate(0, -0.5, 0));
    this.position.copy(a);
    this.line = new yb(zg, new Ya({ color: d, toneMapped: !1 }));
    this.line.matrixAutoUpdate = !1;
    this.add(this.line);
    this.cone = new Qa(Uh, new Kb({ color: d, toneMapped: !1 }));
    this.cone.matrixAutoUpdate = !1;
    this.add(this.cone);
    this.setDirection(c);
    this.setLength(b, e, f);
  }
  function yf(c) {
    void 0 === c && (c = 1);
    var a = [0, 0, 0, c, 0, 0, 0, 0, 0, 0, c, 0, 0, 0, 0, 0, 0, c];
    c = new ka();
    c.setAttribute("position", new ea(a, 3));
    c.setAttribute(
      "color",
      new ea([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], 3)
    );
    a = new Ya({ vertexColors: !0, toneMapped: !1 });
    Za.call(this, c, a);
    this.type = "AxesHelper";
  }
  function qj(c) {
    c = new Db(3 * gc, 3 * gc, c);
    c.texture.mapping = 306;
    c.texture.name = "PMREM.cubeUv";
    c.scissorTest = !0;
    return c;
  }
  function Ag(c, a, b, d, e) {
    c.viewport.set(a, b, d, e);
    c.scissor.set(a, b, d, e);
  }
  function rj() {
    var c = new L(1, 1);
    return new pc({
      name: "EquirectangularToCubeUV",
      uniforms: {
        envMap: { value: null },
        texelSize: { value: c },
        inputEncoding: { value: hc[3e3] },
        outputEncoding: { value: hc[3e3] },
      },
      vertexShader: Vh(),
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t" +
        Wh() +
        "\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function sj() {
    return new pc({
      name: "CubemapToCubeUV",
      uniforms: {
        envMap: { value: null },
        inputEncoding: { value: hc[3e3] },
        outputEncoding: { value: hc[3e3] },
      },
      vertexShader: Vh(),
      fragmentShader:
        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t" +
        Wh() +
        "\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
      blending: 0,
      depthTest: !1,
      depthWrite: !1,
    });
  }
  function Vh() {
    return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
  }
  function Wh() {
    return "\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t";
  }
  function tj(c) {
    console.warn(
      "THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."
    );
    ob.call(this, c);
    this.type = "catmullrom";
    this.closed = !0;
  }
  function uj(c) {
    console.warn(
      "THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."
    );
    ob.call(this, c);
    this.type = "catmullrom";
  }
  function Xh(c) {
    console.warn(
      "THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."
    );
    ob.call(this, c);
    this.type = "catmullrom";
  }
  void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52));
  void 0 === Number.isInteger &&
    (Number.isInteger = function (c) {
      return "number" === typeof c && isFinite(c) && Math.floor(c) === c;
    });
  void 0 === Math.sign &&
    (Math.sign = function (c) {
      return 0 > c ? -1 : 0 < c ? 1 : +c;
    });
  !1 === "name" in Function.prototype &&
    Object.defineProperty(Function.prototype, "name", {
      get: function () {
        return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
      },
    });
  void 0 === Object.assign &&
    (Object.assign = function (c) {
      if (void 0 === c || null === c)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var a = Object(c), b = 1; b < arguments.length; b++) {
        var d = arguments[b];
        if (void 0 !== d && null !== d)
          for (var e in d)
            Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
      }
      return a;
    });
  Object.assign(wb.prototype, {
    addEventListener: function (c, a) {
      void 0 === this._listeners && (this._listeners = {});
      var b = this._listeners;
      void 0 === b[c] && (b[c] = []);
      -1 === b[c].indexOf(a) && b[c].push(a);
    },
    hasEventListener: function (c, a) {
      if (void 0 === this._listeners) return !1;
      var b = this._listeners;
      return void 0 !== b[c] && -1 !== b[c].indexOf(a);
    },
    removeEventListener: function (c, a) {
      void 0 !== this._listeners &&
        ((c = this._listeners[c]),
        void 0 !== c && ((a = c.indexOf(a)), -1 !== a && c.splice(a, 1)));
    },
    dispatchEvent: function (c) {
      if (void 0 !== this._listeners) {
        var a = this._listeners[c.type];
        if (void 0 !== a) {
          c.target = this;
          a = a.slice(0);
          for (var b = 0, d = a.length; b < d; b++) a[b].call(this, c);
        }
      }
    },
  });
  for (var mb = [], zf = 0; 256 > zf; zf++)
    mb[zf] = (16 > zf ? "0" : "") + zf.toString(16);
  var Bg = 1234567,
    xa = {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: 180 / Math.PI,
      generateUUID: function () {
        var c = (4294967295 * Math.random()) | 0,
          a = (4294967295 * Math.random()) | 0,
          b = (4294967295 * Math.random()) | 0,
          d = (4294967295 * Math.random()) | 0;
        return (
          mb[c & 255] +
          mb[(c >> 8) & 255] +
          mb[(c >> 16) & 255] +
          mb[(c >> 24) & 255] +
          "-" +
          mb[a & 255] +
          mb[(a >> 8) & 255] +
          "-" +
          mb[((a >> 16) & 15) | 64] +
          mb[(a >> 24) & 255] +
          "-" +
          mb[(b & 63) | 128] +
          mb[(b >> 8) & 255] +
          "-" +
          mb[(b >> 16) & 255] +
          mb[(b >> 24) & 255] +
          mb[d & 255] +
          mb[(d >> 8) & 255] +
          mb[(d >> 16) & 255] +
          mb[(d >> 24) & 255]
        ).toUpperCase();
      },
      clamp: function (c, a, b) {
        return Math.max(a, Math.min(b, c));
      },
      euclideanModulo: function (c, a) {
        return ((c % a) + a) % a;
      },
      mapLinear: function (c, a, b, d, e) {
        return d + ((c - a) * (e - d)) / (b - a);
      },
      lerp: function (c, a, b) {
        return (1 - b) * c + b * a;
      },
      smoothstep: function (c, a, b) {
        if (c <= a) return 0;
        if (c >= b) return 1;
        c = (c - a) / (b - a);
        return c * c * (3 - 2 * c);
      },
      smootherstep: function (c, a, b) {
        if (c <= a) return 0;
        if (c >= b) return 1;
        c = (c - a) / (b - a);
        return c * c * c * (c * (6 * c - 15) + 10);
      },
      randInt: function (c, a) {
        return c + Math.floor(Math.random() * (a - c + 1));
      },
      randFloat: function (c, a) {
        return c + Math.random() * (a - c);
      },
      randFloatSpread: function (c) {
        return c * (0.5 - Math.random());
      },
      seededRandom: function (c) {
        void 0 !== c && (Bg = c % 2147483647);
        Bg = (16807 * Bg) % 2147483647;
        return (Bg - 1) / 2147483646;
      },
      degToRad: function (c) {
        return c * xa.DEG2RAD;
      },
      radToDeg: function (c) {
        return c * xa.RAD2DEG;
      },
      isPowerOfTwo: function (c) {
        return 0 === (c & (c - 1)) && 0 !== c;
      },
      ceilPowerOfTwo: function (c) {
        return Math.pow(2, Math.ceil(Math.log(c) / Math.LN2));
      },
      floorPowerOfTwo: function (c) {
        return Math.pow(2, Math.floor(Math.log(c) / Math.LN2));
      },
      setQuaternionFromProperEuler: function (c, a, b, d, e) {
        var f = Math.cos,
          g = Math.sin,
          h = f(b / 2);
        b = g(b / 2);
        var k = f((a + d) / 2),
          l = g((a + d) / 2),
          m = f((a - d) / 2),
          n = g((a - d) / 2);
        f = f((d - a) / 2);
        a = g((d - a) / 2);
        switch (e) {
          case "XYX":
            c.set(h * l, b * m, b * n, h * k);
            break;
          case "YZY":
            c.set(b * n, h * l, b * m, h * k);
            break;
          case "ZXZ":
            c.set(b * m, b * n, h * l, h * k);
            break;
          case "XZX":
            c.set(h * l, b * a, b * f, h * k);
            break;
          case "YXY":
            c.set(b * f, h * l, b * a, h * k);
            break;
          case "ZYZ":
            c.set(b * a, b * f, h * l, h * k);
            break;
          default:
            console.warn(
              "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
                e
            );
        }
      },
    },
    L = function (c, a) {
      void 0 === c && (c = 0);
      void 0 === a && (a = 0);
      Object.defineProperty(this, "isVector2", { value: !0 });
      this.x = c;
      this.y = a;
    },
    Af = { width: { configurable: !0 }, height: { configurable: !0 } };
  Af.width.get = function () {
    return this.x;
  };
  Af.width.set = function (c) {
    this.x = c;
  };
  Af.height.get = function () {
    return this.y;
  };
  Af.height.set = function (c) {
    this.y = c;
  };
  L.prototype.set = function (c, a) {
    this.x = c;
    this.y = a;
    return this;
  };
  L.prototype.setScalar = function (c) {
    this.y = this.x = c;
    return this;
  };
  L.prototype.setX = function (c) {
    this.x = c;
    return this;
  };
  L.prototype.setY = function (c) {
    this.y = c;
    return this;
  };
  L.prototype.setComponent = function (c, a) {
    switch (c) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      default:
        throw Error("index is out of range: " + c);
    }
    return this;
  };
  L.prototype.getComponent = function (c) {
    switch (c) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error("index is out of range: " + c);
    }
  };
  L.prototype.clone = function () {
    return new this.constructor(this.x, this.y);
  };
  L.prototype.copy = function (c) {
    this.x = c.x;
    this.y = c.y;
    return this;
  };
  L.prototype.add = function (c, a) {
    if (void 0 !== a)
      return (
        console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(c, a)
      );
    this.x += c.x;
    this.y += c.y;
    return this;
  };
  L.prototype.addScalar = function (c) {
    this.x += c;
    this.y += c;
    return this;
  };
  L.prototype.addVectors = function (c, a) {
    this.x = c.x + a.x;
    this.y = c.y + a.y;
    return this;
  };
  L.prototype.addScaledVector = function (c, a) {
    this.x += c.x * a;
    this.y += c.y * a;
    return this;
  };
  L.prototype.sub = function (c, a) {
    if (void 0 !== a)
      return (
        console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(c, a)
      );
    this.x -= c.x;
    this.y -= c.y;
    return this;
  };
  L.prototype.subScalar = function (c) {
    this.x -= c;
    this.y -= c;
    return this;
  };
  L.prototype.subVectors = function (c, a) {
    this.x = c.x - a.x;
    this.y = c.y - a.y;
    return this;
  };
  L.prototype.multiply = function (c) {
    this.x *= c.x;
    this.y *= c.y;
    return this;
  };
  L.prototype.multiplyScalar = function (c) {
    this.x *= c;
    this.y *= c;
    return this;
  };
  L.prototype.divide = function (c) {
    this.x /= c.x;
    this.y /= c.y;
    return this;
  };
  L.prototype.divideScalar = function (c) {
    return this.multiplyScalar(1 / c);
  };
  L.prototype.applyMatrix3 = function (c) {
    var a = this.x,
      b = this.y;
    c = c.elements;
    this.x = c[0] * a + c[3] * b + c[6];
    this.y = c[1] * a + c[4] * b + c[7];
    return this;
  };
  L.prototype.min = function (c) {
    this.x = Math.min(this.x, c.x);
    this.y = Math.min(this.y, c.y);
    return this;
  };
  L.prototype.max = function (c) {
    this.x = Math.max(this.x, c.x);
    this.y = Math.max(this.y, c.y);
    return this;
  };
  L.prototype.clamp = function (c, a) {
    this.x = Math.max(c.x, Math.min(a.x, this.x));
    this.y = Math.max(c.y, Math.min(a.y, this.y));
    return this;
  };
  L.prototype.clampScalar = function (c, a) {
    this.x = Math.max(c, Math.min(a, this.x));
    this.y = Math.max(c, Math.min(a, this.y));
    return this;
  };
  L.prototype.clampLength = function (c, a) {
    var b = this.length();
    return this.divideScalar(b || 1).multiplyScalar(
      Math.max(c, Math.min(a, b))
    );
  };
  L.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  L.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  L.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  L.prototype.roundToZero = function () {
    this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
    return this;
  };
  L.prototype.negate = function () {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  };
  L.prototype.dot = function (c) {
    return this.x * c.x + this.y * c.y;
  };
  L.prototype.cross = function (c) {
    return this.x * c.y - this.y * c.x;
  };
  L.prototype.lengthSq = function () {
    return this.x * this.x + this.y * this.y;
  };
  L.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  L.prototype.manhattanLength = function () {
    return Math.abs(this.x) + Math.abs(this.y);
  };
  L.prototype.normalize = function () {
    return this.divideScalar(this.length() || 1);
  };
  L.prototype.angle = function () {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  };
  L.prototype.distanceTo = function (c) {
    return Math.sqrt(this.distanceToSquared(c));
  };
  L.prototype.distanceToSquared = function (c) {
    var a = this.x - c.x;
    c = this.y - c.y;
    return a * a + c * c;
  };
  L.prototype.manhattanDistanceTo = function (c) {
    return Math.abs(this.x - c.x) + Math.abs(this.y - c.y);
  };
  L.prototype.setLength = function (c) {
    return this.normalize().multiplyScalar(c);
  };
  L.prototype.lerp = function (c, a) {
    this.x += (c.x - this.x) * a;
    this.y += (c.y - this.y) * a;
    return this;
  };
  L.prototype.lerpVectors = function (c, a, b) {
    this.x = c.x + (a.x - c.x) * b;
    this.y = c.y + (a.y - c.y) * b;
    return this;
  };
  L.prototype.equals = function (c) {
    return c.x === this.x && c.y === this.y;
  };
  L.prototype.fromArray = function (c, a) {
    void 0 === a && (a = 0);
    this.x = c[a];
    this.y = c[a + 1];
    return this;
  };
  L.prototype.toArray = function (c, a) {
    void 0 === c && (c = []);
    void 0 === a && (a = 0);
    c[a] = this.x;
    c[a + 1] = this.y;
    return c;
  };
  L.prototype.fromBufferAttribute = function (c, a, b) {
    void 0 !== b &&
      console.warn(
        "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
      );
    this.x = c.getX(a);
    this.y = c.getY(a);
    return this;
  };
  L.prototype.rotateAround = function (c, a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    var d = this.x - c.x,
      e = this.y - c.y;
    this.x = d * b - e * a + c.x;
    this.y = d * a + e * b + c.y;
    return this;
  };
  L.prototype.random = function () {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  };
  Object.defineProperties(L.prototype, Af);
  var Da = function () {
    Object.defineProperty(this, "isMatrix3", { value: !0 });
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    0 < arguments.length &&
      console.error(
        "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
      );
  };
  Da.prototype.set = function (c, a, b, d, e, f, g, h, k) {
    var l = this.elements;
    l[0] = c;
    l[1] = d;
    l[2] = g;
    l[3] = a;
    l[4] = e;
    l[5] = h;
    l[6] = b;
    l[7] = f;
    l[8] = k;
    return this;
  };
  Da.prototype.identity = function () {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  };
  Da.prototype.clone = function () {
    return new this.constructor().fromArray(this.elements);
  };
  Da.prototype.copy = function (c) {
    var a = this.elements;
    c = c.elements;
    a[0] = c[0];
    a[1] = c[1];
    a[2] = c[2];
    a[3] = c[3];
    a[4] = c[4];
    a[5] = c[5];
    a[6] = c[6];
    a[7] = c[7];
    a[8] = c[8];
    return this;
  };
  Da.prototype.extractBasis = function (c, a, b) {
    c.setFromMatrix3Column(this, 0);
    a.setFromMatrix3Column(this, 1);
    b.setFromMatrix3Column(this, 2);
    return this;
  };
  Da.prototype.setFromMatrix4 = function (c) {
    c = c.elements;
    this.set(c[0], c[4], c[8], c[1], c[5], c[9], c[2], c[6], c[10]);
    return this;
  };
  Da.prototype.multiply = function (c) {
    return this.multiplyMatrices(this, c);
  };
  Da.prototype.premultiply = function (c) {
    return this.multiplyMatrices(c, this);
  };
  Da.prototype.multiplyMatrices = function (c, a) {
    var b = c.elements,
      d = a.elements;
    a = this.elements;
    c = b[0];
    var e = b[3],
      f = b[6],
      g = b[1],
      h = b[4],
      k = b[7],
      l = b[2],
      m = b[5];
    b = b[8];
    var n = d[0],
      p = d[3],
      t = d[6],
      q = d[1],
      v = d[4],
      u = d[7],
      A = d[2],
      B = d[5];
    d = d[8];
    a[0] = c * n + e * q + f * A;
    a[3] = c * p + e * v + f * B;
    a[6] = c * t + e * u + f * d;
    a[1] = g * n + h * q + k * A;
    a[4] = g * p + h * v + k * B;
    a[7] = g * t + h * u + k * d;
    a[2] = l * n + m * q + b * A;
    a[5] = l * p + m * v + b * B;
    a[8] = l * t + m * u + b * d;
    return this;
  };
  Da.prototype.multiplyScalar = function (c) {
    var a = this.elements;
    a[0] *= c;
    a[3] *= c;
    a[6] *= c;
    a[1] *= c;
    a[4] *= c;
    a[7] *= c;
    a[2] *= c;
    a[5] *= c;
    a[8] *= c;
    return this;
  };
  Da.prototype.determinant = function () {
    var c = this.elements,
      a = c[0],
      b = c[1],
      d = c[2],
      e = c[3],
      f = c[4],
      g = c[5],
      h = c[6],
      k = c[7];
    c = c[8];
    return (
      a * f * c - a * g * k - b * e * c + b * g * h + d * e * k - d * f * h
    );
  };
  Da.prototype.getInverse = function (c, a) {
    void 0 !== a &&
      console.warn(
        "THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate."
      );
    var b = c.elements;
    c = this.elements;
    a = b[0];
    var d = b[1],
      e = b[2],
      f = b[3],
      g = b[4],
      h = b[5],
      k = b[6],
      l = b[7];
    b = b[8];
    var m = b * g - h * l,
      n = h * k - b * f,
      p = l * f - g * k,
      t = a * m + d * n + e * p;
    if (0 === t) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    t = 1 / t;
    c[0] = m * t;
    c[1] = (e * l - b * d) * t;
    c[2] = (h * d - e * g) * t;
    c[3] = n * t;
    c[4] = (b * a - e * k) * t;
    c[5] = (e * f - h * a) * t;
    c[6] = p * t;
    c[7] = (d * k - l * a) * t;
    c[8] = (g * a - d * f) * t;
    return this;
  };
  Da.prototype.transpose = function () {
    var c = this.elements;
    var a = c[1];
    c[1] = c[3];
    c[3] = a;
    a = c[2];
    c[2] = c[6];
    c[6] = a;
    a = c[5];
    c[5] = c[7];
    c[7] = a;
    return this;
  };
  Da.prototype.getNormalMatrix = function (c) {
    return this.setFromMatrix4(c).getInverse(this).transpose();
  };
  Da.prototype.transposeIntoArray = function (c) {
    var a = this.elements;
    c[0] = a[0];
    c[1] = a[3];
    c[2] = a[6];
    c[3] = a[1];
    c[4] = a[4];
    c[5] = a[7];
    c[6] = a[2];
    c[7] = a[5];
    c[8] = a[8];
    return this;
  };
  Da.prototype.setUvTransform = function (c, a, b, d, e, f, g) {
    var h = Math.cos(e);
    e = Math.sin(e);
    this.set(
      b * h,
      b * e,
      -b * (h * f + e * g) + f + c,
      -d * e,
      d * h,
      -d * (-e * f + h * g) + g + a,
      0,
      0,
      1
    );
  };
  Da.prototype.scale = function (c, a) {
    var b = this.elements;
    b[0] *= c;
    b[3] *= c;
    b[6] *= c;
    b[1] *= a;
    b[4] *= a;
    b[7] *= a;
    return this;
  };
  Da.prototype.rotate = function (c) {
    var a = Math.cos(c);
    c = Math.sin(c);
    var b = this.elements,
      d = b[0],
      e = b[3],
      f = b[6],
      g = b[1],
      h = b[4],
      k = b[7];
    b[0] = a * d + c * g;
    b[3] = a * e + c * h;
    b[6] = a * f + c * k;
    b[1] = -c * d + a * g;
    b[4] = -c * e + a * h;
    b[7] = -c * f + a * k;
    return this;
  };
  Da.prototype.translate = function (c, a) {
    var b = this.elements;
    b[0] += c * b[2];
    b[3] += c * b[5];
    b[6] += c * b[8];
    b[1] += a * b[2];
    b[4] += a * b[5];
    b[7] += a * b[8];
    return this;
  };
  Da.prototype.equals = function (c) {
    var a = this.elements;
    c = c.elements;
    for (var b = 0; 9 > b; b++) if (a[b] !== c[b]) return !1;
    return !0;
  };
  Da.prototype.fromArray = function (c, a) {
    void 0 === a && (a = 0);
    for (var b = 0; 9 > b; b++) this.elements[b] = c[b + a];
    return this;
  };
  Da.prototype.toArray = function (c, a) {
    void 0 === c && (c = []);
    void 0 === a && (a = 0);
    var b = this.elements;
    c[a] = b[0];
    c[a + 1] = b[1];
    c[a + 2] = b[2];
    c[a + 3] = b[3];
    c[a + 4] = b[4];
    c[a + 5] = b[5];
    c[a + 6] = b[6];
    c[a + 7] = b[7];
    c[a + 8] = b[8];
    return c;
  };
  var oe,
    Sc = {
      getDataURL: function (c) {
        if (/^data:/i.test(c.src) || "undefined" == typeof HTMLCanvasElement)
          return c.src;
        if (!(c instanceof HTMLCanvasElement)) {
          void 0 === oe &&
            (oe = document.createElementNS(
              "http://www.w3.org/1999/xhtml",
              "canvas"
            ));
          oe.width = c.width;
          oe.height = c.height;
          var a = oe.getContext("2d");
          c instanceof ImageData
            ? a.putImageData(c, 0, 0)
            : a.drawImage(c, 0, 0, c.width, c.height);
          c = oe;
        }
        return 2048 < c.width || 2048 < c.height
          ? c.toDataURL("image/jpeg", 0.6)
          : c.toDataURL("image/png");
      },
    },
    hk = 0;
  Oa.DEFAULT_IMAGE = void 0;
  Oa.DEFAULT_MAPPING = 300;
  Oa.prototype = Object.assign(Object.create(wb.prototype), {
    constructor: Oa,
    isTexture: !0,
    updateMatrix: function () {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (c) {
      this.name = c.name;
      this.image = c.image;
      this.mipmaps = c.mipmaps.slice(0);
      this.mapping = c.mapping;
      this.wrapS = c.wrapS;
      this.wrapT = c.wrapT;
      this.magFilter = c.magFilter;
      this.minFilter = c.minFilter;
      this.anisotropy = c.anisotropy;
      this.format = c.format;
      this.internalFormat = c.internalFormat;
      this.type = c.type;
      this.offset.copy(c.offset);
      this.repeat.copy(c.repeat);
      this.center.copy(c.center);
      this.rotation = c.rotation;
      this.matrixAutoUpdate = c.matrixAutoUpdate;
      this.matrix.copy(c.matrix);
      this.generateMipmaps = c.generateMipmaps;
      this.premultiplyAlpha = c.premultiplyAlpha;
      this.flipY = c.flipY;
      this.unpackAlignment = c.unpackAlignment;
      this.encoding = c.encoding;
      return this;
    },
    toJSON: function (c) {
      var a = void 0 === c || "string" === typeof c;
      if (!a && void 0 !== c.textures[this.uuid]) return c.textures[this.uuid];
      var b = {
        metadata: {
          version: 4.5,
          type: "Texture",
          generator: "Texture.toJSON",
        },
        uuid: this.uuid,
        name: this.name,
        mapping: this.mapping,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        type: this.type,
        encoding: this.encoding,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      if (void 0 !== this.image) {
        var d = this.image;
        void 0 === d.uuid && (d.uuid = xa.generateUUID());
        if (!a && void 0 === c.images[d.uuid]) {
          if (Array.isArray(d)) {
            var e = [];
            for (var f = 0, g = d.length; f < g; f++)
              e.push(Sc.getDataURL(d[f]));
          } else e = Sc.getDataURL(d);
          c.images[d.uuid] = { uuid: d.uuid, url: e };
        }
        b.image = d.uuid;
      }
      a || (c.textures[this.uuid] = b);
      return b;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
    transformUv: function (c) {
      if (300 !== this.mapping) return c;
      c.applyMatrix3(this.matrix);
      if (0 > c.x || 1 < c.x)
        switch (this.wrapS) {
          case 1e3:
            c.x -= Math.floor(c.x);
            break;
          case 1001:
            c.x = 0 > c.x ? 0 : 1;
            break;
          case 1002:
            c.x =
              1 === Math.abs(Math.floor(c.x) % 2)
                ? Math.ceil(c.x) - c.x
                : c.x - Math.floor(c.x);
        }
      if (0 > c.y || 1 < c.y)
        switch (this.wrapT) {
          case 1e3:
            c.y -= Math.floor(c.y);
            break;
          case 1001:
            c.y = 0 > c.y ? 0 : 1;
            break;
          case 1002:
            c.y =
              1 === Math.abs(Math.floor(c.y) % 2)
                ? Math.ceil(c.y) - c.y
                : c.y - Math.floor(c.y);
        }
      this.flipY && (c.y = 1 - c.y);
      return c;
    },
  });
  Object.defineProperty(Oa.prototype, "needsUpdate", {
    set: function (c) {
      !0 === c && this.version++;
    },
  });
  var ca = function (c, a, b, d) {
      void 0 === c && (c = 0);
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === d && (d = 1);
      Object.defineProperty(this, "isVector4", { value: !0 });
      this.x = c;
      this.y = a;
      this.z = b;
      this.w = d;
    },
    Bf = { width: { configurable: !0 }, height: { configurable: !0 } };
  Bf.width.get = function () {
    return this.z;
  };
  Bf.width.set = function (c) {
    this.z = c;
  };
  Bf.height.get = function () {
    return this.w;
  };
  Bf.height.set = function (c) {
    this.w = c;
  };
  ca.prototype.set = function (c, a, b, d) {
    this.x = c;
    this.y = a;
    this.z = b;
    this.w = d;
    return this;
  };
  ca.prototype.setScalar = function (c) {
    this.w = this.z = this.y = this.x = c;
    return this;
  };
  ca.prototype.setX = function (c) {
    this.x = c;
    return this;
  };
  ca.prototype.setY = function (c) {
    this.y = c;
    return this;
  };
  ca.prototype.setZ = function (c) {
    this.z = c;
    return this;
  };
  ca.prototype.setW = function (c) {
    this.w = c;
    return this;
  };
  ca.prototype.setComponent = function (c, a) {
    switch (c) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      case 2:
        this.z = a;
        break;
      case 3:
        this.w = a;
        break;
      default:
        throw Error("index is out of range: " + c);
    }
    return this;
  };
  ca.prototype.getComponent = function (c) {
    switch (c) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error("index is out of range: " + c);
    }
  };
  ca.prototype.clone = function () {
    return new this.constructor(this.x, this.y, this.z, this.w);
  };
  ca.prototype.copy = function (c) {
    this.x = c.x;
    this.y = c.y;
    this.z = c.z;
    this.w = void 0 !== c.w ? c.w : 1;
    return this;
  };
  ca.prototype.add = function (c, a) {
    if (void 0 !== a)
      return (
        console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(c, a)
      );
    this.x += c.x;
    this.y += c.y;
    this.z += c.z;
    this.w += c.w;
    return this;
  };
  ca.prototype.addScalar = function (c) {
    this.x += c;
    this.y += c;
    this.z += c;
    this.w += c;
    return this;
  };
  ca.prototype.addVectors = function (c, a) {
    this.x = c.x + a.x;
    this.y = c.y + a.y;
    this.z = c.z + a.z;
    this.w = c.w + a.w;
    return this;
  };
  ca.prototype.addScaledVector = function (c, a) {
    this.x += c.x * a;
    this.y += c.y * a;
    this.z += c.z * a;
    this.w += c.w * a;
    return this;
  };
  ca.prototype.sub = function (c, a) {
    if (void 0 !== a)
      return (
        console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(c, a)
      );
    this.x -= c.x;
    this.y -= c.y;
    this.z -= c.z;
    this.w -= c.w;
    return this;
  };
  ca.prototype.subScalar = function (c) {
    this.x -= c;
    this.y -= c;
    this.z -= c;
    this.w -= c;
    return this;
  };
  ca.prototype.subVectors = function (c, a) {
    this.x = c.x - a.x;
    this.y = c.y - a.y;
    this.z = c.z - a.z;
    this.w = c.w - a.w;
    return this;
  };
  ca.prototype.multiplyScalar = function (c) {
    this.x *= c;
    this.y *= c;
    this.z *= c;
    this.w *= c;
    return this;
  };
  ca.prototype.applyMatrix4 = function (c) {
    var a = this.x,
      b = this.y,
      d = this.z,
      e = this.w;
    c = c.elements;
    this.x = c[0] * a + c[4] * b + c[8] * d + c[12] * e;
    this.y = c[1] * a + c[5] * b + c[9] * d + c[13] * e;
    this.z = c[2] * a + c[6] * b + c[10] * d + c[14] * e;
    this.w = c[3] * a + c[7] * b + c[11] * d + c[15] * e;
    return this;
  };
  ca.prototype.divideScalar = function (c) {
    return this.multiplyScalar(1 / c);
  };
  ca.prototype.setAxisAngleFromQuaternion = function (c) {
    this.w = 2 * Math.acos(c.w);
    var a = Math.sqrt(1 - c.w * c.w);
    1e-4 > a
      ? ((this.x = 1), (this.z = this.y = 0))
      : ((this.x = c.x / a), (this.y = c.y / a), (this.z = c.z / a));
    return this;
  };
  ca.prototype.setAxisAngleFromRotationMatrix = function (c) {
    c = c.elements;
    var a = c[0];
    var b = c[4];
    var d = c[8],
      e = c[1],
      f = c[5],
      g = c[9];
    var h = c[2];
    var k = c[6];
    var l = c[10];
    if (
      0.01 > Math.abs(b - e) &&
      0.01 > Math.abs(d - h) &&
      0.01 > Math.abs(g - k)
    ) {
      if (
        0.1 > Math.abs(b + e) &&
        0.1 > Math.abs(d + h) &&
        0.1 > Math.abs(g + k) &&
        0.1 > Math.abs(a + f + l - 3)
      )
        return this.set(1, 0, 0, 0), this;
      c = Math.PI;
      a = (a + 1) / 2;
      f = (f + 1) / 2;
      l = (l + 1) / 2;
      b = (b + e) / 4;
      d = (d + h) / 4;
      g = (g + k) / 4;
      a > f && a > l
        ? 0.01 > a
          ? ((k = 0), (b = h = 0.707106781))
          : ((k = Math.sqrt(a)), (h = b / k), (b = d / k))
        : f > l
        ? 0.01 > f
          ? ((k = 0.707106781), (h = 0), (b = 0.707106781))
          : ((h = Math.sqrt(f)), (k = b / h), (b = g / h))
        : 0.01 > l
        ? ((h = k = 0.707106781), (b = 0))
        : ((b = Math.sqrt(l)), (k = d / b), (h = g / b));
      this.set(k, h, b, c);
      return this;
    }
    c = Math.sqrt((k - g) * (k - g) + (d - h) * (d - h) + (e - b) * (e - b));
    0.001 > Math.abs(c) && (c = 1);
    this.x = (k - g) / c;
    this.y = (d - h) / c;
    this.z = (e - b) / c;
    this.w = Math.acos((a + f + l - 1) / 2);
    return this;
  };
  ca.prototype.min = function (c) {
    this.x = Math.min(this.x, c.x);
    this.y = Math.min(this.y, c.y);
    this.z = Math.min(this.z, c.z);
    this.w = Math.min(this.w, c.w);
    return this;
  };
  ca.prototype.max = function (c) {
    this.x = Math.max(this.x, c.x);
    this.y = Math.max(this.y, c.y);
    this.z = Math.max(this.z, c.z);
    this.w = Math.max(this.w, c.w);
    return this;
  };
  ca.prototype.clamp = function (c, a) {
    this.x = Math.max(c.x, Math.min(a.x, this.x));
    this.y = Math.max(c.y, Math.min(a.y, this.y));
    this.z = Math.max(c.z, Math.min(a.z, this.z));
    this.w = Math.max(c.w, Math.min(a.w, this.w));
    return this;
  };
  ca.prototype.clampScalar = function (c, a) {
    this.x = Math.max(c, Math.min(a, this.x));
    this.y = Math.max(c, Math.min(a, this.y));
    this.z = Math.max(c, Math.min(a, this.z));
    this.w = Math.max(c, Math.min(a, this.w));
    return this;
  };
  ca.prototype.clampLength = function (c, a) {
    var b = this.length();
    return this.divideScalar(b || 1).multiplyScalar(
      Math.max(c, Math.min(a, b))
    );
  };
  ca.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  };
  ca.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  };
  ca.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  };
  ca.prototype.roundToZero = function () {
    this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
    this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w);
    return this;
  };
  ca.prototype.negate = function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  };
  ca.prototype.dot = function (c) {
    return this.x * c.x + this.y * c.y + this.z * c.z + this.w * c.w;
  };
  ca.prototype.lengthSq = function () {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  };
  ca.prototype.length = function () {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  };
  ca.prototype.manhattanLength = function () {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  };
  ca.prototype.normalize = function () {
    return this.divideScalar(this.length() || 1);
  };
  ca.prototype.setLength = function (c) {
    return this.normalize().multiplyScalar(c);
  };
  ca.prototype.lerp = function (c, a) {
    this.x += (c.x - this.x) * a;
    this.y += (c.y - this.y) * a;
    this.z += (c.z - this.z) * a;
    this.w += (c.w - this.w) * a;
    return this;
  };
  ca.prototype.lerpVectors = function (c, a, b) {
    this.x = c.x + (a.x - c.x) * b;
    this.y = c.y + (a.y - c.y) * b;
    this.z = c.z + (a.z - c.z) * b;
    this.w = c.w + (a.w - c.w) * b;
    return this;
  };
  ca.prototype.equals = function (c) {
    return c.x === this.x && c.y === this.y && c.z === this.z && c.w === this.w;
  };
  ca.prototype.fromArray = function (c, a) {
    void 0 === a && (a = 0);
    this.x = c[a];
    this.y = c[a + 1];
    this.z = c[a + 2];
    this.w = c[a + 3];
    return this;
  };
  ca.prototype.toArray = function (c, a) {
    void 0 === c && (c = []);
    void 0 === a && (a = 0);
    c[a] = this.x;
    c[a + 1] = this.y;
    c[a + 2] = this.z;
    c[a + 3] = this.w;
    return c;
  };
  ca.prototype.fromBufferAttribute = function (c, a, b) {
    void 0 !== b &&
      console.warn(
        "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
      );
    this.x = c.getX(a);
    this.y = c.getY(a);
    this.z = c.getZ(a);
    this.w = c.getW(a);
    return this;
  };
  ca.prototype.random = function () {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    this.w = Math.random();
    return this;
  };
  Object.defineProperties(ca.prototype, Bf);
  Db.prototype = Object.assign(Object.create(wb.prototype), {
    constructor: Db,
    isWebGLRenderTarget: !0,
    setSize: function (c, a) {
      if (this.width !== c || this.height !== a)
        (this.width = c),
          (this.height = a),
          (this.texture.image.width = c),
          (this.texture.image.height = a),
          this.dispose();
      this.viewport.set(0, 0, c, a);
      this.scissor.set(0, 0, c, a);
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (c) {
      this.width = c.width;
      this.height = c.height;
      this.viewport.copy(c.viewport);
      this.texture = c.texture.clone();
      this.depthBuffer = c.depthBuffer;
      this.stencilBuffer = c.stencilBuffer;
      this.depthTexture = c.depthTexture;
      return this;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  });
  dh.prototype = Object.assign(Object.create(Db.prototype), {
    constructor: dh,
    isWebGLMultisampleRenderTarget: !0,
    copy: function (c) {
      Db.prototype.copy.call(this, c);
      this.samples = c.samples;
      return this;
    },
  });
  var ua = function (c, a, b, d) {
      void 0 === c && (c = 0);
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === d && (d = 1);
      Object.defineProperty(this, "isQuaternion", { value: !0 });
      this._x = c;
      this._y = a;
      this._z = b;
      this._w = d;
    },
    rc = {
      x: { configurable: !0 },
      y: { configurable: !0 },
      z: { configurable: !0 },
      w: { configurable: !0 },
    };
  ua.slerp = function (c, a, b, d) {
    return b.copy(c).slerp(a, d);
  };
  ua.slerpFlat = function (c, a, b, d, e, f, g) {
    var h = b[d + 0],
      k = b[d + 1],
      l = b[d + 2];
    b = b[d + 3];
    d = e[f + 0];
    var m = e[f + 1],
      n = e[f + 2];
    e = e[f + 3];
    if (b !== e || h !== d || k !== m || l !== n) {
      f = 1 - g;
      var p = h * d + k * m + l * n + b * e,
        t = 0 <= p ? 1 : -1,
        q = 1 - p * p;
      q > Number.EPSILON &&
        ((q = Math.sqrt(q)),
        (p = Math.atan2(q, p * t)),
        (f = Math.sin(f * p) / q),
        (g = Math.sin(g * p) / q));
      t *= g;
      h = h * f + d * t;
      k = k * f + m * t;
      l = l * f + n * t;
      b = b * f + e * t;
      f === 1 - g &&
        ((g = 1 / Math.sqrt(h * h + k * k + l * l + b * b)),
        (h *= g),
        (k *= g),
        (l *= g),
        (b *= g));
    }
    c[a] = h;
    c[a + 1] = k;
    c[a + 2] = l;
    c[a + 3] = b;
  };
  ua.multiplyQuaternionsFlat = function (c, a, b, d, e, f) {
    var g = b[d],
      h = b[d + 1],
      k = b[d + 2];
    b = b[d + 3];
    d = e[f];
    var l = e[f + 1],
      m = e[f + 2];
    e = e[f + 3];
    c[a] = g * e + b * d + h * m - k * l;
    c[a + 1] = h * e + b * l + k * d - g * m;
    c[a + 2] = k * e + b * m + g * l - h * d;
    c[a + 3] = b * e - g * d - h * l - k * m;
    return c;
  };
  rc.x.get = function () {
    return this._x;
  };
  rc.x.set = function (c) {
    this._x = c;
    this._onChangeCallback();
  };
  rc.y.get = function () {
    return this._y;
  };
  rc.y.set = function (c) {
    this._y = c;
    this._onChangeCallback();
  };
  rc.z.get = function () {
    return this._z;
  };
  rc.z.set = function (c) {
    this._z = c;
    this._onChangeCallback();
  };
  rc.w.get = function () {
    return this._w;
  };
  rc.w.set = function (c) {
    this._w = c;
    this._onChangeCallback();
  };
  ua.prototype.set = function (c, a, b, d) {
    this._x = c;
    this._y = a;
    this._z = b;
    this._w = d;
    this._onChangeCallback();
    return this;
  };
  ua.prototype.clone = function () {
    return new this.constructor(this._x, this._y, this._z, this._w);
  };
  ua.prototype.copy = function (c) {
    this._x = c.x;
    this._y = c.y;
    this._z = c.z;
    this._w = c.w;
    this._onChangeCallback();
    return this;
  };
  ua.prototype.setFromEuler = function (c, a) {
    if (!c || !c.isEuler)
      throw Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    var b = c._x,
      d = c._y,
      e = c._z;
    c = c._order;
    var f = Math.cos,
      g = Math.sin,
      h = f(b / 2),
      k = f(d / 2);
    f = f(e / 2);
    b = g(b / 2);
    d = g(d / 2);
    e = g(e / 2);
    switch (c) {
      case "XYZ":
        this._x = b * k * f + h * d * e;
        this._y = h * d * f - b * k * e;
        this._z = h * k * e + b * d * f;
        this._w = h * k * f - b * d * e;
        break;
      case "YXZ":
        this._x = b * k * f + h * d * e;
        this._y = h * d * f - b * k * e;
        this._z = h * k * e - b * d * f;
        this._w = h * k * f + b * d * e;
        break;
      case "ZXY":
        this._x = b * k * f - h * d * e;
        this._y = h * d * f + b * k * e;
        this._z = h * k * e + b * d * f;
        this._w = h * k * f - b * d * e;
        break;
      case "ZYX":
        this._x = b * k * f - h * d * e;
        this._y = h * d * f + b * k * e;
        this._z = h * k * e - b * d * f;
        this._w = h * k * f + b * d * e;
        break;
      case "YZX":
        this._x = b * k * f + h * d * e;
        this._y = h * d * f + b * k * e;
        this._z = h * k * e - b * d * f;
        this._w = h * k * f - b * d * e;
        break;
      case "XZY":
        this._x = b * k * f - h * d * e;
        this._y = h * d * f - b * k * e;
        this._z = h * k * e + b * d * f;
        this._w = h * k * f + b * d * e;
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + c
        );
    }
    !1 !== a && this._onChangeCallback();
    return this;
  };
  ua.prototype.setFromAxisAngle = function (c, a) {
    a /= 2;
    var b = Math.sin(a);
    this._x = c.x * b;
    this._y = c.y * b;
    this._z = c.z * b;
    this._w = Math.cos(a);
    this._onChangeCallback();
    return this;
  };
  ua.prototype.setFromRotationMatrix = function (c) {
    var a = c.elements,
      b = a[0];
    c = a[4];
    var d = a[8],
      e = a[1],
      f = a[5],
      g = a[9],
      h = a[2],
      k = a[6];
    a = a[10];
    var l = b + f + a;
    0 < l
      ? ((b = 0.5 / Math.sqrt(l + 1)),
        (this._w = 0.25 / b),
        (this._x = (k - g) * b),
        (this._y = (d - h) * b),
        (this._z = (e - c) * b))
      : b > f && b > a
      ? ((b = 2 * Math.sqrt(1 + b - f - a)),
        (this._w = (k - g) / b),
        (this._x = 0.25 * b),
        (this._y = (c + e) / b),
        (this._z = (d + h) / b))
      : f > a
      ? ((b = 2 * Math.sqrt(1 + f - b - a)),
        (this._w = (d - h) / b),
        (this._x = (c + e) / b),
        (this._y = 0.25 * b),
        (this._z = (g + k) / b))
      : ((b = 2 * Math.sqrt(1 + a - b - f)),
        (this._w = (e - c) / b),
        (this._x = (d + h) / b),
        (this._y = (g + k) / b),
        (this._z = 0.25 * b));
    this._onChangeCallback();
    return this;
  };
  ua.prototype.setFromUnitVectors = function (c, a) {
    var b = c.dot(a) + 1;
    1e-6 > b
      ? ((b = 0),
        Math.abs(c.x) > Math.abs(c.z)
          ? ((this._x = -c.y), (this._y = c.x), (this._z = 0))
          : ((this._x = 0), (this._y = -c.z), (this._z = c.y)))
      : ((this._x = c.y * a.z - c.z * a.y),
        (this._y = c.z * a.x - c.x * a.z),
        (this._z = c.x * a.y - c.y * a.x));
    this._w = b;
    return this.normalize();
  };
  ua.prototype.angleTo = function (c) {
    return 2 * Math.acos(Math.abs(xa.clamp(this.dot(c), -1, 1)));
  };
  ua.prototype.rotateTowards = function (c, a) {
    var b = this.angleTo(c);
    if (0 === b) return this;
    this.slerp(c, Math.min(1, a / b));
    return this;
  };
  ua.prototype.identity = function () {
    return this.set(0, 0, 0, 1);
  };
  ua.prototype.inverse = function () {
    return this.conjugate();
  };
  ua.prototype.conjugate = function () {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this._onChangeCallback();
    return this;
  };
  ua.prototype.dot = function (c) {
    return this._x * c._x + this._y * c._y + this._z * c._z + this._w * c._w;
  };
  ua.prototype.lengthSq = function () {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  };
  ua.prototype.length = function () {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  };
  ua.prototype.normalize = function () {
    var c = this.length();
    0 === c
      ? ((this._z = this._y = this._x = 0), (this._w = 1))
      : ((c = 1 / c),
        (this._x *= c),
        (this._y *= c),
        (this._z *= c),
        (this._w *= c));
    this._onChangeCallback();
    return this;
  };
  ua.prototype.multiply = function (c, a) {
    return void 0 !== a
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(c, a))
      : this.multiplyQuaternions(this, c);
  };
  ua.prototype.premultiply = function (c) {
    return this.multiplyQuaternions(c, this);
  };
  ua.prototype.multiplyQuaternions = function (c, a) {
    var b = c._x,
      d = c._y,
      e = c._z;
    c = c._w;
    var f = a._x,
      g = a._y,
      h = a._z;
    a = a._w;
    this._x = b * a + c * f + d * h - e * g;
    this._y = d * a + c * g + e * f - b * h;
    this._z = e * a + c * h + b * g - d * f;
    this._w = c * a - b * f - d * g - e * h;
    this._onChangeCallback();
    return this;
  };
  ua.prototype.slerp = function (c, a) {
    if (0 === a) return this;
    if (1 === a) return this.copy(c);
    var b = this._x,
      d = this._y,
      e = this._z,
      f = this._w,
      g = f * c._w + b * c._x + d * c._y + e * c._z;
    0 > g
      ? ((this._w = -c._w),
        (this._x = -c._x),
        (this._y = -c._y),
        (this._z = -c._z),
        (g = -g))
      : this.copy(c);
    if (1 <= g)
      return (this._w = f), (this._x = b), (this._y = d), (this._z = e), this;
    c = 1 - g * g;
    if (c <= Number.EPSILON)
      return (
        (g = 1 - a),
        (this._w = g * f + a * this._w),
        (this._x = g * b + a * this._x),
        (this._y = g * d + a * this._y),
        (this._z = g * e + a * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    c = Math.sqrt(c);
    var h = Math.atan2(c, g);
    g = Math.sin((1 - a) * h) / c;
    a = Math.sin(a * h) / c;
    this._w = f * g + this._w * a;
    this._x = b * g + this._x * a;
    this._y = d * g + this._y * a;
    this._z = e * g + this._z * a;
    this._onChangeCallback();
    return this;
  };
  ua.prototype.equals = function (c) {
    return (
      c._x === this._x &&
      c._y === this._y &&
      c._z === this._z &&
      c._w === this._w
    );
  };
  ua.prototype.fromArray = function (c, a) {
    void 0 === a && (a = 0);
    this._x = c[a];
    this._y = c[a + 1];
    this._z = c[a + 2];
    this._w = c[a + 3];
    this._onChangeCallback();
    return this;
  };
  ua.prototype.toArray = function (c, a) {
    void 0 === c && (c = []);
    void 0 === a && (a = 0);
    c[a] = this._x;
    c[a + 1] = this._y;
    c[a + 2] = this._z;
    c[a + 3] = this._w;
    return c;
  };
  ua.prototype.fromBufferAttribute = function (c, a) {
    this._x = c.getX(a);
    this._y = c.getY(a);
    this._z = c.getZ(a);
    this._w = c.getW(a);
    return this;
  };
  ua.prototype._onChange = function (c) {
    this._onChangeCallback = c;
    return this;
  };
  ua.prototype._onChangeCallback = function () {};
  Object.defineProperties(ua.prototype, rc);
  var w = function (c, a, b) {
    void 0 === c && (c = 0);
    void 0 === a && (a = 0);
    void 0 === b && (b = 0);
    Object.defineProperty(this, "isVector3", { value: !0 });
    this.x = c;
    this.y = a;
    this.z = b;
  };
  w.prototype.set = function (c, a, b) {
    void 0 === b && (b = this.z);
    this.x = c;
    this.y = a;
    this.z = b;
    return this;
  };
  w.prototype.setScalar = function (c) {
    this.z = this.y = this.x = c;
    return this;
  };
  w.prototype.setX = function (c) {
    this.x = c;
    return this;
  };
  w.prototype.setY = function (c) {
    this.y = c;
    return this;
  };
  w.prototype.setZ = function (c) {
    this.z = c;
    return this;
  };
  w.prototype.setComponent = function (c, a) {
    switch (c) {
      case 0:
        this.x = a;
        break;
      case 1:
        this.y = a;
        break;
      case 2:
        this.z = a;
        break;
      default:
        throw Error("index is out of range: " + c);
    }
    return this;
  };
  w.prototype.getComponent = function (c) {
    switch (c) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error("index is out of range: " + c);
    }
  };
  w.prototype.clone = function () {
    return new this.constructor(this.x, this.y, this.z);
  };
  w.prototype.copy = function (c) {
    this.x = c.x;
    this.y = c.y;
    this.z = c.z;
    return this;
  };
  w.prototype.add = function (c, a) {
    if (void 0 !== a)
      return (
        console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(c, a)
      );
    this.x += c.x;
    this.y += c.y;
    this.z += c.z;
    return this;
  };
  w.prototype.addScalar = function (c) {
    this.x += c;
    this.y += c;
    this.z += c;
    return this;
  };
  w.prototype.addVectors = function (c, a) {
    this.x = c.x + a.x;
    this.y = c.y + a.y;
    this.z = c.z + a.z;
    return this;
  };
  w.prototype.addScaledVector = function (c, a) {
    this.x += c.x * a;
    this.y += c.y * a;
    this.z += c.z * a;
    return this;
  };
  w.prototype.sub = function (c, a) {
    if (void 0 !== a)
      return (
        console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(c, a)
      );
    this.x -= c.x;
    this.y -= c.y;
    this.z -= c.z;
    return this;
  };
  w.prototype.subScalar = function (c) {
    this.x -= c;
    this.y -= c;
    this.z -= c;
    return this;
  };
  w.prototype.subVectors = function (c, a) {
    this.x = c.x - a.x;
    this.y = c.y - a.y;
    this.z = c.z - a.z;
    return this;
  };
  w.prototype.multiply = function (c, a) {
    if (void 0 !== a)
      return (
        console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(c, a)
      );
    this.x *= c.x;
    this.y *= c.y;
    this.z *= c.z;
    return this;
  };
  w.prototype.multiplyScalar = function (c) {
    this.x *= c;
    this.y *= c;
    this.z *= c;
    return this;
  };
  w.prototype.multiplyVectors = function (c, a) {
    this.x = c.x * a.x;
    this.y = c.y * a.y;
    this.z = c.z * a.z;
    return this;
  };
  w.prototype.applyEuler = function (c) {
    (c && c.isEuler) ||
      console.error(
        "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    return this.applyQuaternion(vj.setFromEuler(c));
  };
  w.prototype.applyAxisAngle = function (c, a) {
    return this.applyQuaternion(vj.setFromAxisAngle(c, a));
  };
  w.prototype.applyMatrix3 = function (c) {
    var a = this.x,
      b = this.y,
      d = this.z;
    c = c.elements;
    this.x = c[0] * a + c[3] * b + c[6] * d;
    this.y = c[1] * a + c[4] * b + c[7] * d;
    this.z = c[2] * a + c[5] * b + c[8] * d;
    return this;
  };
  w.prototype.applyNormalMatrix = function (c) {
    return this.applyMatrix3(c).normalize();
  };
  w.prototype.applyMatrix4 = function (c) {
    var a = this.x,
      b = this.y,
      d = this.z;
    c = c.elements;
    var e = 1 / (c[3] * a + c[7] * b + c[11] * d + c[15]);
    this.x = (c[0] * a + c[4] * b + c[8] * d + c[12]) * e;
    this.y = (c[1] * a + c[5] * b + c[9] * d + c[13]) * e;
    this.z = (c[2] * a + c[6] * b + c[10] * d + c[14]) * e;
    return this;
  };
  w.prototype.applyQuaternion = function (c) {
    var a = this.x,
      b = this.y,
      d = this.z,
      e = c.x,
      f = c.y,
      g = c.z;
    c = c.w;
    var h = c * a + f * d - g * b,
      k = c * b + g * a - e * d,
      l = c * d + e * b - f * a;
    a = -e * a - f * b - g * d;
    this.x = h * c + a * -e + k * -g - l * -f;
    this.y = k * c + a * -f + l * -e - h * -g;
    this.z = l * c + a * -g + h * -f - k * -e;
    return this;
  };
  w.prototype.project = function (c) {
    return this.applyMatrix4(c.matrixWorldInverse).applyMatrix4(
      c.projectionMatrix
    );
  };
  w.prototype.unproject = function (c) {
    return this.applyMatrix4(c.projectionMatrixInverse).applyMatrix4(
      c.matrixWorld
    );
  };
  w.prototype.transformDirection = function (c) {
    var a = this.x,
      b = this.y,
      d = this.z;
    c = c.elements;
    this.x = c[0] * a + c[4] * b + c[8] * d;
    this.y = c[1] * a + c[5] * b + c[9] * d;
    this.z = c[2] * a + c[6] * b + c[10] * d;
    return this.normalize();
  };
  w.prototype.divide = function (c) {
    this.x /= c.x;
    this.y /= c.y;
    this.z /= c.z;
    return this;
  };
  w.prototype.divideScalar = function (c) {
    return this.multiplyScalar(1 / c);
  };
  w.prototype.min = function (c) {
    this.x = Math.min(this.x, c.x);
    this.y = Math.min(this.y, c.y);
    this.z = Math.min(this.z, c.z);
    return this;
  };
  w.prototype.max = function (c) {
    this.x = Math.max(this.x, c.x);
    this.y = Math.max(this.y, c.y);
    this.z = Math.max(this.z, c.z);
    return this;
  };
  w.prototype.clamp = function (c, a) {
    this.x = Math.max(c.x, Math.min(a.x, this.x));
    this.y = Math.max(c.y, Math.min(a.y, this.y));
    this.z = Math.max(c.z, Math.min(a.z, this.z));
    return this;
  };
  w.prototype.clampScalar = function (c, a) {
    this.x = Math.max(c, Math.min(a, this.x));
    this.y = Math.max(c, Math.min(a, this.y));
    this.z = Math.max(c, Math.min(a, this.z));
    return this;
  };
  w.prototype.clampLength = function (c, a) {
    var b = this.length();
    return this.divideScalar(b || 1).multiplyScalar(
      Math.max(c, Math.min(a, b))
    );
  };
  w.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  };
  w.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  };
  w.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  };
  w.prototype.roundToZero = function () {
    this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z);
    return this;
  };
  w.prototype.negate = function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  };
  w.prototype.dot = function (c) {
    return this.x * c.x + this.y * c.y + this.z * c.z;
  };
  w.prototype.lengthSq = function () {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  };
  w.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  };
  w.prototype.manhattanLength = function () {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  };
  w.prototype.normalize = function () {
    return this.divideScalar(this.length() || 1);
  };
  w.prototype.setLength = function (c) {
    return this.normalize().multiplyScalar(c);
  };
  w.prototype.lerp = function (c, a) {
    this.x += (c.x - this.x) * a;
    this.y += (c.y - this.y) * a;
    this.z += (c.z - this.z) * a;
    return this;
  };
  w.prototype.lerpVectors = function (c, a, b) {
    this.x = c.x + (a.x - c.x) * b;
    this.y = c.y + (a.y - c.y) * b;
    this.z = c.z + (a.z - c.z) * b;
    return this;
  };
  w.prototype.cross = function (c, a) {
    return void 0 !== a
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(c, a))
      : this.crossVectors(this, c);
  };
  w.prototype.crossVectors = function (c, a) {
    var b = c.x,
      d = c.y;
    c = c.z;
    var e = a.x,
      f = a.y;
    a = a.z;
    this.x = d * a - c * f;
    this.y = c * e - b * a;
    this.z = b * f - d * e;
    return this;
  };
  w.prototype.projectOnVector = function (c) {
    var a = c.lengthSq();
    if (0 === a) return this.set(0, 0, 0);
    a = c.dot(this) / a;
    return this.copy(c).multiplyScalar(a);
  };
  w.prototype.projectOnPlane = function (c) {
    Yh.copy(this).projectOnVector(c);
    return this.sub(Yh);
  };
  w.prototype.reflect = function (c) {
    return this.sub(Yh.copy(c).multiplyScalar(2 * this.dot(c)));
  };
  w.prototype.angleTo = function (c) {
    var a = Math.sqrt(this.lengthSq() * c.lengthSq());
    if (0 === a) return Math.PI / 2;
    c = this.dot(c) / a;
    return Math.acos(xa.clamp(c, -1, 1));
  };
  w.prototype.distanceTo = function (c) {
    return Math.sqrt(this.distanceToSquared(c));
  };
  w.prototype.distanceToSquared = function (c) {
    var a = this.x - c.x,
      b = this.y - c.y;
    c = this.z - c.z;
    return a * a + b * b + c * c;
  };
  w.prototype.manhattanDistanceTo = function (c) {
    return (
      Math.abs(this.x - c.x) + Math.abs(this.y - c.y) + Math.abs(this.z - c.z)
    );
  };
  w.prototype.setFromSpherical = function (c) {
    return this.setFromSphericalCoords(c.radius, c.phi, c.theta);
  };
  w.prototype.setFromSphericalCoords = function (c, a, b) {
    var d = Math.sin(a) * c;
    this.x = d * Math.sin(b);
    this.y = Math.cos(a) * c;
    this.z = d * Math.cos(b);
    return this;
  };
  w.prototype.setFromCylindrical = function (c) {
    return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
  };
  w.prototype.setFromCylindricalCoords = function (c, a, b) {
    this.x = c * Math.sin(a);
    this.y = b;
    this.z = c * Math.cos(a);
    return this;
  };
  w.prototype.setFromMatrixPosition = function (c) {
    c = c.elements;
    this.x = c[12];
    this.y = c[13];
    this.z = c[14];
    return this;
  };
  w.prototype.setFromMatrixScale = function (c) {
    var a = this.setFromMatrixColumn(c, 0).length(),
      b = this.setFromMatrixColumn(c, 1).length();
    c = this.setFromMatrixColumn(c, 2).length();
    this.x = a;
    this.y = b;
    this.z = c;
    return this;
  };
  w.prototype.setFromMatrixColumn = function (c, a) {
    return this.fromArray(c.elements, 4 * a);
  };
  w.prototype.setFromMatrix3Column = function (c, a) {
    return this.fromArray(c.elements, 3 * a);
  };
  w.prototype.equals = function (c) {
    return c.x === this.x && c.y === this.y && c.z === this.z;
  };
  w.prototype.fromArray = function (c, a) {
    void 0 === a && (a = 0);
    this.x = c[a];
    this.y = c[a + 1];
    this.z = c[a + 2];
    return this;
  };
  w.prototype.toArray = function (c, a) {
    void 0 === c && (c = []);
    void 0 === a && (a = 0);
    c[a] = this.x;
    c[a + 1] = this.y;
    c[a + 2] = this.z;
    return c;
  };
  w.prototype.fromBufferAttribute = function (c, a, b) {
    void 0 !== b &&
      console.warn(
        "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
      );
    this.x = c.getX(a);
    this.y = c.getY(a);
    this.z = c.getZ(a);
    return this;
  };
  w.prototype.random = function () {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  };
  var Yh = new w(),
    vj = new ua(),
    za = function (c, a) {
      Object.defineProperty(this, "isBox3", { value: !0 });
      this.min = void 0 !== c ? c : new w(Infinity, Infinity, Infinity);
      this.max = void 0 !== a ? a : new w(-Infinity, -Infinity, -Infinity);
    };
  za.prototype.set = function (c, a) {
    this.min.copy(c);
    this.max.copy(a);
    return this;
  };
  za.prototype.setFromArray = function (c) {
    for (
      var a = Infinity,
        b = Infinity,
        d = Infinity,
        e = -Infinity,
        f = -Infinity,
        g = -Infinity,
        h = 0,
        k = c.length;
      h < k;
      h += 3
    ) {
      var l = c[h],
        m = c[h + 1],
        n = c[h + 2];
      l < a && (a = l);
      m < b && (b = m);
      n < d && (d = n);
      l > e && (e = l);
      m > f && (f = m);
      n > g && (g = n);
    }
    this.min.set(a, b, d);
    this.max.set(e, f, g);
    return this;
  };
  za.prototype.setFromBufferAttribute = function (c) {
    for (
      var a = Infinity,
        b = Infinity,
        d = Infinity,
        e = -Infinity,
        f = -Infinity,
        g = -Infinity,
        h = 0,
        k = c.count;
      h < k;
      h++
    ) {
      var l = c.getX(h),
        m = c.getY(h),
        n = c.getZ(h);
      l < a && (a = l);
      m < b && (b = m);
      n < d && (d = n);
      l > e && (e = l);
      m > f && (f = m);
      n > g && (g = n);
    }
    this.min.set(a, b, d);
    this.max.set(e, f, g);
    return this;
  };
  za.prototype.setFromPoints = function (c) {
    this.makeEmpty();
    for (var a = 0, b = c.length; a < b; a++) this.expandByPoint(c[a]);
    return this;
  };
  za.prototype.setFromCenterAndSize = function (c, a) {
    a = Cf.copy(a).multiplyScalar(0.5);
    this.min.copy(c).sub(a);
    this.max.copy(c).add(a);
    return this;
  };
  za.prototype.setFromObject = function (c) {
    this.makeEmpty();
    return this.expandByObject(c);
  };
  za.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  za.prototype.copy = function (c) {
    this.min.copy(c.min);
    this.max.copy(c.max);
    return this;
  };
  za.prototype.makeEmpty = function () {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  };
  za.prototype.isEmpty = function () {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  };
  za.prototype.getCenter = function (c) {
    void 0 === c &&
      (console.warn("THREE.Box3: .getCenter() target is now required"),
      (c = new w()));
    return this.isEmpty()
      ? c.set(0, 0, 0)
      : c.addVectors(this.min, this.max).multiplyScalar(0.5);
  };
  za.prototype.getSize = function (c) {
    void 0 === c &&
      (console.warn("THREE.Box3: .getSize() target is now required"),
      (c = new w()));
    return this.isEmpty() ? c.set(0, 0, 0) : c.subVectors(this.max, this.min);
  };
  za.prototype.expandByPoint = function (c) {
    this.min.min(c);
    this.max.max(c);
    return this;
  };
  za.prototype.expandByVector = function (c) {
    this.min.sub(c);
    this.max.add(c);
    return this;
  };
  za.prototype.expandByScalar = function (c) {
    this.min.addScalar(-c);
    this.max.addScalar(c);
    return this;
  };
  za.prototype.expandByObject = function (c) {
    c.updateWorldMatrix(!1, !1);
    var a = c.geometry;
    void 0 !== a &&
      (null === a.boundingBox && a.computeBoundingBox(),
      Zh.copy(a.boundingBox),
      Zh.applyMatrix4(c.matrixWorld),
      this.union(Zh));
    c = c.children;
    a = 0;
    for (var b = c.length; a < b; a++) this.expandByObject(c[a]);
    return this;
  };
  za.prototype.containsPoint = function (c) {
    return c.x < this.min.x ||
      c.x > this.max.x ||
      c.y < this.min.y ||
      c.y > this.max.y ||
      c.z < this.min.z ||
      c.z > this.max.z
      ? !1
      : !0;
  };
  za.prototype.containsBox = function (c) {
    return (
      this.min.x <= c.min.x &&
      c.max.x <= this.max.x &&
      this.min.y <= c.min.y &&
      c.max.y <= this.max.y &&
      this.min.z <= c.min.z &&
      c.max.z <= this.max.z
    );
  };
  za.prototype.getParameter = function (c, a) {
    void 0 === a &&
      (console.warn("THREE.Box3: .getParameter() target is now required"),
      (a = new w()));
    return a.set(
      (c.x - this.min.x) / (this.max.x - this.min.x),
      (c.y - this.min.y) / (this.max.y - this.min.y),
      (c.z - this.min.z) / (this.max.z - this.min.z)
    );
  };
  za.prototype.intersectsBox = function (c) {
    return c.max.x < this.min.x ||
      c.min.x > this.max.x ||
      c.max.y < this.min.y ||
      c.min.y > this.max.y ||
      c.max.z < this.min.z ||
      c.min.z > this.max.z
      ? !1
      : !0;
  };
  za.prototype.intersectsSphere = function (c) {
    this.clampPoint(c.center, Cf);
    return Cf.distanceToSquared(c.center) <= c.radius * c.radius;
  };
  za.prototype.intersectsPlane = function (c) {
    if (0 < c.normal.x) {
      var a = c.normal.x * this.min.x;
      var b = c.normal.x * this.max.x;
    } else (a = c.normal.x * this.max.x), (b = c.normal.x * this.min.x);
    0 < c.normal.y
      ? ((a += c.normal.y * this.min.y), (b += c.normal.y * this.max.y))
      : ((a += c.normal.y * this.max.y), (b += c.normal.y * this.min.y));
    0 < c.normal.z
      ? ((a += c.normal.z * this.min.z), (b += c.normal.z * this.max.z))
      : ((a += c.normal.z * this.max.z), (b += c.normal.z * this.min.z));
    return a <= -c.constant && b >= -c.constant;
  };
  za.prototype.intersectsTriangle = function (c) {
    if (this.isEmpty()) return !1;
    this.getCenter(Df);
    Cg.subVectors(this.max, Df);
    pe.subVectors(c.a, Df);
    qe.subVectors(c.b, Df);
    re.subVectors(c.c, Df);
    Tc.subVectors(qe, pe);
    Uc.subVectors(re, qe);
    sd.subVectors(pe, re);
    c = [
      0,
      -Tc.z,
      Tc.y,
      0,
      -Uc.z,
      Uc.y,
      0,
      -sd.z,
      sd.y,
      Tc.z,
      0,
      -Tc.x,
      Uc.z,
      0,
      -Uc.x,
      sd.z,
      0,
      -sd.x,
      -Tc.y,
      Tc.x,
      0,
      -Uc.y,
      Uc.x,
      0,
      -sd.y,
      sd.x,
      0,
    ];
    if (!eh(c, pe, qe, re, Cg)) return !1;
    c = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (!eh(c, pe, qe, re, Cg)) return !1;
    Dg.crossVectors(Tc, Uc);
    c = [Dg.x, Dg.y, Dg.z];
    return eh(c, pe, qe, re, Cg);
  };
  za.prototype.clampPoint = function (c, a) {
    void 0 === a &&
      (console.warn("THREE.Box3: .clampPoint() target is now required"),
      (a = new w()));
    return a.copy(c).clamp(this.min, this.max);
  };
  za.prototype.distanceToPoint = function (c) {
    return Cf.copy(c).clamp(this.min, this.max).sub(c).length();
  };
  za.prototype.getBoundingSphere = function (c) {
    void 0 === c &&
      console.error("THREE.Box3: .getBoundingSphere() target is now required");
    this.getCenter(c.center);
    c.radius = 0.5 * this.getSize(Cf).length();
    return c;
  };
  za.prototype.intersect = function (c) {
    this.min.max(c.min);
    this.max.min(c.max);
    this.isEmpty() && this.makeEmpty();
    return this;
  };
  za.prototype.union = function (c) {
    this.min.min(c.min);
    this.max.max(c.max);
    return this;
  };
  za.prototype.applyMatrix4 = function (c) {
    if (this.isEmpty()) return this;
    sc[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(c);
    sc[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(c);
    sc[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(c);
    sc[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(c);
    sc[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(c);
    sc[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(c);
    sc[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(c);
    sc[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(c);
    this.setFromPoints(sc);
    return this;
  };
  za.prototype.translate = function (c) {
    this.min.add(c);
    this.max.add(c);
    return this;
  };
  za.prototype.equals = function (c) {
    return c.min.equals(this.min) && c.max.equals(this.max);
  };
  var sc = [
      new w(),
      new w(),
      new w(),
      new w(),
      new w(),
      new w(),
      new w(),
      new w(),
    ],
    Cf = new w(),
    Zh = new za(),
    pe = new w(),
    qe = new w(),
    re = new w(),
    Tc = new w(),
    Uc = new w(),
    sd = new w(),
    Df = new w(),
    Cg = new w(),
    Dg = new w(),
    Yc = new w(),
    Ml = new za(),
    Wa = function (c, a) {
      this.center = void 0 !== c ? c : new w();
      this.radius = void 0 !== a ? a : -1;
    };
  Wa.prototype.set = function (c, a) {
    this.center.copy(c);
    this.radius = a;
    return this;
  };
  Wa.prototype.setFromPoints = function (c, a) {
    var b = this.center;
    void 0 !== a ? b.copy(a) : Ml.setFromPoints(c).getCenter(b);
    for (var d = (a = 0), e = c.length; d < e; d++)
      a = Math.max(a, b.distanceToSquared(c[d]));
    this.radius = Math.sqrt(a);
    return this;
  };
  Wa.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  Wa.prototype.copy = function (c) {
    this.center.copy(c.center);
    this.radius = c.radius;
    return this;
  };
  Wa.prototype.isEmpty = function () {
    return 0 > this.radius;
  };
  Wa.prototype.makeEmpty = function () {
    this.center.set(0, 0, 0);
    this.radius = -1;
    return this;
  };
  Wa.prototype.containsPoint = function (c) {
    return c.distanceToSquared(this.center) <= this.radius * this.radius;
  };
  Wa.prototype.distanceToPoint = function (c) {
    return c.distanceTo(this.center) - this.radius;
  };
  Wa.prototype.intersectsSphere = function (c) {
    var a = this.radius + c.radius;
    return c.center.distanceToSquared(this.center) <= a * a;
  };
  Wa.prototype.intersectsBox = function (c) {
    return c.intersectsSphere(this);
  };
  Wa.prototype.intersectsPlane = function (c) {
    return Math.abs(c.distanceToPoint(this.center)) <= this.radius;
  };
  Wa.prototype.clampPoint = function (c, a) {
    var b = this.center.distanceToSquared(c);
    void 0 === a &&
      (console.warn("THREE.Sphere: .clampPoint() target is now required"),
      (a = new w()));
    a.copy(c);
    b > this.radius * this.radius &&
      (a.sub(this.center).normalize(),
      a.multiplyScalar(this.radius).add(this.center));
    return a;
  };
  Wa.prototype.getBoundingBox = function (c) {
    void 0 === c &&
      (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
      (c = new za()));
    if (this.isEmpty()) return c.makeEmpty(), c;
    c.set(this.center, this.center);
    c.expandByScalar(this.radius);
    return c;
  };
  Wa.prototype.applyMatrix4 = function (c) {
    this.center.applyMatrix4(c);
    this.radius *= c.getMaxScaleOnAxis();
    return this;
  };
  Wa.prototype.translate = function (c) {
    this.center.add(c);
    return this;
  };
  Wa.prototype.equals = function (c) {
    return c.center.equals(this.center) && c.radius === this.radius;
  };
  var tc = new w(),
    $h = new w(),
    Eg = new w(),
    Vc = new w(),
    ai = new w(),
    Fg = new w(),
    bi = new w(),
    Ta = function (c, a) {
      this.origin = void 0 !== c ? c : new w();
      this.direction = void 0 !== a ? a : new w(0, 0, -1);
    };
  Ta.prototype.set = function (c, a) {
    this.origin.copy(c);
    this.direction.copy(a);
    return this;
  };
  Ta.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  Ta.prototype.copy = function (c) {
    this.origin.copy(c.origin);
    this.direction.copy(c.direction);
    return this;
  };
  Ta.prototype.at = function (c, a) {
    void 0 === a &&
      (console.warn("THREE.Ray: .at() target is now required"), (a = new w()));
    return a.copy(this.direction).multiplyScalar(c).add(this.origin);
  };
  Ta.prototype.lookAt = function (c) {
    this.direction.copy(c).sub(this.origin).normalize();
    return this;
  };
  Ta.prototype.recast = function (c) {
    this.origin.copy(this.at(c, tc));
    return this;
  };
  Ta.prototype.closestPointToPoint = function (c, a) {
    void 0 === a &&
      (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
      (a = new w()));
    a.subVectors(c, this.origin);
    c = a.dot(this.direction);
    return 0 > c
      ? a.copy(this.origin)
      : a.copy(this.direction).multiplyScalar(c).add(this.origin);
  };
  Ta.prototype.distanceToPoint = function (c) {
    return Math.sqrt(this.distanceSqToPoint(c));
  };
  Ta.prototype.distanceSqToPoint = function (c) {
    var a = tc.subVectors(c, this.origin).dot(this.direction);
    if (0 > a) return this.origin.distanceToSquared(c);
    tc.copy(this.direction).multiplyScalar(a).add(this.origin);
    return tc.distanceToSquared(c);
  };
  Ta.prototype.distanceSqToSegment = function (c, a, b, d) {
    $h.copy(c).add(a).multiplyScalar(0.5);
    Eg.copy(a).sub(c).normalize();
    Vc.copy(this.origin).sub($h);
    var e = 0.5 * c.distanceTo(a),
      f = -this.direction.dot(Eg),
      g = Vc.dot(this.direction),
      h = -Vc.dot(Eg),
      k = Vc.lengthSq(),
      l = Math.abs(1 - f * f);
    if (0 < l) {
      c = f * h - g;
      a = f * g - h;
      var m = e * l;
      0 <= c
        ? a >= -m
          ? a <= m
            ? ((e = 1 / l),
              (c *= e),
              (a *= e),
              (f = c * (c + f * a + 2 * g) + a * (f * c + a + 2 * h) + k))
            : ((a = e),
              (c = Math.max(0, -(f * a + g))),
              (f = -c * c + a * (a + 2 * h) + k))
          : ((a = -e),
            (c = Math.max(0, -(f * a + g))),
            (f = -c * c + a * (a + 2 * h) + k))
        : a <= -m
        ? ((c = Math.max(0, -(-f * e + g))),
          (a = 0 < c ? -e : Math.min(Math.max(-e, -h), e)),
          (f = -c * c + a * (a + 2 * h) + k))
        : a <= m
        ? ((c = 0),
          (a = Math.min(Math.max(-e, -h), e)),
          (f = a * (a + 2 * h) + k))
        : ((c = Math.max(0, -(f * e + g))),
          (a = 0 < c ? e : Math.min(Math.max(-e, -h), e)),
          (f = -c * c + a * (a + 2 * h) + k));
    } else
      (a = 0 < f ? -e : e),
        (c = Math.max(0, -(f * a + g))),
        (f = -c * c + a * (a + 2 * h) + k);
    b && b.copy(this.direction).multiplyScalar(c).add(this.origin);
    d && d.copy(Eg).multiplyScalar(a).add($h);
    return f;
  };
  Ta.prototype.intersectSphere = function (c, a) {
    tc.subVectors(c.center, this.origin);
    var b = tc.dot(this.direction),
      d = tc.dot(tc) - b * b;
    c = c.radius * c.radius;
    if (d > c) return null;
    c = Math.sqrt(c - d);
    d = b - c;
    b += c;
    return 0 > d && 0 > b ? null : 0 > d ? this.at(b, a) : this.at(d, a);
  };
  Ta.prototype.intersectsSphere = function (c) {
    return this.distanceSqToPoint(c.center) <= c.radius * c.radius;
  };
  Ta.prototype.distanceToPlane = function (c) {
    var a = c.normal.dot(this.direction);
    if (0 === a) return 0 === c.distanceToPoint(this.origin) ? 0 : null;
    c = -(this.origin.dot(c.normal) + c.constant) / a;
    return 0 <= c ? c : null;
  };
  Ta.prototype.intersectPlane = function (c, a) {
    c = this.distanceToPlane(c);
    return null === c ? null : this.at(c, a);
  };
  Ta.prototype.intersectsPlane = function (c) {
    var a = c.distanceToPoint(this.origin);
    return 0 === a || 0 > c.normal.dot(this.direction) * a ? !0 : !1;
  };
  Ta.prototype.intersectBox = function (c, a) {
    var b = 1 / this.direction.x;
    var d = 1 / this.direction.y;
    var e = 1 / this.direction.z,
      f = this.origin;
    if (0 <= b) {
      var g = (c.min.x - f.x) * b;
      b *= c.max.x - f.x;
    } else (g = (c.max.x - f.x) * b), (b *= c.min.x - f.x);
    if (0 <= d) {
      var h = (c.min.y - f.y) * d;
      d *= c.max.y - f.y;
    } else (h = (c.max.y - f.y) * d), (d *= c.min.y - f.y);
    if (g > d || h > b) return null;
    if (h > g || g !== g) g = h;
    if (d < b || b !== b) b = d;
    0 <= e
      ? ((h = (c.min.z - f.z) * e), (c = (c.max.z - f.z) * e))
      : ((h = (c.max.z - f.z) * e), (c = (c.min.z - f.z) * e));
    if (g > c || h > b) return null;
    if (h > g || g !== g) g = h;
    if (c < b || b !== b) b = c;
    return 0 > b ? null : this.at(0 <= g ? g : b, a);
  };
  Ta.prototype.intersectsBox = function (c) {
    return null !== this.intersectBox(c, tc);
  };
  Ta.prototype.intersectTriangle = function (c, a, b, d, e) {
    ai.subVectors(a, c);
    Fg.subVectors(b, c);
    bi.crossVectors(ai, Fg);
    a = this.direction.dot(bi);
    if (0 < a) {
      if (d) return null;
      d = 1;
    } else if (0 > a) (d = -1), (a = -a);
    else return null;
    Vc.subVectors(this.origin, c);
    c = d * this.direction.dot(Fg.crossVectors(Vc, Fg));
    if (0 > c) return null;
    b = d * this.direction.dot(ai.cross(Vc));
    if (0 > b || c + b > a) return null;
    c = -d * Vc.dot(bi);
    return 0 > c ? null : this.at(c / a, e);
  };
  Ta.prototype.applyMatrix4 = function (c) {
    this.origin.applyMatrix4(c);
    this.direction.transformDirection(c);
    return this;
  };
  Ta.prototype.equals = function (c) {
    return c.origin.equals(this.origin) && c.direction.equals(this.direction);
  };
  var da = function () {
    Object.defineProperty(this, "isMatrix4", { value: !0 });
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    0 < arguments.length &&
      console.error(
        "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
      );
  };
  da.prototype.set = function (c, a, b, d, e, f, g, h, k, l, m, n, p, t, q, v) {
    var u = this.elements;
    u[0] = c;
    u[4] = a;
    u[8] = b;
    u[12] = d;
    u[1] = e;
    u[5] = f;
    u[9] = g;
    u[13] = h;
    u[2] = k;
    u[6] = l;
    u[10] = m;
    u[14] = n;
    u[3] = p;
    u[7] = t;
    u[11] = q;
    u[15] = v;
    return this;
  };
  da.prototype.identity = function () {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  };
  da.prototype.clone = function () {
    return new da().fromArray(this.elements);
  };
  da.prototype.copy = function (c) {
    var a = this.elements;
    c = c.elements;
    a[0] = c[0];
    a[1] = c[1];
    a[2] = c[2];
    a[3] = c[3];
    a[4] = c[4];
    a[5] = c[5];
    a[6] = c[6];
    a[7] = c[7];
    a[8] = c[8];
    a[9] = c[9];
    a[10] = c[10];
    a[11] = c[11];
    a[12] = c[12];
    a[13] = c[13];
    a[14] = c[14];
    a[15] = c[15];
    return this;
  };
  da.prototype.copyPosition = function (c) {
    var a = this.elements;
    c = c.elements;
    a[12] = c[12];
    a[13] = c[13];
    a[14] = c[14];
    return this;
  };
  da.prototype.extractBasis = function (c, a, b) {
    c.setFromMatrixColumn(this, 0);
    a.setFromMatrixColumn(this, 1);
    b.setFromMatrixColumn(this, 2);
    return this;
  };
  da.prototype.makeBasis = function (c, a, b) {
    this.set(c.x, a.x, b.x, 0, c.y, a.y, b.y, 0, c.z, a.z, b.z, 0, 0, 0, 0, 1);
    return this;
  };
  da.prototype.extractRotation = function (c) {
    var a = this.elements,
      b = c.elements,
      d = 1 / se.setFromMatrixColumn(c, 0).length(),
      e = 1 / se.setFromMatrixColumn(c, 1).length();
    c = 1 / se.setFromMatrixColumn(c, 2).length();
    a[0] = b[0] * d;
    a[1] = b[1] * d;
    a[2] = b[2] * d;
    a[3] = 0;
    a[4] = b[4] * e;
    a[5] = b[5] * e;
    a[6] = b[6] * e;
    a[7] = 0;
    a[8] = b[8] * c;
    a[9] = b[9] * c;
    a[10] = b[10] * c;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    return this;
  };
  da.prototype.makeRotationFromEuler = function (c) {
    (c && c.isEuler) ||
      console.error(
        "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    var a = this.elements,
      b = c.x,
      d = c.y,
      e = c.z,
      f = Math.cos(b);
    b = Math.sin(b);
    var g = Math.cos(d);
    d = Math.sin(d);
    var h = Math.cos(e);
    e = Math.sin(e);
    if ("XYZ" === c.order) {
      c = f * h;
      var k = f * e,
        l = b * h,
        m = b * e;
      a[0] = g * h;
      a[4] = -g * e;
      a[8] = d;
      a[1] = k + l * d;
      a[5] = c - m * d;
      a[9] = -b * g;
      a[2] = m - c * d;
      a[6] = l + k * d;
      a[10] = f * g;
    } else
      "YXZ" === c.order
        ? ((c = g * h),
          (k = g * e),
          (l = d * h),
          (m = d * e),
          (a[0] = c + m * b),
          (a[4] = l * b - k),
          (a[8] = f * d),
          (a[1] = f * e),
          (a[5] = f * h),
          (a[9] = -b),
          (a[2] = k * b - l),
          (a[6] = m + c * b),
          (a[10] = f * g))
        : "ZXY" === c.order
        ? ((c = g * h),
          (k = g * e),
          (l = d * h),
          (m = d * e),
          (a[0] = c - m * b),
          (a[4] = -f * e),
          (a[8] = l + k * b),
          (a[1] = k + l * b),
          (a[5] = f * h),
          (a[9] = m - c * b),
          (a[2] = -f * d),
          (a[6] = b),
          (a[10] = f * g))
        : "ZYX" === c.order
        ? ((c = f * h),
          (k = f * e),
          (l = b * h),
          (m = b * e),
          (a[0] = g * h),
          (a[4] = l * d - k),
          (a[8] = c * d + m),
          (a[1] = g * e),
          (a[5] = m * d + c),
          (a[9] = k * d - l),
          (a[2] = -d),
          (a[6] = b * g),
          (a[10] = f * g))
        : "YZX" === c.order
        ? ((c = f * g),
          (k = f * d),
          (l = b * g),
          (m = b * d),
          (a[0] = g * h),
          (a[4] = m - c * e),
          (a[8] = l * e + k),
          (a[1] = e),
          (a[5] = f * h),
          (a[9] = -b * h),
          (a[2] = -d * h),
          (a[6] = k * e + l),
          (a[10] = c - m * e))
        : "XZY" === c.order &&
          ((c = f * g),
          (k = f * d),
          (l = b * g),
          (m = b * d),
          (a[0] = g * h),
          (a[4] = -e),
          (a[8] = d * h),
          (a[1] = c * e + m),
          (a[5] = f * h),
          (a[9] = k * e - l),
          (a[2] = l * e - k),
          (a[6] = b * h),
          (a[10] = m * e + c));
    a[3] = 0;
    a[7] = 0;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1;
    return this;
  };
  da.prototype.makeRotationFromQuaternion = function (c) {
    return this.compose(Nl, c, Ol);
  };
  da.prototype.lookAt = function (c, a, b) {
    var d = this.elements;
    ub.subVectors(c, a);
    0 === ub.lengthSq() && (ub.z = 1);
    ub.normalize();
    Wc.crossVectors(b, ub);
    0 === Wc.lengthSq() &&
      (1 === Math.abs(b.z) ? (ub.x += 1e-4) : (ub.z += 1e-4),
      ub.normalize(),
      Wc.crossVectors(b, ub));
    Wc.normalize();
    Gg.crossVectors(ub, Wc);
    d[0] = Wc.x;
    d[4] = Gg.x;
    d[8] = ub.x;
    d[1] = Wc.y;
    d[5] = Gg.y;
    d[9] = ub.y;
    d[2] = Wc.z;
    d[6] = Gg.z;
    d[10] = ub.z;
    return this;
  };
  da.prototype.multiply = function (c, a) {
    return void 0 !== a
      ? (console.warn(
          "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(c, a))
      : this.multiplyMatrices(this, c);
  };
  da.prototype.premultiply = function (c) {
    return this.multiplyMatrices(c, this);
  };
  da.prototype.multiplyMatrices = function (c, a) {
    var b = c.elements,
      d = a.elements;
    a = this.elements;
    c = b[0];
    var e = b[4],
      f = b[8],
      g = b[12],
      h = b[1],
      k = b[5],
      l = b[9],
      m = b[13],
      n = b[2],
      p = b[6],
      t = b[10],
      q = b[14],
      v = b[3],
      u = b[7],
      A = b[11];
    b = b[15];
    var B = d[0],
      D = d[4],
      G = d[8],
      I = d[12],
      E = d[1],
      H = d[5],
      M = d[9],
      F = d[13],
      K = d[2],
      P = d[6],
      V = d[10],
      ia = d[14],
      W = d[3],
      aa = d[7],
      Z = d[11];
    d = d[15];
    a[0] = c * B + e * E + f * K + g * W;
    a[4] = c * D + e * H + f * P + g * aa;
    a[8] = c * G + e * M + f * V + g * Z;
    a[12] = c * I + e * F + f * ia + g * d;
    a[1] = h * B + k * E + l * K + m * W;
    a[5] = h * D + k * H + l * P + m * aa;
    a[9] = h * G + k * M + l * V + m * Z;
    a[13] = h * I + k * F + l * ia + m * d;
    a[2] = n * B + p * E + t * K + q * W;
    a[6] = n * D + p * H + t * P + q * aa;
    a[10] = n * G + p * M + t * V + q * Z;
    a[14] = n * I + p * F + t * ia + q * d;
    a[3] = v * B + u * E + A * K + b * W;
    a[7] = v * D + u * H + A * P + b * aa;
    a[11] = v * G + u * M + A * V + b * Z;
    a[15] = v * I + u * F + A * ia + b * d;
    return this;
  };
  da.prototype.multiplyScalar = function (c) {
    var a = this.elements;
    a[0] *= c;
    a[4] *= c;
    a[8] *= c;
    a[12] *= c;
    a[1] *= c;
    a[5] *= c;
    a[9] *= c;
    a[13] *= c;
    a[2] *= c;
    a[6] *= c;
    a[10] *= c;
    a[14] *= c;
    a[3] *= c;
    a[7] *= c;
    a[11] *= c;
    a[15] *= c;
    return this;
  };
  da.prototype.determinant = function () {
    var c = this.elements,
      a = c[0],
      b = c[4],
      d = c[8],
      e = c[12],
      f = c[1],
      g = c[5],
      h = c[9],
      k = c[13],
      l = c[2],
      m = c[6],
      n = c[10],
      p = c[14];
    return (
      c[3] *
        (+e * h * m -
          d * k * m -
          e * g * n +
          b * k * n +
          d * g * p -
          b * h * p) +
      c[7] *
        (+a * h * p -
          a * k * n +
          e * f * n -
          d * f * p +
          d * k * l -
          e * h * l) +
      c[11] *
        (+a * k * m -
          a * g * p -
          e * f * m +
          b * f * p +
          e * g * l -
          b * k * l) +
      c[15] *
        (-d * g * l - a * h * m + a * g * n + d * f * m - b * f * n + b * h * l)
    );
  };
  da.prototype.transpose = function () {
    var c = this.elements;
    var a = c[1];
    c[1] = c[4];
    c[4] = a;
    a = c[2];
    c[2] = c[8];
    c[8] = a;
    a = c[6];
    c[6] = c[9];
    c[9] = a;
    a = c[3];
    c[3] = c[12];
    c[12] = a;
    a = c[7];
    c[7] = c[13];
    c[13] = a;
    a = c[11];
    c[11] = c[14];
    c[14] = a;
    return this;
  };
  da.prototype.setPosition = function (c, a, b) {
    var d = this.elements;
    c.isVector3
      ? ((d[12] = c.x), (d[13] = c.y), (d[14] = c.z))
      : ((d[12] = c), (d[13] = a), (d[14] = b));
    return this;
  };
  da.prototype.getInverse = function (c, a) {
    void 0 !== a &&
      console.warn(
        "THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate."
      );
    a = this.elements;
    var b = c.elements;
    c = b[0];
    var d = b[1],
      e = b[2],
      f = b[3],
      g = b[4],
      h = b[5],
      k = b[6],
      l = b[7],
      m = b[8],
      n = b[9],
      p = b[10],
      t = b[11],
      q = b[12],
      v = b[13],
      u = b[14];
    b = b[15];
    var A =
        n * u * l - v * p * l + v * k * t - h * u * t - n * k * b + h * p * b,
      B = q * p * l - m * u * l - q * k * t + g * u * t + m * k * b - g * p * b,
      D = m * v * l - q * n * l + q * h * t - g * v * t - m * h * b + g * n * b,
      G = q * n * k - m * v * k - q * h * p + g * v * p + m * h * u - g * n * u,
      I = c * A + d * B + e * D + f * G;
    if (0 === I)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    I = 1 / I;
    a[0] = A * I;
    a[1] =
      (v * p * f - n * u * f - v * e * t + d * u * t + n * e * b - d * p * b) *
      I;
    a[2] =
      (h * u * f - v * k * f + v * e * l - d * u * l - h * e * b + d * k * b) *
      I;
    a[3] =
      (n * k * f - h * p * f - n * e * l + d * p * l + h * e * t - d * k * t) *
      I;
    a[4] = B * I;
    a[5] =
      (m * u * f - q * p * f + q * e * t - c * u * t - m * e * b + c * p * b) *
      I;
    a[6] =
      (q * k * f - g * u * f - q * e * l + c * u * l + g * e * b - c * k * b) *
      I;
    a[7] =
      (g * p * f - m * k * f + m * e * l - c * p * l - g * e * t + c * k * t) *
      I;
    a[8] = D * I;
    a[9] =
      (q * n * f - m * v * f - q * d * t + c * v * t + m * d * b - c * n * b) *
      I;
    a[10] =
      (g * v * f - q * h * f + q * d * l - c * v * l - g * d * b + c * h * b) *
      I;
    a[11] =
      (m * h * f - g * n * f - m * d * l + c * n * l + g * d * t - c * h * t) *
      I;
    a[12] = G * I;
    a[13] =
      (m * v * e - q * n * e + q * d * p - c * v * p - m * d * u + c * n * u) *
      I;
    a[14] =
      (q * h * e - g * v * e - q * d * k + c * v * k + g * d * u - c * h * u) *
      I;
    a[15] =
      (g * n * e - m * h * e + m * d * k - c * n * k - g * d * p + c * h * p) *
      I;
    return this;
  };
  da.prototype.scale = function (c) {
    var a = this.elements,
      b = c.x,
      d = c.y;
    c = c.z;
    a[0] *= b;
    a[4] *= d;
    a[8] *= c;
    a[1] *= b;
    a[5] *= d;
    a[9] *= c;
    a[2] *= b;
    a[6] *= d;
    a[10] *= c;
    a[3] *= b;
    a[7] *= d;
    a[11] *= c;
    return this;
  };
  da.prototype.getMaxScaleOnAxis = function () {
    var c = this.elements;
    return Math.sqrt(
      Math.max(
        c[0] * c[0] + c[1] * c[1] + c[2] * c[2],
        c[4] * c[4] + c[5] * c[5] + c[6] * c[6],
        c[8] * c[8] + c[9] * c[9] + c[10] * c[10]
      )
    );
  };
  da.prototype.makeTranslation = function (c, a, b) {
    this.set(1, 0, 0, c, 0, 1, 0, a, 0, 0, 1, b, 0, 0, 0, 1);
    return this;
  };
  da.prototype.makeRotationX = function (c) {
    var a = Math.cos(c);
    c = Math.sin(c);
    this.set(1, 0, 0, 0, 0, a, -c, 0, 0, c, a, 0, 0, 0, 0, 1);
    return this;
  };
  da.prototype.makeRotationY = function (c) {
    var a = Math.cos(c);
    c = Math.sin(c);
    this.set(a, 0, c, 0, 0, 1, 0, 0, -c, 0, a, 0, 0, 0, 0, 1);
    return this;
  };
  da.prototype.makeRotationZ = function (c) {
    var a = Math.cos(c);
    c = Math.sin(c);
    this.set(a, -c, 0, 0, c, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  };
  da.prototype.makeRotationAxis = function (c, a) {
    var b = Math.cos(a);
    a = Math.sin(a);
    var d = 1 - b,
      e = c.x,
      f = c.y;
    c = c.z;
    var g = d * e,
      h = d * f;
    this.set(
      g * e + b,
      g * f - a * c,
      g * c + a * f,
      0,
      g * f + a * c,
      h * f + b,
      h * c - a * e,
      0,
      g * c - a * f,
      h * c + a * e,
      d * c * c + b,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  };
  da.prototype.makeScale = function (c, a, b) {
    this.set(c, 0, 0, 0, 0, a, 0, 0, 0, 0, b, 0, 0, 0, 0, 1);
    return this;
  };
  da.prototype.makeShear = function (c, a, b) {
    this.set(1, a, b, 0, c, 1, b, 0, c, a, 1, 0, 0, 0, 0, 1);
    return this;
  };
  da.prototype.compose = function (c, a, b) {
    var d = this.elements,
      e = a._x,
      f = a._y,
      g = a._z,
      h = a._w,
      k = e + e,
      l = f + f,
      m = g + g;
    a = e * k;
    var n = e * l;
    e *= m;
    var p = f * l;
    f *= m;
    g *= m;
    k *= h;
    l *= h;
    h *= m;
    m = b.x;
    var t = b.y;
    b = b.z;
    d[0] = (1 - (p + g)) * m;
    d[1] = (n + h) * m;
    d[2] = (e - l) * m;
    d[3] = 0;
    d[4] = (n - h) * t;
    d[5] = (1 - (a + g)) * t;
    d[6] = (f + k) * t;
    d[7] = 0;
    d[8] = (e + l) * b;
    d[9] = (f - k) * b;
    d[10] = (1 - (a + p)) * b;
    d[11] = 0;
    d[12] = c.x;
    d[13] = c.y;
    d[14] = c.z;
    d[15] = 1;
    return this;
  };
  da.prototype.decompose = function (c, a, b) {
    var d = this.elements,
      e = se.set(d[0], d[1], d[2]).length(),
      f = se.set(d[4], d[5], d[6]).length(),
      g = se.set(d[8], d[9], d[10]).length();
    0 > this.determinant() && (e = -e);
    c.x = d[12];
    c.y = d[13];
    c.z = d[14];
    gb.copy(this);
    c = 1 / e;
    d = 1 / f;
    var h = 1 / g;
    gb.elements[0] *= c;
    gb.elements[1] *= c;
    gb.elements[2] *= c;
    gb.elements[4] *= d;
    gb.elements[5] *= d;
    gb.elements[6] *= d;
    gb.elements[8] *= h;
    gb.elements[9] *= h;
    gb.elements[10] *= h;
    a.setFromRotationMatrix(gb);
    b.x = e;
    b.y = f;
    b.z = g;
    return this;
  };
  da.prototype.makePerspective = function (c, a, b, d, e, f) {
    void 0 === f &&
      console.warn(
        "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    var g = this.elements;
    g[0] = (2 * e) / (a - c);
    g[4] = 0;
    g[8] = (a + c) / (a - c);
    g[12] = 0;
    g[1] = 0;
    g[5] = (2 * e) / (b - d);
    g[9] = (b + d) / (b - d);
    g[13] = 0;
    g[2] = 0;
    g[6] = 0;
    g[10] = -(f + e) / (f - e);
    g[14] = (-2 * f * e) / (f - e);
    g[3] = 0;
    g[7] = 0;
    g[11] = -1;
    g[15] = 0;
    return this;
  };
  da.prototype.makeOrthographic = function (c, a, b, d, e, f) {
    var g = this.elements,
      h = 1 / (a - c),
      k = 1 / (b - d),
      l = 1 / (f - e);
    g[0] = 2 * h;
    g[4] = 0;
    g[8] = 0;
    g[12] = -((a + c) * h);
    g[1] = 0;
    g[5] = 2 * k;
    g[9] = 0;
    g[13] = -((b + d) * k);
    g[2] = 0;
    g[6] = 0;
    g[10] = -2 * l;
    g[14] = -((f + e) * l);
    g[3] = 0;
    g[7] = 0;
    g[11] = 0;
    g[15] = 1;
    return this;
  };
  da.prototype.equals = function (c) {
    var a = this.elements;
    c = c.elements;
    for (var b = 0; 16 > b; b++) if (a[b] !== c[b]) return !1;
    return !0;
  };
  da.prototype.fromArray = function (c, a) {
    void 0 === a && (a = 0);
    for (var b = 0; 16 > b; b++) this.elements[b] = c[b + a];
    return this;
  };
  da.prototype.toArray = function (c, a) {
    void 0 === c && (c = []);
    void 0 === a && (a = 0);
    var b = this.elements;
    c[a] = b[0];
    c[a + 1] = b[1];
    c[a + 2] = b[2];
    c[a + 3] = b[3];
    c[a + 4] = b[4];
    c[a + 5] = b[5];
    c[a + 6] = b[6];
    c[a + 7] = b[7];
    c[a + 8] = b[8];
    c[a + 9] = b[9];
    c[a + 10] = b[10];
    c[a + 11] = b[11];
    c[a + 12] = b[12];
    c[a + 13] = b[13];
    c[a + 14] = b[14];
    c[a + 15] = b[15];
    return c;
  };
  var se = new w(),
    gb = new da(),
    Nl = new w(0, 0, 0),
    Ol = new w(1, 1, 1),
    Wc = new w(),
    Gg = new w(),
    ub = new w(),
    hb = function f(a, b, d, e) {
      void 0 === a && (a = 0);
      void 0 === b && (b = 0);
      void 0 === d && (d = 0);
      void 0 === e && (e = f.DefaultOrder);
      Object.defineProperty(this, "isEuler", { value: !0 });
      this._x = a;
      this._y = b;
      this._z = d;
      this._order = e;
    },
    uc = {
      x: { configurable: !0 },
      y: { configurable: !0 },
      z: { configurable: !0 },
      order: { configurable: !0 },
    };
  uc.x.get = function () {
    return this._x;
  };
  uc.x.set = function (a) {
    this._x = a;
    this._onChangeCallback();
  };
  uc.y.get = function () {
    return this._y;
  };
  uc.y.set = function (a) {
    this._y = a;
    this._onChangeCallback();
  };
  uc.z.get = function () {
    return this._z;
  };
  uc.z.set = function (a) {
    this._z = a;
    this._onChangeCallback();
  };
  uc.order.get = function () {
    return this._order;
  };
  uc.order.set = function (a) {
    this._order = a;
    this._onChangeCallback();
  };
  hb.prototype.set = function (a, b, d, e) {
    this._x = a;
    this._y = b;
    this._z = d;
    this._order = e || this._order;
    this._onChangeCallback();
    return this;
  };
  hb.prototype.clone = function () {
    return new this.constructor(this._x, this._y, this._z, this._order);
  };
  hb.prototype.copy = function (a) {
    this._x = a._x;
    this._y = a._y;
    this._z = a._z;
    this._order = a._order;
    this._onChangeCallback();
    return this;
  };
  hb.prototype.setFromRotationMatrix = function (a, b, d) {
    var e = xa.clamp,
      f = a.elements;
    a = f[0];
    var g = f[4],
      h = f[8],
      k = f[1],
      l = f[5],
      m = f[9],
      n = f[2],
      p = f[6];
    f = f[10];
    b = b || this._order;
    switch (b) {
      case "XYZ":
        this._y = Math.asin(e(h, -1, 1));
        0.9999999 > Math.abs(h)
          ? ((this._x = Math.atan2(-m, f)), (this._z = Math.atan2(-g, a)))
          : ((this._x = Math.atan2(p, l)), (this._z = 0));
        break;
      case "YXZ":
        this._x = Math.asin(-e(m, -1, 1));
        0.9999999 > Math.abs(m)
          ? ((this._y = Math.atan2(h, f)), (this._z = Math.atan2(k, l)))
          : ((this._y = Math.atan2(-n, a)), (this._z = 0));
        break;
      case "ZXY":
        this._x = Math.asin(e(p, -1, 1));
        0.9999999 > Math.abs(p)
          ? ((this._y = Math.atan2(-n, f)), (this._z = Math.atan2(-g, l)))
          : ((this._y = 0), (this._z = Math.atan2(k, a)));
        break;
      case "ZYX":
        this._y = Math.asin(-e(n, -1, 1));
        0.9999999 > Math.abs(n)
          ? ((this._x = Math.atan2(p, f)), (this._z = Math.atan2(k, a)))
          : ((this._x = 0), (this._z = Math.atan2(-g, l)));
        break;
      case "YZX":
        this._z = Math.asin(e(k, -1, 1));
        0.9999999 > Math.abs(k)
          ? ((this._x = Math.atan2(-m, l)), (this._y = Math.atan2(-n, a)))
          : ((this._x = 0), (this._y = Math.atan2(h, f)));
        break;
      case "XZY":
        this._z = Math.asin(-e(g, -1, 1));
        0.9999999 > Math.abs(g)
          ? ((this._x = Math.atan2(p, l)), (this._y = Math.atan2(h, a)))
          : ((this._x = Math.atan2(-m, f)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            b
        );
    }
    this._order = b;
    !1 !== d && this._onChangeCallback();
    return this;
  };
  hb.prototype.setFromQuaternion = function (a, b, d) {
    wj.makeRotationFromQuaternion(a);
    return this.setFromRotationMatrix(wj, b, d);
  };
  hb.prototype.setFromVector3 = function (a, b) {
    return this.set(a.x, a.y, a.z, b || this._order);
  };
  hb.prototype.reorder = function (a) {
    xj.setFromEuler(this);
    return this.setFromQuaternion(xj, a);
  };
  hb.prototype.equals = function (a) {
    return (
      a._x === this._x &&
      a._y === this._y &&
      a._z === this._z &&
      a._order === this._order
    );
  };
  hb.prototype.fromArray = function (a) {
    this._x = a[0];
    this._y = a[1];
    this._z = a[2];
    void 0 !== a[3] && (this._order = a[3]);
    this._onChangeCallback();
    return this;
  };
  hb.prototype.toArray = function (a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this._x;
    a[b + 1] = this._y;
    a[b + 2] = this._z;
    a[b + 3] = this._order;
    return a;
  };
  hb.prototype.toVector3 = function (a) {
    return a
      ? a.set(this._x, this._y, this._z)
      : new w(this._x, this._y, this._z);
  };
  hb.prototype._onChange = function (a) {
    this._onChangeCallback = a;
    return this;
  };
  hb.prototype._onChangeCallback = function () {};
  Object.defineProperties(hb.prototype, uc);
  hb.DefaultOrder = "XYZ";
  hb.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
  var wj = new da(),
    xj = new ua(),
    $b = function () {
      this.mask = 1;
    };
  $b.prototype.set = function (a) {
    this.mask = (1 << a) | 0;
  };
  $b.prototype.enable = function (a) {
    this.mask = this.mask | (1 << a) | 0;
  };
  $b.prototype.enableAll = function () {
    this.mask = -1;
  };
  $b.prototype.toggle = function (a) {
    this.mask ^= (1 << a) | 0;
  };
  $b.prototype.disable = function (a) {
    this.mask &= ~((1 << a) | 0);
  };
  $b.prototype.disableAll = function () {
    this.mask = 0;
  };
  $b.prototype.test = function (a) {
    return 0 !== (this.mask & a.mask);
  };
  var ik = 0,
    yj = new w(),
    te = new ua(),
    vc = new da(),
    Hg = new w(),
    Ef = new w(),
    Pl = new w(),
    Ql = new ua(),
    zj = new w(1, 0, 0),
    Aj = new w(0, 1, 0),
    Bj = new w(0, 0, 1),
    Rl = { type: "added" },
    Sl = { type: "removed" };
  ha.DefaultUp = new w(0, 1, 0);
  ha.DefaultMatrixAutoUpdate = !0;
  ha.prototype = Object.assign(Object.create(wb.prototype), {
    constructor: ha,
    isObject3D: !0,
    onBeforeRender: function () {},
    onAfterRender: function () {},
    applyMatrix4: function (a) {
      this.matrixAutoUpdate && this.updateMatrix();
      this.matrix.premultiply(a);
      this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    applyQuaternion: function (a) {
      this.quaternion.premultiply(a);
      return this;
    },
    setRotationFromAxisAngle: function (a, b) {
      this.quaternion.setFromAxisAngle(a, b);
    },
    setRotationFromEuler: function (a) {
      this.quaternion.setFromEuler(a, !0);
    },
    setRotationFromMatrix: function (a) {
      this.quaternion.setFromRotationMatrix(a);
    },
    setRotationFromQuaternion: function (a) {
      this.quaternion.copy(a);
    },
    rotateOnAxis: function (a, b) {
      te.setFromAxisAngle(a, b);
      this.quaternion.multiply(te);
      return this;
    },
    rotateOnWorldAxis: function (a, b) {
      te.setFromAxisAngle(a, b);
      this.quaternion.premultiply(te);
      return this;
    },
    rotateX: function (a) {
      return this.rotateOnAxis(zj, a);
    },
    rotateY: function (a) {
      return this.rotateOnAxis(Aj, a);
    },
    rotateZ: function (a) {
      return this.rotateOnAxis(Bj, a);
    },
    translateOnAxis: function (a, b) {
      yj.copy(a).applyQuaternion(this.quaternion);
      this.position.add(yj.multiplyScalar(b));
      return this;
    },
    translateX: function (a) {
      return this.translateOnAxis(zj, a);
    },
    translateY: function (a) {
      return this.translateOnAxis(Aj, a);
    },
    translateZ: function (a) {
      return this.translateOnAxis(Bj, a);
    },
    localToWorld: function (a) {
      return a.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: function (a) {
      return a.applyMatrix4(vc.getInverse(this.matrixWorld));
    },
    lookAt: function (a, b, d) {
      a.isVector3 ? Hg.copy(a) : Hg.set(a, b, d);
      a = this.parent;
      this.updateWorldMatrix(!0, !1);
      Ef.setFromMatrixPosition(this.matrixWorld);
      this.isCamera || this.isLight
        ? vc.lookAt(Ef, Hg, this.up)
        : vc.lookAt(Hg, Ef, this.up);
      this.quaternion.setFromRotationMatrix(vc);
      a &&
        (vc.extractRotation(a.matrixWorld),
        te.setFromRotationMatrix(vc),
        this.quaternion.premultiply(te.inverse()));
    },
    add: function (a) {
      if (1 < arguments.length) {
        for (var b = 0; b < arguments.length; b++) this.add(arguments[b]);
        return this;
      }
      if (a === this)
        return (
          console.error(
            "THREE.Object3D.add: object can't be added as a child of itself.",
            a
          ),
          this
        );
      a && a.isObject3D
        ? (null !== a.parent && a.parent.remove(a),
          (a.parent = this),
          this.children.push(a),
          a.dispatchEvent(Rl))
        : console.error(
            "THREE.Object3D.add: object not an instance of THREE.Object3D.",
            a
          );
      return this;
    },
    remove: function (a) {
      if (1 < arguments.length) {
        for (var b = 0; b < arguments.length; b++) this.remove(arguments[b]);
        return this;
      }
      b = this.children.indexOf(a);
      -1 !== b &&
        ((a.parent = null), this.children.splice(b, 1), a.dispatchEvent(Sl));
      return this;
    },
    attach: function (a) {
      this.updateWorldMatrix(!0, !1);
      vc.getInverse(this.matrixWorld);
      null !== a.parent &&
        (a.parent.updateWorldMatrix(!0, !1), vc.multiply(a.parent.matrixWorld));
      a.applyMatrix4(vc);
      a.updateWorldMatrix(!1, !1);
      this.add(a);
      return this;
    },
    getObjectById: function (a) {
      return this.getObjectByProperty("id", a);
    },
    getObjectByName: function (a) {
      return this.getObjectByProperty("name", a);
    },
    getObjectByProperty: function (a, b) {
      if (this[a] === b) return this;
      for (var d = 0, e = this.children.length; d < e; d++) {
        var f = this.children[d].getObjectByProperty(a, b);
        if (void 0 !== f) return f;
      }
    },
    getWorldPosition: function (a) {
      void 0 === a &&
        (console.warn(
          "THREE.Object3D: .getWorldPosition() target is now required"
        ),
        (a = new w()));
      this.updateMatrixWorld(!0);
      return a.setFromMatrixPosition(this.matrixWorld);
    },
    getWorldQuaternion: function (a) {
      void 0 === a &&
        (console.warn(
          "THREE.Object3D: .getWorldQuaternion() target is now required"
        ),
        (a = new ua()));
      this.updateMatrixWorld(!0);
      this.matrixWorld.decompose(Ef, a, Pl);
      return a;
    },
    getWorldScale: function (a) {
      void 0 === a &&
        (console.warn(
          "THREE.Object3D: .getWorldScale() target is now required"
        ),
        (a = new w()));
      this.updateMatrixWorld(!0);
      this.matrixWorld.decompose(Ef, Ql, a);
      return a;
    },
    getWorldDirection: function (a) {
      void 0 === a &&
        (console.warn(
          "THREE.Object3D: .getWorldDirection() target is now required"
        ),
        (a = new w()));
      this.updateMatrixWorld(!0);
      var b = this.matrixWorld.elements;
      return a.set(b[8], b[9], b[10]).normalize();
    },
    raycast: function () {},
    traverse: function (a) {
      a(this);
      for (var b = this.children, d = 0, e = b.length; d < e; d++)
        b[d].traverse(a);
    },
    traverseVisible: function (a) {
      if (!1 !== this.visible) {
        a(this);
        for (var b = this.children, d = 0, e = b.length; d < e; d++)
          b[d].traverseVisible(a);
      }
    },
    traverseAncestors: function (a) {
      var b = this.parent;
      null !== b && (a(b), b.traverseAncestors(a));
    },
    updateMatrix: function () {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function (a) {
      this.matrixAutoUpdate && this.updateMatrix();
      if (this.matrixWorldNeedsUpdate || a)
        null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
          (this.matrixWorldNeedsUpdate = !1),
          (a = !0);
      for (var b = this.children, d = 0, e = b.length; d < e; d++)
        b[d].updateMatrixWorld(a);
    },
    updateWorldMatrix: function (a, b) {
      var d = this.parent;
      !0 === a && null !== d && d.updateWorldMatrix(!0, !1);
      this.matrixAutoUpdate && this.updateMatrix();
      null === this.parent
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          );
      if (!0 === b)
        for (a = this.children, b = 0, d = a.length; b < d; b++)
          a[b].updateWorldMatrix(!1, !0);
    },
    toJSON: function (a) {
      function b(n, p) {
        void 0 === n[p.uuid] && (n[p.uuid] = p.toJSON(a));
        return p.uuid;
      }
      function d(n) {
        var p = [],
          t;
        for (t in n) {
          var q = n[t];
          delete q.metadata;
          p.push(q);
        }
        return p;
      }
      var e = void 0 === a || "string" === typeof a,
        f = {};
      e &&
        ((a = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
        }),
        (f.metadata = {
          version: 4.5,
          type: "Object",
          generator: "Object3D.toJSON",
        }));
      var g = {};
      g.uuid = this.uuid;
      g.type = this.type;
      "" !== this.name && (g.name = this.name);
      !0 === this.castShadow && (g.castShadow = !0);
      !0 === this.receiveShadow && (g.receiveShadow = !0);
      !1 === this.visible && (g.visible = !1);
      !1 === this.frustumCulled && (g.frustumCulled = !1);
      0 !== this.renderOrder && (g.renderOrder = this.renderOrder);
      "{}" !== JSON.stringify(this.userData) && (g.userData = this.userData);
      g.layers = this.layers.mask;
      g.matrix = this.matrix.toArray();
      !1 === this.matrixAutoUpdate && (g.matrixAutoUpdate = !1);
      this.isInstancedMesh &&
        ((g.type = "InstancedMesh"),
        (g.count = this.count),
        (g.instanceMatrix = this.instanceMatrix.toJSON()));
      if (this.isMesh || this.isLine || this.isPoints) {
        g.geometry = b(a.geometries, this.geometry);
        var h = this.geometry.parameters;
        if (void 0 !== h && void 0 !== h.shapes)
          if (((h = h.shapes), Array.isArray(h)))
            for (var k = 0, l = h.length; k < l; k++) b(a.shapes, h[k]);
          else b(a.shapes, h);
      }
      if (void 0 !== this.material)
        if (Array.isArray(this.material)) {
          h = [];
          k = 0;
          for (l = this.material.length; k < l; k++)
            h.push(b(a.materials, this.material[k]));
          g.material = h;
        } else g.material = b(a.materials, this.material);
      if (0 < this.children.length)
        for (g.children = [], h = 0; h < this.children.length; h++)
          g.children.push(this.children[h].toJSON(a).object);
      if (e) {
        e = d(a.geometries);
        h = d(a.materials);
        k = d(a.textures);
        l = d(a.images);
        var m = d(a.shapes);
        0 < e.length && (f.geometries = e);
        0 < h.length && (f.materials = h);
        0 < k.length && (f.textures = k);
        0 < l.length && (f.images = l);
        0 < m.length && (f.shapes = m);
      }
      f.object = g;
      return f;
    },
    clone: function (a) {
      return new this.constructor().copy(this, a);
    },
    copy: function (a, b) {
      void 0 === b && (b = !0);
      this.name = a.name;
      this.up.copy(a.up);
      this.position.copy(a.position);
      this.rotation.order = a.rotation.order;
      this.quaternion.copy(a.quaternion);
      this.scale.copy(a.scale);
      this.matrix.copy(a.matrix);
      this.matrixWorld.copy(a.matrixWorld);
      this.matrixAutoUpdate = a.matrixAutoUpdate;
      this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
      this.layers.mask = a.layers.mask;
      this.visible = a.visible;
      this.castShadow = a.castShadow;
      this.receiveShadow = a.receiveShadow;
      this.frustumCulled = a.frustumCulled;
      this.renderOrder = a.renderOrder;
      this.userData = JSON.parse(JSON.stringify(a.userData));
      if (!0 === b)
        for (b = 0; b < a.children.length; b++) this.add(a.children[b].clone());
      return this;
    },
  });
  var ci = new w(),
    Tl = new w(),
    Ul = new Da(),
    Na = function (a, b) {
      Object.defineProperty(this, "isPlane", { value: !0 });
      this.normal = void 0 !== a ? a : new w(1, 0, 0);
      this.constant = void 0 !== b ? b : 0;
    };
  Na.prototype.set = function (a, b) {
    this.normal.copy(a);
    this.constant = b;
    return this;
  };
  Na.prototype.setComponents = function (a, b, d, e) {
    this.normal.set(a, b, d);
    this.constant = e;
    return this;
  };
  Na.prototype.setFromNormalAndCoplanarPoint = function (a, b) {
    this.normal.copy(a);
    this.constant = -b.dot(this.normal);
    return this;
  };
  Na.prototype.setFromCoplanarPoints = function (a, b, d) {
    b = ci.subVectors(d, b).cross(Tl.subVectors(a, b)).normalize();
    this.setFromNormalAndCoplanarPoint(b, a);
    return this;
  };
  Na.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  Na.prototype.copy = function (a) {
    this.normal.copy(a.normal);
    this.constant = a.constant;
    return this;
  };
  Na.prototype.normalize = function () {
    var a = 1 / this.normal.length();
    this.normal.multiplyScalar(a);
    this.constant *= a;
    return this;
  };
  Na.prototype.negate = function () {
    this.constant *= -1;
    this.normal.negate();
    return this;
  };
  Na.prototype.distanceToPoint = function (a) {
    return this.normal.dot(a) + this.constant;
  };
  Na.prototype.distanceToSphere = function (a) {
    return this.distanceToPoint(a.center) - a.radius;
  };
  Na.prototype.projectPoint = function (a, b) {
    void 0 === b &&
      (console.warn("THREE.Plane: .projectPoint() target is now required"),
      (b = new w()));
    return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a);
  };
  Na.prototype.intersectLine = function (a, b) {
    void 0 === b &&
      (console.warn("THREE.Plane: .intersectLine() target is now required"),
      (b = new w()));
    var d = a.delta(ci),
      e = this.normal.dot(d);
    if (0 === e) {
      if (0 === this.distanceToPoint(a.start)) return b.copy(a.start);
    } else if (
      ((e = -(a.start.dot(this.normal) + this.constant) / e), !(0 > e || 1 < e))
    )
      return b.copy(d).multiplyScalar(e).add(a.start);
  };
  Na.prototype.intersectsLine = function (a) {
    var b = this.distanceToPoint(a.start);
    a = this.distanceToPoint(a.end);
    return (0 > b && 0 < a) || (0 > a && 0 < b);
  };
  Na.prototype.intersectsBox = function (a) {
    return a.intersectsPlane(this);
  };
  Na.prototype.intersectsSphere = function (a) {
    return a.intersectsPlane(this);
  };
  Na.prototype.coplanarPoint = function (a) {
    void 0 === a &&
      (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
      (a = new w()));
    return a.copy(this.normal).multiplyScalar(-this.constant);
  };
  Na.prototype.applyMatrix4 = function (a, b) {
    b = b || Ul.getNormalMatrix(a);
    a = this.coplanarPoint(ci).applyMatrix4(a);
    b = this.normal.applyMatrix3(b).normalize();
    this.constant = -a.dot(b);
    return this;
  };
  Na.prototype.translate = function (a) {
    this.constant -= a.dot(this.normal);
    return this;
  };
  Na.prototype.equals = function (a) {
    return a.normal.equals(this.normal) && a.constant === this.constant;
  };
  var Yb = new w(),
    wc = new w(),
    di = new w(),
    xc = new w(),
    ue = new w(),
    ve = new w(),
    Cj = new w(),
    ei = new w(),
    fi = new w(),
    gi = new w(),
    Ga = function (a, b, d) {
      this.a = void 0 !== a ? a : new w();
      this.b = void 0 !== b ? b : new w();
      this.c = void 0 !== d ? d : new w();
    };
  Ga.getNormal = function (a, b, d, e) {
    void 0 === e &&
      (console.warn("THREE.Triangle: .getNormal() target is now required"),
      (e = new w()));
    e.subVectors(d, b);
    Yb.subVectors(a, b);
    e.cross(Yb);
    a = e.lengthSq();
    return 0 < a ? e.multiplyScalar(1 / Math.sqrt(a)) : e.set(0, 0, 0);
  };
  Ga.getBarycoord = function (a, b, d, e, f) {
    Yb.subVectors(e, b);
    wc.subVectors(d, b);
    di.subVectors(a, b);
    a = Yb.dot(Yb);
    b = Yb.dot(wc);
    d = Yb.dot(di);
    var g = wc.dot(wc);
    e = wc.dot(di);
    var h = a * g - b * b;
    void 0 === f &&
      (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
      (f = new w()));
    if (0 === h) return f.set(-2, -1, -1);
    h = 1 / h;
    g = (g * d - b * e) * h;
    a = (a * e - b * d) * h;
    return f.set(1 - g - a, a, g);
  };
  Ga.containsPoint = function (a, b, d, e) {
    this.getBarycoord(a, b, d, e, xc);
    return 0 <= xc.x && 0 <= xc.y && 1 >= xc.x + xc.y;
  };
  Ga.getUV = function (a, b, d, e, f, g, h, k) {
    this.getBarycoord(a, b, d, e, xc);
    k.set(0, 0);
    k.addScaledVector(f, xc.x);
    k.addScaledVector(g, xc.y);
    k.addScaledVector(h, xc.z);
    return k;
  };
  Ga.isFrontFacing = function (a, b, d, e) {
    Yb.subVectors(d, b);
    wc.subVectors(a, b);
    return 0 > Yb.cross(wc).dot(e) ? !0 : !1;
  };
  Ga.prototype.set = function (a, b, d) {
    this.a.copy(a);
    this.b.copy(b);
    this.c.copy(d);
    return this;
  };
  Ga.prototype.setFromPointsAndIndices = function (a, b, d, e) {
    this.a.copy(a[b]);
    this.b.copy(a[d]);
    this.c.copy(a[e]);
    return this;
  };
  Ga.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  Ga.prototype.copy = function (a) {
    this.a.copy(a.a);
    this.b.copy(a.b);
    this.c.copy(a.c);
    return this;
  };
  Ga.prototype.getArea = function () {
    Yb.subVectors(this.c, this.b);
    wc.subVectors(this.a, this.b);
    return 0.5 * Yb.cross(wc).length();
  };
  Ga.prototype.getMidpoint = function (a) {
    void 0 === a &&
      (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
      (a = new w()));
    return a
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  };
  Ga.prototype.getNormal = function (a) {
    return Ga.getNormal(this.a, this.b, this.c, a);
  };
  Ga.prototype.getPlane = function (a) {
    void 0 === a &&
      (console.warn("THREE.Triangle: .getPlane() target is now required"),
      (a = new Na()));
    return a.setFromCoplanarPoints(this.a, this.b, this.c);
  };
  Ga.prototype.getBarycoord = function (a, b) {
    return Ga.getBarycoord(a, this.a, this.b, this.c, b);
  };
  Ga.prototype.getUV = function (a, b, d, e, f) {
    return Ga.getUV(a, this.a, this.b, this.c, b, d, e, f);
  };
  Ga.prototype.containsPoint = function (a) {
    return Ga.containsPoint(a, this.a, this.b, this.c);
  };
  Ga.prototype.isFrontFacing = function (a) {
    return Ga.isFrontFacing(this.a, this.b, this.c, a);
  };
  Ga.prototype.intersectsBox = function (a) {
    return a.intersectsTriangle(this);
  };
  Ga.prototype.closestPointToPoint = function (a, b) {
    void 0 === b &&
      (console.warn(
        "THREE.Triangle: .closestPointToPoint() target is now required"
      ),
      (b = new w()));
    var d = this.a,
      e = this.b,
      f = this.c;
    ue.subVectors(e, d);
    ve.subVectors(f, d);
    ei.subVectors(a, d);
    var g = ue.dot(ei),
      h = ve.dot(ei);
    if (0 >= g && 0 >= h) return b.copy(d);
    fi.subVectors(a, e);
    var k = ue.dot(fi),
      l = ve.dot(fi);
    if (0 <= k && l <= k) return b.copy(e);
    var m = g * l - k * h;
    if (0 >= m && 0 <= g && 0 >= k)
      return (e = g / (g - k)), b.copy(d).addScaledVector(ue, e);
    gi.subVectors(a, f);
    a = ue.dot(gi);
    var n = ve.dot(gi);
    if (0 <= n && a <= n) return b.copy(f);
    g = a * h - g * n;
    if (0 >= g && 0 <= h && 0 >= n)
      return (m = h / (h - n)), b.copy(d).addScaledVector(ve, m);
    h = k * n - a * l;
    if (0 >= h && 0 <= l - k && 0 <= a - n)
      return (
        Cj.subVectors(f, e),
        (m = (l - k) / (l - k + (a - n))),
        b.copy(e).addScaledVector(Cj, m)
      );
    f = 1 / (h + g + m);
    e = g * f;
    m *= f;
    return b.copy(d).addScaledVector(ue, e).addScaledVector(ve, m);
  };
  Ga.prototype.equals = function (a) {
    return a.a.equals(this.a) && a.b.equals(this.b) && a.c.equals(this.c);
  };
  var Dj = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    },
    Bb = { h: 0, s: 0, l: 0 },
    Ig = { h: 0, s: 0, l: 0 },
    S = function (a, b, d) {
      Object.defineProperty(this, "isColor", { value: !0 });
      return void 0 === b && void 0 === d ? this.set(a) : this.setRGB(a, b, d);
    };
  S.prototype.set = function (a) {
    a && a.isColor
      ? this.copy(a)
      : "number" === typeof a
      ? this.setHex(a)
      : "string" === typeof a && this.setStyle(a);
    return this;
  };
  S.prototype.setScalar = function (a) {
    this.b = this.g = this.r = a;
    return this;
  };
  S.prototype.setHex = function (a) {
    a = Math.floor(a);
    this.r = ((a >> 16) & 255) / 255;
    this.g = ((a >> 8) & 255) / 255;
    this.b = (a & 255) / 255;
    return this;
  };
  S.prototype.setRGB = function (a, b, d) {
    this.r = a;
    this.g = b;
    this.b = d;
    return this;
  };
  S.prototype.setHSL = function (a, b, d) {
    a = xa.euclideanModulo(a, 1);
    b = xa.clamp(b, 0, 1);
    d = xa.clamp(d, 0, 1);
    0 === b
      ? (this.r = this.g = this.b = d)
      : ((b = 0.5 >= d ? d * (1 + b) : d + b - d * b),
        (d = 2 * d - b),
        (this.r = fh(d, b, a + 1 / 3)),
        (this.g = fh(d, b, a)),
        (this.b = fh(d, b, a - 1 / 3)));
    return this;
  };
  S.prototype.setStyle = function (a) {
    function b(h) {
      void 0 !== h &&
        1 > parseFloat(h) &&
        console.warn(
          "THREE.Color: Alpha component of " + a + " will be ignored."
        );
    }
    var d;
    if ((d = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a))) {
      var e = d[2];
      switch (d[1]) {
        case "rgb":
        case "rgba":
          if (
            (d = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
              e
            ))
          )
            return (
              (this.r = Math.min(255, parseInt(d[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(d[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(d[3], 10)) / 255),
              b(d[5]),
              this
            );
          if (
            (d = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
              e
            ))
          )
            return (
              (this.r = Math.min(100, parseInt(d[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(d[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(d[3], 10)) / 100),
              b(d[5]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (d = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
              e
            ))
          ) {
            e = parseFloat(d[1]) / 360;
            var f = parseInt(d[2], 10) / 100,
              g = parseInt(d[3], 10) / 100;
            b(d[5]);
            return this.setHSL(e, f, g);
          }
      }
    } else if ((d = /^#([A-Fa-f0-9]+)$/.exec(a))) {
      d = d[1];
      e = d.length;
      if (3 === e)
        return (
          (this.r = parseInt(d.charAt(0) + d.charAt(0), 16) / 255),
          (this.g = parseInt(d.charAt(1) + d.charAt(1), 16) / 255),
          (this.b = parseInt(d.charAt(2) + d.charAt(2), 16) / 255),
          this
        );
      if (6 === e)
        return (
          (this.r = parseInt(d.charAt(0) + d.charAt(1), 16) / 255),
          (this.g = parseInt(d.charAt(2) + d.charAt(3), 16) / 255),
          (this.b = parseInt(d.charAt(4) + d.charAt(5), 16) / 255),
          this
        );
    }
    return a && 0 < a.length ? this.setColorName(a) : this;
  };
  S.prototype.setColorName = function (a) {
    var b = Dj[a];
    void 0 !== b
      ? this.setHex(b)
      : console.warn("THREE.Color: Unknown color " + a);
    return this;
  };
  S.prototype.clone = function () {
    return new this.constructor(this.r, this.g, this.b);
  };
  S.prototype.copy = function (a) {
    this.r = a.r;
    this.g = a.g;
    this.b = a.b;
    return this;
  };
  S.prototype.copyGammaToLinear = function (a, b) {
    void 0 === b && (b = 2);
    this.r = Math.pow(a.r, b);
    this.g = Math.pow(a.g, b);
    this.b = Math.pow(a.b, b);
    return this;
  };
  S.prototype.copyLinearToGamma = function (a, b) {
    void 0 === b && (b = 2);
    b = 0 < b ? 1 / b : 1;
    this.r = Math.pow(a.r, b);
    this.g = Math.pow(a.g, b);
    this.b = Math.pow(a.b, b);
    return this;
  };
  S.prototype.convertGammaToLinear = function (a) {
    this.copyGammaToLinear(this, a);
    return this;
  };
  S.prototype.convertLinearToGamma = function (a) {
    this.copyLinearToGamma(this, a);
    return this;
  };
  S.prototype.copySRGBToLinear = function (a) {
    this.r = gh(a.r);
    this.g = gh(a.g);
    this.b = gh(a.b);
    return this;
  };
  S.prototype.copyLinearToSRGB = function (a) {
    this.r = hh(a.r);
    this.g = hh(a.g);
    this.b = hh(a.b);
    return this;
  };
  S.prototype.convertSRGBToLinear = function () {
    this.copySRGBToLinear(this);
    return this;
  };
  S.prototype.convertLinearToSRGB = function () {
    this.copyLinearToSRGB(this);
    return this;
  };
  S.prototype.getHex = function () {
    return (
      ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
    );
  };
  S.prototype.getHexString = function () {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  };
  S.prototype.getHSL = function (a) {
    void 0 === a &&
      (console.warn("THREE.Color: .getHSL() target is now required"),
      (a = { h: 0, s: 0, l: 0 }));
    var b = this.r,
      d = this.g,
      e = this.b,
      f = Math.max(b, d, e),
      g = Math.min(b, d, e),
      h,
      k = (g + f) / 2;
    if (g === f) g = h = 0;
    else {
      var l = f - g;
      g = 0.5 >= k ? l / (f + g) : l / (2 - f - g);
      switch (f) {
        case b:
          h = (d - e) / l + (d < e ? 6 : 0);
          break;
        case d:
          h = (e - b) / l + 2;
          break;
        case e:
          h = (b - d) / l + 4;
      }
      h /= 6;
    }
    a.h = h;
    a.s = g;
    a.l = k;
    return a;
  };
  S.prototype.getStyle = function () {
    return (
      "rgb(" +
      ((255 * this.r) | 0) +
      "," +
      ((255 * this.g) | 0) +
      "," +
      ((255 * this.b) | 0) +
      ")"
    );
  };
  S.prototype.offsetHSL = function (a, b, d) {
    this.getHSL(Bb);
    Bb.h += a;
    Bb.s += b;
    Bb.l += d;
    this.setHSL(Bb.h, Bb.s, Bb.l);
    return this;
  };
  S.prototype.add = function (a) {
    this.r += a.r;
    this.g += a.g;
    this.b += a.b;
    return this;
  };
  S.prototype.addColors = function (a, b) {
    this.r = a.r + b.r;
    this.g = a.g + b.g;
    this.b = a.b + b.b;
    return this;
  };
  S.prototype.addScalar = function (a) {
    this.r += a;
    this.g += a;
    this.b += a;
    return this;
  };
  S.prototype.sub = function (a) {
    this.r = Math.max(0, this.r - a.r);
    this.g = Math.max(0, this.g - a.g);
    this.b = Math.max(0, this.b - a.b);
    return this;
  };
  S.prototype.multiply = function (a) {
    this.r *= a.r;
    this.g *= a.g;
    this.b *= a.b;
    return this;
  };
  S.prototype.multiplyScalar = function (a) {
    this.r *= a;
    this.g *= a;
    this.b *= a;
    return this;
  };
  S.prototype.lerp = function (a, b) {
    this.r += (a.r - this.r) * b;
    this.g += (a.g - this.g) * b;
    this.b += (a.b - this.b) * b;
    return this;
  };
  S.prototype.lerpHSL = function (a, b) {
    this.getHSL(Bb);
    a.getHSL(Ig);
    a = xa.lerp(Bb.h, Ig.h, b);
    var d = xa.lerp(Bb.s, Ig.s, b);
    b = xa.lerp(Bb.l, Ig.l, b);
    this.setHSL(a, d, b);
    return this;
  };
  S.prototype.equals = function (a) {
    return a.r === this.r && a.g === this.g && a.b === this.b;
  };
  S.prototype.fromArray = function (a, b) {
    void 0 === b && (b = 0);
    this.r = a[b];
    this.g = a[b + 1];
    this.b = a[b + 2];
    return this;
  };
  S.prototype.toArray = function (a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    a[b] = this.r;
    a[b + 1] = this.g;
    a[b + 2] = this.b;
    return a;
  };
  S.prototype.fromBufferAttribute = function (a, b) {
    this.r = a.getX(b);
    this.g = a.getY(b);
    this.b = a.getZ(b);
    !0 === a.normalized && ((this.r /= 255), (this.g /= 255), (this.b /= 255));
    return this;
  };
  S.prototype.toJSON = function () {
    return this.getHex();
  };
  S.NAMES = Dj;
  S.prototype.r = 1;
  S.prototype.g = 1;
  S.prototype.b = 1;
  var ad = function (a, b, d, e, f, g) {
    this.a = a;
    this.b = b;
    this.c = d;
    this.normal = e && e.isVector3 ? e : new w();
    this.vertexNormals = Array.isArray(e) ? e : [];
    this.color = f && f.isColor ? f : new S();
    this.vertexColors = Array.isArray(f) ? f : [];
    this.materialIndex = void 0 !== g ? g : 0;
  };
  ad.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  ad.prototype.copy = function (a) {
    this.a = a.a;
    this.b = a.b;
    this.c = a.c;
    this.normal.copy(a.normal);
    this.color.copy(a.color);
    this.materialIndex = a.materialIndex;
    for (var b = 0, d = a.vertexNormals.length; b < d; b++)
      this.vertexNormals[b] = a.vertexNormals[b].clone();
    b = 0;
    for (d = a.vertexColors.length; b < d; b++)
      this.vertexColors[b] = a.vertexColors[b].clone();
    return this;
  };
  var jk = 0;
  ra.prototype = Object.assign(Object.create(wb.prototype), {
    constructor: ra,
    isMaterial: !0,
    onBeforeCompile: function () {},
    customProgramCacheKey: function () {
      return this.onBeforeCompile.toString();
    },
    setValues: function (a) {
      if (void 0 !== a)
        for (var b in a) {
          var d = a[b];
          if (void 0 === d)
            console.warn("THREE.Material: '" + b + "' parameter is undefined.");
          else if ("shading" === b)
            console.warn(
              "THREE." +
                this.type +
                ": .shading has been removed. Use the boolean .flatShading instead."
            ),
              (this.flatShading = 1 === d ? !0 : !1);
          else {
            var e = this[b];
            void 0 === e
              ? console.warn(
                  "THREE." +
                    this.type +
                    ": '" +
                    b +
                    "' is not a property of this material."
                )
              : e && e.isColor
              ? e.set(d)
              : e && e.isVector3 && d && d.isVector3
              ? e.copy(d)
              : (this[b] = d);
          }
        }
    },
    toJSON: function (a) {
      function b(f) {
        var g = [],
          h;
        for (h in f) {
          var k = f[h];
          delete k.metadata;
          g.push(k);
        }
        return g;
      }
      var d = void 0 === a || "string" === typeof a;
      d && (a = { textures: {}, images: {} });
      var e = {
        metadata: {
          version: 4.5,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      e.uuid = this.uuid;
      e.type = this.type;
      "" !== this.name && (e.name = this.name);
      this.color && this.color.isColor && (e.color = this.color.getHex());
      void 0 !== this.roughness && (e.roughness = this.roughness);
      void 0 !== this.metalness && (e.metalness = this.metalness);
      this.sheen && this.sheen.isColor && (e.sheen = this.sheen.getHex());
      this.emissive &&
        this.emissive.isColor &&
        (e.emissive = this.emissive.getHex());
      this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (e.emissiveIntensity = this.emissiveIntensity);
      this.specular &&
        this.specular.isColor &&
        (e.specular = this.specular.getHex());
      void 0 !== this.shininess && (e.shininess = this.shininess);
      void 0 !== this.clearcoat && (e.clearcoat = this.clearcoat);
      void 0 !== this.clearcoatRoughness &&
        (e.clearcoatRoughness = this.clearcoatRoughness);
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (e.clearcoatMap = this.clearcoatMap.toJSON(a).uuid);
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (e.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(a).uuid);
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((e.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(a).uuid),
        (e.clearcoatNormalScale = this.clearcoatNormalScale.toArray()));
      this.map && this.map.isTexture && (e.map = this.map.toJSON(a).uuid);
      this.matcap &&
        this.matcap.isTexture &&
        (e.matcap = this.matcap.toJSON(a).uuid);
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (e.alphaMap = this.alphaMap.toJSON(a).uuid);
      this.lightMap &&
        this.lightMap.isTexture &&
        (e.lightMap = this.lightMap.toJSON(a).uuid);
      this.aoMap &&
        this.aoMap.isTexture &&
        ((e.aoMap = this.aoMap.toJSON(a).uuid),
        (e.aoMapIntensity = this.aoMapIntensity));
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((e.bumpMap = this.bumpMap.toJSON(a).uuid),
        (e.bumpScale = this.bumpScale));
      this.normalMap &&
        this.normalMap.isTexture &&
        ((e.normalMap = this.normalMap.toJSON(a).uuid),
        (e.normalMapType = this.normalMapType),
        (e.normalScale = this.normalScale.toArray()));
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((e.displacementMap = this.displacementMap.toJSON(a).uuid),
        (e.displacementScale = this.displacementScale),
        (e.displacementBias = this.displacementBias));
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (e.roughnessMap = this.roughnessMap.toJSON(a).uuid);
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (e.metalnessMap = this.metalnessMap.toJSON(a).uuid);
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (e.emissiveMap = this.emissiveMap.toJSON(a).uuid);
      this.specularMap &&
        this.specularMap.isTexture &&
        (e.specularMap = this.specularMap.toJSON(a).uuid);
      this.envMap &&
        this.envMap.isTexture &&
        ((e.envMap = this.envMap.toJSON(a).uuid),
        (e.reflectivity = this.reflectivity),
        (e.refractionRatio = this.refractionRatio),
        void 0 !== this.combine && (e.combine = this.combine),
        void 0 !== this.envMapIntensity &&
          (e.envMapIntensity = this.envMapIntensity));
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (e.gradientMap = this.gradientMap.toJSON(a).uuid);
      void 0 !== this.size && (e.size = this.size);
      void 0 !== this.sizeAttenuation &&
        (e.sizeAttenuation = this.sizeAttenuation);
      1 !== this.blending && (e.blending = this.blending);
      !0 === this.flatShading && (e.flatShading = this.flatShading);
      0 !== this.side && (e.side = this.side);
      this.vertexColors && (e.vertexColors = !0);
      1 > this.opacity && (e.opacity = this.opacity);
      !0 === this.transparent && (e.transparent = this.transparent);
      e.depthFunc = this.depthFunc;
      e.depthTest = this.depthTest;
      e.depthWrite = this.depthWrite;
      e.stencilWrite = this.stencilWrite;
      e.stencilWriteMask = this.stencilWriteMask;
      e.stencilFunc = this.stencilFunc;
      e.stencilRef = this.stencilRef;
      e.stencilFuncMask = this.stencilFuncMask;
      e.stencilFail = this.stencilFail;
      e.stencilZFail = this.stencilZFail;
      e.stencilZPass = this.stencilZPass;
      this.rotation && 0 !== this.rotation && (e.rotation = this.rotation);
      !0 === this.polygonOffset && (e.polygonOffset = !0);
      0 !== this.polygonOffsetFactor &&
        (e.polygonOffsetFactor = this.polygonOffsetFactor);
      0 !== this.polygonOffsetUnits &&
        (e.polygonOffsetUnits = this.polygonOffsetUnits);
      this.linewidth && 1 !== this.linewidth && (e.linewidth = this.linewidth);
      void 0 !== this.dashSize && (e.dashSize = this.dashSize);
      void 0 !== this.gapSize && (e.gapSize = this.gapSize);
      void 0 !== this.scale && (e.scale = this.scale);
      !0 === this.dithering && (e.dithering = !0);
      0 < this.alphaTest && (e.alphaTest = this.alphaTest);
      !0 === this.premultipliedAlpha &&
        (e.premultipliedAlpha = this.premultipliedAlpha);
      !0 === this.wireframe && (e.wireframe = this.wireframe);
      1 < this.wireframeLinewidth &&
        (e.wireframeLinewidth = this.wireframeLinewidth);
      "round" !== this.wireframeLinecap &&
        (e.wireframeLinecap = this.wireframeLinecap);
      "round" !== this.wireframeLinejoin &&
        (e.wireframeLinejoin = this.wireframeLinejoin);
      !0 === this.morphTargets && (e.morphTargets = !0);
      !0 === this.morphNormals && (e.morphNormals = !0);
      !0 === this.skinning && (e.skinning = !0);
      !1 === this.visible && (e.visible = !1);
      !1 === this.toneMapped && (e.toneMapped = !1);
      "{}" !== JSON.stringify(this.userData) && (e.userData = this.userData);
      d &&
        ((d = b(a.textures)),
        (a = b(a.images)),
        0 < d.length && (e.textures = d),
        0 < a.length && (e.images = a));
      return e;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.name = a.name;
      this.fog = a.fog;
      this.blending = a.blending;
      this.side = a.side;
      this.flatShading = a.flatShading;
      this.vertexColors = a.vertexColors;
      this.opacity = a.opacity;
      this.transparent = a.transparent;
      this.blendSrc = a.blendSrc;
      this.blendDst = a.blendDst;
      this.blendEquation = a.blendEquation;
      this.blendSrcAlpha = a.blendSrcAlpha;
      this.blendDstAlpha = a.blendDstAlpha;
      this.blendEquationAlpha = a.blendEquationAlpha;
      this.depthFunc = a.depthFunc;
      this.depthTest = a.depthTest;
      this.depthWrite = a.depthWrite;
      this.stencilWriteMask = a.stencilWriteMask;
      this.stencilFunc = a.stencilFunc;
      this.stencilRef = a.stencilRef;
      this.stencilFuncMask = a.stencilFuncMask;
      this.stencilFail = a.stencilFail;
      this.stencilZFail = a.stencilZFail;
      this.stencilZPass = a.stencilZPass;
      this.stencilWrite = a.stencilWrite;
      var b = a.clippingPlanes,
        d = null;
      if (null !== b) {
        var e = b.length;
        d = Array(e);
        for (var f = 0; f !== e; ++f) d[f] = b[f].clone();
      }
      this.clippingPlanes = d;
      this.clipIntersection = a.clipIntersection;
      this.clipShadows = a.clipShadows;
      this.shadowSide = a.shadowSide;
      this.colorWrite = a.colorWrite;
      this.precision = a.precision;
      this.polygonOffset = a.polygonOffset;
      this.polygonOffsetFactor = a.polygonOffsetFactor;
      this.polygonOffsetUnits = a.polygonOffsetUnits;
      this.dithering = a.dithering;
      this.alphaTest = a.alphaTest;
      this.premultipliedAlpha = a.premultipliedAlpha;
      this.visible = a.visible;
      this.toneMapped = a.toneMapped;
      this.userData = JSON.parse(JSON.stringify(a.userData));
      return this;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  });
  Object.defineProperty(ra.prototype, "needsUpdate", {
    set: function (a) {
      !0 === a && this.version++;
    },
  });
  Kb.prototype = Object.create(ra.prototype);
  Kb.prototype.constructor = Kb;
  Kb.prototype.isMeshBasicMaterial = !0;
  Kb.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    return this;
  };
  var Ua = new w(),
    Jg = new L();
  Object.defineProperty(pa.prototype, "needsUpdate", {
    set: function (a) {
      !0 === a && this.version++;
    },
  });
  Object.assign(pa.prototype, {
    isBufferAttribute: !0,
    onUploadCallback: function () {},
    setUsage: function (a) {
      this.usage = a;
      return this;
    },
    copy: function (a) {
      this.name = a.name;
      this.array = new a.array.constructor(a.array);
      this.itemSize = a.itemSize;
      this.count = a.count;
      this.normalized = a.normalized;
      this.usage = a.usage;
      return this;
    },
    copyAt: function (a, b, d) {
      a *= this.itemSize;
      d *= b.itemSize;
      for (var e = 0, f = this.itemSize; e < f; e++)
        this.array[a + e] = b.array[d + e];
      return this;
    },
    copyArray: function (a) {
      this.array.set(a);
      return this;
    },
    copyColorsArray: function (a) {
      for (var b = this.array, d = 0, e = 0, f = a.length; e < f; e++) {
        var g = a[e];
        void 0 === g &&
          (console.warn(
            "THREE.BufferAttribute.copyColorsArray(): color is undefined",
            e
          ),
          (g = new S()));
        b[d++] = g.r;
        b[d++] = g.g;
        b[d++] = g.b;
      }
      return this;
    },
    copyVector2sArray: function (a) {
      for (var b = this.array, d = 0, e = 0, f = a.length; e < f; e++) {
        var g = a[e];
        void 0 === g &&
          (console.warn(
            "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
            e
          ),
          (g = new L()));
        b[d++] = g.x;
        b[d++] = g.y;
      }
      return this;
    },
    copyVector3sArray: function (a) {
      for (var b = this.array, d = 0, e = 0, f = a.length; e < f; e++) {
        var g = a[e];
        void 0 === g &&
          (console.warn(
            "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
            e
          ),
          (g = new w()));
        b[d++] = g.x;
        b[d++] = g.y;
        b[d++] = g.z;
      }
      return this;
    },
    copyVector4sArray: function (a) {
      for (var b = this.array, d = 0, e = 0, f = a.length; e < f; e++) {
        var g = a[e];
        void 0 === g &&
          (console.warn(
            "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
            e
          ),
          (g = new ca()));
        b[d++] = g.x;
        b[d++] = g.y;
        b[d++] = g.z;
        b[d++] = g.w;
      }
      return this;
    },
    applyMatrix3: function (a) {
      if (2 === this.itemSize)
        for (var b = 0, d = this.count; b < d; b++)
          Jg.fromBufferAttribute(this, b),
            Jg.applyMatrix3(a),
            this.setXY(b, Jg.x, Jg.y);
      else if (3 === this.itemSize)
        for (b = 0, d = this.count; b < d; b++)
          Ua.fromBufferAttribute(this, b),
            Ua.applyMatrix3(a),
            this.setXYZ(b, Ua.x, Ua.y, Ua.z);
      return this;
    },
    applyMatrix4: function (a) {
      for (var b = 0, d = this.count; b < d; b++)
        (Ua.x = this.getX(b)),
          (Ua.y = this.getY(b)),
          (Ua.z = this.getZ(b)),
          Ua.applyMatrix4(a),
          this.setXYZ(b, Ua.x, Ua.y, Ua.z);
      return this;
    },
    applyNormalMatrix: function (a) {
      for (var b = 0, d = this.count; b < d; b++)
        (Ua.x = this.getX(b)),
          (Ua.y = this.getY(b)),
          (Ua.z = this.getZ(b)),
          Ua.applyNormalMatrix(a),
          this.setXYZ(b, Ua.x, Ua.y, Ua.z);
      return this;
    },
    transformDirection: function (a) {
      for (var b = 0, d = this.count; b < d; b++)
        (Ua.x = this.getX(b)),
          (Ua.y = this.getY(b)),
          (Ua.z = this.getZ(b)),
          Ua.transformDirection(a),
          this.setXYZ(b, Ua.x, Ua.y, Ua.z);
      return this;
    },
    set: function (a, b) {
      void 0 === b && (b = 0);
      this.array.set(a, b);
      return this;
    },
    getX: function (a) {
      return this.array[a * this.itemSize];
    },
    setX: function (a, b) {
      this.array[a * this.itemSize] = b;
      return this;
    },
    getY: function (a) {
      return this.array[a * this.itemSize + 1];
    },
    setY: function (a, b) {
      this.array[a * this.itemSize + 1] = b;
      return this;
    },
    getZ: function (a) {
      return this.array[a * this.itemSize + 2];
    },
    setZ: function (a, b) {
      this.array[a * this.itemSize + 2] = b;
      return this;
    },
    getW: function (a) {
      return this.array[a * this.itemSize + 3];
    },
    setW: function (a, b) {
      this.array[a * this.itemSize + 3] = b;
      return this;
    },
    setXY: function (a, b, d) {
      a *= this.itemSize;
      this.array[a + 0] = b;
      this.array[a + 1] = d;
      return this;
    },
    setXYZ: function (a, b, d, e) {
      a *= this.itemSize;
      this.array[a + 0] = b;
      this.array[a + 1] = d;
      this.array[a + 2] = e;
      return this;
    },
    setXYZW: function (a, b, d, e, f) {
      a *= this.itemSize;
      this.array[a + 0] = b;
      this.array[a + 1] = d;
      this.array[a + 2] = e;
      this.array[a + 3] = f;
      return this;
    },
    onUpload: function (a) {
      this.onUploadCallback = a;
      return this;
    },
    clone: function () {
      return new this.constructor(this.array, this.itemSize).copy(this);
    },
    toJSON: function () {
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.prototype.slice.call(this.array),
        normalized: this.normalized,
      };
    },
  });
  Ce.prototype = Object.create(pa.prototype);
  Ce.prototype.constructor = Ce;
  De.prototype = Object.create(pa.prototype);
  De.prototype.constructor = De;
  Ee.prototype = Object.create(pa.prototype);
  Ee.prototype.constructor = Ee;
  Fe.prototype = Object.create(pa.prototype);
  Fe.prototype.constructor = Fe;
  Zc.prototype = Object.create(pa.prototype);
  Zc.prototype.constructor = Zc;
  Ge.prototype = Object.create(pa.prototype);
  Ge.prototype.constructor = Ge;
  $c.prototype = Object.create(pa.prototype);
  $c.prototype.constructor = $c;
  ea.prototype = Object.create(pa.prototype);
  ea.prototype.constructor = ea;
  He.prototype = Object.create(pa.prototype);
  He.prototype.constructor = He;
  var hi = function () {
    this.vertices = [];
    this.normals = [];
    this.colors = [];
    this.uvs = [];
    this.uvs2 = [];
    this.groups = [];
    this.morphTargets = {};
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1;
  };
  hi.prototype.computeGroups = function (a) {
    var b = [],
      d = void 0,
      e = a.faces;
    for (a = 0; a < e.length; a++) {
      var f = e[a];
      if (f.materialIndex !== d) {
        d = f.materialIndex;
        void 0 !== g && ((g.count = 3 * a - g.start), b.push(g));
        var g = { start: 3 * a, materialIndex: d };
      }
    }
    void 0 !== g && ((g.count = 3 * a - g.start), b.push(g));
    this.groups = b;
  };
  hi.prototype.fromGeometry = function (a) {
    var b = a.faces,
      d = a.vertices,
      e = a.faceVertexUvs,
      f = e[0] && 0 < e[0].length,
      g = e[1] && 0 < e[1].length,
      h = a.morphTargets,
      k = h.length;
    if (0 < k) {
      var l = [];
      for (var m = 0; m < k; m++) l[m] = { name: h[m].name, data: [] };
      this.morphTargets.position = l;
    }
    m = a.morphNormals;
    var n = m.length;
    if (0 < n) {
      var p = [];
      for (var t = 0; t < n; t++) p[t] = { name: m[t].name, data: [] };
      this.morphTargets.normal = p;
    }
    t = a.skinIndices;
    var q = a.skinWeights,
      v = t.length === d.length,
      u = q.length === d.length;
    0 < d.length &&
      0 === b.length &&
      console.error(
        "THREE.DirectGeometry: Faceless geometries are not supported."
      );
    for (var A = 0; A < b.length; A++) {
      var B = b[A];
      this.vertices.push(d[B.a], d[B.b], d[B.c]);
      var D = B.vertexNormals;
      3 === D.length
        ? this.normals.push(D[0], D[1], D[2])
        : ((D = B.normal), this.normals.push(D, D, D));
      D = B.vertexColors;
      3 === D.length
        ? this.colors.push(D[0], D[1], D[2])
        : ((D = B.color), this.colors.push(D, D, D));
      !0 === f &&
        ((D = e[0][A]),
        void 0 !== D
          ? this.uvs.push(D[0], D[1], D[2])
          : (console.warn(
              "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
              A
            ),
            this.uvs.push(new L(), new L(), new L())));
      !0 === g &&
        ((D = e[1][A]),
        void 0 !== D
          ? this.uvs2.push(D[0], D[1], D[2])
          : (console.warn(
              "THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",
              A
            ),
            this.uvs2.push(new L(), new L(), new L())));
      for (D = 0; D < k; D++) {
        var G = h[D].vertices;
        l[D].data.push(G[B.a], G[B.b], G[B.c]);
      }
      for (D = 0; D < n; D++)
        (G = m[D].vertexNormals[A]), p[D].data.push(G.a, G.b, G.c);
      v && this.skinIndices.push(t[B.a], t[B.b], t[B.c]);
      u && this.skinWeights.push(q[B.a], q[B.b], q[B.c]);
    }
    this.computeGroups(a);
    this.verticesNeedUpdate = a.verticesNeedUpdate;
    this.normalsNeedUpdate = a.normalsNeedUpdate;
    this.colorsNeedUpdate = a.colorsNeedUpdate;
    this.uvsNeedUpdate = a.uvsNeedUpdate;
    this.groupsNeedUpdate = a.groupsNeedUpdate;
    null !== a.boundingSphere &&
      (this.boundingSphere = a.boundingSphere.clone());
    null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
    return this;
  };
  var kk = 1,
    ic = new da(),
    ii = new ha(),
    we = new w(),
    Jb = new za(),
    Ff = new za(),
    jb = new w();
  ka.prototype = Object.assign(Object.create(wb.prototype), {
    constructor: ka,
    isBufferGeometry: !0,
    getIndex: function () {
      return this.index;
    },
    setIndex: function (a) {
      Array.isArray(a)
        ? (this.index = new (65535 < vi(a) ? $c : Zc)(a, 1))
        : (this.index = a);
    },
    getAttribute: function (a) {
      return this.attributes[a];
    },
    setAttribute: function (a, b) {
      this.attributes[a] = b;
      return this;
    },
    deleteAttribute: function (a) {
      delete this.attributes[a];
      return this;
    },
    addGroup: function (a, b, d) {
      this.groups.push({
        start: a,
        count: b,
        materialIndex: void 0 !== d ? d : 0,
      });
    },
    clearGroups: function () {
      this.groups = [];
    },
    setDrawRange: function (a, b) {
      this.drawRange.start = a;
      this.drawRange.count = b;
    },
    applyMatrix4: function (a) {
      var b = this.attributes.position;
      void 0 !== b && (b.applyMatrix4(a), (b.needsUpdate = !0));
      b = this.attributes.normal;
      if (void 0 !== b) {
        var d = new Da().getNormalMatrix(a);
        b.applyNormalMatrix(d);
        b.needsUpdate = !0;
      }
      b = this.attributes.tangent;
      void 0 !== b && (b.transformDirection(a), (b.needsUpdate = !0));
      null !== this.boundingBox && this.computeBoundingBox();
      null !== this.boundingSphere && this.computeBoundingSphere();
      return this;
    },
    rotateX: function (a) {
      ic.makeRotationX(a);
      this.applyMatrix4(ic);
      return this;
    },
    rotateY: function (a) {
      ic.makeRotationY(a);
      this.applyMatrix4(ic);
      return this;
    },
    rotateZ: function (a) {
      ic.makeRotationZ(a);
      this.applyMatrix4(ic);
      return this;
    },
    translate: function (a, b, d) {
      ic.makeTranslation(a, b, d);
      this.applyMatrix4(ic);
      return this;
    },
    scale: function (a, b, d) {
      ic.makeScale(a, b, d);
      this.applyMatrix4(ic);
      return this;
    },
    lookAt: function (a) {
      ii.lookAt(a);
      ii.updateMatrix();
      this.applyMatrix4(ii.matrix);
      return this;
    },
    center: function () {
      this.computeBoundingBox();
      this.boundingBox.getCenter(we).negate();
      this.translate(we.x, we.y, we.z);
      return this;
    },
    setFromObject: function (a) {
      var b = a.geometry;
      if (a.isPoints || a.isLine) {
        a = new ea(3 * b.vertices.length, 3);
        var d = new ea(3 * b.colors.length, 3);
        this.setAttribute("position", a.copyVector3sArray(b.vertices));
        this.setAttribute("color", d.copyColorsArray(b.colors));
        b.lineDistances &&
          b.lineDistances.length === b.vertices.length &&
          ((a = new ea(b.lineDistances.length, 1)),
          this.setAttribute("lineDistance", a.copyArray(b.lineDistances)));
        null !== b.boundingSphere &&
          (this.boundingSphere = b.boundingSphere.clone());
        null !== b.boundingBox && (this.boundingBox = b.boundingBox.clone());
      } else a.isMesh && b && b.isGeometry && this.fromGeometry(b);
      return this;
    },
    setFromPoints: function (a) {
      for (var b = [], d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        b.push(f.x, f.y, f.z || 0);
      }
      this.setAttribute("position", new ea(b, 3));
      return this;
    },
    updateFromObject: function (a) {
      var b = a.geometry;
      if (a.isMesh) {
        var d = b.__directGeometry;
        !0 === b.elementsNeedUpdate &&
          ((d = void 0), (b.elementsNeedUpdate = !1));
        if (void 0 === d) return this.fromGeometry(b);
        d.verticesNeedUpdate = b.verticesNeedUpdate;
        d.normalsNeedUpdate = b.normalsNeedUpdate;
        d.colorsNeedUpdate = b.colorsNeedUpdate;
        d.uvsNeedUpdate = b.uvsNeedUpdate;
        d.groupsNeedUpdate = b.groupsNeedUpdate;
        b.verticesNeedUpdate = !1;
        b.normalsNeedUpdate = !1;
        b.colorsNeedUpdate = !1;
        b.uvsNeedUpdate = !1;
        b.groupsNeedUpdate = !1;
        b = d;
      }
      !0 === b.verticesNeedUpdate &&
        ((d = this.attributes.position),
        void 0 !== d && (d.copyVector3sArray(b.vertices), (d.needsUpdate = !0)),
        (b.verticesNeedUpdate = !1));
      !0 === b.normalsNeedUpdate &&
        ((d = this.attributes.normal),
        void 0 !== d && (d.copyVector3sArray(b.normals), (d.needsUpdate = !0)),
        (b.normalsNeedUpdate = !1));
      !0 === b.colorsNeedUpdate &&
        ((d = this.attributes.color),
        void 0 !== d && (d.copyColorsArray(b.colors), (d.needsUpdate = !0)),
        (b.colorsNeedUpdate = !1));
      b.uvsNeedUpdate &&
        ((d = this.attributes.uv),
        void 0 !== d && (d.copyVector2sArray(b.uvs), (d.needsUpdate = !0)),
        (b.uvsNeedUpdate = !1));
      b.lineDistancesNeedUpdate &&
        ((d = this.attributes.lineDistance),
        void 0 !== d && (d.copyArray(b.lineDistances), (d.needsUpdate = !0)),
        (b.lineDistancesNeedUpdate = !1));
      b.groupsNeedUpdate &&
        (b.computeGroups(a.geometry),
        (this.groups = b.groups),
        (b.groupsNeedUpdate = !1));
      return this;
    },
    fromGeometry: function (a) {
      a.__directGeometry = new hi().fromGeometry(a);
      return this.fromDirectGeometry(a.__directGeometry);
    },
    fromDirectGeometry: function (a) {
      var b = new Float32Array(3 * a.vertices.length);
      this.setAttribute("position", new pa(b, 3).copyVector3sArray(a.vertices));
      0 < a.normals.length &&
        ((b = new Float32Array(3 * a.normals.length)),
        this.setAttribute("normal", new pa(b, 3).copyVector3sArray(a.normals)));
      0 < a.colors.length &&
        ((b = new Float32Array(3 * a.colors.length)),
        this.setAttribute("color", new pa(b, 3).copyColorsArray(a.colors)));
      0 < a.uvs.length &&
        ((b = new Float32Array(2 * a.uvs.length)),
        this.setAttribute("uv", new pa(b, 2).copyVector2sArray(a.uvs)));
      0 < a.uvs2.length &&
        ((b = new Float32Array(2 * a.uvs2.length)),
        this.setAttribute("uv2", new pa(b, 2).copyVector2sArray(a.uvs2)));
      this.groups = a.groups;
      for (var d in a.morphTargets) {
        b = [];
        for (var e = a.morphTargets[d], f = 0, g = e.length; f < g; f++) {
          var h = e[f],
            k = new ea(3 * h.data.length, 3);
          k.name = h.name;
          b.push(k.copyVector3sArray(h.data));
        }
        this.morphAttributes[d] = b;
      }
      0 < a.skinIndices.length &&
        ((d = new ea(4 * a.skinIndices.length, 4)),
        this.setAttribute("skinIndex", d.copyVector4sArray(a.skinIndices)));
      0 < a.skinWeights.length &&
        ((d = new ea(4 * a.skinWeights.length, 4)),
        this.setAttribute("skinWeight", d.copyVector4sArray(a.skinWeights)));
      null !== a.boundingSphere &&
        (this.boundingSphere = a.boundingSphere.clone());
      null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
      return this;
    },
    computeBoundingBox: function () {
      null === this.boundingBox && (this.boundingBox = new za());
      var a = this.attributes.position,
        b = this.morphAttributes.position;
      if (a && a.isGLBufferAttribute)
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
          this.boundingBox.set(
            new w(-Infinity, -Infinity, -Infinity),
            new w(Infinity, Infinity, Infinity)
          );
      else {
        if (void 0 !== a) {
          if ((this.boundingBox.setFromBufferAttribute(a), b)) {
            a = 0;
            for (var d = b.length; a < d; a++)
              Jb.setFromBufferAttribute(b[a]),
                this.morphTargetsRelative
                  ? (jb.addVectors(this.boundingBox.min, Jb.min),
                    this.boundingBox.expandByPoint(jb),
                    jb.addVectors(this.boundingBox.max, Jb.max),
                    this.boundingBox.expandByPoint(jb))
                  : (this.boundingBox.expandByPoint(Jb.min),
                    this.boundingBox.expandByPoint(Jb.max));
          }
        } else this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) ||
          isNaN(this.boundingBox.min.y) ||
          isNaN(this.boundingBox.min.z)) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
            this
          );
      }
    },
    computeBoundingSphere: function () {
      null === this.boundingSphere && (this.boundingSphere = new Wa());
      var a = this.attributes.position,
        b = this.morphAttributes.position;
      if (a && a.isGLBufferAttribute)
        console.error(
          'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
          this.boundingSphere.set(new w(), Infinity);
      else if (a) {
        var d = this.boundingSphere.center;
        Jb.setFromBufferAttribute(a);
        if (b)
          for (var e = 0, f = b.length; e < f; e++)
            Ff.setFromBufferAttribute(b[e]),
              this.morphTargetsRelative
                ? (jb.addVectors(Jb.min, Ff.min),
                  Jb.expandByPoint(jb),
                  jb.addVectors(Jb.max, Ff.max),
                  Jb.expandByPoint(jb))
                : (Jb.expandByPoint(Ff.min), Jb.expandByPoint(Ff.max));
        Jb.getCenter(d);
        f = e = 0;
        for (var g = a.count; f < g; f++)
          jb.fromBufferAttribute(a, f),
            (e = Math.max(e, d.distanceToSquared(jb)));
        if (b)
          for (f = 0, g = b.length; f < g; f++)
            for (
              var h = b[f], k = this.morphTargetsRelative, l = 0, m = h.count;
              l < m;
              l++
            )
              jb.fromBufferAttribute(h, l),
                k && (we.fromBufferAttribute(a, l), jb.add(we)),
                (e = Math.max(e, d.distanceToSquared(jb)));
        this.boundingSphere.radius = Math.sqrt(e);
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
      }
    },
    computeFaceNormals: function () {},
    computeVertexNormals: function () {
      var a = this.index,
        b = this.getAttribute("position");
      if (void 0 !== b) {
        var d = this.getAttribute("normal");
        if (void 0 === d)
          (d = new pa(new Float32Array(3 * b.count), 3)),
            this.setAttribute("normal", d);
        else for (var e = 0, f = d.count; e < f; e++) d.setXYZ(e, 0, 0, 0);
        e = new w();
        f = new w();
        var g = new w(),
          h = new w(),
          k = new w(),
          l = new w(),
          m = new w(),
          n = new w();
        if (a)
          for (var p = 0, t = a.count; p < t; p += 3) {
            var q = a.getX(p + 0),
              v = a.getX(p + 1),
              u = a.getX(p + 2);
            e.fromBufferAttribute(b, q);
            f.fromBufferAttribute(b, v);
            g.fromBufferAttribute(b, u);
            m.subVectors(g, f);
            n.subVectors(e, f);
            m.cross(n);
            h.fromBufferAttribute(d, q);
            k.fromBufferAttribute(d, v);
            l.fromBufferAttribute(d, u);
            h.add(m);
            k.add(m);
            l.add(m);
            d.setXYZ(q, h.x, h.y, h.z);
            d.setXYZ(v, k.x, k.y, k.z);
            d.setXYZ(u, l.x, l.y, l.z);
          }
        else
          for (a = 0, h = b.count; a < h; a += 3)
            e.fromBufferAttribute(b, a + 0),
              f.fromBufferAttribute(b, a + 1),
              g.fromBufferAttribute(b, a + 2),
              m.subVectors(g, f),
              n.subVectors(e, f),
              m.cross(n),
              d.setXYZ(a + 0, m.x, m.y, m.z),
              d.setXYZ(a + 1, m.x, m.y, m.z),
              d.setXYZ(a + 2, m.x, m.y, m.z);
        this.normalizeNormals();
        d.needsUpdate = !0;
      }
    },
    merge: function (a, b) {
      if (a && a.isBufferGeometry) {
        void 0 === b &&
          ((b = 0),
          console.warn(
            "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
          ));
        var d = this.attributes,
          e;
        for (e in d)
          if (void 0 !== a.attributes[e]) {
            var f = d[e].array,
              g = a.attributes[e],
              h = g.array,
              k = g.itemSize * b;
            g = Math.min(h.length, f.length - k);
            for (var l = 0; l < g; l++, k++) f[k] = h[l];
          }
        return this;
      }
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        a
      );
    },
    normalizeNormals: function () {
      for (var a = this.attributes.normal, b = 0, d = a.count; b < d; b++)
        jb.fromBufferAttribute(a, b),
          jb.normalize(),
          a.setXYZ(b, jb.x, jb.y, jb.z);
    },
    toNonIndexed: function () {
      function a(n, p) {
        var t = n.array,
          q = n.itemSize;
        n = n.normalized;
        for (
          var v = new t.constructor(p.length * q),
            u,
            A = 0,
            B = 0,
            D = p.length;
          B < D;
          B++
        ) {
          u = p[B] * q;
          for (var G = 0; G < q; G++) v[A++] = t[u++];
        }
        return new pa(v, q, n);
      }
      if (null === this.index)
        return (
          console.warn(
            "THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."
          ),
          this
        );
      var b = new ka(),
        d = this.index.array,
        e = this.attributes;
      for (h in e) {
        var f = a(e[h], d);
        b.setAttribute(h, f);
      }
      e = this.morphAttributes;
      for (var g in e) {
        var h = [];
        f = e[g];
        for (var k = 0, l = f.length; k < l; k++) {
          var m = a(f[k], d);
          h.push(m);
        }
        b.morphAttributes[g] = h;
      }
      b.morphTargetsRelative = this.morphTargetsRelative;
      d = this.groups;
      g = 0;
      for (e = d.length; g < e; g++)
        (h = d[g]), b.addGroup(h.start, h.count, h.materialIndex);
      return b;
    },
    toJSON: function () {
      var a = {
        metadata: {
          version: 4.5,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      a.uuid = this.uuid;
      a.type = this.type;
      "" !== this.name && (a.name = this.name);
      0 < Object.keys(this.userData).length && (a.userData = this.userData);
      if (void 0 !== this.parameters) {
        var b = this.parameters;
        for (d in b) void 0 !== b[d] && (a[d] = b[d]);
        return a;
      }
      a.data = { attributes: {} };
      var d = this.index;
      null !== d &&
        (a.data.index = {
          type: d.array.constructor.name,
          array: Array.prototype.slice.call(d.array),
        });
      d = this.attributes;
      for (var e in d) {
        var f = d[e],
          g = f.toJSON(a.data);
        "" !== f.name && (g.name = f.name);
        a.data.attributes[e] = g;
      }
      e = {};
      d = !1;
      for (b in this.morphAttributes) {
        f = this.morphAttributes[b];
        g = [];
        for (var h = 0, k = f.length; h < k; h++) {
          var l = f[h],
            m = l.toJSON(a.data);
          "" !== l.name && (m.name = l.name);
          g.push(m);
        }
        0 < g.length && ((e[b] = g), (d = !0));
      }
      d &&
        ((a.data.morphAttributes = e),
        (a.data.morphTargetsRelative = this.morphTargetsRelative));
      b = this.groups;
      0 < b.length && (a.data.groups = JSON.parse(JSON.stringify(b)));
      b = this.boundingSphere;
      null !== b &&
        (a.data.boundingSphere = {
          center: b.center.toArray(),
          radius: b.radius,
        });
      return a;
    },
    clone: function () {
      return new ka().copy(this);
    },
    copy: function (a) {
      this.index = null;
      this.attributes = {};
      this.morphAttributes = {};
      this.groups = [];
      this.boundingSphere = this.boundingBox = null;
      var b = {};
      this.name = a.name;
      var d = a.index;
      null !== d && this.setIndex(d.clone(b));
      d = a.attributes;
      for (var e in d) this.setAttribute(e, d[e].clone(b));
      e = a.morphAttributes;
      for (var f in e) {
        d = [];
        for (var g = e[f], h = 0, k = g.length; h < k; h++)
          d.push(g[h].clone(b));
        this.morphAttributes[f] = d;
      }
      this.morphTargetsRelative = a.morphTargetsRelative;
      b = a.groups;
      f = 0;
      for (e = b.length; f < e; f++)
        (d = b[f]), this.addGroup(d.start, d.count, d.materialIndex);
      b = a.boundingBox;
      null !== b && (this.boundingBox = b.clone());
      b = a.boundingSphere;
      null !== b && (this.boundingSphere = b.clone());
      this.drawRange.start = a.drawRange.start;
      this.drawRange.count = a.drawRange.count;
      this.userData = a.userData;
      return this;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  });
  var Ej = new da(),
    td = new Ta(),
    ji = new Wa(),
    yc = new w(),
    zc = new w(),
    Ac = new w(),
    ih = new w(),
    jh = new w(),
    kh = new w(),
    Qf = new w(),
    Rf = new w(),
    Sf = new w(),
    Cd = new L(),
    Dd = new L(),
    Ed = new L(),
    Ie = new w(),
    Of = new w();
  Qa.prototype = Object.assign(Object.create(ha.prototype), {
    constructor: Qa,
    isMesh: !0,
    copy: function (a) {
      ha.prototype.copy.call(this, a);
      void 0 !== a.morphTargetInfluences &&
        (this.morphTargetInfluences = a.morphTargetInfluences.slice());
      void 0 !== a.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          a.morphTargetDictionary
        ));
      this.material = a.material;
      this.geometry = a.geometry;
      return this;
    },
    updateMorphTargets: function () {
      var a = this.geometry;
      if (a.isBufferGeometry) {
        a = a.morphAttributes;
        var b = Object.keys(a);
        if (0 < b.length && ((a = a[b[0]]), void 0 !== a)) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          b = 0;
          for (var d = a.length; b < d; b++) {
            var e = a[b].name || String(b);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[e] = b;
          }
        }
      } else
        (a = a.morphTargets),
          void 0 !== a &&
            0 < a.length &&
            console.error(
              "THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."
            );
    },
    raycast: function (a, b) {
      var d = this.geometry,
        e = this.material,
        f = this.matrixWorld;
      if (
        void 0 !== e &&
        (null === d.boundingSphere && d.computeBoundingSphere(),
        ji.copy(d.boundingSphere),
        ji.applyMatrix4(f),
        !1 !== a.ray.intersectsSphere(ji) &&
          (Ej.getInverse(f),
          td.copy(a.ray).applyMatrix4(Ej),
          null === d.boundingBox || !1 !== td.intersectsBox(d.boundingBox)))
      )
        if (d.isBufferGeometry) {
          var g = d.index,
            h = d.attributes.position;
          f = d.morphAttributes.position;
          var k = d.morphTargetsRelative,
            l = d.attributes.uv,
            m = d.attributes.uv2,
            n = d.groups,
            p = d.drawRange;
          if (null !== g)
            if (Array.isArray(e))
              for (var t = 0, q = n.length; t < q; t++)
                for (
                  var v = n[t],
                    u = e[v.materialIndex],
                    A = Math.max(v.start, p.start),
                    B = Math.min(v.start + v.count, p.start + p.count);
                  A < B;
                  A += 3
                ) {
                  d = g.getX(A);
                  var D = g.getX(A + 1),
                    G = g.getX(A + 2);
                  if ((d = Pf(this, u, a, td, h, f, k, l, m, d, D, G)))
                    (d.faceIndex = Math.floor(A / 3)),
                      (d.face.materialIndex = v.materialIndex),
                      b.push(d);
                }
            else
              for (
                n = Math.max(0, p.start),
                  p = Math.min(g.count, p.start + p.count);
                n < p;
                n += 3
              ) {
                if (
                  ((d = g.getX(n)),
                  (t = g.getX(n + 1)),
                  (q = g.getX(n + 2)),
                  (d = Pf(this, e, a, td, h, f, k, l, m, d, t, q)))
                )
                  (d.faceIndex = Math.floor(n / 3)), b.push(d);
              }
          else if (void 0 !== h)
            if (Array.isArray(e))
              for (g = 0, t = n.length; g < t; g++)
                for (
                  q = n[g],
                    v = e[q.materialIndex],
                    u = Math.max(q.start, p.start),
                    A = Math.min(q.start + q.count, p.start + p.count);
                  u < A;
                  u += 3
                ) {
                  if ((d = Pf(this, v, a, td, h, f, k, l, m, u, u + 1, u + 2)))
                    (d.faceIndex = Math.floor(u / 3)),
                      (d.face.materialIndex = q.materialIndex),
                      b.push(d);
                }
            else
              for (
                n = Math.max(0, p.start),
                  p = Math.min(h.count, p.start + p.count);
                n < p;
                n += 3
              )
                if ((d = Pf(this, e, a, td, h, f, k, l, m, n, n + 1, n + 2)))
                  (d.faceIndex = Math.floor(n / 3)), b.push(d);
        } else if (d.isGeometry)
          for (
            f = Array.isArray(e),
              k = d.vertices,
              l = d.faces,
              d = d.faceVertexUvs[0],
              0 < d.length && (h = d),
              m = 0,
              p = l.length;
            m < p;
            m++
          )
            if (
              ((n = l[m]),
              (d = f ? e[n.materialIndex] : e),
              void 0 !== d &&
                ((g = k[n.a]),
                (t = k[n.b]),
                (q = k[n.c]),
                (d = wi(this, d, a, td, g, t, q, Ie))))
            )
              h &&
                h[m] &&
                ((v = h[m]),
                Cd.copy(v[0]),
                Dd.copy(v[1]),
                Ed.copy(v[2]),
                (d.uv = Ga.getUV(Ie, g, t, q, Cd, Dd, Ed, new L()))),
                (d.face = n),
                (d.faceIndex = m),
                b.push(d);
    },
  });
  var lk = 0,
    jc = new da(),
    ki = new ha(),
    Kg = new w();
  sa.prototype = Object.assign(Object.create(wb.prototype), {
    constructor: sa,
    isGeometry: !0,
    applyMatrix4: function (a) {
      for (
        var b = new Da().getNormalMatrix(a), d = 0, e = this.vertices.length;
        d < e;
        d++
      )
        this.vertices[d].applyMatrix4(a);
      a = 0;
      for (d = this.faces.length; a < d; a++) {
        e = this.faces[a];
        e.normal.applyMatrix3(b).normalize();
        for (var f = 0, g = e.vertexNormals.length; f < g; f++)
          e.vertexNormals[f].applyMatrix3(b).normalize();
      }
      null !== this.boundingBox && this.computeBoundingBox();
      null !== this.boundingSphere && this.computeBoundingSphere();
      this.normalsNeedUpdate = this.verticesNeedUpdate = !0;
      return this;
    },
    rotateX: function (a) {
      jc.makeRotationX(a);
      this.applyMatrix4(jc);
      return this;
    },
    rotateY: function (a) {
      jc.makeRotationY(a);
      this.applyMatrix4(jc);
      return this;
    },
    rotateZ: function (a) {
      jc.makeRotationZ(a);
      this.applyMatrix4(jc);
      return this;
    },
    translate: function (a, b, d) {
      jc.makeTranslation(a, b, d);
      this.applyMatrix4(jc);
      return this;
    },
    scale: function (a, b, d) {
      jc.makeScale(a, b, d);
      this.applyMatrix4(jc);
      return this;
    },
    lookAt: function (a) {
      ki.lookAt(a);
      ki.updateMatrix();
      this.applyMatrix4(ki.matrix);
      return this;
    },
    fromBufferGeometry: function (a) {
      function b(q, v, u, A) {
        var B =
            void 0 === k
              ? []
              : [d.colors[q].clone(), d.colors[v].clone(), d.colors[u].clone()],
          D =
            void 0 === h
              ? []
              : [
                  new w().fromBufferAttribute(h, q),
                  new w().fromBufferAttribute(h, v),
                  new w().fromBufferAttribute(h, u),
                ];
        A = new ad(q, v, u, D, B, A);
        d.faces.push(A);
        void 0 !== l &&
          d.faceVertexUvs[0].push([
            new L().fromBufferAttribute(l, q),
            new L().fromBufferAttribute(l, v),
            new L().fromBufferAttribute(l, u),
          ]);
        void 0 !== m &&
          d.faceVertexUvs[1].push([
            new L().fromBufferAttribute(m, q),
            new L().fromBufferAttribute(m, v),
            new L().fromBufferAttribute(m, u),
          ]);
      }
      var d = this,
        e = null !== a.index ? a.index : void 0,
        f = a.attributes;
      if (void 0 === f.position)
        return (
          console.error(
            "THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."
          ),
          this
        );
      var g = f.position,
        h = f.normal,
        k = f.color,
        l = f.uv,
        m = f.uv2;
      void 0 !== m && (this.faceVertexUvs[1] = []);
      for (f = 0; f < g.count; f++)
        d.vertices.push(new w().fromBufferAttribute(g, f)),
          void 0 !== k && d.colors.push(new S().fromBufferAttribute(k, f));
      f = a.groups;
      if (0 < f.length)
        for (g = 0; g < f.length; g++) {
          var n = f[g],
            p = n.start,
            t = p;
          for (p += n.count; t < p; t += 3)
            void 0 !== e
              ? b(e.getX(t), e.getX(t + 1), e.getX(t + 2), n.materialIndex)
              : b(t, t + 1, t + 2, n.materialIndex);
        }
      else if (void 0 !== e)
        for (f = 0; f < e.count; f += 3)
          b(e.getX(f), e.getX(f + 1), e.getX(f + 2));
      else for (e = 0; e < g.count; e += 3) b(e, e + 1, e + 2);
      this.computeFaceNormals();
      null !== a.boundingBox && (this.boundingBox = a.boundingBox.clone());
      null !== a.boundingSphere &&
        (this.boundingSphere = a.boundingSphere.clone());
      return this;
    },
    center: function () {
      this.computeBoundingBox();
      this.boundingBox.getCenter(Kg).negate();
      this.translate(Kg.x, Kg.y, Kg.z);
      return this;
    },
    normalize: function () {
      this.computeBoundingSphere();
      var a = this.boundingSphere.center,
        b = this.boundingSphere.radius;
      b = 0 === b ? 1 : 1 / b;
      var d = new da();
      d.set(
        b,
        0,
        0,
        -b * a.x,
        0,
        b,
        0,
        -b * a.y,
        0,
        0,
        b,
        -b * a.z,
        0,
        0,
        0,
        1
      );
      this.applyMatrix4(d);
      return this;
    },
    computeFaceNormals: function () {
      for (
        var a = new w(), b = new w(), d = 0, e = this.faces.length;
        d < e;
        d++
      ) {
        var f = this.faces[d],
          g = this.vertices[f.a],
          h = this.vertices[f.b];
        a.subVectors(this.vertices[f.c], h);
        b.subVectors(g, h);
        a.cross(b);
        a.normalize();
        f.normal.copy(a);
      }
    },
    computeVertexNormals: function (a) {
      void 0 === a && (a = !0);
      for (
        var b = Array(this.vertices.length), d = 0, e = this.vertices.length;
        d < e;
        d++
      )
        b[d] = new w();
      if (a) {
        a = new w();
        d = new w();
        e = 0;
        for (var f = this.faces.length; e < f; e++) {
          var g = this.faces[e],
            h = this.vertices[g.a],
            k = this.vertices[g.b];
          a.subVectors(this.vertices[g.c], k);
          d.subVectors(h, k);
          a.cross(d);
          b[g.a].add(a);
          b[g.b].add(a);
          b[g.c].add(a);
        }
      } else
        for (
          this.computeFaceNormals(), a = 0, d = this.faces.length;
          a < d;
          a++
        )
          (e = this.faces[a]),
            b[e.a].add(e.normal),
            b[e.b].add(e.normal),
            b[e.c].add(e.normal);
      a = 0;
      for (d = this.vertices.length; a < d; a++) b[a].normalize();
      a = 0;
      for (d = this.faces.length; a < d; a++)
        (e = this.faces[a]),
          (f = e.vertexNormals),
          3 === f.length
            ? (f[0].copy(b[e.a]), f[1].copy(b[e.b]), f[2].copy(b[e.c]))
            : ((f[0] = b[e.a].clone()),
              (f[1] = b[e.b].clone()),
              (f[2] = b[e.c].clone()));
      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    },
    computeFlatVertexNormals: function () {
      this.computeFaceNormals();
      for (var a = 0, b = this.faces.length; a < b; a++) {
        var d = this.faces[a],
          e = d.vertexNormals;
        3 === e.length
          ? (e[0].copy(d.normal), e[1].copy(d.normal), e[2].copy(d.normal))
          : ((e[0] = d.normal.clone()),
            (e[1] = d.normal.clone()),
            (e[2] = d.normal.clone()));
      }
      0 < this.faces.length && (this.normalsNeedUpdate = !0);
    },
    computeMorphNormals: function () {
      for (var a = 0, b = this.faces.length; a < b; a++) {
        var d = this.faces[a];
        d.__originalFaceNormal
          ? d.__originalFaceNormal.copy(d.normal)
          : (d.__originalFaceNormal = d.normal.clone());
        d.__originalVertexNormals || (d.__originalVertexNormals = []);
        for (var e = 0, f = d.vertexNormals.length; e < f; e++)
          d.__originalVertexNormals[e]
            ? d.__originalVertexNormals[e].copy(d.vertexNormals[e])
            : (d.__originalVertexNormals[e] = d.vertexNormals[e].clone());
      }
      a = new sa();
      a.faces = this.faces;
      b = 0;
      for (d = this.morphTargets.length; b < d; b++) {
        if (!this.morphNormals[b]) {
          this.morphNormals[b] = {};
          this.morphNormals[b].faceNormals = [];
          this.morphNormals[b].vertexNormals = [];
          e = this.morphNormals[b].faceNormals;
          f = this.morphNormals[b].vertexNormals;
          for (var g = 0, h = this.faces.length; g < h; g++) {
            var k = new w(),
              l = { a: new w(), b: new w(), c: new w() };
            e.push(k);
            f.push(l);
          }
        }
        e = this.morphNormals[b];
        a.vertices = this.morphTargets[b].vertices;
        a.computeFaceNormals();
        a.computeVertexNormals();
        f = 0;
        for (g = this.faces.length; f < g; f++)
          (h = this.faces[f]),
            (k = e.vertexNormals[f]),
            e.faceNormals[f].copy(h.normal),
            k.a.copy(h.vertexNormals[0]),
            k.b.copy(h.vertexNormals[1]),
            k.c.copy(h.vertexNormals[2]);
      }
      a = 0;
      for (b = this.faces.length; a < b; a++)
        (d = this.faces[a]),
          (d.normal = d.__originalFaceNormal),
          (d.vertexNormals = d.__originalVertexNormals);
    },
    computeBoundingBox: function () {
      null === this.boundingBox && (this.boundingBox = new za());
      this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function () {
      null === this.boundingSphere && (this.boundingSphere = new Wa());
      this.boundingSphere.setFromPoints(this.vertices);
    },
    merge: function (a, b, d) {
      if (a && a.isGeometry) {
        var e,
          f = this.vertices.length,
          g = this.vertices,
          h = a.vertices,
          k = this.faces,
          l = a.faces,
          m = this.colors,
          n = a.colors;
        void 0 === d && (d = 0);
        void 0 !== b && (e = new Da().getNormalMatrix(b));
        for (var p = 0, t = h.length; p < t; p++) {
          var q = h[p].clone();
          void 0 !== b && q.applyMatrix4(b);
          g.push(q);
        }
        b = 0;
        for (g = n.length; b < g; b++) m.push(n[b].clone());
        m = 0;
        for (n = l.length; m < n; m++) {
          b = l[m];
          t = b.vertexNormals;
          g = b.vertexColors;
          h = new ad(b.a + f, b.b + f, b.c + f);
          h.normal.copy(b.normal);
          void 0 !== e && h.normal.applyMatrix3(e).normalize();
          q = 0;
          for (var v = t.length; q < v; q++)
            (p = t[q].clone()),
              void 0 !== e && p.applyMatrix3(e).normalize(),
              h.vertexNormals.push(p);
          h.color.copy(b.color);
          t = 0;
          for (q = g.length; t < q; t++)
            (p = g[t]), h.vertexColors.push(p.clone());
          h.materialIndex = b.materialIndex + d;
          k.push(h);
        }
        d = 0;
        for (e = a.faceVertexUvs.length; d < e; d++)
          for (
            f = a.faceVertexUvs[d],
              void 0 === this.faceVertexUvs[d] && (this.faceVertexUvs[d] = []),
              k = 0,
              l = f.length;
            k < l;
            k++
          ) {
            m = f[k];
            n = [];
            b = 0;
            for (g = m.length; b < g; b++) n.push(m[b].clone());
            this.faceVertexUvs[d].push(n);
          }
      } else
        console.error(
          "THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
          a
        );
    },
    mergeMesh: function (a) {
      a && a.isMesh
        ? (a.matrixAutoUpdate && a.updateMatrix(),
          this.merge(a.geometry, a.matrix))
        : console.error(
            "THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",
            a
          );
    },
    mergeVertices: function () {
      for (
        var a = {},
          b = [],
          d = [],
          e = Math.pow(10, 4),
          f = 0,
          g = this.vertices.length;
        f < g;
        f++
      ) {
        var h = this.vertices[f];
        h =
          Math.round(h.x * e) +
          "_" +
          Math.round(h.y * e) +
          "_" +
          Math.round(h.z * e);
        void 0 === a[h]
          ? ((a[h] = f), b.push(this.vertices[f]), (d[f] = b.length - 1))
          : (d[f] = d[a[h]]);
      }
      a = [];
      e = 0;
      for (f = this.faces.length; e < f; e++)
        for (
          g = this.faces[e],
            g.a = d[g.a],
            g.b = d[g.b],
            g.c = d[g.c],
            g = [g.a, g.b, g.c],
            h = 0;
          3 > h;
          h++
        )
          if (g[h] === g[(h + 1) % 3]) {
            a.push(e);
            break;
          }
      for (d = a.length - 1; 0 <= d; d--)
        for (
          e = a[d],
            this.faces.splice(e, 1),
            f = 0,
            g = this.faceVertexUvs.length;
          f < g;
          f++
        )
          this.faceVertexUvs[f].splice(e, 1);
      d = this.vertices.length - b.length;
      this.vertices = b;
      return d;
    },
    setFromPoints: function (a) {
      this.vertices = [];
      for (var b = 0, d = a.length; b < d; b++) {
        var e = a[b];
        this.vertices.push(new w(e.x, e.y, e.z || 0));
      }
      return this;
    },
    sortFacesByMaterialIndex: function () {
      for (var a = this.faces, b = a.length, d = 0; d < b; d++) a[d]._id = d;
      a.sort(function (l, m) {
        return l.materialIndex - m.materialIndex;
      });
      d = this.faceVertexUvs[0];
      var e = this.faceVertexUvs[1],
        f,
        g;
      d && d.length === b && (f = []);
      e && e.length === b && (g = []);
      for (var h = 0; h < b; h++) {
        var k = a[h]._id;
        f && f.push(d[k]);
        g && g.push(e[k]);
      }
      f && (this.faceVertexUvs[0] = f);
      g && (this.faceVertexUvs[1] = g);
    },
    toJSON: function () {
      function a(E, H, M) {
        return M ? E | (1 << H) : E & ~(1 << H);
      }
      function b(E) {
        var H = E.x.toString() + E.y.toString() + E.z.toString();
        if (void 0 !== m[H]) return m[H];
        m[H] = l.length / 3;
        l.push(E.x, E.y, E.z);
        return m[H];
      }
      function d(E) {
        var H = E.r.toString() + E.g.toString() + E.b.toString();
        if (void 0 !== p[H]) return p[H];
        p[H] = n.length;
        n.push(E.getHex());
        return p[H];
      }
      function e(E) {
        var H = E.x.toString() + E.y.toString();
        if (void 0 !== q[H]) return q[H];
        q[H] = t.length / 2;
        t.push(E.x, E.y);
        return q[H];
      }
      var f = {
        metadata: {
          version: 4.5,
          type: "Geometry",
          generator: "Geometry.toJSON",
        },
      };
      f.uuid = this.uuid;
      f.type = this.type;
      "" !== this.name && (f.name = this.name);
      if (void 0 !== this.parameters) {
        var g = this.parameters,
          h;
        for (h in g) void 0 !== g[h] && (f[h] = g[h]);
        return f;
      }
      g = [];
      for (h = 0; h < this.vertices.length; h++) {
        var k = this.vertices[h];
        g.push(k.x, k.y, k.z);
      }
      h = [];
      var l = [],
        m = {},
        n = [],
        p = {},
        t = [],
        q = {};
      for (k = 0; k < this.faces.length; k++) {
        var v = this.faces[k],
          u = void 0 !== this.faceVertexUvs[0][k],
          A = 0 < v.normal.length(),
          B = 0 < v.vertexNormals.length,
          D = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b,
          G = 0 < v.vertexColors.length,
          I = 0;
        I = a(I, 0, 0);
        I = a(I, 1, !0);
        I = a(I, 2, !1);
        I = a(I, 3, u);
        I = a(I, 4, A);
        I = a(I, 5, B);
        I = a(I, 6, D);
        I = a(I, 7, G);
        h.push(I);
        h.push(v.a, v.b, v.c);
        h.push(v.materialIndex);
        u &&
          ((u = this.faceVertexUvs[0][k]), h.push(e(u[0]), e(u[1]), e(u[2])));
        A && h.push(b(v.normal));
        B && ((A = v.vertexNormals), h.push(b(A[0]), b(A[1]), b(A[2])));
        D && h.push(d(v.color));
        G && ((v = v.vertexColors), h.push(d(v[0]), d(v[1]), d(v[2])));
      }
      f.data = {};
      f.data.vertices = g;
      f.data.normals = l;
      0 < n.length && (f.data.colors = n);
      0 < t.length && (f.data.uvs = [t]);
      f.data.faces = h;
      return f;
    },
    clone: function () {
      return new sa().copy(this);
    },
    copy: function (a) {
      this.vertices = [];
      this.colors = [];
      this.faces = [];
      this.faceVertexUvs = [[]];
      this.morphTargets = [];
      this.morphNormals = [];
      this.skinWeights = [];
      this.skinIndices = [];
      this.lineDistances = [];
      this.boundingSphere = this.boundingBox = null;
      this.name = a.name;
      for (var b = a.vertices, d = 0, e = b.length; d < e; d++)
        this.vertices.push(b[d].clone());
      b = a.colors;
      d = 0;
      for (e = b.length; d < e; d++) this.colors.push(b[d].clone());
      b = a.faces;
      d = 0;
      for (e = b.length; d < e; d++) this.faces.push(b[d].clone());
      b = 0;
      for (d = a.faceVertexUvs.length; b < d; b++) {
        e = a.faceVertexUvs[b];
        void 0 === this.faceVertexUvs[b] && (this.faceVertexUvs[b] = []);
        for (var f = 0, g = e.length; f < g; f++) {
          for (var h = e[f], k = [], l = 0, m = h.length; l < m; l++)
            k.push(h[l].clone());
          this.faceVertexUvs[b].push(k);
        }
      }
      b = a.morphTargets;
      d = 0;
      for (e = b.length; d < e; d++) {
        f = {};
        f.name = b[d].name;
        if (void 0 !== b[d].vertices)
          for (f.vertices = [], g = 0, h = b[d].vertices.length; g < h; g++)
            f.vertices.push(b[d].vertices[g].clone());
        if (void 0 !== b[d].normals)
          for (f.normals = [], g = 0, h = b[d].normals.length; g < h; g++)
            f.normals.push(b[d].normals[g].clone());
        this.morphTargets.push(f);
      }
      b = a.morphNormals;
      d = 0;
      for (e = b.length; d < e; d++) {
        f = {};
        if (void 0 !== b[d].vertexNormals)
          for (
            f.vertexNormals = [], g = 0, h = b[d].vertexNormals.length;
            g < h;
            g++
          )
            (k = b[d].vertexNormals[g]),
              (l = {}),
              (l.a = k.a.clone()),
              (l.b = k.b.clone()),
              (l.c = k.c.clone()),
              f.vertexNormals.push(l);
        if (void 0 !== b[d].faceNormals)
          for (
            f.faceNormals = [], g = 0, h = b[d].faceNormals.length;
            g < h;
            g++
          )
            f.faceNormals.push(b[d].faceNormals[g].clone());
        this.morphNormals.push(f);
      }
      b = a.skinWeights;
      d = 0;
      for (e = b.length; d < e; d++) this.skinWeights.push(b[d].clone());
      b = a.skinIndices;
      d = 0;
      for (e = b.length; d < e; d++) this.skinIndices.push(b[d].clone());
      b = a.lineDistances;
      d = 0;
      for (e = b.length; d < e; d++) this.lineDistances.push(b[d]);
      b = a.boundingBox;
      null !== b && (this.boundingBox = b.clone());
      b = a.boundingSphere;
      null !== b && (this.boundingSphere = b.clone());
      this.elementsNeedUpdate = a.elementsNeedUpdate;
      this.verticesNeedUpdate = a.verticesNeedUpdate;
      this.uvsNeedUpdate = a.uvsNeedUpdate;
      this.normalsNeedUpdate = a.normalsNeedUpdate;
      this.colorsNeedUpdate = a.colorsNeedUpdate;
      this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate;
      this.groupsNeedUpdate = a.groupsNeedUpdate;
      return this;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  });
  Fd.prototype = Object.create(sa.prototype);
  Fd.prototype.constructor = Fd;
  Bc.prototype = Object.create(ka.prototype);
  Bc.prototype.constructor = Bc;
  var Ri = { clone: Gd, merge: nb };
  sb.prototype = Object.create(ra.prototype);
  sb.prototype.constructor = sb;
  sb.prototype.isShaderMaterial = !0;
  sb.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.fragmentShader = a.fragmentShader;
    this.vertexShader = a.vertexShader;
    this.uniforms = Gd(a.uniforms);
    this.defines = Object.assign({}, a.defines);
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.lights = a.lights;
    this.clipping = a.clipping;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    this.extensions = Object.assign({}, a.extensions);
    this.glslVersion = a.glslVersion;
    return this;
  };
  sb.prototype.toJSON = function (a) {
    var b = ra.prototype.toJSON.call(this, a);
    b.glslVersion = this.glslVersion;
    b.uniforms = {};
    for (var d in this.uniforms) {
      var e = this.uniforms[d].value;
      b.uniforms[d] =
        e && e.isTexture
          ? { type: "t", value: e.toJSON(a).uuid }
          : e && e.isColor
          ? { type: "c", value: e.getHex() }
          : e && e.isVector2
          ? { type: "v2", value: e.toArray() }
          : e && e.isVector3
          ? { type: "v3", value: e.toArray() }
          : e && e.isVector4
          ? { type: "v4", value: e.toArray() }
          : e && e.isMatrix3
          ? { type: "m3", value: e.toArray() }
          : e && e.isMatrix4
          ? { type: "m4", value: e.toArray() }
          : { value: e };
    }
    0 < Object.keys(this.defines).length && (b.defines = this.defines);
    b.vertexShader = this.vertexShader;
    b.fragmentShader = this.fragmentShader;
    a = {};
    for (var f in this.extensions) !0 === this.extensions[f] && (a[f] = !0);
    0 < Object.keys(a).length && (b.extensions = a);
    return b;
  };
  ac.prototype = Object.assign(Object.create(ha.prototype), {
    constructor: ac,
    isCamera: !0,
    copy: function (a, b) {
      ha.prototype.copy.call(this, a, b);
      this.matrixWorldInverse.copy(a.matrixWorldInverse);
      this.projectionMatrix.copy(a.projectionMatrix);
      this.projectionMatrixInverse.copy(a.projectionMatrixInverse);
      return this;
    },
    getWorldDirection: function (a) {
      void 0 === a &&
        (console.warn(
          "THREE.Camera: .getWorldDirection() target is now required"
        ),
        (a = new w()));
      this.updateMatrixWorld(!0);
      var b = this.matrixWorld.elements;
      return a.set(-b[8], -b[9], -b[10]).normalize();
    },
    updateMatrixWorld: function (a) {
      ha.prototype.updateMatrixWorld.call(this, a);
      this.matrixWorldInverse.getInverse(this.matrixWorld);
    },
    updateWorldMatrix: function (a, b) {
      ha.prototype.updateWorldMatrix.call(this, a, b);
      this.matrixWorldInverse.getInverse(this.matrixWorld);
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
  });
  eb.prototype = Object.assign(Object.create(ac.prototype), {
    constructor: eb,
    isPerspectiveCamera: !0,
    copy: function (a, b) {
      ac.prototype.copy.call(this, a, b);
      this.fov = a.fov;
      this.zoom = a.zoom;
      this.near = a.near;
      this.far = a.far;
      this.focus = a.focus;
      this.aspect = a.aspect;
      this.view = null === a.view ? null : Object.assign({}, a.view);
      this.filmGauge = a.filmGauge;
      this.filmOffset = a.filmOffset;
      return this;
    },
    setFocalLength: function (a) {
      a = (0.5 * this.getFilmHeight()) / a;
      this.fov = 2 * xa.RAD2DEG * Math.atan(a);
      this.updateProjectionMatrix();
    },
    getFocalLength: function () {
      var a = Math.tan(0.5 * xa.DEG2RAD * this.fov);
      return (0.5 * this.getFilmHeight()) / a;
    },
    getEffectiveFOV: function () {
      return (
        2 *
        xa.RAD2DEG *
        Math.atan(Math.tan(0.5 * xa.DEG2RAD * this.fov) / this.zoom)
      );
    },
    getFilmWidth: function () {
      return this.filmGauge * Math.min(this.aspect, 1);
    },
    getFilmHeight: function () {
      return this.filmGauge / Math.max(this.aspect, 1);
    },
    setViewOffset: function (a, b, d, e, f, g) {
      this.aspect = a / b;
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        });
      this.view.enabled = !0;
      this.view.fullWidth = a;
      this.view.fullHeight = b;
      this.view.offsetX = d;
      this.view.offsetY = e;
      this.view.width = f;
      this.view.height = g;
      this.updateProjectionMatrix();
    },
    clearViewOffset: function () {
      null !== this.view && (this.view.enabled = !1);
      this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function () {
      var a = this.near,
        b = (a * Math.tan(0.5 * xa.DEG2RAD * this.fov)) / this.zoom,
        d = 2 * b,
        e = this.aspect * d,
        f = -0.5 * e,
        g = this.view;
      if (null !== this.view && this.view.enabled) {
        var h = g.fullWidth,
          k = g.fullHeight;
        f += (g.offsetX * e) / h;
        b -= (g.offsetY * d) / k;
        e *= g.width / h;
        d *= g.height / k;
      }
      g = this.filmOffset;
      0 !== g && (f += (a * g) / this.getFilmWidth());
      this.projectionMatrix.makePerspective(f, f + e, b, b - d, a, this.far);
      this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON: function (a) {
      a = ha.prototype.toJSON.call(this, a);
      a.object.fov = this.fov;
      a.object.zoom = this.zoom;
      a.object.near = this.near;
      a.object.far = this.far;
      a.object.focus = this.focus;
      a.object.aspect = this.aspect;
      null !== this.view && (a.object.view = Object.assign({}, this.view));
      a.object.filmGauge = this.filmGauge;
      a.object.filmOffset = this.filmOffset;
      return a;
    },
  });
  Hd.prototype = Object.create(ha.prototype);
  Hd.prototype.constructor = Hd;
  Cc.prototype = Object.create(Db.prototype);
  Cc.prototype.constructor = Cc;
  Cc.prototype.isWebGLCubeRenderTarget = !0;
  Cc.prototype.fromEquirectangularTexture = function (a, b) {
    this.texture.type = b.type;
    this.texture.format = 1023;
    this.texture.encoding = b.encoding;
    this.texture.generateMipmaps = b.generateMipmaps;
    this.texture.minFilter = b.minFilter;
    this.texture.magFilter = b.magFilter;
    var d = new Bc(5, 5, 5),
      e = new sb({
        name: "CubemapFromEquirect",
        uniforms: Gd({ tEquirect: { value: null } }),
        vertexShader:
          "\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t#include <project_vertex>\n\n\t\t\t}\n\t\t",
        fragmentShader:
          "\n\n\t\t\tuniform sampler2D tEquirect;\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t}\n\t\t",
        side: 1,
        blending: 0,
      });
    e.uniforms.tEquirect.value = b;
    d = new Qa(d, e);
    e = b.minFilter;
    1008 === b.minFilter && (b.minFilter = 1006);
    new Hd(1, 10, this).update(a, d);
    b.minFilter = e;
    d.geometry.dispose();
    d.material.dispose();
    return this;
  };
  bd.prototype = Object.create(Oa.prototype);
  bd.prototype.constructor = bd;
  bd.prototype.isDataTexture = !0;
  var xe = new Wa(),
    Lg = new w(),
    xb = function (a, b, d, e, f, g) {
      this.planes = [
        void 0 !== a ? a : new Na(),
        void 0 !== b ? b : new Na(),
        void 0 !== d ? d : new Na(),
        void 0 !== e ? e : new Na(),
        void 0 !== f ? f : new Na(),
        void 0 !== g ? g : new Na(),
      ];
    };
  xb.prototype.set = function (a, b, d, e, f, g) {
    var h = this.planes;
    h[0].copy(a);
    h[1].copy(b);
    h[2].copy(d);
    h[3].copy(e);
    h[4].copy(f);
    h[5].copy(g);
    return this;
  };
  xb.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  xb.prototype.copy = function (a) {
    for (var b = this.planes, d = 0; 6 > d; d++) b[d].copy(a.planes[d]);
    return this;
  };
  xb.prototype.setFromProjectionMatrix = function (a) {
    var b = this.planes,
      d = a.elements;
    a = d[0];
    var e = d[1],
      f = d[2],
      g = d[3],
      h = d[4],
      k = d[5],
      l = d[6],
      m = d[7],
      n = d[8],
      p = d[9],
      t = d[10],
      q = d[11],
      v = d[12],
      u = d[13],
      A = d[14];
    d = d[15];
    b[0].setComponents(g - a, m - h, q - n, d - v).normalize();
    b[1].setComponents(g + a, m + h, q + n, d + v).normalize();
    b[2].setComponents(g + e, m + k, q + p, d + u).normalize();
    b[3].setComponents(g - e, m - k, q - p, d - u).normalize();
    b[4].setComponents(g - f, m - l, q - t, d - A).normalize();
    b[5].setComponents(g + f, m + l, q + t, d + A).normalize();
    return this;
  };
  xb.prototype.intersectsObject = function (a) {
    var b = a.geometry;
    null === b.boundingSphere && b.computeBoundingSphere();
    xe.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);
    return this.intersectsSphere(xe);
  };
  xb.prototype.intersectsSprite = function (a) {
    xe.center.set(0, 0, 0);
    xe.radius = 0.7071067811865476;
    xe.applyMatrix4(a.matrixWorld);
    return this.intersectsSphere(xe);
  };
  xb.prototype.intersectsSphere = function (a) {
    var b = this.planes,
      d = a.center;
    a = -a.radius;
    for (var e = 0; 6 > e; e++) if (b[e].distanceToPoint(d) < a) return !1;
    return !0;
  };
  xb.prototype.intersectsBox = function (a) {
    for (var b = this.planes, d = 0; 6 > d; d++) {
      var e = b[d];
      Lg.x = 0 < e.normal.x ? a.max.x : a.min.x;
      Lg.y = 0 < e.normal.y ? a.max.y : a.min.y;
      Lg.z = 0 < e.normal.z ? a.max.z : a.min.z;
      if (0 > e.distanceToPoint(Lg)) return !1;
    }
    return !0;
  };
  xb.prototype.containsPoint = function (a) {
    for (var b = this.planes, d = 0; 6 > d; d++)
      if (0 > b[d].distanceToPoint(a)) return !1;
    return !0;
  };
  Je.prototype = Object.create(sa.prototype);
  Je.prototype.constructor = Je;
  cd.prototype = Object.create(ka.prototype);
  cd.prototype.constructor = cd;
  var Ba = {
      alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
      alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      alphatest_fragment:
        "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
      aomap_fragment:
        "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
      aomap_pars_fragment:
        "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
      begin_vertex: "vec3 transformed = vec3( position );",
      beginnormal_vertex:
        "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
      bsdfs:
        "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
      bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
      clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
      clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
      clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
      clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
      color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
      color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
      color_pars_vertex:
        "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
      color_vertex:
        "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
      common:
        "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
      cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
      defaultnormal_vertex:
        "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
      displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
      displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
      emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
      emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
      encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
      encodings_pars_fragment:
        "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
      envmap_fragment:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
      envmap_common_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
      envmap_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
      envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
      envmap_physical_pars_fragment:
        "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
      envmap_vertex:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
      fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
      fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
      fog_fragment:
        "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
      fog_pars_fragment:
        "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
      gradientmap_pars_fragment:
        "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
      lightmap_fragment:
        "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
      lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
      lights_lambert_vertex:
        "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
      lights_pars_begin:
        "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
      lights_toon_fragment:
        "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
      lights_toon_pars_fragment:
        "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
      lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
      lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
      lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
      lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
      lights_fragment_begin:
        "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
      lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
      lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
      logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
      logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
      logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
      logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
      map_fragment:
        "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
      map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
      map_particle_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
      map_particle_pars_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
      metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
      metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
      morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
      morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
      morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
      normal_fragment_begin:
        "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
      normal_fragment_maps:
        "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
      normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
      clearcoat_normal_fragment_begin:
        "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
      clearcoat_normal_fragment_maps:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
      clearcoat_pars_fragment:
        "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
      packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
      premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
      project_vertex:
        "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
      dithering_fragment:
        "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
      dithering_pars_fragment:
        "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
      roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
      roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
      shadowmap_pars_fragment:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
      shadowmap_pars_vertex:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
      shadowmap_vertex:
        "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
      shadowmask_pars_fragment:
        "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
      skinbase_vertex:
        "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
      skinning_pars_vertex:
        "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
      skinning_vertex:
        "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
      skinnormal_vertex:
        "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
      specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
      specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
      tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
      tonemapping_pars_fragment:
        "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
      transmissionmap_fragment:
        "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
      transmissionmap_pars_fragment:
        "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
      uv_pars_fragment:
        "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
      uv_pars_vertex:
        "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
      uv_vertex:
        "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
      uv2_pars_fragment:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
      uv2_pars_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
      uv2_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
      worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
      background_frag:
        "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
      cube_frag:
        "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
      depth_frag:
        "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
      depth_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
      distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
      distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
      equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
      equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
      linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
      meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshbasic_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
      meshlambert_frag:
        "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
      meshtoon_frag:
        "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshtoon_vert:
        "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      meshphysical_frag:
        "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
      meshphysical_vert:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      normal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
      normal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
      points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
      points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
      shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      shadow_vert:
        "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
      sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
      sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    },
    fa = {
      common: {
        diffuse: { value: new S(15658734) },
        opacity: { value: 1 },
        map: { value: null },
        uvTransform: { value: new Da() },
        uv2Transform: { value: new Da() },
        alphaMap: { value: null },
      },
      specularmap: { specularMap: { value: null } },
      envmap: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        reflectivity: { value: 1 },
        refractionRatio: { value: 0.98 },
        maxMipLevel: { value: 0 },
      },
      aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
      lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
      emissivemap: { emissiveMap: { value: null } },
      bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
      normalmap: {
        normalMap: { value: null },
        normalScale: { value: new L(1, 1) },
      },
      displacementmap: {
        displacementMap: { value: null },
        displacementScale: { value: 1 },
        displacementBias: { value: 0 },
      },
      roughnessmap: { roughnessMap: { value: null } },
      metalnessmap: { metalnessMap: { value: null } },
      gradientmap: { gradientMap: { value: null } },
      fog: {
        fogDensity: { value: 2.5e-4 },
        fogNear: { value: 1 },
        fogFar: { value: 2e3 },
        fogColor: { value: new S(16777215) },
      },
      lights: {
        ambientLightColor: { value: [] },
        lightProbe: { value: [] },
        directionalLights: {
          value: [],
          properties: { direction: {}, color: {} },
        },
        directionalLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        directionalShadowMap: { value: [] },
        directionalShadowMatrix: { value: [] },
        spotLights: {
          value: [],
          properties: {
            color: {},
            position: {},
            direction: {},
            distance: {},
            coneCos: {},
            penumbraCos: {},
            decay: {},
          },
        },
        spotLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
          },
        },
        spotShadowMap: { value: [] },
        spotShadowMatrix: { value: [] },
        pointLights: {
          value: [],
          properties: { color: {}, position: {}, decay: {}, distance: {} },
        },
        pointLightShadows: {
          value: [],
          properties: {
            shadowBias: {},
            shadowNormalBias: {},
            shadowRadius: {},
            shadowMapSize: {},
            shadowCameraNear: {},
            shadowCameraFar: {},
          },
        },
        pointShadowMap: { value: [] },
        pointShadowMatrix: { value: [] },
        hemisphereLights: {
          value: [],
          properties: { direction: {}, skyColor: {}, groundColor: {} },
        },
        rectAreaLights: {
          value: [],
          properties: { color: {}, position: {}, width: {}, height: {} },
        },
        ltc_1: { value: null },
        ltc_2: { value: null },
      },
      points: {
        diffuse: { value: new S(15658734) },
        opacity: { value: 1 },
        size: { value: 1 },
        scale: { value: 1 },
        map: { value: null },
        alphaMap: { value: null },
        uvTransform: { value: new Da() },
      },
      sprite: {
        diffuse: { value: new S(15658734) },
        opacity: { value: 1 },
        center: { value: new L(0.5, 0.5) },
        rotation: { value: 0 },
        map: { value: null },
        alphaMap: { value: null },
        uvTransform: { value: new Da() },
      },
    },
    Pb = {
      basic: {
        uniforms: nb([
          fa.common,
          fa.specularmap,
          fa.envmap,
          fa.aomap,
          fa.lightmap,
          fa.fog,
        ]),
        vertexShader: Ba.meshbasic_vert,
        fragmentShader: Ba.meshbasic_frag,
      },
      lambert: {
        uniforms: nb([
          fa.common,
          fa.specularmap,
          fa.envmap,
          fa.aomap,
          fa.lightmap,
          fa.emissivemap,
          fa.fog,
          fa.lights,
          { emissive: { value: new S(0) } },
        ]),
        vertexShader: Ba.meshlambert_vert,
        fragmentShader: Ba.meshlambert_frag,
      },
      phong: {
        uniforms: nb([
          fa.common,
          fa.specularmap,
          fa.envmap,
          fa.aomap,
          fa.lightmap,
          fa.emissivemap,
          fa.bumpmap,
          fa.normalmap,
          fa.displacementmap,
          fa.fog,
          fa.lights,
          {
            emissive: { value: new S(0) },
            specular: { value: new S(1118481) },
            shininess: { value: 30 },
          },
        ]),
        vertexShader: Ba.meshphong_vert,
        fragmentShader: Ba.meshphong_frag,
      },
      standard: {
        uniforms: nb([
          fa.common,
          fa.envmap,
          fa.aomap,
          fa.lightmap,
          fa.emissivemap,
          fa.bumpmap,
          fa.normalmap,
          fa.displacementmap,
          fa.roughnessmap,
          fa.metalnessmap,
          fa.fog,
          fa.lights,
          {
            emissive: { value: new S(0) },
            roughness: { value: 1 },
            metalness: { value: 0 },
            envMapIntensity: { value: 1 },
          },
        ]),
        vertexShader: Ba.meshphysical_vert,
        fragmentShader: Ba.meshphysical_frag,
      },
      toon: {
        uniforms: nb([
          fa.common,
          fa.aomap,
          fa.lightmap,
          fa.emissivemap,
          fa.bumpmap,
          fa.normalmap,
          fa.displacementmap,
          fa.gradientmap,
          fa.fog,
          fa.lights,
          { emissive: { value: new S(0) } },
        ]),
        vertexShader: Ba.meshtoon_vert,
        fragmentShader: Ba.meshtoon_frag,
      },
      matcap: {
        uniforms: nb([
          fa.common,
          fa.bumpmap,
          fa.normalmap,
          fa.displacementmap,
          fa.fog,
          { matcap: { value: null } },
        ]),
        vertexShader: Ba.meshmatcap_vert,
        fragmentShader: Ba.meshmatcap_frag,
      },
      points: {
        uniforms: nb([fa.points, fa.fog]),
        vertexShader: Ba.points_vert,
        fragmentShader: Ba.points_frag,
      },
      dashed: {
        uniforms: nb([
          fa.common,
          fa.fog,
          {
            scale: { value: 1 },
            dashSize: { value: 1 },
            totalSize: { value: 2 },
          },
        ]),
        vertexShader: Ba.linedashed_vert,
        fragmentShader: Ba.linedashed_frag,
      },
      depth: {
        uniforms: nb([fa.common, fa.displacementmap]),
        vertexShader: Ba.depth_vert,
        fragmentShader: Ba.depth_frag,
      },
      normal: {
        uniforms: nb([
          fa.common,
          fa.bumpmap,
          fa.normalmap,
          fa.displacementmap,
          { opacity: { value: 1 } },
        ]),
        vertexShader: Ba.normal_vert,
        fragmentShader: Ba.normal_frag,
      },
      sprite: {
        uniforms: nb([fa.sprite, fa.fog]),
        vertexShader: Ba.sprite_vert,
        fragmentShader: Ba.sprite_frag,
      },
      background: {
        uniforms: { uvTransform: { value: new Da() }, t2D: { value: null } },
        vertexShader: Ba.background_vert,
        fragmentShader: Ba.background_frag,
      },
      cube: {
        uniforms: nb([fa.envmap, { opacity: { value: 1 } }]),
        vertexShader: Ba.cube_vert,
        fragmentShader: Ba.cube_frag,
      },
      equirect: {
        uniforms: { tEquirect: { value: null } },
        vertexShader: Ba.equirect_vert,
        fragmentShader: Ba.equirect_frag,
      },
      distanceRGBA: {
        uniforms: nb([
          fa.common,
          fa.displacementmap,
          {
            referencePosition: { value: new w() },
            nearDistance: { value: 1 },
            farDistance: { value: 1e3 },
          },
        ]),
        vertexShader: Ba.distanceRGBA_vert,
        fragmentShader: Ba.distanceRGBA_frag,
      },
      shadow: {
        uniforms: nb([
          fa.lights,
          fa.fog,
          { color: { value: new S(0) }, opacity: { value: 1 } },
        ]),
        vertexShader: Ba.shadow_vert,
        fragmentShader: Ba.shadow_frag,
      },
    };
  Pb.physical = {
    uniforms: nb([
      Pb.standard.uniforms,
      {
        clearcoat: { value: 0 },
        clearcoatMap: { value: null },
        clearcoatRoughness: { value: 0 },
        clearcoatRoughnessMap: { value: null },
        clearcoatNormalScale: { value: new L(1, 1) },
        clearcoatNormalMap: { value: null },
        sheen: { value: new S(0) },
        transmission: { value: 0 },
        transmissionMap: { value: null },
      },
    ]),
    vertexShader: Ba.meshphysical_vert,
    fragmentShader: Ba.meshphysical_frag,
  };
  kc.prototype = Object.create(Oa.prototype);
  kc.prototype.constructor = kc;
  kc.prototype.isCubeTexture = !0;
  Object.defineProperty(kc.prototype, "images", {
    get: function () {
      return this.image;
    },
    set: function (a) {
      this.image = a;
    },
  });
  Id.prototype = Object.create(Oa.prototype);
  Id.prototype.constructor = Id;
  Id.prototype.isDataTexture2DArray = !0;
  Jd.prototype = Object.create(Oa.prototype);
  Jd.prototype.constructor = Jd;
  Jd.prototype.isDataTexture3D = !0;
  var Ei = new Oa(),
    Kk = new Id(),
    Mk = new Jd(),
    Fi = new kc(),
    yi = [],
    Ai = [],
    Di = new Float32Array(16),
    Ci = new Float32Array(9),
    Bi = new Float32Array(4);
  Gi.prototype.updateCache = function (a) {
    var b = this.cache;
    a instanceof Float32Array &&
      b.length !== a.length &&
      (this.cache = new Float32Array(a.length));
    Eb(b, a);
  };
  Hi.prototype.setValue = function (a, b, d) {
    for (var e = this.seq, f = 0, g = e.length; f !== g; ++f) {
      var h = e[f];
      h.setValue(a, b[h.id], d);
    }
  };
  var lh = /([\w\d_]+)(\])?(\[|\.)?/g;
  Dc.prototype.setValue = function (a, b, d, e) {
    b = this.map[b];
    void 0 !== b && b.setValue(a, d, e);
  };
  Dc.prototype.setOptional = function (a, b, d) {
    b = b[d];
    void 0 !== b && this.setValue(a, d, b);
  };
  Dc.upload = function (a, b, d, e) {
    for (var f = 0, g = b.length; f !== g; ++f) {
      var h = b[f],
        k = d[h.id];
      !1 !== k.needsUpdate && h.setValue(a, k.value, e);
    }
  };
  Dc.seqWithValue = function (a, b) {
    for (var d = [], e = 0, f = a.length; e !== f; ++e) {
      var g = a[e];
      g.id in b && d.push(g);
    }
    return d;
  };
  var ql = 0,
    nh = /^[ \t]*#include +<([\w\d./]+)>/gm,
    Qi = /#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
    Pi = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,
    Al = 0;
  Ec.prototype = Object.create(ra.prototype);
  Ec.prototype.constructor = Ec;
  Ec.prototype.isMeshDepthMaterial = !0;
  Ec.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.depthPacking = a.depthPacking;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    return this;
  };
  Fc.prototype = Object.create(ra.prototype);
  Fc.prototype.constructor = Fc;
  Fc.prototype.isMeshDistanceMaterial = !0;
  Fc.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.referencePosition.copy(a.referencePosition);
    this.nearDistance = a.nearDistance;
    this.farDistance = a.farDistance;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    return this;
  };
  Tf.prototype = Object.assign(Object.create(eb.prototype), {
    constructor: Tf,
    isArrayCamera: !0,
  });
  Gc.prototype = Object.assign(Object.create(ha.prototype), {
    constructor: Gc,
    isGroup: !0,
  });
  Object.assign(Me.prototype, {
    constructor: Me,
    getHandSpace: function () {
      if (
        null === this._hand &&
        ((this._hand = new Gc()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = []),
        (this._hand.inputState = { pinching: !1 }),
        window.XRHand)
      )
        for (var a = 0; a <= window.XRHand.LITTLE_PHALANX_TIP; a++) {
          var b = new Gc();
          b.matrixAutoUpdate = !1;
          b.visible = !1;
          this._hand.joints.push(b);
          this._hand.add(b);
        }
      return this._hand;
    },
    getTargetRaySpace: function () {
      null === this._targetRay &&
        ((this._targetRay = new Gc()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1));
      return this._targetRay;
    },
    getGripSpace: function () {
      null === this._grip &&
        ((this._grip = new Gc()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1));
      return this._grip;
    },
    dispatchEvent: function (a) {
      null !== this._targetRay && this._targetRay.dispatchEvent(a);
      null !== this._grip && this._grip.dispatchEvent(a);
      null !== this._hand && this._hand.dispatchEvent(a);
      return this;
    },
    disconnect: function (a) {
      this.dispatchEvent({ type: "disconnected", data: a });
      null !== this._targetRay && (this._targetRay.visible = !1);
      null !== this._grip && (this._grip.visible = !1);
      null !== this._hand && (this._hand.visible = !1);
      return this;
    },
    update: function (a, b, d) {
      var e = null,
        f = null,
        g = null,
        h = this._targetRay,
        k = this._grip,
        l = this._hand;
      if (a)
        if (l && a.hand) {
          g = !0;
          for (var m = 0; m <= window.XRHand.LITTLE_PHALANX_TIP; m++)
            if (a.hand[m]) {
              var n = b.getJointPose(a.hand[m], d),
                p = l.joints[m];
              null !== n &&
                (p.matrix.fromArray(n.transform.matrix),
                p.matrix.decompose(p.position, p.rotation, p.scale),
                (p.jointRadius = n.radius));
              p.visible = null !== n;
              n = l.joints[window.XRHand.INDEX_PHALANX_TIP].position.distanceTo(
                l.joints[window.XRHand.THUMB_PHALANX_TIP].position
              );
              l.inputState.pinching && 0.025 < n
                ? ((l.inputState.pinching = !1),
                  this.dispatchEvent({
                    type: "pinchend",
                    handedness: a.handedness,
                    target: this,
                  }))
                : !l.inputState.pinching &&
                  0.015 >= n &&
                  ((l.inputState.pinching = !0),
                  this.dispatchEvent({
                    type: "pinchstart",
                    handedness: a.handedness,
                    target: this,
                  }));
            }
        } else
          null !== h &&
            ((e = b.getPose(a.targetRaySpace, d)),
            null !== e &&
              (h.matrix.fromArray(e.transform.matrix),
              h.matrix.decompose(h.position, h.rotation, h.scale))),
            null !== k &&
              a.gripSpace &&
              ((f = b.getPose(a.gripSpace, d)),
              null !== f &&
                (k.matrix.fromArray(f.transform.matrix),
                k.matrix.decompose(k.position, k.rotation, k.scale)));
      null !== h && (h.visible = null !== e);
      null !== k && (k.visible = null !== f);
      null !== l && (l.visible = null !== g);
      return this;
    },
  });
  Object.assign(Wi.prototype, wb.prototype);
  th.prototype = Object.assign(Object.create(Ne.prototype), {
    constructor: th,
    isWebGL1Renderer: !0,
  });
  var Gf = function (a, b) {
    Object.defineProperty(this, "isFogExp2", { value: !0 });
    this.name = "";
    this.color = new S(a);
    this.density = void 0 !== b ? b : 2.5e-4;
  };
  Gf.prototype.clone = function () {
    return new Gf(this.color, this.density);
  };
  Gf.prototype.toJSON = function () {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density,
    };
  };
  var Hf = function (a, b, d) {
    Object.defineProperty(this, "isFog", { value: !0 });
    this.name = "";
    this.color = new S(a);
    this.near = void 0 !== b ? b : 1;
    this.far = void 0 !== d ? d : 1e3;
  };
  Hf.prototype.clone = function () {
    return new Hf(this.color, this.near, this.far);
  };
  Hf.prototype.toJSON = function () {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  };
  Jc.prototype = Object.create(ha.prototype);
  Jc.prototype.constructor = Jc;
  Jc.prototype.copy = function (a, b) {
    ha.prototype.copy.call(this, a, b);
    null !== a.background && (this.background = a.background.clone());
    null !== a.environment && (this.environment = a.environment.clone());
    null !== a.fog && (this.fog = a.fog.clone());
    null !== a.overrideMaterial &&
      (this.overrideMaterial = a.overrideMaterial.clone());
    this.autoUpdate = a.autoUpdate;
    this.matrixAutoUpdate = a.matrixAutoUpdate;
    return this;
  };
  Jc.prototype.toJSON = function (a) {
    var b = ha.prototype.toJSON.call(this, a);
    null !== this.background &&
      (b.object.background = this.background.toJSON(a));
    null !== this.environment &&
      (b.object.environment = this.environment.toJSON(a));
    null !== this.fog && (b.object.fog = this.fog.toJSON());
    return b;
  };
  Object.defineProperty(Gb.prototype, "needsUpdate", {
    set: function (a) {
      !0 === a && this.version++;
    },
  });
  Object.assign(Gb.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback: function () {},
    setUsage: function (a) {
      this.usage = a;
      return this;
    },
    copy: function (a) {
      this.array = new a.array.constructor(a.array);
      this.count = a.count;
      this.stride = a.stride;
      this.usage = a.usage;
      return this;
    },
    copyAt: function (a, b, d) {
      a *= this.stride;
      d *= b.stride;
      for (var e = 0, f = this.stride; e < f; e++)
        this.array[a + e] = b.array[d + e];
      return this;
    },
    set: function (a, b) {
      void 0 === b && (b = 0);
      this.array.set(a, b);
      return this;
    },
    clone: function (a) {
      void 0 === a.arrayBuffers && (a.arrayBuffers = {});
      void 0 === this.array.buffer._uuid &&
        (this.array.buffer._uuid = xa.generateUUID());
      void 0 === a.arrayBuffers[this.array.buffer._uuid] &&
        (a.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
      a = new this.array.constructor(a.arrayBuffers[this.array.buffer._uuid]);
      a = new Gb(a, this.stride);
      a.setUsage(this.usage);
      return a;
    },
    onUpload: function (a) {
      this.onUploadCallback = a;
      return this;
    },
    toJSON: function (a) {
      void 0 === a.arrayBuffers && (a.arrayBuffers = {});
      void 0 === this.array.buffer._uuid &&
        (this.array.buffer._uuid = xa.generateUUID());
      void 0 === a.arrayBuffers[this.array.buffer._uuid] &&
        (a.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(
          new Uint32Array(this.array.buffer)
        ));
      return {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      };
    },
  });
  var ud = new w();
  Object.defineProperties(Kc.prototype, {
    count: {
      get: function () {
        return this.data.count;
      },
    },
    array: {
      get: function () {
        return this.data.array;
      },
    },
    needsUpdate: {
      set: function (a) {
        this.data.needsUpdate = a;
      },
    },
  });
  Object.assign(Kc.prototype, {
    isInterleavedBufferAttribute: !0,
    applyMatrix4: function (a) {
      for (var b = 0, d = this.data.count; b < d; b++)
        (ud.x = this.getX(b)),
          (ud.y = this.getY(b)),
          (ud.z = this.getZ(b)),
          ud.applyMatrix4(a),
          this.setXYZ(b, ud.x, ud.y, ud.z);
      return this;
    },
    setX: function (a, b) {
      this.data.array[a * this.data.stride + this.offset] = b;
      return this;
    },
    setY: function (a, b) {
      this.data.array[a * this.data.stride + this.offset + 1] = b;
      return this;
    },
    setZ: function (a, b) {
      this.data.array[a * this.data.stride + this.offset + 2] = b;
      return this;
    },
    setW: function (a, b) {
      this.data.array[a * this.data.stride + this.offset + 3] = b;
      return this;
    },
    getX: function (a) {
      return this.data.array[a * this.data.stride + this.offset];
    },
    getY: function (a) {
      return this.data.array[a * this.data.stride + this.offset + 1];
    },
    getZ: function (a) {
      return this.data.array[a * this.data.stride + this.offset + 2];
    },
    getW: function (a) {
      return this.data.array[a * this.data.stride + this.offset + 3];
    },
    setXY: function (a, b, d) {
      a = a * this.data.stride + this.offset;
      this.data.array[a + 0] = b;
      this.data.array[a + 1] = d;
      return this;
    },
    setXYZ: function (a, b, d, e) {
      a = a * this.data.stride + this.offset;
      this.data.array[a + 0] = b;
      this.data.array[a + 1] = d;
      this.data.array[a + 2] = e;
      return this;
    },
    setXYZW: function (a, b, d, e, f) {
      a = a * this.data.stride + this.offset;
      this.data.array[a + 0] = b;
      this.data.array[a + 1] = d;
      this.data.array[a + 2] = e;
      this.data.array[a + 3] = f;
      return this;
    },
    clone: function (a) {
      if (void 0 === a) {
        console.log(
          "THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data."
        );
        a = [];
        for (var b = 0; b < this.count; b++)
          for (
            var d = b * this.data.stride + this.offset, e = 0;
            e < this.itemSize;
            e++
          )
            a.push(this.data.array[d + e]);
        return new pa(
          new this.array.constructor(a),
          this.itemSize,
          this.normalized
        );
      }
      void 0 === a.interleavedBuffers && (a.interleavedBuffers = {});
      void 0 === a.interleavedBuffers[this.data.uuid] &&
        (a.interleavedBuffers[this.data.uuid] = this.data.clone(a));
      return new Kc(
        a.interleavedBuffers[this.data.uuid],
        this.itemSize,
        this.offset,
        this.normalized
      );
    },
    toJSON: function (a) {
      if (void 0 === a) {
        console.log(
          "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data."
        );
        a = [];
        for (var b = 0; b < this.count; b++)
          for (
            var d = b * this.data.stride + this.offset, e = 0;
            e < this.itemSize;
            e++
          )
            a.push(this.data.array[d + e]);
        return {
          itemSize: this.itemSize,
          type: this.array.constructor.name,
          array: a,
          normalized: this.normalized,
        };
      }
      void 0 === a.interleavedBuffers && (a.interleavedBuffers = {});
      void 0 === a.interleavedBuffers[this.data.uuid] &&
        (a.interleavedBuffers[this.data.uuid] = this.data.toJSON(a));
      return {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized,
      };
    },
  });
  Lc.prototype = Object.create(ra.prototype);
  Lc.prototype.constructor = Lc;
  Lc.prototype.isSpriteMaterial = !0;
  Lc.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.rotation = a.rotation;
    this.sizeAttenuation = a.sizeAttenuation;
    return this;
  };
  var Nd,
    If = new w(),
    ye = new w(),
    ze = new w(),
    Od = new L(),
    Re = new L(),
    aj = new da(),
    Mg = new w(),
    Jf = new w(),
    Ng = new w(),
    Fj = new L(),
    li = new L(),
    Gj = new L();
  Qe.prototype = Object.assign(Object.create(ha.prototype), {
    constructor: Qe,
    isSprite: !0,
    raycast: function (a, b) {
      null === a.camera &&
        console.error(
          'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
        );
      ye.setFromMatrixScale(this.matrixWorld);
      aj.copy(a.camera.matrixWorld);
      this.modelViewMatrix.multiplyMatrices(
        a.camera.matrixWorldInverse,
        this.matrixWorld
      );
      ze.setFromMatrixPosition(this.modelViewMatrix);
      a.camera.isPerspectiveCamera &&
        !1 === this.material.sizeAttenuation &&
        ye.multiplyScalar(-ze.z);
      var d = this.material.rotation;
      if (0 !== d) {
        var e = Math.cos(d);
        var f = Math.sin(d);
      }
      d = this.center;
      Wf(Mg.set(-0.5, -0.5, 0), ze, d, ye, f, e);
      Wf(Jf.set(0.5, -0.5, 0), ze, d, ye, f, e);
      Wf(Ng.set(0.5, 0.5, 0), ze, d, ye, f, e);
      Fj.set(0, 0);
      li.set(1, 0);
      Gj.set(1, 1);
      var g = a.ray.intersectTriangle(Mg, Jf, Ng, !1, If);
      if (
        null === g &&
        (Wf(Jf.set(-0.5, 0.5, 0), ze, d, ye, f, e),
        li.set(0, 1),
        (g = a.ray.intersectTriangle(Mg, Ng, Jf, !1, If)),
        null === g)
      )
        return;
      f = a.ray.origin.distanceTo(If);
      f < a.near ||
        f > a.far ||
        b.push({
          distance: f,
          point: If.clone(),
          uv: Ga.getUV(If, Mg, Jf, Ng, Fj, li, Gj, new L()),
          face: null,
          object: this,
        });
    },
    copy: function (a) {
      ha.prototype.copy.call(this, a);
      void 0 !== a.center && this.center.copy(a.center);
      this.material = a.material;
      return this;
    },
  });
  var Og = new w(),
    Hj = new w();
  Se.prototype = Object.assign(Object.create(ha.prototype), {
    constructor: Se,
    isLOD: !0,
    copy: function (a) {
      ha.prototype.copy.call(this, a, !1);
      for (var b = a.levels, d = 0, e = b.length; d < e; d++) {
        var f = b[d];
        this.addLevel(f.object.clone(), f.distance);
      }
      this.autoUpdate = a.autoUpdate;
      return this;
    },
    addLevel: function (a, b) {
      void 0 === b && (b = 0);
      b = Math.abs(b);
      var d = this.levels,
        e;
      for (e = 0; e < d.length && !(b < d[e].distance); e++);
      d.splice(e, 0, { distance: b, object: a });
      this.add(a);
      return this;
    },
    getCurrentLevel: function () {
      return this._currentLevel;
    },
    getObjectForDistance: function (a) {
      var b = this.levels;
      if (0 < b.length) {
        var d;
        var e = 1;
        for (d = b.length; e < d && !(a < b[e].distance); e++);
        return b[e - 1].object;
      }
      return null;
    },
    raycast: function (a, b) {
      if (0 < this.levels.length) {
        Og.setFromMatrixPosition(this.matrixWorld);
        var d = a.ray.origin.distanceTo(Og);
        this.getObjectForDistance(d).raycast(a, b);
      }
    },
    update: function (a) {
      var b = this.levels;
      if (1 < b.length) {
        Og.setFromMatrixPosition(a.matrixWorld);
        Hj.setFromMatrixPosition(this.matrixWorld);
        a = Og.distanceTo(Hj) / a.zoom;
        b[0].object.visible = !0;
        var d;
        var e = 1;
        for (d = b.length; e < d; e++)
          if (a >= b[e].distance)
            (b[e - 1].object.visible = !1), (b[e].object.visible = !0);
          else break;
        for (this._currentLevel = e - 1; e < d; e++) b[e].object.visible = !1;
      }
    },
    toJSON: function (a) {
      a = ha.prototype.toJSON.call(this, a);
      !1 === this.autoUpdate && (a.object.autoUpdate = !1);
      a.object.levels = [];
      for (var b = this.levels, d = 0, e = b.length; d < e; d++) {
        var f = b[d];
        a.object.levels.push({ object: f.object.uuid, distance: f.distance });
      }
      return a;
    },
  });
  Xf.prototype = Object.assign(Object.create(Qa.prototype), {
    constructor: Xf,
    isSkinnedMesh: !0,
    copy: function (a) {
      Qa.prototype.copy.call(this, a);
      this.bindMode = a.bindMode;
      this.bindMatrix.copy(a.bindMatrix);
      this.bindMatrixInverse.copy(a.bindMatrixInverse);
      this.skeleton = a.skeleton;
      return this;
    },
    bind: function (a, b) {
      this.skeleton = a;
      void 0 === b &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (b = this.matrixWorld));
      this.bindMatrix.copy(b);
      this.bindMatrixInverse.getInverse(b);
    },
    pose: function () {
      this.skeleton.pose();
    },
    normalizeSkinWeights: function () {
      for (
        var a = new ca(),
          b = this.geometry.attributes.skinWeight,
          d = 0,
          e = b.count;
        d < e;
        d++
      ) {
        a.x = b.getX(d);
        a.y = b.getY(d);
        a.z = b.getZ(d);
        a.w = b.getW(d);
        var f = 1 / a.manhattanLength();
        Infinity !== f ? a.multiplyScalar(f) : a.set(1, 0, 0, 0);
        b.setXYZW(d, a.x, a.y, a.z, a.w);
      }
    },
    updateMatrixWorld: function (a) {
      Qa.prototype.updateMatrixWorld.call(this, a);
      "attached" === this.bindMode
        ? this.bindMatrixInverse.getInverse(this.matrixWorld)
        : "detached" === this.bindMode
        ? this.bindMatrixInverse.getInverse(this.bindMatrix)
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
    },
    boneTransform: (function () {
      var a = new w(),
        b = new ca(),
        d = new ca(),
        e = new w(),
        f = new da();
      return function (g, h) {
        var k = this.skeleton,
          l = this.geometry;
        b.fromBufferAttribute(l.attributes.skinIndex, g);
        d.fromBufferAttribute(l.attributes.skinWeight, g);
        a.fromBufferAttribute(l.attributes.position, g).applyMatrix4(
          this.bindMatrix
        );
        h.set(0, 0, 0);
        for (g = 0; 4 > g; g++)
          if (((l = d.getComponent(g)), 0 !== l)) {
            var m = b.getComponent(g);
            f.multiplyMatrices(k.bones[m].matrixWorld, k.boneInverses[m]);
            h.addScaledVector(e.copy(a).applyMatrix4(f), l);
          }
        return h.applyMatrix4(this.bindMatrixInverse);
      };
    })(),
  });
  var Ij = new da(),
    Vl = new da();
  Object.assign(Yf.prototype, {
    calculateInverses: function () {
      this.boneInverses = [];
      for (var a = 0, b = this.bones.length; a < b; a++) {
        var d = new da();
        this.bones[a] && d.getInverse(this.bones[a].matrixWorld);
        this.boneInverses.push(d);
      }
    },
    pose: function () {
      for (var a = 0, b = this.bones.length; a < b; a++) {
        var d = this.bones[a];
        d && d.matrixWorld.getInverse(this.boneInverses[a]);
      }
      a = 0;
      for (b = this.bones.length; a < b; a++)
        if ((d = this.bones[a]))
          d.parent && d.parent.isBone
            ? (d.matrix.getInverse(d.parent.matrixWorld),
              d.matrix.multiply(d.matrixWorld))
            : d.matrix.copy(d.matrixWorld),
            d.matrix.decompose(d.position, d.quaternion, d.scale);
    },
    update: function () {
      for (
        var a = this.bones,
          b = this.boneInverses,
          d = this.boneMatrices,
          e = this.boneTexture,
          f = 0,
          g = a.length;
        f < g;
        f++
      )
        Ij.multiplyMatrices(a[f] ? a[f].matrixWorld : Vl, b[f]),
          Ij.toArray(d, 16 * f);
      void 0 !== e && (e.needsUpdate = !0);
    },
    clone: function () {
      return new Yf(this.bones, this.boneInverses);
    },
    getBoneByName: function (a) {
      for (var b = 0, d = this.bones.length; b < d; b++) {
        var e = this.bones[b];
        if (e.name === a) return e;
      }
    },
    dispose: function () {
      this.boneTexture &&
        (this.boneTexture.dispose(), (this.boneTexture = void 0));
    },
  });
  uh.prototype = Object.assign(Object.create(ha.prototype), {
    constructor: uh,
    isBone: !0,
  });
  var Jj = new da(),
    Kj = new da(),
    Pg = [],
    Kf = new Qa();
  Zf.prototype = Object.assign(Object.create(Qa.prototype), {
    constructor: Zf,
    isInstancedMesh: !0,
    copy: function (a) {
      Qa.prototype.copy.call(this, a);
      this.instanceMatrix.copy(a.instanceMatrix);
      this.count = a.count;
      return this;
    },
    setColorAt: function (a, b) {
      null === this.instanceColor &&
        (this.instanceColor = new pa(new Float32Array(3 * this.count), 3));
      b.toArray(this.instanceColor.array, 3 * a);
    },
    getMatrixAt: function (a, b) {
      b.fromArray(this.instanceMatrix.array, 16 * a);
    },
    raycast: function (a, b) {
      var d = this.matrixWorld,
        e = this.count;
      Kf.geometry = this.geometry;
      Kf.material = this.material;
      if (void 0 !== Kf.material)
        for (var f = 0; f < e; f++) {
          this.getMatrixAt(f, Jj);
          Kj.multiplyMatrices(d, Jj);
          Kf.matrixWorld = Kj;
          Kf.raycast(a, Pg);
          for (var g = 0, h = Pg.length; g < h; g++) {
            var k = Pg[g];
            k.instanceId = f;
            k.object = this;
            b.push(k);
          }
          Pg.length = 0;
        }
    },
    setMatrixAt: function (a, b) {
      b.toArray(this.instanceMatrix.array, 16 * a);
    },
    updateMorphTargets: function () {},
  });
  Ya.prototype = Object.create(ra.prototype);
  Ya.prototype.constructor = Ya;
  Ya.prototype.isLineBasicMaterial = !0;
  Ya.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.linewidth = a.linewidth;
    this.linecap = a.linecap;
    this.linejoin = a.linejoin;
    this.morphTargets = a.morphTargets;
    return this;
  };
  var Lj = new w(),
    Mj = new w(),
    Nj = new da(),
    Qg = new Ta(),
    Lf = new Wa();
  yb.prototype = Object.assign(Object.create(ha.prototype), {
    constructor: yb,
    isLine: !0,
    copy: function (a) {
      ha.prototype.copy.call(this, a);
      this.material = a.material;
      this.geometry = a.geometry;
      return this;
    },
    computeLineDistances: function () {
      var a = this.geometry;
      if (a.isBufferGeometry)
        if (null === a.index) {
          for (
            var b = a.attributes.position, d = [0], e = 1, f = b.count;
            e < f;
            e++
          )
            Lj.fromBufferAttribute(b, e - 1),
              Mj.fromBufferAttribute(b, e),
              (d[e] = d[e - 1]),
              (d[e] += Lj.distanceTo(Mj));
          a.setAttribute("lineDistance", new ea(d, 1));
        } else
          console.warn(
            "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
          );
      else if (a.isGeometry)
        for (
          b = a.vertices, a = a.lineDistances, a[0] = 0, d = 1, e = b.length;
          d < e;
          d++
        )
          (a[d] = a[d - 1]), (a[d] += b[d - 1].distanceTo(b[d]));
      return this;
    },
    raycast: function (a, b) {
      var d = this.geometry,
        e = this.matrixWorld,
        f = a.params.Line.threshold;
      null === d.boundingSphere && d.computeBoundingSphere();
      Lf.copy(d.boundingSphere);
      Lf.applyMatrix4(e);
      Lf.radius += f;
      if (!1 !== a.ray.intersectsSphere(Lf)) {
        Nj.getInverse(e);
        Qg.copy(a.ray).applyMatrix4(Nj);
        e = f / ((this.scale.x + this.scale.y + this.scale.z) / 3);
        e *= e;
        var g = new w(),
          h = new w();
        f = new w();
        var k = new w(),
          l = this && this.isLineSegments ? 2 : 1;
        if (d.isBufferGeometry) {
          var m = d.index;
          d = d.attributes.position.array;
          if (null !== m) {
            m = m.array;
            for (var n = 0, p = m.length - 1; n < p; n += l) {
              var t = m[n + 1];
              g.fromArray(d, 3 * m[n]);
              h.fromArray(d, 3 * t);
              Qg.distanceSqToSegment(g, h, k, f) > e ||
                (k.applyMatrix4(this.matrixWorld),
                (t = a.ray.origin.distanceTo(k)),
                t < a.near ||
                  t > a.far ||
                  b.push({
                    distance: t,
                    point: f.clone().applyMatrix4(this.matrixWorld),
                    index: n,
                    face: null,
                    faceIndex: null,
                    object: this,
                  }));
            }
          } else
            for (m = 0, n = d.length / 3 - 1; m < n; m += l)
              g.fromArray(d, 3 * m),
                h.fromArray(d, 3 * m + 3),
                Qg.distanceSqToSegment(g, h, k, f) > e ||
                  (k.applyMatrix4(this.matrixWorld),
                  (p = a.ray.origin.distanceTo(k)),
                  p < a.near ||
                    p > a.far ||
                    b.push({
                      distance: p,
                      point: f.clone().applyMatrix4(this.matrixWorld),
                      index: m,
                      face: null,
                      faceIndex: null,
                      object: this,
                    }));
        } else if (d.isGeometry)
          for (g = d.vertices, h = g.length, d = 0; d < h - 1; d += l)
            Qg.distanceSqToSegment(g[d], g[d + 1], k, f) > e ||
              (k.applyMatrix4(this.matrixWorld),
              (m = a.ray.origin.distanceTo(k)),
              m < a.near ||
                m > a.far ||
                b.push({
                  distance: m,
                  point: f.clone().applyMatrix4(this.matrixWorld),
                  index: d,
                  face: null,
                  faceIndex: null,
                  object: this,
                }));
      }
    },
    updateMorphTargets: function () {
      var a = this.geometry;
      if (a.isBufferGeometry) {
        a = a.morphAttributes;
        var b = Object.keys(a);
        if (0 < b.length && ((a = a[b[0]]), void 0 !== a)) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          b = 0;
          for (var d = a.length; b < d; b++) {
            var e = a[b].name || String(b);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[e] = b;
          }
        }
      } else
        (a = a.morphTargets),
          void 0 !== a &&
            0 < a.length &&
            console.error(
              "THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
            );
    },
  });
  var Rg = new w(),
    Sg = new w();
  Za.prototype = Object.assign(Object.create(yb.prototype), {
    constructor: Za,
    isLineSegments: !0,
    computeLineDistances: function () {
      var a = this.geometry;
      if (a.isBufferGeometry)
        if (null === a.index) {
          for (
            var b = a.attributes.position, d = [], e = 0, f = b.count;
            e < f;
            e += 2
          )
            Rg.fromBufferAttribute(b, e),
              Sg.fromBufferAttribute(b, e + 1),
              (d[e] = 0 === e ? 0 : d[e - 1]),
              (d[e + 1] = d[e] + Rg.distanceTo(Sg));
          a.setAttribute("lineDistance", new ea(d, 1));
        } else
          console.warn(
            "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
          );
      else if (a.isGeometry)
        for (
          b = a.vertices, a = a.lineDistances, d = 0, e = b.length;
          d < e;
          d += 2
        )
          Rg.copy(b[d]),
            Sg.copy(b[d + 1]),
            (a[d] = 0 === d ? 0 : a[d - 1]),
            (a[d + 1] = a[d] + Rg.distanceTo(Sg));
      return this;
    },
  });
  $f.prototype = Object.assign(Object.create(yb.prototype), {
    constructor: $f,
    isLineLoop: !0,
  });
  Rb.prototype = Object.create(ra.prototype);
  Rb.prototype.constructor = Rb;
  Rb.prototype.isPointsMaterial = !0;
  Rb.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.alphaMap = a.alphaMap;
    this.size = a.size;
    this.sizeAttenuation = a.sizeAttenuation;
    this.morphTargets = a.morphTargets;
    return this;
  };
  var Oj = new da(),
    wh = new Ta(),
    Mf = new Wa(),
    Tg = new w();
  Pd.prototype = Object.assign(Object.create(ha.prototype), {
    constructor: Pd,
    isPoints: !0,
    copy: function (a) {
      ha.prototype.copy.call(this, a);
      this.material = a.material;
      this.geometry = a.geometry;
      return this;
    },
    raycast: function (a, b) {
      var d = this.geometry,
        e = this.matrixWorld,
        f = a.params.Points.threshold;
      null === d.boundingSphere && d.computeBoundingSphere();
      Mf.copy(d.boundingSphere);
      Mf.applyMatrix4(e);
      Mf.radius += f;
      if (!1 !== a.ray.intersectsSphere(Mf))
        if (
          (Oj.getInverse(e),
          wh.copy(a.ray).applyMatrix4(Oj),
          (f /= (this.scale.x + this.scale.y + this.scale.z) / 3),
          (f *= f),
          d.isBufferGeometry)
        ) {
          var g = d.index;
          d = d.attributes.position.array;
          if (null !== g) {
            g = g.array;
            for (var h = 0, k = g.length; h < k; h++) {
              var l = g[h];
              Tg.fromArray(d, 3 * l);
              vh(Tg, l, f, e, a, b, this);
            }
          } else
            for (g = 0, h = d.length / 3; g < h; g++)
              Tg.fromArray(d, 3 * g), vh(Tg, g, f, e, a, b, this);
        } else
          for (d = d.vertices, g = 0, h = d.length; g < h; g++)
            vh(d[g], g, f, e, a, b, this);
    },
    updateMorphTargets: function () {
      var a = this.geometry;
      if (a.isBufferGeometry) {
        a = a.morphAttributes;
        var b = Object.keys(a);
        if (0 < b.length && ((a = a[b[0]]), void 0 !== a)) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          b = 0;
          for (var d = a.length; b < d; b++) {
            var e = a[b].name || String(b);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[e] = b;
          }
        }
      } else
        (a = a.morphTargets),
          void 0 !== a &&
            0 < a.length &&
            console.error(
              "THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead."
            );
    },
  });
  xh.prototype = Object.assign(Object.create(Oa.prototype), {
    constructor: xh,
    isVideoTexture: !0,
    update: function () {
      var a = this.image;
      !1 === "requestVideoFrameCallback" in a &&
        a.readyState >= a.HAVE_CURRENT_DATA &&
        (this.needsUpdate = !0);
    },
  });
  Qd.prototype = Object.create(Oa.prototype);
  Qd.prototype.constructor = Qd;
  Qd.prototype.isCompressedTexture = !0;
  Te.prototype = Object.create(Oa.prototype);
  Te.prototype.constructor = Te;
  Te.prototype.isCanvasTexture = !0;
  Ue.prototype = Object.create(Oa.prototype);
  Ue.prototype.constructor = Ue;
  Ue.prototype.isDepthTexture = !0;
  Rd.prototype = Object.create(ka.prototype);
  Rd.prototype.constructor = Rd;
  Ve.prototype = Object.create(sa.prototype);
  Ve.prototype.constructor = Ve;
  Sd.prototype = Object.create(ka.prototype);
  Sd.prototype.constructor = Sd;
  We.prototype = Object.create(sa.prototype);
  We.prototype.constructor = We;
  zb.prototype = Object.create(ka.prototype);
  zb.prototype.constructor = zb;
  Xe.prototype = Object.create(sa.prototype);
  Xe.prototype.constructor = Xe;
  Td.prototype = Object.create(zb.prototype);
  Td.prototype.constructor = Td;
  Ye.prototype = Object.create(sa.prototype);
  Ye.prototype.constructor = Ye;
  fd.prototype = Object.create(zb.prototype);
  fd.prototype.constructor = fd;
  Ze.prototype = Object.create(sa.prototype);
  Ze.prototype.constructor = Ze;
  Ud.prototype = Object.create(zb.prototype);
  Ud.prototype.constructor = Ud;
  $e.prototype = Object.create(sa.prototype);
  $e.prototype.constructor = $e;
  Vd.prototype = Object.create(zb.prototype);
  Vd.prototype.constructor = Vd;
  af.prototype = Object.create(sa.prototype);
  af.prototype.constructor = af;
  gd.prototype = Object.create(ka.prototype);
  gd.prototype.constructor = gd;
  gd.prototype.toJSON = function () {
    var a = ka.prototype.toJSON.call(this);
    a.path = this.parameters.path.toJSON();
    return a;
  };
  bf.prototype = Object.create(sa.prototype);
  bf.prototype.constructor = bf;
  Wd.prototype = Object.create(ka.prototype);
  Wd.prototype.constructor = Wd;
  cf.prototype = Object.create(sa.prototype);
  cf.prototype.constructor = cf;
  Xd.prototype = Object.create(ka.prototype);
  Xd.prototype.constructor = Xd;
  var Wl = {
      triangulate: function (a, b, d) {
        d = d || 2;
        var e = b && b.length,
          f = e ? b[0] * d : a.length,
          g = bj(a, 0, f, d, !0),
          h = [];
        if (!g || g.next === g.prev) return h;
        var k;
        if (e) {
          var l = d;
          e = [];
          var m;
          var n = 0;
          for (m = b.length; n < m; n++) {
            var p = b[n] * l;
            var t = n < m - 1 ? b[n + 1] * l : a.length;
            p = bj(a, p, t, l, !1);
            p === p.next && (p.steiner = !0);
            e.push(Il(p));
          }
          e.sort(Gl);
          for (n = 0; n < e.length; n++) {
            l = e[n];
            b = g;
            if ((b = Hl(l, b))) (l = ej(b, l)), Mc(b, b.next), Mc(l, l.next);
            g = Mc(g, g.next);
          }
        }
        if (a.length > 80 * d) {
          var q = (k = a[0]);
          var v = (e = a[1]);
          for (l = d; l < f; l += d)
            (n = a[l]),
              (b = a[l + 1]),
              n < q && (q = n),
              b < v && (v = b),
              n > k && (k = n),
              b > e && (e = b);
          k = Math.max(k - q, e - v);
          k = 0 !== k ? 1 / k : 0;
        }
        ef(g, h, d, q, v, k);
        return h;
      },
    },
    nc = {
      area: function (a) {
        for (var b = a.length, d = 0, e = b - 1, f = 0; f < b; e = f++)
          d += a[e].x * a[f].y - a[f].x * a[e].y;
        return 0.5 * d;
      },
      isClockWise: function (a) {
        return 0 > nc.area(a);
      },
      triangulateShape: function (a, b) {
        var d = [],
          e = [],
          f = [];
        fj(a);
        gj(d, a);
        a = a.length;
        b.forEach(fj);
        for (var g = 0; g < b.length; g++)
          e.push(a), (a += b[g].length), gj(d, b[g]);
        b = Wl.triangulate(d, e);
        for (d = 0; d < b.length; d += 3) f.push(b.slice(d, d + 3));
        return f;
      },
    };
  hd.prototype = Object.create(sa.prototype);
  hd.prototype.constructor = hd;
  hd.prototype.toJSON = function () {
    var a = sa.prototype.toJSON.call(this);
    return hj(this.parameters.shapes, this.parameters.options, a);
  };
  bc.prototype = Object.create(ka.prototype);
  bc.prototype.constructor = bc;
  bc.prototype.toJSON = function () {
    var a = ka.prototype.toJSON.call(this);
    return hj(this.parameters.shapes, this.parameters.options, a);
  };
  var Jl = {
    generateTopUV: function (a, b, d, e, f) {
      a = b[3 * e];
      e = b[3 * e + 1];
      var g = b[3 * f];
      f = b[3 * f + 1];
      return [new L(b[3 * d], b[3 * d + 1]), new L(a, e), new L(g, f)];
    },
    generateSideWallUV: function (a, b, d, e, f, g) {
      a = b[3 * d];
      var h = b[3 * d + 1];
      d = b[3 * d + 2];
      var k = b[3 * e],
        l = b[3 * e + 1];
      e = b[3 * e + 2];
      var m = b[3 * f],
        n = b[3 * f + 1];
      f = b[3 * f + 2];
      var p = b[3 * g],
        t = b[3 * g + 1];
      b = b[3 * g + 2];
      return 0.01 > Math.abs(h - l)
        ? [new L(a, 1 - d), new L(k, 1 - e), new L(m, 1 - f), new L(p, 1 - b)]
        : [new L(h, 1 - d), new L(l, 1 - e), new L(n, 1 - f), new L(t, 1 - b)];
    },
  };
  gf.prototype = Object.create(sa.prototype);
  gf.prototype.constructor = gf;
  Zd.prototype = Object.create(bc.prototype);
  Zd.prototype.constructor = Zd;
  hf.prototype = Object.create(sa.prototype);
  hf.prototype.constructor = hf;
  id.prototype = Object.create(ka.prototype);
  id.prototype.constructor = id;
  jf.prototype = Object.create(sa.prototype);
  jf.prototype.constructor = jf;
  $d.prototype = Object.create(ka.prototype);
  $d.prototype.constructor = $d;
  kf.prototype = Object.create(sa.prototype);
  kf.prototype.constructor = kf;
  ae.prototype = Object.create(ka.prototype);
  ae.prototype.constructor = ae;
  jd.prototype = Object.create(sa.prototype);
  jd.prototype.constructor = jd;
  jd.prototype.toJSON = function () {
    var a = sa.prototype.toJSON.call(this);
    return ij(this.parameters.shapes, a);
  };
  kd.prototype = Object.create(ka.prototype);
  kd.prototype.constructor = kd;
  kd.prototype.toJSON = function () {
    var a = ka.prototype.toJSON.call(this);
    return ij(this.parameters.shapes, a);
  };
  be.prototype = Object.create(ka.prototype);
  be.prototype.constructor = be;
  ld.prototype = Object.create(sa.prototype);
  ld.prototype.constructor = ld;
  oc.prototype = Object.create(ka.prototype);
  oc.prototype.constructor = oc;
  lf.prototype = Object.create(ld.prototype);
  lf.prototype.constructor = lf;
  mf.prototype = Object.create(oc.prototype);
  mf.prototype.constructor = mf;
  nf.prototype = Object.create(sa.prototype);
  nf.prototype.constructor = nf;
  ce.prototype = Object.create(ka.prototype);
  ce.prototype.constructor = ce;
  var vb = Object.freeze({
    __proto__: null,
    WireframeGeometry: Rd,
    ParametricGeometry: Ve,
    ParametricBufferGeometry: Sd,
    TetrahedronGeometry: Xe,
    TetrahedronBufferGeometry: Td,
    OctahedronGeometry: Ye,
    OctahedronBufferGeometry: fd,
    IcosahedronGeometry: Ze,
    IcosahedronBufferGeometry: Ud,
    DodecahedronGeometry: $e,
    DodecahedronBufferGeometry: Vd,
    PolyhedronGeometry: We,
    PolyhedronBufferGeometry: zb,
    TubeGeometry: af,
    TubeBufferGeometry: gd,
    TorusKnotGeometry: bf,
    TorusKnotBufferGeometry: Wd,
    TorusGeometry: cf,
    TorusBufferGeometry: Xd,
    TextGeometry: gf,
    TextBufferGeometry: Zd,
    SphereGeometry: hf,
    SphereBufferGeometry: id,
    RingGeometry: jf,
    RingBufferGeometry: $d,
    PlaneGeometry: Je,
    PlaneBufferGeometry: cd,
    LatheGeometry: kf,
    LatheBufferGeometry: ae,
    ShapeGeometry: jd,
    ShapeBufferGeometry: kd,
    ExtrudeGeometry: hd,
    ExtrudeBufferGeometry: bc,
    EdgesGeometry: be,
    ConeGeometry: lf,
    ConeBufferGeometry: mf,
    CylinderGeometry: ld,
    CylinderBufferGeometry: oc,
    CircleGeometry: nf,
    CircleBufferGeometry: ce,
    BoxGeometry: Fd,
    BoxBufferGeometry: Bc,
  });
  md.prototype = Object.create(ra.prototype);
  md.prototype.constructor = md;
  md.prototype.isShadowMaterial = !0;
  md.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.color.copy(a.color);
    return this;
  };
  pc.prototype = Object.create(sb.prototype);
  pc.prototype.constructor = pc;
  pc.prototype.isRawShaderMaterial = !0;
  cc.prototype = Object.create(ra.prototype);
  cc.prototype.constructor = cc;
  cc.prototype.isMeshStandardMaterial = !0;
  cc.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.defines = { STANDARD: "" };
    this.color.copy(a.color);
    this.roughness = a.roughness;
    this.metalness = a.metalness;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.roughnessMap = a.roughnessMap;
    this.metalnessMap = a.metalnessMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.envMapIntensity = a.envMapIntensity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    this.vertexTangents = a.vertexTangents;
    return this;
  };
  Nc.prototype = Object.create(cc.prototype);
  Nc.prototype.constructor = Nc;
  Nc.prototype.isMeshPhysicalMaterial = !0;
  Nc.prototype.copy = function (a) {
    cc.prototype.copy.call(this, a);
    this.defines = { STANDARD: "", PHYSICAL: "" };
    this.clearcoat = a.clearcoat;
    this.clearcoatMap = a.clearcoatMap;
    this.clearcoatRoughness = a.clearcoatRoughness;
    this.clearcoatRoughnessMap = a.clearcoatRoughnessMap;
    this.clearcoatNormalMap = a.clearcoatNormalMap;
    this.clearcoatNormalScale.copy(a.clearcoatNormalScale);
    this.reflectivity = a.reflectivity;
    this.sheen = a.sheen ? (this.sheen || new S()).copy(a.sheen) : null;
    this.transmission = a.transmission;
    this.transmissionMap = a.transmissionMap;
    return this;
  };
  Oc.prototype = Object.create(ra.prototype);
  Oc.prototype.constructor = Oc;
  Oc.prototype.isMeshPhongMaterial = !0;
  Oc.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.specular.copy(a.specular);
    this.shininess = a.shininess;
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  nd.prototype = Object.create(ra.prototype);
  nd.prototype.constructor = nd;
  nd.prototype.isMeshToonMaterial = !0;
  nd.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.gradientMap = a.gradientMap;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.alphaMap = a.alphaMap;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  od.prototype = Object.create(ra.prototype);
  od.prototype.constructor = od;
  od.prototype.isMeshNormalMaterial = !0;
  od.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  pd.prototype = Object.create(ra.prototype);
  pd.prototype.constructor = pd;
  pd.prototype.isMeshLambertMaterial = !0;
  pd.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.color.copy(a.color);
    this.map = a.map;
    this.lightMap = a.lightMap;
    this.lightMapIntensity = a.lightMapIntensity;
    this.aoMap = a.aoMap;
    this.aoMapIntensity = a.aoMapIntensity;
    this.emissive.copy(a.emissive);
    this.emissiveMap = a.emissiveMap;
    this.emissiveIntensity = a.emissiveIntensity;
    this.specularMap = a.specularMap;
    this.alphaMap = a.alphaMap;
    this.envMap = a.envMap;
    this.combine = a.combine;
    this.reflectivity = a.reflectivity;
    this.refractionRatio = a.refractionRatio;
    this.wireframe = a.wireframe;
    this.wireframeLinewidth = a.wireframeLinewidth;
    this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  qd.prototype = Object.create(ra.prototype);
  qd.prototype.constructor = qd;
  qd.prototype.isMeshMatcapMaterial = !0;
  qd.prototype.copy = function (a) {
    ra.prototype.copy.call(this, a);
    this.defines = { MATCAP: "" };
    this.color.copy(a.color);
    this.matcap = a.matcap;
    this.map = a.map;
    this.bumpMap = a.bumpMap;
    this.bumpScale = a.bumpScale;
    this.normalMap = a.normalMap;
    this.normalMapType = a.normalMapType;
    this.normalScale.copy(a.normalScale);
    this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias;
    this.alphaMap = a.alphaMap;
    this.skinning = a.skinning;
    this.morphTargets = a.morphTargets;
    this.morphNormals = a.morphNormals;
    return this;
  };
  rd.prototype = Object.create(Ya.prototype);
  rd.prototype.constructor = rd;
  rd.prototype.isLineDashedMaterial = !0;
  rd.prototype.copy = function (a) {
    Ya.prototype.copy.call(this, a);
    this.scale = a.scale;
    this.dashSize = a.dashSize;
    this.gapSize = a.gapSize;
    return this;
  };
  var Xl = Object.freeze({
      __proto__: null,
      ShadowMaterial: md,
      SpriteMaterial: Lc,
      RawShaderMaterial: pc,
      ShaderMaterial: sb,
      PointsMaterial: Rb,
      MeshPhysicalMaterial: Nc,
      MeshStandardMaterial: cc,
      MeshPhongMaterial: Oc,
      MeshToonMaterial: nd,
      MeshNormalMaterial: od,
      MeshLambertMaterial: pd,
      MeshDepthMaterial: Ec,
      MeshDistanceMaterial: Fc,
      MeshBasicMaterial: Kb,
      MeshMatcapMaterial: qd,
      LineDashedMaterial: rd,
      LineBasicMaterial: Ya,
      Material: ra,
    }),
    Va = {
      arraySlice: function (a, b, d) {
        return Va.isTypedArray(a)
          ? new a.constructor(a.subarray(b, void 0 !== d ? d : a.length))
          : a.slice(b, d);
      },
      convertArray: function (a, b, d) {
        return !a || (!d && a.constructor === b)
          ? a
          : "number" === typeof b.BYTES_PER_ELEMENT
          ? new b(a)
          : Array.prototype.slice.call(a);
      },
      isTypedArray: function (a) {
        return ArrayBuffer.isView(a) && !(a instanceof DataView);
      },
      getKeyframeOrder: function (a) {
        for (var b = a.length, d = Array(b), e = 0; e !== b; ++e) d[e] = e;
        d.sort(function (f, g) {
          return a[f] - a[g];
        });
        return d;
      },
      sortedArray: function (a, b, d) {
        for (
          var e = a.length, f = new a.constructor(e), g = 0, h = 0;
          h !== e;
          ++g
        )
          for (var k = d[g] * b, l = 0; l !== b; ++l) f[h++] = a[k + l];
        return f;
      },
      flattenJSON: function (a, b, d, e) {
        for (var f = 1, g = a[0]; void 0 !== g && void 0 === g[e]; ) g = a[f++];
        if (void 0 !== g) {
          var h = g[e];
          if (void 0 !== h)
            if (Array.isArray(h)) {
              do
                (h = g[e]),
                  void 0 !== h && (b.push(g.time), d.push.apply(d, h)),
                  (g = a[f++]);
              while (void 0 !== g);
            } else if (void 0 !== h.toArray) {
              do
                (h = g[e]),
                  void 0 !== h && (b.push(g.time), h.toArray(d, d.length)),
                  (g = a[f++]);
              while (void 0 !== g);
            } else {
              do
                (h = g[e]),
                  void 0 !== h && (b.push(g.time), d.push(h)),
                  (g = a[f++]);
              while (void 0 !== g);
            }
        }
      },
      subclip: function (a, b, d, e, f) {
        f = f || 30;
        a = a.clone();
        a.name = b;
        b = [];
        for (var g = 0; g < a.tracks.length; ++g) {
          for (
            var h = a.tracks[g], k = h.getValueSize(), l = [], m = [], n = 0;
            n < h.times.length;
            ++n
          ) {
            var p = h.times[n] * f;
            if (!(p < d || p >= e))
              for (l.push(h.times[n]), p = 0; p < k; ++p)
                m.push(h.values[n * k + p]);
          }
          0 !== l.length &&
            ((h.times = Va.convertArray(l, h.times.constructor)),
            (h.values = Va.convertArray(m, h.values.constructor)),
            b.push(h));
        }
        a.tracks = b;
        d = Infinity;
        for (e = 0; e < a.tracks.length; ++e)
          d > a.tracks[e].times[0] && (d = a.tracks[e].times[0]);
        for (e = 0; e < a.tracks.length; ++e) a.tracks[e].shift(-1 * d);
        a.resetDuration();
        return a;
      },
      makeClipAdditive: function (a, b, d, e) {
        void 0 === b && (b = 0);
        void 0 === d && (d = a);
        if (void 0 === e || 0 >= e) e = 30;
        var f = a.tracks.length,
          g = b / e;
        b = function (h) {
          var k = d.tracks[h],
            l = k.ValueTypeName;
          if (
            "bool" !== l &&
            "string" !== l &&
            ((h = a.tracks.find(function (B) {
              return B.name === k.name && B.ValueTypeName === l;
            })),
            void 0 !== h)
          ) {
            var m = 0,
              n = k.getValueSize();
            k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
              (m = n / 3);
            var p = 0,
              t = h.getValueSize();
            h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
              (p = t / 3);
            var q = k.times.length - 1,
              v = void 0;
            g <= k.times[0]
              ? (v = Va.arraySlice(k.values, m, n - m))
              : g >= k.times[q]
              ? ((v = q * n + m), (v = Va.arraySlice(k.values, v, v + n - m)))
              : ((v = k.createInterpolant()),
                (q = m),
                (m = n - m),
                v.evaluate(g),
                (v = Va.arraySlice(v.resultBuffer, q, m)));
            "quaternion" === l &&
              new ua().fromArray(v).normalize().conjugate().toArray(v);
            m = h.times.length;
            for (n = 0; n < m; ++n)
              if (((q = n * t + p), "quaternion" === l))
                ua.multiplyQuaternionsFlat(h.values, q, v, 0, h.values, q);
              else
                for (var u = t - 2 * p, A = 0; A < u; ++A)
                  h.values[q + A] -= v[A];
          }
        };
        for (e = 0; e < f; ++e) b(e);
        a.blendMode = 2501;
        return a;
      },
    };
  Object.assign(Hb.prototype, {
    evaluate: function (a) {
      var b = this.parameterPositions,
        d = this._cachedIndex,
        e = b[d],
        f = b[d - 1];
      a: {
        b: {
          c: {
            d: if (!(a < e)) {
              for (var g = d + 2; ; ) {
                if (void 0 === e) {
                  if (a < f) break d;
                  this._cachedIndex = d = b.length;
                  return this.afterEnd_(d - 1, a, f);
                }
                if (d === g) break;
                f = e;
                e = b[++d];
                if (a < e) break b;
              }
              e = b.length;
              break c;
            }
            if (a >= f) break a;
            else {
              g = b[1];
              a < g && ((d = 2), (f = g));
              for (g = d - 2; ; ) {
                if (void 0 === f)
                  return (this._cachedIndex = 0), this.beforeStart_(0, a, e);
                if (d === g) break;
                e = f;
                f = b[--d - 1];
                if (a >= f) break b;
              }
              e = d;
              d = 0;
            }
          }
          for (; d < e; ) (f = (d + e) >>> 1), a < b[f] ? (e = f) : (d = f + 1);
          e = b[d];
          f = b[d - 1];
          if (void 0 === f)
            return (this._cachedIndex = 0), this.beforeStart_(0, a, e);
          if (void 0 === e)
            return (
              (this._cachedIndex = d = b.length), this.afterEnd_(d - 1, f, a)
            );
        }
        this._cachedIndex = d;
        this.intervalChanged_(d, f, e);
      }
      return this.interpolate_(d, f, a, e);
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_: function () {
      return this.settings || this.DefaultSettings_;
    },
    copySampleValue_: function (a) {
      var b = this.resultBuffer,
        d = this.sampleValues,
        e = this.valueSize;
      a *= e;
      for (var f = 0; f !== e; ++f) b[f] = d[a + f];
      return b;
    },
    interpolate_: function () {
      throw Error("call to abstract method");
    },
    intervalChanged_: function () {},
  });
  Object.assign(Hb.prototype, {
    beforeStart_: Hb.prototype.copySampleValue_,
    afterEnd_: Hb.prototype.copySampleValue_,
  });
  dg.prototype = Object.assign(Object.create(Hb.prototype), {
    constructor: dg,
    DefaultSettings_: { endingStart: 2400, endingEnd: 2400 },
    intervalChanged_: function (a, b, d) {
      var e = this.parameterPositions,
        f = a - 2,
        g = a + 1,
        h = e[f],
        k = e[g];
      if (void 0 === h)
        switch (this.getSettings_().endingStart) {
          case 2401:
            f = a;
            h = 2 * b - d;
            break;
          case 2402:
            f = e.length - 2;
            h = b + e[f] - e[f + 1];
            break;
          default:
            (f = a), (h = d);
        }
      if (void 0 === k)
        switch (this.getSettings_().endingEnd) {
          case 2401:
            g = a;
            k = 2 * d - b;
            break;
          case 2402:
            g = 1;
            k = d + e[1] - e[0];
            break;
          default:
            (g = a - 1), (k = b);
        }
      a = 0.5 * (d - b);
      e = this.valueSize;
      this._weightPrev = a / (b - h);
      this._weightNext = a / (k - d);
      this._offsetPrev = f * e;
      this._offsetNext = g * e;
    },
    interpolate_: function (a, b, d, e) {
      var f = this.resultBuffer,
        g = this.sampleValues,
        h = this.valueSize;
      a *= h;
      var k = a - h,
        l = this._offsetPrev,
        m = this._offsetNext,
        n = this._weightPrev,
        p = this._weightNext,
        t = (d - b) / (e - b);
      d = t * t;
      e = d * t;
      b = -n * e + 2 * n * d - n * t;
      n = (1 + n) * e + (-1.5 - 2 * n) * d + (-0.5 + n) * t + 1;
      t = (-1 - p) * e + (1.5 + p) * d + 0.5 * t;
      p = p * e - p * d;
      for (d = 0; d !== h; ++d)
        f[d] = b * g[l + d] + n * g[k + d] + t * g[a + d] + p * g[m + d];
      return f;
    },
  });
  of.prototype = Object.assign(Object.create(Hb.prototype), {
    constructor: of,
    interpolate_: function (a, b, d, e) {
      var f = this.resultBuffer,
        g = this.sampleValues,
        h = this.valueSize;
      a *= h;
      var k = a - h;
      b = (d - b) / (e - b);
      d = 1 - b;
      for (e = 0; e !== h; ++e) f[e] = g[k + e] * d + g[a + e] * b;
      return f;
    },
  });
  eg.prototype = Object.assign(Object.create(Hb.prototype), {
    constructor: eg,
    interpolate_: function (a) {
      return this.copySampleValue_(a - 1);
    },
  });
  Object.assign(lb, {
    toJSON: function (a) {
      var b = a.constructor;
      if (void 0 !== b.toJSON) b = b.toJSON(a);
      else {
        b = {
          name: a.name,
          times: Va.convertArray(a.times, Array),
          values: Va.convertArray(a.values, Array),
        };
        var d = a.getInterpolation();
        d !== a.DefaultInterpolation && (b.interpolation = d);
      }
      b.type = a.ValueTypeName;
      return b;
    },
  });
  Object.assign(lb.prototype, {
    constructor: lb,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodDiscrete: function (a) {
      return new eg(this.times, this.values, this.getValueSize(), a);
    },
    InterpolantFactoryMethodLinear: function (a) {
      return new of(this.times, this.values, this.getValueSize(), a);
    },
    InterpolantFactoryMethodSmooth: function (a) {
      return new dg(this.times, this.values, this.getValueSize(), a);
    },
    setInterpolation: function (a) {
      switch (a) {
        case 2300:
          var b = this.InterpolantFactoryMethodDiscrete;
          break;
        case 2301:
          b = this.InterpolantFactoryMethodLinear;
          break;
        case 2302:
          b = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === b) {
        b =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (void 0 === this.createInterpolant)
          if (a !== this.DefaultInterpolation)
            this.setInterpolation(this.DefaultInterpolation);
          else throw Error(b);
        console.warn("THREE.KeyframeTrack:", b);
        return this;
      }
      this.createInterpolant = b;
      return this;
    },
    getInterpolation: function () {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return 2300;
        case this.InterpolantFactoryMethodLinear:
          return 2301;
        case this.InterpolantFactoryMethodSmooth:
          return 2302;
      }
    },
    getValueSize: function () {
      return this.values.length / this.times.length;
    },
    shift: function (a) {
      if (0 !== a)
        for (var b = this.times, d = 0, e = b.length; d !== e; ++d) b[d] += a;
      return this;
    },
    scale: function (a) {
      if (1 !== a)
        for (var b = this.times, d = 0, e = b.length; d !== e; ++d) b[d] *= a;
      return this;
    },
    trim: function (a, b) {
      for (
        var d = this.times, e = d.length, f = 0, g = e - 1;
        f !== e && d[f] < a;

      )
        ++f;
      for (; -1 !== g && d[g] > b; ) --g;
      ++g;
      if (0 !== f || g !== e)
        f >= g && ((g = Math.max(g, 1)), (f = g - 1)),
          (a = this.getValueSize()),
          (this.times = Va.arraySlice(d, f, g)),
          (this.values = Va.arraySlice(this.values, f * a, g * a));
      return this;
    },
    validate: function () {
      var a = !0,
        b = this.getValueSize();
      0 !== b - Math.floor(b) &&
        (console.error(
          "THREE.KeyframeTrack: Invalid value size in track.",
          this
        ),
        (a = !1));
      var d = this.times;
      b = this.values;
      var e = d.length;
      0 === e &&
        (console.error("THREE.KeyframeTrack: Track is empty.", this), (a = !1));
      for (var f = null, g = 0; g !== e; g++) {
        var h = d[g];
        if ("number" === typeof h && isNaN(h)) {
          console.error(
            "THREE.KeyframeTrack: Time is not a valid number.",
            this,
            g,
            h
          );
          a = !1;
          break;
        }
        if (null !== f && f > h) {
          console.error(
            "THREE.KeyframeTrack: Out of order keys.",
            this,
            g,
            h,
            f
          );
          a = !1;
          break;
        }
        f = h;
      }
      if (void 0 !== b && Va.isTypedArray(b))
        for (d = 0, e = b.length; d !== e; ++d)
          if (((f = b[d]), isNaN(f))) {
            console.error(
              "THREE.KeyframeTrack: Value is not a valid number.",
              this,
              d,
              f
            );
            a = !1;
            break;
          }
      return a;
    },
    optimize: function () {
      for (
        var a = Va.arraySlice(this.times),
          b = Va.arraySlice(this.values),
          d = this.getValueSize(),
          e = 2302 === this.getInterpolation(),
          f = a.length - 1,
          g = 1,
          h = 1;
        h < f;
        ++h
      ) {
        var k = !1,
          l = a[h];
        if (l !== a[h + 1] && (1 !== h || l !== l[0]))
          if (e) k = !0;
          else {
            l = h * d;
            for (var m = l - d, n = l + d, p = 0; p !== d; ++p) {
              var t = b[l + p];
              if (t !== b[m + p] || t !== b[n + p]) {
                k = !0;
                break;
              }
            }
          }
        if (k) {
          if (h !== g)
            for (a[g] = a[h], k = h * d, l = g * d, m = 0; m !== d; ++m)
              b[l + m] = b[k + m];
          ++g;
        }
      }
      if (0 < f) {
        a[g] = a[f];
        e = f * d;
        f = g * d;
        for (h = 0; h !== d; ++h) b[f + h] = b[e + h];
        ++g;
      }
      g !== a.length
        ? ((this.times = Va.arraySlice(a, 0, g)),
          (this.values = Va.arraySlice(b, 0, g * d)))
        : ((this.times = a), (this.values = b));
      return this;
    },
    clone: function () {
      var a = Va.arraySlice(this.times, 0),
        b = Va.arraySlice(this.values, 0);
      a = new this.constructor(this.name, a, b);
      a.createInterpolant = this.createInterpolant;
      return a;
    },
  });
  fg.prototype = Object.assign(Object.create(lb.prototype), {
    constructor: fg,
    ValueTypeName: "bool",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0,
  });
  gg.prototype = Object.assign(Object.create(lb.prototype), {
    constructor: gg,
    ValueTypeName: "color",
  });
  de.prototype = Object.assign(Object.create(lb.prototype), {
    constructor: de,
    ValueTypeName: "number",
  });
  hg.prototype = Object.assign(Object.create(Hb.prototype), {
    constructor: hg,
    interpolate_: function (a, b, d, e) {
      var f = this.resultBuffer,
        g = this.sampleValues,
        h = this.valueSize;
      b = (d - b) / (e - b);
      a *= h;
      for (d = a + h; a !== d; a += 4) ua.slerpFlat(f, 0, g, a - h, g, a, b);
      return f;
    },
  });
  pf.prototype = Object.assign(Object.create(lb.prototype), {
    constructor: pf,
    ValueTypeName: "quaternion",
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodLinear: function (a) {
      return new hg(this.times, this.values, this.getValueSize(), a);
    },
    InterpolantFactoryMethodSmooth: void 0,
  });
  ig.prototype = Object.assign(Object.create(lb.prototype), {
    constructor: ig,
    ValueTypeName: "string",
    ValueBufferType: Array,
    DefaultInterpolation: 2300,
    InterpolantFactoryMethodLinear: void 0,
    InterpolantFactoryMethodSmooth: void 0,
  });
  ee.prototype = Object.assign(Object.create(lb.prototype), {
    constructor: ee,
    ValueTypeName: "vector",
  });
  Object.assign(Mb, {
    parse: function (a) {
      for (
        var b = [], d = a.tracks, e = 1 / (a.fps || 1), f = 0, g = d.length;
        f !== g;
        ++f
      )
        b.push(Ll(d[f]).scale(e));
      return new Mb(a.name, a.duration, b, a.blendMode);
    },
    toJSON: function (a) {
      var b = [],
        d = a.tracks;
      a = {
        name: a.name,
        duration: a.duration,
        tracks: b,
        uuid: a.uuid,
        blendMode: a.blendMode,
      };
      for (var e = 0, f = d.length; e !== f; ++e) b.push(lb.toJSON(d[e]));
      return a;
    },
    CreateFromMorphTargetSequence: function (a, b, d, e) {
      for (var f = b.length, g = [], h = 0; h < f; h++) {
        var k = [],
          l = [];
        k.push((h + f - 1) % f, h, (h + 1) % f);
        l.push(0, 1, 0);
        var m = Va.getKeyframeOrder(k);
        k = Va.sortedArray(k, 1, m);
        l = Va.sortedArray(l, 1, m);
        e || 0 !== k[0] || (k.push(f), l.push(l[0]));
        g.push(
          new de(".morphTargetInfluences[" + b[h].name + "]", k, l).scale(1 / d)
        );
      }
      return new Mb(a, -1, g);
    },
    findByName: function (a, b) {
      var d = a;
      Array.isArray(a) ||
        (d = (a.geometry && a.geometry.animations) || a.animations);
      for (a = 0; a < d.length; a++) if (d[a].name === b) return d[a];
      return null;
    },
    CreateClipsFromMorphTargetSequences: function (a, b, d) {
      for (
        var e = {}, f = /^([\w-]*?)([\d]+)$/, g = 0, h = a.length;
        g < h;
        g++
      ) {
        var k = a[g],
          l = k.name.match(f);
        if (l && 1 < l.length) {
          l = l[1];
          var m = e[l];
          m || (e[l] = m = []);
          m.push(k);
        }
      }
      a = [];
      for (var n in e) a.push(Mb.CreateFromMorphTargetSequence(n, e[n], b, d));
      return a;
    },
    parseAnimation: function (a, b) {
      if (!a)
        return (
          console.error(
            "THREE.AnimationClip: No animation in JSONLoader data."
          ),
          null
        );
      var d = function (A, B, D, G, I) {
          if (0 !== D.length) {
            var E = [],
              H = [];
            Va.flattenJSON(D, E, H, G);
            0 !== E.length && I.push(new A(B, E, H));
          }
        },
        e = [],
        f = a.name || "default",
        g = a.fps || 30,
        h = a.blendMode,
        k = a.length || -1;
      a = a.hierarchy || [];
      for (var l = 0; l < a.length; l++) {
        var m = a[l].keys;
        if (m && 0 !== m.length)
          if (m[0].morphTargets) {
            k = {};
            var n = void 0;
            for (n = 0; n < m.length; n++)
              if (m[n].morphTargets)
                for (var p = 0; p < m[n].morphTargets.length; p++)
                  k[m[n].morphTargets[p]] = -1;
            for (var t in k) {
              p = [];
              for (var q = [], v = 0; v !== m[n].morphTargets.length; ++v) {
                var u = m[n];
                p.push(u.time);
                q.push(u.morphTarget === t ? 1 : 0);
              }
              e.push(new de(".morphTargetInfluence[" + t + "]", p, q));
            }
            k = k.length * (g || 1);
          } else
            (n = ".bones[" + b[l].name + "]"),
              d(ee, n + ".position", m, "pos", e),
              d(pf, n + ".quaternion", m, "rot", e),
              d(ee, n + ".scale", m, "scl", e);
      }
      return 0 === e.length ? null : new Mb(f, k, e, h);
    },
  });
  Object.assign(Mb.prototype, {
    resetDuration: function () {
      for (var a = 0, b = 0, d = this.tracks.length; b !== d; ++b) {
        var e = this.tracks[b];
        a = Math.max(a, e.times[e.times.length - 1]);
      }
      this.duration = a;
      return this;
    },
    trim: function () {
      for (var a = 0; a < this.tracks.length; a++)
        this.tracks[a].trim(0, this.duration);
      return this;
    },
    validate: function () {
      for (var a = !0, b = 0; b < this.tracks.length; b++)
        a = a && this.tracks[b].validate();
      return a;
    },
    optimize: function () {
      for (var a = 0; a < this.tracks.length; a++) this.tracks[a].optimize();
      return this;
    },
    clone: function () {
      for (var a = [], b = 0; b < this.tracks.length; b++)
        a.push(this.tracks[b].clone());
      return new Mb(this.name, this.duration, a, this.blendMode);
    },
  });
  var vd = {
      enabled: !1,
      files: {},
      add: function (a, b) {
        !1 !== this.enabled && (this.files[a] = b);
      },
      get: function (a) {
        if (!1 !== this.enabled) return this.files[a];
      },
      remove: function (a) {
        delete this.files[a];
      },
      clear: function () {
        this.files = {};
      },
    },
    jj = new Ah();
  Object.assign(Ma.prototype, {
    load: function () {},
    loadAsync: function (a, b) {
      var d = this;
      return new Promise(function (e, f) {
        d.load(a, e, b, f);
      });
    },
    parse: function () {},
    setCrossOrigin: function (a) {
      this.crossOrigin = a;
      return this;
    },
    setPath: function (a) {
      this.path = a;
      return this;
    },
    setResourcePath: function (a) {
      this.resourcePath = a;
      return this;
    },
    setRequestHeader: function (a) {
      this.requestHeader = a;
      return this;
    },
  });
  var Zb = {};
  Nb.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: Nb,
    load: function (a, b, d, e) {
      void 0 === a && (a = "");
      void 0 !== this.path && (a = this.path + a);
      a = this.manager.resolveURL(a);
      var f = this,
        g = vd.get(a);
      if (void 0 !== g)
        return (
          f.manager.itemStart(a),
          setTimeout(function () {
            b && b(g);
            f.manager.itemEnd(a);
          }, 0),
          g
        );
      if (void 0 !== Zb[a])
        Zb[a].push({ onLoad: b, onProgress: d, onError: e });
      else {
        var h = a.match(/^data:(.*?)(;base64)?,(.*)$/);
        if (h) {
          d = h[1];
          var k = !!h[2];
          h = h[3];
          h = decodeURIComponent(h);
          k && (h = atob(h));
          try {
            var l = (this.responseType || "").toLowerCase();
            switch (l) {
              case "arraybuffer":
              case "blob":
                var m = new Uint8Array(h.length);
                for (k = 0; k < h.length; k++) m[k] = h.charCodeAt(k);
                var n =
                  "blob" === l ? new Blob([m.buffer], { type: d }) : m.buffer;
                break;
              case "document":
                n = new DOMParser().parseFromString(h, d);
                break;
              case "json":
                n = JSON.parse(h);
                break;
              default:
                n = h;
            }
            setTimeout(function () {
              b && b(n);
              f.manager.itemEnd(a);
            }, 0);
          } catch (t) {
            setTimeout(function () {
              e && e(t);
              f.manager.itemError(a);
              f.manager.itemEnd(a);
            }, 0);
          }
        } else {
          Zb[a] = [];
          Zb[a].push({ onLoad: b, onProgress: d, onError: e });
          var p = new XMLHttpRequest();
          p.open("GET", a, !0);
          p.addEventListener(
            "load",
            function (t) {
              var q = this.response,
                v = Zb[a];
              delete Zb[a];
              if (200 === this.status || 0 === this.status) {
                0 === this.status &&
                  console.warn("THREE.FileLoader: HTTP Status 0 received.");
                vd.add(a, q);
                t = 0;
                for (var u = v.length; t < u; t++) {
                  var A = v[t];
                  if (A.onLoad) A.onLoad(q);
                }
              } else {
                q = 0;
                for (u = v.length; q < u; q++)
                  if (((A = v[q]), A.onError)) A.onError(t);
                f.manager.itemError(a);
              }
              f.manager.itemEnd(a);
            },
            !1
          );
          p.addEventListener(
            "progress",
            function (t) {
              for (var q = Zb[a], v = 0, u = q.length; v < u; v++) {
                var A = q[v];
                if (A.onProgress) A.onProgress(t);
              }
            },
            !1
          );
          p.addEventListener(
            "error",
            function (t) {
              var q = Zb[a];
              delete Zb[a];
              for (var v = 0, u = q.length; v < u; v++) {
                var A = q[v];
                if (A.onError) A.onError(t);
              }
              f.manager.itemError(a);
              f.manager.itemEnd(a);
            },
            !1
          );
          p.addEventListener(
            "abort",
            function (t) {
              var q = Zb[a];
              delete Zb[a];
              for (var v = 0, u = q.length; v < u; v++) {
                var A = q[v];
                if (A.onError) A.onError(t);
              }
              f.manager.itemError(a);
              f.manager.itemEnd(a);
            },
            !1
          );
          void 0 !== this.responseType && (p.responseType = this.responseType);
          void 0 !== this.withCredentials &&
            (p.withCredentials = this.withCredentials);
          p.overrideMimeType &&
            p.overrideMimeType(
              void 0 !== this.mimeType ? this.mimeType : "text/plain"
            );
          for (k in this.requestHeader)
            p.setRequestHeader(k, this.requestHeader[k]);
          p.send(null);
        }
        f.manager.itemStart(a);
        return p;
      }
    },
    setResponseType: function (a) {
      this.responseType = a;
      return this;
    },
    setWithCredentials: function (a) {
      this.withCredentials = a;
      return this;
    },
    setMimeType: function (a) {
      this.mimeType = a;
      return this;
    },
  });
  Bh.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: Bh,
    load: function (a, b, d, e) {
      var f = this,
        g = new Nb(f.manager);
      g.setPath(f.path);
      g.setRequestHeader(f.requestHeader);
      g.load(
        a,
        function (h) {
          try {
            b(f.parse(JSON.parse(h)));
          } catch (k) {
            e ? e(k) : console.error(k), f.manager.itemError(a);
          }
        },
        d,
        e
      );
    },
    parse: function (a) {
      for (var b = [], d = 0; d < a.length; d++) {
        var e = Mb.parse(a[d]);
        b.push(e);
      }
      return b;
    },
  });
  Ch.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: Ch,
    load: function (a, b, d, e) {
      function f(t) {
        l.load(
          a[t],
          function (q) {
            q = g.parse(q, !0);
            h[t] = {
              width: q.width,
              height: q.height,
              format: q.format,
              mipmaps: q.mipmaps,
            };
            m += 1;
            6 === m &&
              (1 === q.mipmapCount && (k.minFilter = 1006),
              (k.format = q.format),
              (k.needsUpdate = !0),
              b && b(k));
          },
          d,
          e
        );
      }
      var g = this,
        h = [],
        k = new Qd();
      k.image = h;
      var l = new Nb(this.manager);
      l.setPath(this.path);
      l.setResponseType("arraybuffer");
      l.setRequestHeader(this.requestHeader);
      var m = 0;
      if (Array.isArray(a)) for (var n = 0, p = a.length; n < p; ++n) f(n);
      else
        l.load(
          a,
          function (t) {
            t = g.parse(t, !0);
            if (t.isCubemap)
              for (
                var q = t.mipmaps.length / t.mipmapCount, v = 0;
                v < q;
                v++
              ) {
                h[v] = { mipmaps: [] };
                for (var u = 0; u < t.mipmapCount; u++)
                  h[v].mipmaps.push(t.mipmaps[v * t.mipmapCount + u]),
                    (h[v].format = t.format),
                    (h[v].width = t.width),
                    (h[v].height = t.height);
              }
            else
              (k.image.width = t.width),
                (k.image.height = t.height),
                (k.mipmaps = t.mipmaps);
            1 === t.mipmapCount && (k.minFilter = 1006);
            k.format = t.format;
            k.needsUpdate = !0;
            b && b(k);
          },
          d,
          e
        );
      return k;
    },
  });
  fe.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: fe,
    load: function (a, b, d, e) {
      function f() {
        l.removeEventListener("load", f, !1);
        l.removeEventListener("error", g, !1);
        vd.add(a, this);
        b && b(this);
        h.manager.itemEnd(a);
      }
      function g(m) {
        l.removeEventListener("load", f, !1);
        l.removeEventListener("error", g, !1);
        e && e(m);
        h.manager.itemError(a);
        h.manager.itemEnd(a);
      }
      void 0 !== this.path && (a = this.path + a);
      a = this.manager.resolveURL(a);
      var h = this,
        k = vd.get(a);
      if (void 0 !== k)
        return (
          h.manager.itemStart(a),
          setTimeout(function () {
            b && b(k);
            h.manager.itemEnd(a);
          }, 0),
          k
        );
      var l = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
      l.addEventListener("load", f, !1);
      l.addEventListener("error", g, !1);
      "data:" !== a.substr(0, 5) &&
        void 0 !== this.crossOrigin &&
        (l.crossOrigin = this.crossOrigin);
      h.manager.itemStart(a);
      l.src = a;
      return l;
    },
  });
  jg.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: jg,
    load: function (a, b, d, e) {
      function f(l) {
        h.load(
          a[l],
          function (m) {
            g.images[l] = m;
            k++;
            6 === k && ((g.needsUpdate = !0), b && b(g));
          },
          void 0,
          e
        );
      }
      var g = new kc(),
        h = new fe(this.manager);
      h.setCrossOrigin(this.crossOrigin);
      h.setPath(this.path);
      var k = 0;
      for (d = 0; d < a.length; ++d) f(d);
      return g;
    },
  });
  kg.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: kg,
    load: function (a, b, d, e) {
      var f = this,
        g = new bd(),
        h = new Nb(this.manager);
      h.setResponseType("arraybuffer");
      h.setRequestHeader(this.requestHeader);
      h.setPath(this.path);
      h.load(
        a,
        function (k) {
          if ((k = f.parse(k)))
            void 0 !== k.image
              ? (g.image = k.image)
              : void 0 !== k.data &&
                ((g.image.width = k.width),
                (g.image.height = k.height),
                (g.image.data = k.data)),
              (g.wrapS = void 0 !== k.wrapS ? k.wrapS : 1001),
              (g.wrapT = void 0 !== k.wrapT ? k.wrapT : 1001),
              (g.magFilter = void 0 !== k.magFilter ? k.magFilter : 1006),
              (g.minFilter = void 0 !== k.minFilter ? k.minFilter : 1006),
              (g.anisotropy = void 0 !== k.anisotropy ? k.anisotropy : 1),
              void 0 !== k.format && (g.format = k.format),
              void 0 !== k.type && (g.type = k.type),
              void 0 !== k.mipmaps &&
                ((g.mipmaps = k.mipmaps), (g.minFilter = 1008)),
              1 === k.mipmapCount && (g.minFilter = 1006),
              (g.needsUpdate = !0),
              b && b(g, k);
        },
        d,
        e
      );
      return g;
    },
  });
  lg.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: lg,
    load: function (a, b, d, e) {
      var f = new Oa(),
        g = new fe(this.manager);
      g.setCrossOrigin(this.crossOrigin);
      g.setPath(this.path);
      g.load(
        a,
        function (h) {
          f.image = h;
          h =
            0 < a.search(/\.jpe?g($|\?)/i) ||
            0 === a.search(/^data:image\/jpeg/);
          f.format = h ? 1022 : 1023;
          f.needsUpdate = !0;
          void 0 !== b && b(f);
        },
        d,
        e
      );
      return f;
    },
  });
  Object.assign(oa.prototype, {
    getPoint: function () {
      console.warn("THREE.Curve: .getPoint() not implemented.");
      return null;
    },
    getPointAt: function (a, b) {
      a = this.getUtoTmapping(a);
      return this.getPoint(a, b);
    },
    getPoints: function (a) {
      void 0 === a && (a = 5);
      for (var b = [], d = 0; d <= a; d++) b.push(this.getPoint(d / a));
      return b;
    },
    getSpacedPoints: function (a) {
      void 0 === a && (a = 5);
      for (var b = [], d = 0; d <= a; d++) b.push(this.getPointAt(d / a));
      return b;
    },
    getLength: function () {
      var a = this.getLengths();
      return a[a.length - 1];
    },
    getLengths: function (a) {
      void 0 === a && (a = this.arcLengthDivisions);
      if (
        this.cacheArcLengths &&
        this.cacheArcLengths.length === a + 1 &&
        !this.needsUpdate
      )
        return this.cacheArcLengths;
      this.needsUpdate = !1;
      var b = [],
        d = this.getPoint(0),
        e = 0;
      b.push(0);
      for (var f = 1; f <= a; f++) {
        var g = this.getPoint(f / a);
        e += g.distanceTo(d);
        b.push(e);
        d = g;
      }
      return (this.cacheArcLengths = b);
    },
    updateArcLengths: function () {
      this.needsUpdate = !0;
      this.getLengths();
    },
    getUtoTmapping: function (a, b) {
      var d = this.getLengths(),
        e = d.length;
      b = b ? b : a * d[e - 1];
      for (var f = 0, g = e - 1, h; f <= g; )
        if (((a = Math.floor(f + (g - f) / 2)), (h = d[a] - b), 0 > h))
          f = a + 1;
        else if (0 < h) g = a - 1;
        else {
          g = a;
          break;
        }
      a = g;
      if (d[a] === b) return a / (e - 1);
      f = d[a];
      return (a + (b - f) / (d[a + 1] - f)) / (e - 1);
    },
    getTangent: function (a, b) {
      var d = a - 1e-4;
      a += 1e-4;
      0 > d && (d = 0);
      1 < a && (a = 1);
      d = this.getPoint(d);
      a = this.getPoint(a);
      b = b || (d.isVector2 ? new L() : new w());
      b.copy(a).sub(d).normalize();
      return b;
    },
    getTangentAt: function (a, b) {
      a = this.getUtoTmapping(a);
      return this.getTangent(a, b);
    },
    computeFrenetFrames: function (a, b) {
      for (
        var d = new w(),
          e = [],
          f = [],
          g = [],
          h = new w(),
          k = new da(),
          l = 0;
        l <= a;
        l++
      )
        (e[l] = this.getTangentAt(l / a, new w())), e[l].normalize();
      f[0] = new w();
      g[0] = new w();
      l = Number.MAX_VALUE;
      var m = Math.abs(e[0].x),
        n = Math.abs(e[0].y),
        p = Math.abs(e[0].z);
      m <= l && ((l = m), d.set(1, 0, 0));
      n <= l && ((l = n), d.set(0, 1, 0));
      p <= l && d.set(0, 0, 1);
      h.crossVectors(e[0], d).normalize();
      f[0].crossVectors(e[0], h);
      g[0].crossVectors(e[0], f[0]);
      for (d = 1; d <= a; d++)
        (f[d] = f[d - 1].clone()),
          (g[d] = g[d - 1].clone()),
          h.crossVectors(e[d - 1], e[d]),
          h.length() > Number.EPSILON &&
            (h.normalize(),
            (l = Math.acos(xa.clamp(e[d - 1].dot(e[d]), -1, 1))),
            f[d].applyMatrix4(k.makeRotationAxis(h, l))),
          g[d].crossVectors(e[d], f[d]);
      if (!0 === b)
        for (
          b = Math.acos(xa.clamp(f[0].dot(f[a]), -1, 1)),
            b /= a,
            0 < e[0].dot(h.crossVectors(f[0], f[a])) && (b = -b),
            h = 1;
          h <= a;
          h++
        )
          f[h].applyMatrix4(k.makeRotationAxis(e[h], b * h)),
            g[h].crossVectors(e[h], f[h]);
      return { tangents: e, normals: f, binormals: g };
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    copy: function (a) {
      this.arcLengthDivisions = a.arcLengthDivisions;
      return this;
    },
    toJSON: function () {
      var a = {
        metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" },
      };
      a.arcLengthDivisions = this.arcLengthDivisions;
      a.type = this.type;
      return a;
    },
    fromJSON: function (a) {
      this.arcLengthDivisions = a.arcLengthDivisions;
      return this;
    },
  });
  Ib.prototype = Object.create(oa.prototype);
  Ib.prototype.constructor = Ib;
  Ib.prototype.isEllipseCurve = !0;
  Ib.prototype.getPoint = function (a, b) {
    b = b || new L();
    for (
      var d = 2 * Math.PI,
        e = this.aEndAngle - this.aStartAngle,
        f = Math.abs(e) < Number.EPSILON;
      0 > e;

    )
      e += d;
    for (; e > d; ) e -= d;
    e < Number.EPSILON && (e = f ? 0 : d);
    !0 !== this.aClockwise || f || (e = e === d ? -d : e - d);
    d = this.aStartAngle + a * e;
    a = this.aX + this.xRadius * Math.cos(d);
    var g = this.aY + this.yRadius * Math.sin(d);
    0 !== this.aRotation &&
      ((d = Math.cos(this.aRotation)),
      (e = Math.sin(this.aRotation)),
      (f = a - this.aX),
      (g -= this.aY),
      (a = f * d - g * e + this.aX),
      (g = f * e + g * d + this.aY));
    return b.set(a, g);
  };
  Ib.prototype.copy = function (a) {
    oa.prototype.copy.call(this, a);
    this.aX = a.aX;
    this.aY = a.aY;
    this.xRadius = a.xRadius;
    this.yRadius = a.yRadius;
    this.aStartAngle = a.aStartAngle;
    this.aEndAngle = a.aEndAngle;
    this.aClockwise = a.aClockwise;
    this.aRotation = a.aRotation;
    return this;
  };
  Ib.prototype.toJSON = function () {
    var a = oa.prototype.toJSON.call(this);
    a.aX = this.aX;
    a.aY = this.aY;
    a.xRadius = this.xRadius;
    a.yRadius = this.yRadius;
    a.aStartAngle = this.aStartAngle;
    a.aEndAngle = this.aEndAngle;
    a.aClockwise = this.aClockwise;
    a.aRotation = this.aRotation;
    return a;
  };
  Ib.prototype.fromJSON = function (a) {
    oa.prototype.fromJSON.call(this, a);
    this.aX = a.aX;
    this.aY = a.aY;
    this.xRadius = a.xRadius;
    this.yRadius = a.yRadius;
    this.aStartAngle = a.aStartAngle;
    this.aEndAngle = a.aEndAngle;
    this.aClockwise = a.aClockwise;
    this.aRotation = a.aRotation;
    return this;
  };
  ge.prototype = Object.create(Ib.prototype);
  ge.prototype.constructor = ge;
  ge.prototype.isArcCurve = !0;
  var Ug = new w(),
    mi = new Dh(),
    ni = new Dh(),
    oi = new Dh();
  ob.prototype = Object.create(oa.prototype);
  ob.prototype.constructor = ob;
  ob.prototype.isCatmullRomCurve3 = !0;
  ob.prototype.getPoint = function (a, b) {
    b = b || new w();
    var d = this.points,
      e = d.length;
    a *= e - (this.closed ? 0 : 1);
    var f = Math.floor(a);
    a -= f;
    this.closed
      ? (f += 0 < f ? 0 : (Math.floor(Math.abs(f) / e) + 1) * e)
      : 0 === a && f === e - 1 && ((f = e - 2), (a = 1));
    if (this.closed || 0 < f) var g = d[(f - 1) % e];
    else Ug.subVectors(d[0], d[1]).add(d[0]), (g = Ug);
    var h = d[f % e],
      k = d[(f + 1) % e];
    this.closed || f + 2 < e
      ? (d = d[(f + 2) % e])
      : (Ug.subVectors(d[e - 1], d[e - 2]).add(d[e - 1]), (d = Ug));
    if ("centripetal" === this.curveType || "chordal" === this.curveType) {
      var l = "chordal" === this.curveType ? 0.5 : 0.25;
      e = Math.pow(g.distanceToSquared(h), l);
      f = Math.pow(h.distanceToSquared(k), l);
      l = Math.pow(k.distanceToSquared(d), l);
      1e-4 > f && (f = 1);
      1e-4 > e && (e = f);
      1e-4 > l && (l = f);
      mi.initNonuniformCatmullRom(g.x, h.x, k.x, d.x, e, f, l);
      ni.initNonuniformCatmullRom(g.y, h.y, k.y, d.y, e, f, l);
      oi.initNonuniformCatmullRom(g.z, h.z, k.z, d.z, e, f, l);
    } else
      "catmullrom" === this.curveType &&
        (mi.initCatmullRom(g.x, h.x, k.x, d.x, this.tension),
        ni.initCatmullRom(g.y, h.y, k.y, d.y, this.tension),
        oi.initCatmullRom(g.z, h.z, k.z, d.z, this.tension));
    b.set(mi.calc(a), ni.calc(a), oi.calc(a));
    return b;
  };
  ob.prototype.copy = function (a) {
    oa.prototype.copy.call(this, a);
    this.points = [];
    for (var b = 0, d = a.points.length; b < d; b++)
      this.points.push(a.points[b].clone());
    this.closed = a.closed;
    this.curveType = a.curveType;
    this.tension = a.tension;
    return this;
  };
  ob.prototype.toJSON = function () {
    var a = oa.prototype.toJSON.call(this);
    a.points = [];
    for (var b = 0, d = this.points.length; b < d; b++)
      a.points.push(this.points[b].toArray());
    a.closed = this.closed;
    a.curveType = this.curveType;
    a.tension = this.tension;
    return a;
  };
  ob.prototype.fromJSON = function (a) {
    oa.prototype.fromJSON.call(this, a);
    this.points = [];
    for (var b = 0, d = a.points.length; b < d; b++) {
      var e = a.points[b];
      this.points.push(new w().fromArray(e));
    }
    this.closed = a.closed;
    this.curveType = a.curveType;
    this.tension = a.tension;
    return this;
  };
  Sb.prototype = Object.create(oa.prototype);
  Sb.prototype.constructor = Sb;
  Sb.prototype.isCubicBezierCurve = !0;
  Sb.prototype.getPoint = function (a, b) {
    b = b || new L();
    var d = this.v0,
      e = this.v1,
      f = this.v2,
      g = this.v3;
    b.set(rf(a, d.x, e.x, f.x, g.x), rf(a, d.y, e.y, f.y, g.y));
    return b;
  };
  Sb.prototype.copy = function (a) {
    oa.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    this.v3.copy(a.v3);
    return this;
  };
  Sb.prototype.toJSON = function () {
    var a = oa.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    a.v3 = this.v3.toArray();
    return a;
  };
  Sb.prototype.fromJSON = function (a) {
    oa.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    this.v3.fromArray(a.v3);
    return this;
  };
  dc.prototype = Object.create(oa.prototype);
  dc.prototype.constructor = dc;
  dc.prototype.isCubicBezierCurve3 = !0;
  dc.prototype.getPoint = function (a, b) {
    b = b || new w();
    var d = this.v0,
      e = this.v1,
      f = this.v2,
      g = this.v3;
    b.set(
      rf(a, d.x, e.x, f.x, g.x),
      rf(a, d.y, e.y, f.y, g.y),
      rf(a, d.z, e.z, f.z, g.z)
    );
    return b;
  };
  dc.prototype.copy = function (a) {
    oa.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    this.v3.copy(a.v3);
    return this;
  };
  dc.prototype.toJSON = function () {
    var a = oa.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    a.v3 = this.v3.toArray();
    return a;
  };
  dc.prototype.fromJSON = function (a) {
    oa.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    this.v3.fromArray(a.v3);
    return this;
  };
  Ab.prototype = Object.create(oa.prototype);
  Ab.prototype.constructor = Ab;
  Ab.prototype.isLineCurve = !0;
  Ab.prototype.getPoint = function (a, b) {
    b = b || new L();
    1 === a
      ? b.copy(this.v2)
      : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1));
    return b;
  };
  Ab.prototype.getPointAt = function (a, b) {
    return this.getPoint(a, b);
  };
  Ab.prototype.getTangent = function (a, b) {
    a = b || new L();
    a.copy(this.v2).sub(this.v1).normalize();
    return a;
  };
  Ab.prototype.copy = function (a) {
    oa.prototype.copy.call(this, a);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };
  Ab.prototype.toJSON = function () {
    var a = oa.prototype.toJSON.call(this);
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };
  Ab.prototype.fromJSON = function (a) {
    oa.prototype.fromJSON.call(this, a);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };
  Tb.prototype = Object.create(oa.prototype);
  Tb.prototype.constructor = Tb;
  Tb.prototype.isLineCurve3 = !0;
  Tb.prototype.getPoint = function (a, b) {
    b = b || new w();
    1 === a
      ? b.copy(this.v2)
      : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1));
    return b;
  };
  Tb.prototype.getPointAt = function (a, b) {
    return this.getPoint(a, b);
  };
  Tb.prototype.copy = function (a) {
    oa.prototype.copy.call(this, a);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };
  Tb.prototype.toJSON = function () {
    var a = oa.prototype.toJSON.call(this);
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };
  Tb.prototype.fromJSON = function (a) {
    oa.prototype.fromJSON.call(this, a);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };
  Ub.prototype = Object.create(oa.prototype);
  Ub.prototype.constructor = Ub;
  Ub.prototype.isQuadraticBezierCurve = !0;
  Ub.prototype.getPoint = function (a, b) {
    b = b || new L();
    var d = this.v0,
      e = this.v1,
      f = this.v2;
    b.set(qf(a, d.x, e.x, f.x), qf(a, d.y, e.y, f.y));
    return b;
  };
  Ub.prototype.copy = function (a) {
    oa.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };
  Ub.prototype.toJSON = function () {
    var a = oa.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };
  Ub.prototype.fromJSON = function (a) {
    oa.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };
  ec.prototype = Object.create(oa.prototype);
  ec.prototype.constructor = ec;
  ec.prototype.isQuadraticBezierCurve3 = !0;
  ec.prototype.getPoint = function (a, b) {
    b = b || new w();
    var d = this.v0,
      e = this.v1,
      f = this.v2;
    b.set(qf(a, d.x, e.x, f.x), qf(a, d.y, e.y, f.y), qf(a, d.z, e.z, f.z));
    return b;
  };
  ec.prototype.copy = function (a) {
    oa.prototype.copy.call(this, a);
    this.v0.copy(a.v0);
    this.v1.copy(a.v1);
    this.v2.copy(a.v2);
    return this;
  };
  ec.prototype.toJSON = function () {
    var a = oa.prototype.toJSON.call(this);
    a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray();
    a.v2 = this.v2.toArray();
    return a;
  };
  ec.prototype.fromJSON = function (a) {
    oa.prototype.fromJSON.call(this, a);
    this.v0.fromArray(a.v0);
    this.v1.fromArray(a.v1);
    this.v2.fromArray(a.v2);
    return this;
  };
  Vb.prototype = Object.create(oa.prototype);
  Vb.prototype.constructor = Vb;
  Vb.prototype.isSplineCurve = !0;
  Vb.prototype.getPoint = function (a, b) {
    b = b || new L();
    var d = this.points,
      e = (d.length - 1) * a;
    a = Math.floor(e);
    e -= a;
    var f = d[0 === a ? a : a - 1],
      g = d[a],
      h = d[a > d.length - 2 ? d.length - 1 : a + 1];
    d = d[a > d.length - 3 ? d.length - 1 : a + 2];
    b.set(kj(e, f.x, g.x, h.x, d.x), kj(e, f.y, g.y, h.y, d.y));
    return b;
  };
  Vb.prototype.copy = function (a) {
    oa.prototype.copy.call(this, a);
    this.points = [];
    for (var b = 0, d = a.points.length; b < d; b++)
      this.points.push(a.points[b].clone());
    return this;
  };
  Vb.prototype.toJSON = function () {
    var a = oa.prototype.toJSON.call(this);
    a.points = [];
    for (var b = 0, d = this.points.length; b < d; b++)
      a.points.push(this.points[b].toArray());
    return a;
  };
  Vb.prototype.fromJSON = function (a) {
    oa.prototype.fromJSON.call(this, a);
    this.points = [];
    for (var b = 0, d = a.points.length; b < d; b++) {
      var e = a.points[b];
      this.points.push(new L().fromArray(e));
    }
    return this;
  };
  var pi = Object.freeze({
    __proto__: null,
    ArcCurve: ge,
    CatmullRomCurve3: ob,
    CubicBezierCurve: Sb,
    CubicBezierCurve3: dc,
    EllipseCurve: Ib,
    LineCurve: Ab,
    LineCurve3: Tb,
    QuadraticBezierCurve: Ub,
    QuadraticBezierCurve3: ec,
    SplineCurve: Vb,
  });
  qc.prototype = Object.assign(Object.create(oa.prototype), {
    constructor: qc,
    add: function (a) {
      this.curves.push(a);
    },
    closePath: function () {
      var a = this.curves[0].getPoint(0),
        b = this.curves[this.curves.length - 1].getPoint(1);
      a.equals(b) || this.curves.push(new Ab(b, a));
    },
    getPoint: function (a) {
      var b = a * this.getLength(),
        d = this.getCurveLengths();
      for (a = 0; a < d.length; ) {
        if (d[a] >= b)
          return (
            (b = d[a] - b),
            (a = this.curves[a]),
            (d = a.getLength()),
            a.getPointAt(0 === d ? 0 : 1 - b / d)
          );
        a++;
      }
      return null;
    },
    getLength: function () {
      var a = this.getCurveLengths();
      return a[a.length - 1];
    },
    updateArcLengths: function () {
      this.needsUpdate = !0;
      this.cacheLengths = null;
      this.getCurveLengths();
    },
    getCurveLengths: function () {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      for (var a = [], b = 0, d = 0, e = this.curves.length; d < e; d++)
        (b += this.curves[d].getLength()), a.push(b);
      return (this.cacheLengths = a);
    },
    getSpacedPoints: function (a) {
      void 0 === a && (a = 40);
      for (var b = [], d = 0; d <= a; d++) b.push(this.getPoint(d / a));
      this.autoClose && b.push(b[0]);
      return b;
    },
    getPoints: function (a) {
      a = a || 12;
      for (var b = [], d, e = 0, f = this.curves; e < f.length; e++) {
        var g = f[e];
        g = g.getPoints(
          g && g.isEllipseCurve
            ? 2 * a
            : g && (g.isLineCurve || g.isLineCurve3)
            ? 1
            : g && g.isSplineCurve
            ? a * g.points.length
            : a
        );
        for (var h = 0; h < g.length; h++) {
          var k = g[h];
          (d && d.equals(k)) || (b.push(k), (d = k));
        }
      }
      this.autoClose &&
        1 < b.length &&
        !b[b.length - 1].equals(b[0]) &&
        b.push(b[0]);
      return b;
    },
    copy: function (a) {
      oa.prototype.copy.call(this, a);
      this.curves = [];
      for (var b = 0, d = a.curves.length; b < d; b++)
        this.curves.push(a.curves[b].clone());
      this.autoClose = a.autoClose;
      return this;
    },
    toJSON: function () {
      var a = oa.prototype.toJSON.call(this);
      a.autoClose = this.autoClose;
      a.curves = [];
      for (var b = 0, d = this.curves.length; b < d; b++)
        a.curves.push(this.curves[b].toJSON());
      return a;
    },
    fromJSON: function (a) {
      oa.prototype.fromJSON.call(this, a);
      this.autoClose = a.autoClose;
      this.curves = [];
      for (var b = 0, d = a.curves.length; b < d; b++) {
        var e = a.curves[b];
        this.curves.push(new pi[e.type]().fromJSON(e));
      }
      return this;
    },
  });
  Wb.prototype = Object.assign(Object.create(qc.prototype), {
    constructor: Wb,
    setFromPoints: function (a) {
      this.moveTo(a[0].x, a[0].y);
      for (var b = 1, d = a.length; b < d; b++) this.lineTo(a[b].x, a[b].y);
      return this;
    },
    moveTo: function (a, b) {
      this.currentPoint.set(a, b);
      return this;
    },
    lineTo: function (a, b) {
      var d = new Ab(this.currentPoint.clone(), new L(a, b));
      this.curves.push(d);
      this.currentPoint.set(a, b);
      return this;
    },
    quadraticCurveTo: function (a, b, d, e) {
      a = new Ub(this.currentPoint.clone(), new L(a, b), new L(d, e));
      this.curves.push(a);
      this.currentPoint.set(d, e);
      return this;
    },
    bezierCurveTo: function (a, b, d, e, f, g) {
      a = new Sb(
        this.currentPoint.clone(),
        new L(a, b),
        new L(d, e),
        new L(f, g)
      );
      this.curves.push(a);
      this.currentPoint.set(f, g);
      return this;
    },
    splineThru: function (a) {
      var b = [this.currentPoint.clone()].concat(a);
      b = new Vb(b);
      this.curves.push(b);
      this.currentPoint.copy(a[a.length - 1]);
      return this;
    },
    arc: function (a, b, d, e, f, g) {
      this.absarc(a + this.currentPoint.x, b + this.currentPoint.y, d, e, f, g);
      return this;
    },
    absarc: function (a, b, d, e, f, g) {
      this.absellipse(a, b, d, d, e, f, g);
      return this;
    },
    ellipse: function (a, b, d, e, f, g, h, k) {
      this.absellipse(
        a + this.currentPoint.x,
        b + this.currentPoint.y,
        d,
        e,
        f,
        g,
        h,
        k
      );
      return this;
    },
    absellipse: function (a, b, d, e, f, g, h, k) {
      a = new Ib(a, b, d, e, f, g, h, k);
      0 < this.curves.length &&
        ((b = a.getPoint(0)),
        b.equals(this.currentPoint) || this.lineTo(b.x, b.y));
      this.curves.push(a);
      a = a.getPoint(1);
      this.currentPoint.copy(a);
      return this;
    },
    copy: function (a) {
      qc.prototype.copy.call(this, a);
      this.currentPoint.copy(a.currentPoint);
      return this;
    },
    toJSON: function () {
      var a = qc.prototype.toJSON.call(this);
      a.currentPoint = this.currentPoint.toArray();
      return a;
    },
    fromJSON: function (a) {
      qc.prototype.fromJSON.call(this, a);
      this.currentPoint.fromArray(a.currentPoint);
      return this;
    },
  });
  Pc.prototype = Object.assign(Object.create(Wb.prototype), {
    constructor: Pc,
    getPointsHoles: function (a) {
      for (var b = [], d = 0, e = this.holes.length; d < e; d++)
        b[d] = this.holes[d].getPoints(a);
      return b;
    },
    extractPoints: function (a) {
      return { shape: this.getPoints(a), holes: this.getPointsHoles(a) };
    },
    copy: function (a) {
      Wb.prototype.copy.call(this, a);
      this.holes = [];
      for (var b = 0, d = a.holes.length; b < d; b++)
        this.holes.push(a.holes[b].clone());
      return this;
    },
    toJSON: function () {
      var a = Wb.prototype.toJSON.call(this);
      a.uuid = this.uuid;
      a.holes = [];
      for (var b = 0, d = this.holes.length; b < d; b++)
        a.holes.push(this.holes[b].toJSON());
      return a;
    },
    fromJSON: function (a) {
      Wb.prototype.fromJSON.call(this, a);
      this.uuid = a.uuid;
      this.holes = [];
      for (var b = 0, d = a.holes.length; b < d; b++) {
        var e = a.holes[b];
        this.holes.push(new Wb().fromJSON(e));
      }
      return this;
    },
  });
  Sa.prototype = Object.assign(Object.create(ha.prototype), {
    constructor: Sa,
    isLight: !0,
    copy: function (a) {
      ha.prototype.copy.call(this, a);
      this.color.copy(a.color);
      this.intensity = a.intensity;
      return this;
    },
    toJSON: function (a) {
      a = ha.prototype.toJSON.call(this, a);
      a.object.color = this.color.getHex();
      a.object.intensity = this.intensity;
      void 0 !== this.groundColor &&
        (a.object.groundColor = this.groundColor.getHex());
      void 0 !== this.distance && (a.object.distance = this.distance);
      void 0 !== this.angle && (a.object.angle = this.angle);
      void 0 !== this.decay && (a.object.decay = this.decay);
      void 0 !== this.penumbra && (a.object.penumbra = this.penumbra);
      void 0 !== this.shadow && (a.object.shadow = this.shadow.toJSON());
      return a;
    },
  });
  mg.prototype = Object.assign(Object.create(Sa.prototype), {
    constructor: mg,
    isHemisphereLight: !0,
    copy: function (a) {
      Sa.prototype.copy.call(this, a);
      this.groundColor.copy(a.groundColor);
      return this;
    },
  });
  Object.assign(fc.prototype, {
    _projScreenMatrix: new da(),
    _lightPositionWorld: new w(),
    _lookTarget: new w(),
    getViewportCount: function () {
      return this._viewportCount;
    },
    getFrustum: function () {
      return this._frustum;
    },
    updateMatrices: function (a) {
      var b = this.camera,
        d = this.matrix,
        e = this._projScreenMatrix,
        f = this._lookTarget,
        g = this._lightPositionWorld;
      g.setFromMatrixPosition(a.matrixWorld);
      b.position.copy(g);
      f.setFromMatrixPosition(a.target.matrixWorld);
      b.lookAt(f);
      b.updateMatrixWorld();
      e.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse);
      this._frustum.setFromProjectionMatrix(e);
      d.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
      d.multiply(b.projectionMatrix);
      d.multiply(b.matrixWorldInverse);
    },
    getViewport: function (a) {
      return this._viewports[a];
    },
    getFrameExtents: function () {
      return this._frameExtents;
    },
    copy: function (a) {
      this.camera = a.camera.clone();
      this.bias = a.bias;
      this.radius = a.radius;
      this.mapSize.copy(a.mapSize);
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    toJSON: function () {
      var a = {};
      0 !== this.bias && (a.bias = this.bias);
      0 !== this.normalBias && (a.normalBias = this.normalBias);
      1 !== this.radius && (a.radius = this.radius);
      if (512 !== this.mapSize.x || 512 !== this.mapSize.y)
        a.mapSize = this.mapSize.toArray();
      a.camera = this.camera.toJSON(!1).object;
      delete a.camera.matrix;
      return a;
    },
  });
  Eh.prototype = Object.assign(Object.create(fc.prototype), {
    constructor: Eh,
    isSpotLightShadow: !0,
    updateMatrices: function (a) {
      var b = this.camera,
        d = 2 * xa.RAD2DEG * a.angle,
        e = this.mapSize.width / this.mapSize.height,
        f = a.distance || b.far;
      if (d !== b.fov || e !== b.aspect || f !== b.far)
        (b.fov = d), (b.aspect = e), (b.far = f), b.updateProjectionMatrix();
      fc.prototype.updateMatrices.call(this, a);
    },
  });
  ng.prototype = Object.assign(Object.create(Sa.prototype), {
    constructor: ng,
    isSpotLight: !0,
    copy: function (a) {
      Sa.prototype.copy.call(this, a);
      this.distance = a.distance;
      this.angle = a.angle;
      this.penumbra = a.penumbra;
      this.decay = a.decay;
      this.target = a.target.clone();
      this.shadow = a.shadow.clone();
      return this;
    },
  });
  Fh.prototype = Object.assign(Object.create(fc.prototype), {
    constructor: Fh,
    isPointLightShadow: !0,
    updateMatrices: function (a, b) {
      void 0 === b && (b = 0);
      var d = this.camera,
        e = this.matrix,
        f = this._lightPositionWorld,
        g = this._lookTarget,
        h = this._projScreenMatrix;
      f.setFromMatrixPosition(a.matrixWorld);
      d.position.copy(f);
      g.copy(d.position);
      g.add(this._cubeDirections[b]);
      d.up.copy(this._cubeUps[b]);
      d.lookAt(g);
      d.updateMatrixWorld();
      e.makeTranslation(-f.x, -f.y, -f.z);
      h.multiplyMatrices(d.projectionMatrix, d.matrixWorldInverse);
      this._frustum.setFromProjectionMatrix(h);
    },
  });
  og.prototype = Object.assign(Object.create(Sa.prototype), {
    constructor: og,
    isPointLight: !0,
    copy: function (a) {
      Sa.prototype.copy.call(this, a);
      this.distance = a.distance;
      this.decay = a.decay;
      this.shadow = a.shadow.clone();
      return this;
    },
  });
  he.prototype = Object.assign(Object.create(ac.prototype), {
    constructor: he,
    isOrthographicCamera: !0,
    copy: function (a, b) {
      ac.prototype.copy.call(this, a, b);
      this.left = a.left;
      this.right = a.right;
      this.top = a.top;
      this.bottom = a.bottom;
      this.near = a.near;
      this.far = a.far;
      this.zoom = a.zoom;
      this.view = null === a.view ? null : Object.assign({}, a.view);
      return this;
    },
    setViewOffset: function (a, b, d, e, f, g) {
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        });
      this.view.enabled = !0;
      this.view.fullWidth = a;
      this.view.fullHeight = b;
      this.view.offsetX = d;
      this.view.offsetY = e;
      this.view.width = f;
      this.view.height = g;
      this.updateProjectionMatrix();
    },
    clearViewOffset: function () {
      null !== this.view && (this.view.enabled = !1);
      this.updateProjectionMatrix();
    },
    updateProjectionMatrix: function () {
      var a = (this.right - this.left) / (2 * this.zoom),
        b = (this.top - this.bottom) / (2 * this.zoom),
        d = (this.right + this.left) / 2,
        e = (this.top + this.bottom) / 2,
        f = d - a;
      d += a;
      a = e + b;
      b = e - b;
      null !== this.view &&
        this.view.enabled &&
        ((e = (this.right - this.left) / this.view.fullWidth / this.zoom),
        (b = (this.top - this.bottom) / this.view.fullHeight / this.zoom),
        (f += e * this.view.offsetX),
        (d = f + e * this.view.width),
        (a -= b * this.view.offsetY),
        (b = a - b * this.view.height));
      this.projectionMatrix.makeOrthographic(f, d, a, b, this.near, this.far);
      this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON: function (a) {
      a = ha.prototype.toJSON.call(this, a);
      a.object.zoom = this.zoom;
      a.object.left = this.left;
      a.object.right = this.right;
      a.object.top = this.top;
      a.object.bottom = this.bottom;
      a.object.near = this.near;
      a.object.far = this.far;
      null !== this.view && (a.object.view = Object.assign({}, this.view));
      return a;
    },
  });
  Gh.prototype = Object.assign(Object.create(fc.prototype), {
    constructor: Gh,
    isDirectionalLightShadow: !0,
    updateMatrices: function (a) {
      fc.prototype.updateMatrices.call(this, a);
    },
  });
  pg.prototype = Object.assign(Object.create(Sa.prototype), {
    constructor: pg,
    isDirectionalLight: !0,
    copy: function (a) {
      Sa.prototype.copy.call(this, a);
      this.target = a.target.clone();
      this.shadow = a.shadow.clone();
      return this;
    },
  });
  qg.prototype = Object.assign(Object.create(Sa.prototype), {
    constructor: qg,
    isAmbientLight: !0,
  });
  rg.prototype = Object.assign(Object.create(Sa.prototype), {
    constructor: rg,
    isRectAreaLight: !0,
    copy: function (a) {
      Sa.prototype.copy.call(this, a);
      this.width = a.width;
      this.height = a.height;
      return this;
    },
    toJSON: function (a) {
      a = Sa.prototype.toJSON.call(this, a);
      a.object.width = this.width;
      a.object.height = this.height;
      return a;
    },
  });
  var pb = function () {
    Object.defineProperty(this, "isSphericalHarmonics3", { value: !0 });
    this.coefficients = [];
    for (var a = 0; 9 > a; a++) this.coefficients.push(new w());
  };
  pb.prototype.set = function (a) {
    for (var b = 0; 9 > b; b++) this.coefficients[b].copy(a[b]);
    return this;
  };
  pb.prototype.zero = function () {
    for (var a = 0; 9 > a; a++) this.coefficients[a].set(0, 0, 0);
    return this;
  };
  pb.prototype.getAt = function (a, b) {
    var d = a.x,
      e = a.y;
    a = a.z;
    var f = this.coefficients;
    b.copy(f[0]).multiplyScalar(0.282095);
    b.addScaledVector(f[1], 0.488603 * e);
    b.addScaledVector(f[2], 0.488603 * a);
    b.addScaledVector(f[3], 0.488603 * d);
    b.addScaledVector(f[4], 1.092548 * d * e);
    b.addScaledVector(f[5], 1.092548 * e * a);
    b.addScaledVector(f[6], 0.315392 * (3 * a * a - 1));
    b.addScaledVector(f[7], 1.092548 * d * a);
    b.addScaledVector(f[8], 0.546274 * (d * d - e * e));
    return b;
  };
  pb.prototype.getIrradianceAt = function (a, b) {
    var d = a.x,
      e = a.y;
    a = a.z;
    var f = this.coefficients;
    b.copy(f[0]).multiplyScalar(0.886227);
    b.addScaledVector(f[1], 1.023328 * e);
    b.addScaledVector(f[2], 1.023328 * a);
    b.addScaledVector(f[3], 1.023328 * d);
    b.addScaledVector(f[4], 0.858086 * d * e);
    b.addScaledVector(f[5], 0.858086 * e * a);
    b.addScaledVector(f[6], 0.743125 * a * a - 0.247708);
    b.addScaledVector(f[7], 0.858086 * d * a);
    b.addScaledVector(f[8], 0.429043 * (d * d - e * e));
    return b;
  };
  pb.prototype.add = function (a) {
    for (var b = 0; 9 > b; b++) this.coefficients[b].add(a.coefficients[b]);
    return this;
  };
  pb.prototype.addScaledSH = function (a, b) {
    for (var d = 0; 9 > d; d++)
      this.coefficients[d].addScaledVector(a.coefficients[d], b);
    return this;
  };
  pb.prototype.scale = function (a) {
    for (var b = 0; 9 > b; b++) this.coefficients[b].multiplyScalar(a);
    return this;
  };
  pb.prototype.lerp = function (a, b) {
    for (var d = 0; 9 > d; d++) this.coefficients[d].lerp(a.coefficients[d], b);
    return this;
  };
  pb.prototype.equals = function (a) {
    for (var b = 0; 9 > b; b++)
      if (!this.coefficients[b].equals(a.coefficients[b])) return !1;
    return !0;
  };
  pb.prototype.copy = function (a) {
    return this.set(a.coefficients);
  };
  pb.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  pb.prototype.fromArray = function (a, b) {
    void 0 === b && (b = 0);
    for (var d = this.coefficients, e = 0; 9 > e; e++)
      d[e].fromArray(a, b + 3 * e);
    return this;
  };
  pb.prototype.toArray = function (a, b) {
    void 0 === a && (a = []);
    void 0 === b && (b = 0);
    for (var d = this.coefficients, e = 0; 9 > e; e++)
      d[e].toArray(a, b + 3 * e);
    return a;
  };
  pb.getBasisAt = function (a, b) {
    var d = a.x,
      e = a.y;
    a = a.z;
    b[0] = 0.282095;
    b[1] = 0.488603 * e;
    b[2] = 0.488603 * a;
    b[3] = 0.488603 * d;
    b[4] = 1.092548 * d * e;
    b[5] = 1.092548 * e * a;
    b[6] = 0.315392 * (3 * a * a - 1);
    b[7] = 1.092548 * d * a;
    b[8] = 0.546274 * (d * d - e * e);
  };
  Ob.prototype = Object.assign(Object.create(Sa.prototype), {
    constructor: Ob,
    isLightProbe: !0,
    copy: function (a) {
      Sa.prototype.copy.call(this, a);
      this.sh.copy(a.sh);
      return this;
    },
    fromJSON: function (a) {
      this.intensity = a.intensity;
      this.sh.fromArray(a.sh);
      return this;
    },
    toJSON: function (a) {
      a = Sa.prototype.toJSON.call(this, a);
      a.object.sh = this.sh.toArray();
      return a;
    },
  });
  sg.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: sg,
    load: function (a, b, d, e) {
      var f = this,
        g = new Nb(f.manager);
      g.setPath(f.path);
      g.setRequestHeader(f.requestHeader);
      g.load(
        a,
        function (h) {
          try {
            b(f.parse(JSON.parse(h)));
          } catch (k) {
            e ? e(k) : console.error(k), f.manager.itemError(a);
          }
        },
        d,
        e
      );
    },
    parse: function (a) {
      function b(k) {
        void 0 === d[k] &&
          console.warn("THREE.MaterialLoader: Undefined texture", k);
        return d[k];
      }
      var d = this.textures,
        e = new Xl[a.type]();
      void 0 !== a.uuid && (e.uuid = a.uuid);
      void 0 !== a.name && (e.name = a.name);
      void 0 !== a.color && e.color.setHex(a.color);
      void 0 !== a.roughness && (e.roughness = a.roughness);
      void 0 !== a.metalness && (e.metalness = a.metalness);
      void 0 !== a.sheen && (e.sheen = new S().setHex(a.sheen));
      void 0 !== a.emissive && e.emissive.setHex(a.emissive);
      void 0 !== a.specular && e.specular.setHex(a.specular);
      void 0 !== a.shininess && (e.shininess = a.shininess);
      void 0 !== a.clearcoat && (e.clearcoat = a.clearcoat);
      void 0 !== a.clearcoatRoughness &&
        (e.clearcoatRoughness = a.clearcoatRoughness);
      void 0 !== a.fog && (e.fog = a.fog);
      void 0 !== a.flatShading && (e.flatShading = a.flatShading);
      void 0 !== a.blending && (e.blending = a.blending);
      void 0 !== a.combine && (e.combine = a.combine);
      void 0 !== a.side && (e.side = a.side);
      void 0 !== a.opacity && (e.opacity = a.opacity);
      void 0 !== a.transparent && (e.transparent = a.transparent);
      void 0 !== a.alphaTest && (e.alphaTest = a.alphaTest);
      void 0 !== a.depthTest && (e.depthTest = a.depthTest);
      void 0 !== a.depthWrite && (e.depthWrite = a.depthWrite);
      void 0 !== a.colorWrite && (e.colorWrite = a.colorWrite);
      void 0 !== a.stencilWrite && (e.stencilWrite = a.stencilWrite);
      void 0 !== a.stencilWriteMask &&
        (e.stencilWriteMask = a.stencilWriteMask);
      void 0 !== a.stencilFunc && (e.stencilFunc = a.stencilFunc);
      void 0 !== a.stencilRef && (e.stencilRef = a.stencilRef);
      void 0 !== a.stencilFuncMask && (e.stencilFuncMask = a.stencilFuncMask);
      void 0 !== a.stencilFail && (e.stencilFail = a.stencilFail);
      void 0 !== a.stencilZFail && (e.stencilZFail = a.stencilZFail);
      void 0 !== a.stencilZPass && (e.stencilZPass = a.stencilZPass);
      void 0 !== a.wireframe && (e.wireframe = a.wireframe);
      void 0 !== a.wireframeLinewidth &&
        (e.wireframeLinewidth = a.wireframeLinewidth);
      void 0 !== a.wireframeLinecap &&
        (e.wireframeLinecap = a.wireframeLinecap);
      void 0 !== a.wireframeLinejoin &&
        (e.wireframeLinejoin = a.wireframeLinejoin);
      void 0 !== a.rotation && (e.rotation = a.rotation);
      1 !== a.linewidth && (e.linewidth = a.linewidth);
      void 0 !== a.dashSize && (e.dashSize = a.dashSize);
      void 0 !== a.gapSize && (e.gapSize = a.gapSize);
      void 0 !== a.scale && (e.scale = a.scale);
      void 0 !== a.polygonOffset && (e.polygonOffset = a.polygonOffset);
      void 0 !== a.polygonOffsetFactor &&
        (e.polygonOffsetFactor = a.polygonOffsetFactor);
      void 0 !== a.polygonOffsetUnits &&
        (e.polygonOffsetUnits = a.polygonOffsetUnits);
      void 0 !== a.skinning && (e.skinning = a.skinning);
      void 0 !== a.morphTargets && (e.morphTargets = a.morphTargets);
      void 0 !== a.morphNormals && (e.morphNormals = a.morphNormals);
      void 0 !== a.dithering && (e.dithering = a.dithering);
      void 0 !== a.vertexTangents && (e.vertexTangents = a.vertexTangents);
      void 0 !== a.visible && (e.visible = a.visible);
      void 0 !== a.toneMapped && (e.toneMapped = a.toneMapped);
      void 0 !== a.userData && (e.userData = a.userData);
      void 0 !== a.vertexColors &&
        (e.vertexColors =
          "number" === typeof a.vertexColors
            ? 0 < a.vertexColors
              ? !0
              : !1
            : a.vertexColors);
      if (void 0 !== a.uniforms)
        for (var f in a.uniforms) {
          var g = a.uniforms[f];
          e.uniforms[f] = {};
          switch (g.type) {
            case "t":
              e.uniforms[f].value = b(g.value);
              break;
            case "c":
              e.uniforms[f].value = new S().setHex(g.value);
              break;
            case "v2":
              e.uniforms[f].value = new L().fromArray(g.value);
              break;
            case "v3":
              e.uniforms[f].value = new w().fromArray(g.value);
              break;
            case "v4":
              e.uniforms[f].value = new ca().fromArray(g.value);
              break;
            case "m3":
              e.uniforms[f].value = new Da().fromArray(g.value);
              break;
            case "m4":
              e.uniforms[f].value = new da().fromArray(g.value);
              break;
            default:
              e.uniforms[f].value = g.value;
          }
        }
      void 0 !== a.defines && (e.defines = a.defines);
      void 0 !== a.vertexShader && (e.vertexShader = a.vertexShader);
      void 0 !== a.fragmentShader && (e.fragmentShader = a.fragmentShader);
      if (void 0 !== a.extensions)
        for (var h in a.extensions) e.extensions[h] = a.extensions[h];
      void 0 !== a.shading && (e.flatShading = 1 === a.shading);
      void 0 !== a.size && (e.size = a.size);
      void 0 !== a.sizeAttenuation && (e.sizeAttenuation = a.sizeAttenuation);
      void 0 !== a.map && (e.map = b(a.map));
      void 0 !== a.matcap && (e.matcap = b(a.matcap));
      void 0 !== a.alphaMap && (e.alphaMap = b(a.alphaMap));
      void 0 !== a.bumpMap && (e.bumpMap = b(a.bumpMap));
      void 0 !== a.bumpScale && (e.bumpScale = a.bumpScale);
      void 0 !== a.normalMap && (e.normalMap = b(a.normalMap));
      void 0 !== a.normalMapType && (e.normalMapType = a.normalMapType);
      void 0 !== a.normalScale &&
        ((f = a.normalScale),
        !1 === Array.isArray(f) && (f = [f, f]),
        (e.normalScale = new L().fromArray(f)));
      void 0 !== a.displacementMap &&
        (e.displacementMap = b(a.displacementMap));
      void 0 !== a.displacementScale &&
        (e.displacementScale = a.displacementScale);
      void 0 !== a.displacementBias &&
        (e.displacementBias = a.displacementBias);
      void 0 !== a.roughnessMap && (e.roughnessMap = b(a.roughnessMap));
      void 0 !== a.metalnessMap && (e.metalnessMap = b(a.metalnessMap));
      void 0 !== a.emissiveMap && (e.emissiveMap = b(a.emissiveMap));
      void 0 !== a.emissiveIntensity &&
        (e.emissiveIntensity = a.emissiveIntensity);
      void 0 !== a.specularMap && (e.specularMap = b(a.specularMap));
      void 0 !== a.envMap && (e.envMap = b(a.envMap));
      void 0 !== a.envMapIntensity && (e.envMapIntensity = a.envMapIntensity);
      void 0 !== a.reflectivity && (e.reflectivity = a.reflectivity);
      void 0 !== a.refractionRatio && (e.refractionRatio = a.refractionRatio);
      void 0 !== a.lightMap && (e.lightMap = b(a.lightMap));
      void 0 !== a.lightMapIntensity &&
        (e.lightMapIntensity = a.lightMapIntensity);
      void 0 !== a.aoMap && (e.aoMap = b(a.aoMap));
      void 0 !== a.aoMapIntensity && (e.aoMapIntensity = a.aoMapIntensity);
      void 0 !== a.gradientMap && (e.gradientMap = b(a.gradientMap));
      void 0 !== a.clearcoatMap && (e.clearcoatMap = b(a.clearcoatMap));
      void 0 !== a.clearcoatRoughnessMap &&
        (e.clearcoatRoughnessMap = b(a.clearcoatRoughnessMap));
      void 0 !== a.clearcoatNormalMap &&
        (e.clearcoatNormalMap = b(a.clearcoatNormalMap));
      void 0 !== a.clearcoatNormalScale &&
        (e.clearcoatNormalScale = new L().fromArray(a.clearcoatNormalScale));
      void 0 !== a.transmission && (e.transmission = a.transmission);
      void 0 !== a.transmissionMap &&
        (e.transmissionMap = b(a.transmissionMap));
      return e;
    },
    setTextures: function (a) {
      this.textures = a;
      return this;
    },
  });
  var qi = {
    decodeText: function (a) {
      if ("undefined" !== typeof TextDecoder)
        return new TextDecoder().decode(a);
      for (var b = "", d = 0, e = a.length; d < e; d++)
        b += String.fromCharCode(a[d]);
      try {
        return decodeURIComponent(escape(b));
      } catch (f) {
        return b;
      }
    },
    extractUrlBase: function (a) {
      var b = a.lastIndexOf("/");
      return -1 === b ? "./" : a.substr(0, b + 1);
    },
  };
  sf.prototype = Object.assign(Object.create(ka.prototype), {
    constructor: sf,
    isInstancedBufferGeometry: !0,
    copy: function (a) {
      ka.prototype.copy.call(this, a);
      this.instanceCount = a.instanceCount;
      return this;
    },
    clone: function () {
      return new this.constructor().copy(this);
    },
    toJSON: function () {
      var a = ka.prototype.toJSON.call(this);
      a.instanceCount = this.instanceCount;
      a.isInstancedBufferGeometry = !0;
      return a;
    },
  });
  tg.prototype = Object.assign(Object.create(pa.prototype), {
    constructor: tg,
    isInstancedBufferAttribute: !0,
    copy: function (a) {
      pa.prototype.copy.call(this, a);
      this.meshPerAttribute = a.meshPerAttribute;
      return this;
    },
    toJSON: function () {
      var a = pa.prototype.toJSON.call(this);
      a.meshPerAttribute = this.meshPerAttribute;
      a.isInstancedBufferAttribute = !0;
      return a;
    },
  });
  ug.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: ug,
    load: function (a, b, d, e) {
      var f = this,
        g = new Nb(f.manager);
      g.setPath(f.path);
      g.setRequestHeader(f.requestHeader);
      g.load(
        a,
        function (h) {
          try {
            b(f.parse(JSON.parse(h)));
          } catch (k) {
            e ? e(k) : console.error(k), f.manager.itemError(a);
          }
        },
        d,
        e
      );
    },
    parse: function (a) {
      function b(q, v) {
        if (void 0 !== d[v]) return d[v];
        var u = q.interleavedBuffers[v];
        var A = u.buffer;
        void 0 !== e[A]
          ? (A = e[A])
          : ((q = new Uint32Array(q.arrayBuffers[A]).buffer), (A = e[A] = q));
        A = new Vg[u.type](A);
        A = new Gb(A, u.stride);
        A.uuid = u.uuid;
        return (d[v] = A);
      }
      var d = {},
        e = {},
        f = a.isInstancedBufferGeometry ? new sf() : new ka(),
        g = a.data.index;
      void 0 !== g && ((g = new Vg[g.type](g.array)), f.setIndex(new pa(g, 1)));
      g = a.data.attributes;
      for (var h in g) {
        var k = g[h],
          l = void 0;
        k.isInterleavedBufferAttribute
          ? ((l = b(a.data, k.data)),
            (l = new Kc(l, k.itemSize, k.offset, k.normalized)))
          : ((l = new Vg[k.type](k.array)),
            (l = new (k.isInstancedBufferAttribute ? tg : pa)(
              l,
              k.itemSize,
              k.normalized
            )));
        void 0 !== k.name && (l.name = k.name);
        f.setAttribute(h, l);
      }
      if ((h = a.data.morphAttributes))
        for (var m in h) {
          g = h[m];
          k = [];
          l = 0;
          for (var n = g.length; l < n; l++) {
            var p = g[l],
              t = void 0;
            p.isInterleavedBufferAttribute
              ? ((t = b(a.data, p.data)),
                (t = new Kc(t, p.itemSize, p.offset, p.normalized)))
              : ((t = new Vg[p.type](p.array)),
                (t = new pa(t, p.itemSize, p.normalized)));
            void 0 !== p.name && (t.name = p.name);
            k.push(t);
          }
          f.morphAttributes[m] = k;
        }
      a.data.morphTargetsRelative && (f.morphTargetsRelative = !0);
      m = a.data.groups || a.data.drawcalls || a.data.offsets;
      if (void 0 !== m)
        for (h = 0, g = m.length; h !== g; ++h)
          (k = m[h]), f.addGroup(k.start, k.count, k.materialIndex);
      m = a.data.boundingSphere;
      void 0 !== m &&
        ((h = new w()),
        void 0 !== m.center && h.fromArray(m.center),
        (f.boundingSphere = new Wa(h, m.radius)));
      a.name && (f.name = a.name);
      a.userData && (f.userData = a.userData);
      return f;
    },
  });
  var Vg = {
    Int8Array: Int8Array,
    Uint8Array: Uint8Array,
    Uint8ClampedArray:
      "undefined" !== typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
    Int16Array: Int16Array,
    Uint16Array: Uint16Array,
    Int32Array: Int32Array,
    Uint32Array: Uint32Array,
    Float32Array: Float32Array,
    Float64Array: Float64Array,
  };
  vg.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: vg,
    load: function (a, b, d, e) {
      var f = this,
        g = "" === this.path ? qi.extractUrlBase(a) : this.path;
      this.resourcePath = this.resourcePath || g;
      g = new Nb(f.manager);
      g.setPath(this.path);
      g.setRequestHeader(this.requestHeader);
      g.load(
        a,
        function (h) {
          var k = null;
          try {
            k = JSON.parse(h);
          } catch (l) {
            void 0 !== e && e(l);
            console.error(
              "THREE:ObjectLoader: Can't parse " + a + ".",
              l.message
            );
            return;
          }
          h = k.metadata;
          void 0 === h ||
          void 0 === h.type ||
          "geometry" === h.type.toLowerCase()
            ? console.error("THREE.ObjectLoader: Can't load " + a)
            : f.parse(k, b);
        },
        d,
        e
      );
    },
    parse: function (a, b) {
      var d = this.parseShape(a.shapes);
      d = this.parseGeometries(a.geometries, d);
      var e = this.parseImages(a.images, function () {
        void 0 !== b && b(f);
      });
      e = this.parseTextures(a.textures, e);
      e = this.parseMaterials(a.materials, e);
      var f = this.parseObject(a.object, d, e);
      a.animations && (f.animations = this.parseAnimations(a.animations));
      (void 0 !== a.images && 0 !== a.images.length) || void 0 === b || b(f);
      return f;
    },
    parseShape: function (a) {
      var b = {};
      if (void 0 !== a)
        for (var d = 0, e = a.length; d < e; d++) {
          var f = new Pc().fromJSON(a[d]);
          b[f.uuid] = f;
        }
      return b;
    },
    parseGeometries: function (a, b) {
      var d = {};
      if (void 0 !== a)
        for (var e = new ug(), f = 0, g = a.length; f < g; f++) {
          var h = void 0;
          var k = a[f];
          switch (k.type) {
            case "PlaneGeometry":
            case "PlaneBufferGeometry":
              h = new vb[k.type](
                k.width,
                k.height,
                k.widthSegments,
                k.heightSegments
              );
              break;
            case "BoxGeometry":
            case "BoxBufferGeometry":
            case "CubeGeometry":
              h = new vb[k.type](
                k.width,
                k.height,
                k.depth,
                k.widthSegments,
                k.heightSegments,
                k.depthSegments
              );
              break;
            case "CircleGeometry":
            case "CircleBufferGeometry":
              h = new vb[k.type](
                k.radius,
                k.segments,
                k.thetaStart,
                k.thetaLength
              );
              break;
            case "CylinderGeometry":
            case "CylinderBufferGeometry":
              h = new vb[k.type](
                k.radiusTop,
                k.radiusBottom,
                k.height,
                k.radialSegments,
                k.heightSegments,
                k.openEnded,
                k.thetaStart,
                k.thetaLength
              );
              break;
            case "ConeGeometry":
            case "ConeBufferGeometry":
              h = new vb[k.type](
                k.radius,
                k.height,
                k.radialSegments,
                k.heightSegments,
                k.openEnded,
                k.thetaStart,
                k.thetaLength
              );
              break;
            case "SphereGeometry":
            case "SphereBufferGeometry":
              h = new vb[k.type](
                k.radius,
                k.widthSegments,
                k.heightSegments,
                k.phiStart,
                k.phiLength,
                k.thetaStart,
                k.thetaLength
              );
              break;
            case "DodecahedronGeometry":
            case "DodecahedronBufferGeometry":
            case "IcosahedronGeometry":
            case "IcosahedronBufferGeometry":
            case "OctahedronGeometry":
            case "OctahedronBufferGeometry":
            case "TetrahedronGeometry":
            case "TetrahedronBufferGeometry":
              h = new vb[k.type](k.radius, k.detail);
              break;
            case "RingGeometry":
            case "RingBufferGeometry":
              h = new vb[k.type](
                k.innerRadius,
                k.outerRadius,
                k.thetaSegments,
                k.phiSegments,
                k.thetaStart,
                k.thetaLength
              );
              break;
            case "TorusGeometry":
            case "TorusBufferGeometry":
              h = new vb[k.type](
                k.radius,
                k.tube,
                k.radialSegments,
                k.tubularSegments,
                k.arc
              );
              break;
            case "TorusKnotGeometry":
            case "TorusKnotBufferGeometry":
              h = new vb[k.type](
                k.radius,
                k.tube,
                k.tubularSegments,
                k.radialSegments,
                k.p,
                k.q
              );
              break;
            case "TubeGeometry":
            case "TubeBufferGeometry":
              h = new vb[k.type](
                new pi[k.path.type]().fromJSON(k.path),
                k.tubularSegments,
                k.radius,
                k.radialSegments,
                k.closed
              );
              break;
            case "LatheGeometry":
            case "LatheBufferGeometry":
              h = new vb[k.type](k.points, k.segments, k.phiStart, k.phiLength);
              break;
            case "PolyhedronGeometry":
            case "PolyhedronBufferGeometry":
              h = new vb[k.type](k.vertices, k.indices, k.radius, k.details);
              break;
            case "ShapeGeometry":
            case "ShapeBufferGeometry":
              h = [];
              for (var l = 0, m = k.shapes.length; l < m; l++)
                h.push(b[k.shapes[l]]);
              h = new vb[k.type](h, k.curveSegments);
              break;
            case "ExtrudeGeometry":
            case "ExtrudeBufferGeometry":
              h = [];
              l = 0;
              for (m = k.shapes.length; l < m; l++) h.push(b[k.shapes[l]]);
              l = k.options.extrudePath;
              void 0 !== l &&
                (k.options.extrudePath = new pi[l.type]().fromJSON(l));
              h = new vb[k.type](h, k.options);
              break;
            case "BufferGeometry":
            case "InstancedBufferGeometry":
              h = e.parse(k);
              break;
            case "Geometry":
              console.error(
                'THREE.ObjectLoader: Loading "Geometry" is not supported anymore.'
              );
              break;
            default:
              console.warn(
                'THREE.ObjectLoader: Unsupported geometry type "' + k.type + '"'
              );
              continue;
          }
          h.uuid = k.uuid;
          void 0 !== k.name && (h.name = k.name);
          !0 === h.isBufferGeometry &&
            void 0 !== k.userData &&
            (h.userData = k.userData);
          d[k.uuid] = h;
        }
      return d;
    },
    parseMaterials: function (a, b) {
      var d = {},
        e = {};
      if (void 0 !== a) {
        var f = new sg();
        f.setTextures(b);
        b = 0;
        for (var g = a.length; b < g; b++) {
          var h = a[b];
          if ("MultiMaterial" === h.type) {
            for (var k = [], l = 0; l < h.materials.length; l++) {
              var m = h.materials[l];
              void 0 === d[m.uuid] && (d[m.uuid] = f.parse(m));
              k.push(d[m.uuid]);
            }
            e[h.uuid] = k;
          } else
            void 0 === d[h.uuid] && (d[h.uuid] = f.parse(h)),
              (e[h.uuid] = d[h.uuid]);
        }
      }
      return e;
    },
    parseAnimations: function (a) {
      for (var b = [], d = 0; d < a.length; d++) {
        var e = a[d],
          f = Mb.parse(e);
        void 0 !== e.uuid && (f.uuid = e.uuid);
        b.push(f);
      }
      return b;
    },
    parseImages: function (a, b) {
      function d(t) {
        e.manager.itemStart(t);
        return g.load(
          t,
          function () {
            e.manager.itemEnd(t);
          },
          void 0,
          function () {
            e.manager.itemError(t);
            e.manager.itemEnd(t);
          }
        );
      }
      var e = this,
        f = {};
      if (void 0 !== a && 0 < a.length) {
        b = new Ah(b);
        var g = new fe(b);
        g.setCrossOrigin(this.crossOrigin);
        b = 0;
        for (var h = a.length; b < h; b++) {
          var k = a[b],
            l = k.url;
          if (Array.isArray(l)) {
            f[k.uuid] = [];
            for (var m = 0, n = l.length; m < n; m++) {
              var p = l[m];
              p = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p) ? p : e.resourcePath + p;
              f[k.uuid].push(d(p));
            }
          } else
            (l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)
              ? k.url
              : e.resourcePath + k.url),
              (f[k.uuid] = d(l));
        }
      }
      return f;
    },
    parseTextures: function (a, b) {
      function d(l, m) {
        if ("number" === typeof l) return l;
        console.warn(
          "THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
          l
        );
        return m[l];
      }
      var e = {};
      if (void 0 !== a)
        for (var f = 0, g = a.length; f < g; f++) {
          var h = a[f];
          void 0 === h.image &&
            console.warn(
              'THREE.ObjectLoader: No "image" specified for',
              h.uuid
            );
          void 0 === b[h.image] &&
            console.warn("THREE.ObjectLoader: Undefined image", h.image);
          var k = void 0;
          k = Array.isArray(b[h.image])
            ? new kc(b[h.image])
            : new Oa(b[h.image]);
          k.needsUpdate = !0;
          k.uuid = h.uuid;
          void 0 !== h.name && (k.name = h.name);
          void 0 !== h.mapping && (k.mapping = d(h.mapping, Yl));
          void 0 !== h.offset && k.offset.fromArray(h.offset);
          void 0 !== h.repeat && k.repeat.fromArray(h.repeat);
          void 0 !== h.center && k.center.fromArray(h.center);
          void 0 !== h.rotation && (k.rotation = h.rotation);
          void 0 !== h.wrap &&
            ((k.wrapS = d(h.wrap[0], Pj)), (k.wrapT = d(h.wrap[1], Pj)));
          void 0 !== h.format && (k.format = h.format);
          void 0 !== h.type && (k.type = h.type);
          void 0 !== h.encoding && (k.encoding = h.encoding);
          void 0 !== h.minFilter && (k.minFilter = d(h.minFilter, Qj));
          void 0 !== h.magFilter && (k.magFilter = d(h.magFilter, Qj));
          void 0 !== h.anisotropy && (k.anisotropy = h.anisotropy);
          void 0 !== h.flipY && (k.flipY = h.flipY);
          void 0 !== h.premultiplyAlpha &&
            (k.premultiplyAlpha = h.premultiplyAlpha);
          void 0 !== h.unpackAlignment &&
            (k.unpackAlignment = h.unpackAlignment);
          e[h.uuid] = k;
        }
      return e;
    },
    parseObject: function (a, b, d) {
      function e(m) {
        void 0 === b[m] &&
          console.warn("THREE.ObjectLoader: Undefined geometry", m);
        return b[m];
      }
      function f(m) {
        if (void 0 !== m) {
          if (Array.isArray(m)) {
            for (var n = [], p = 0, t = m.length; p < t; p++) {
              var q = m[p];
              void 0 === d[q] &&
                console.warn("THREE.ObjectLoader: Undefined material", q);
              n.push(d[q]);
            }
            return n;
          }
          void 0 === d[m] &&
            console.warn("THREE.ObjectLoader: Undefined material", m);
          return d[m];
        }
      }
      switch (a.type) {
        case "Scene":
          var g = new Jc();
          void 0 !== a.background &&
            Number.isInteger(a.background) &&
            (g.background = new S(a.background));
          void 0 !== a.fog &&
            ("Fog" === a.fog.type
              ? (g.fog = new Hf(a.fog.color, a.fog.near, a.fog.far))
              : "FogExp2" === a.fog.type &&
                (g.fog = new Gf(a.fog.color, a.fog.density)));
          break;
        case "PerspectiveCamera":
          g = new eb(a.fov, a.aspect, a.near, a.far);
          void 0 !== a.focus && (g.focus = a.focus);
          void 0 !== a.zoom && (g.zoom = a.zoom);
          void 0 !== a.filmGauge && (g.filmGauge = a.filmGauge);
          void 0 !== a.filmOffset && (g.filmOffset = a.filmOffset);
          void 0 !== a.view && (g.view = Object.assign({}, a.view));
          break;
        case "OrthographicCamera":
          g = new he(a.left, a.right, a.top, a.bottom, a.near, a.far);
          void 0 !== a.zoom && (g.zoom = a.zoom);
          void 0 !== a.view && (g.view = Object.assign({}, a.view));
          break;
        case "AmbientLight":
          g = new qg(a.color, a.intensity);
          break;
        case "DirectionalLight":
          g = new pg(a.color, a.intensity);
          break;
        case "PointLight":
          g = new og(a.color, a.intensity, a.distance, a.decay);
          break;
        case "RectAreaLight":
          g = new rg(a.color, a.intensity, a.width, a.height);
          break;
        case "SpotLight":
          g = new ng(
            a.color,
            a.intensity,
            a.distance,
            a.angle,
            a.penumbra,
            a.decay
          );
          break;
        case "HemisphereLight":
          g = new mg(a.color, a.groundColor, a.intensity);
          break;
        case "LightProbe":
          g = new Ob().fromJSON(a);
          break;
        case "SkinnedMesh":
          console.warn(
            "THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet."
          );
        case "Mesh":
          g = e(a.geometry);
          var h = f(a.material);
          g = new Qa(g, h);
          break;
        case "InstancedMesh":
          g = e(a.geometry);
          h = f(a.material);
          var k = a.instanceMatrix;
          g = new Zf(g, h, a.count);
          g.instanceMatrix = new pa(new Float32Array(k.array), 16);
          break;
        case "LOD":
          g = new Se();
          break;
        case "Line":
          g = new yb(e(a.geometry), f(a.material), a.mode);
          break;
        case "LineLoop":
          g = new $f(e(a.geometry), f(a.material));
          break;
        case "LineSegments":
          g = new Za(e(a.geometry), f(a.material));
          break;
        case "PointCloud":
        case "Points":
          g = new Pd(e(a.geometry), f(a.material));
          break;
        case "Sprite":
          g = new Qe(f(a.material));
          break;
        case "Group":
          g = new Gc();
          break;
        default:
          g = new ha();
      }
      g.uuid = a.uuid;
      void 0 !== a.name && (g.name = a.name);
      void 0 !== a.matrix
        ? (g.matrix.fromArray(a.matrix),
          void 0 !== a.matrixAutoUpdate &&
            (g.matrixAutoUpdate = a.matrixAutoUpdate),
          g.matrixAutoUpdate &&
            g.matrix.decompose(g.position, g.quaternion, g.scale))
        : (void 0 !== a.position && g.position.fromArray(a.position),
          void 0 !== a.rotation && g.rotation.fromArray(a.rotation),
          void 0 !== a.quaternion && g.quaternion.fromArray(a.quaternion),
          void 0 !== a.scale && g.scale.fromArray(a.scale));
      void 0 !== a.castShadow && (g.castShadow = a.castShadow);
      void 0 !== a.receiveShadow && (g.receiveShadow = a.receiveShadow);
      a.shadow &&
        (void 0 !== a.shadow.bias && (g.shadow.bias = a.shadow.bias),
        void 0 !== a.shadow.normalBias &&
          (g.shadow.normalBias = a.shadow.normalBias),
        void 0 !== a.shadow.radius && (g.shadow.radius = a.shadow.radius),
        void 0 !== a.shadow.mapSize &&
          g.shadow.mapSize.fromArray(a.shadow.mapSize),
        void 0 !== a.shadow.camera &&
          (g.shadow.camera = this.parseObject(a.shadow.camera)));
      void 0 !== a.visible && (g.visible = a.visible);
      void 0 !== a.frustumCulled && (g.frustumCulled = a.frustumCulled);
      void 0 !== a.renderOrder && (g.renderOrder = a.renderOrder);
      void 0 !== a.userData && (g.userData = a.userData);
      void 0 !== a.layers && (g.layers.mask = a.layers);
      if (void 0 !== a.children)
        for (k = a.children, h = 0; h < k.length; h++)
          g.add(this.parseObject(k[h], b, d));
      if ("LOD" === a.type)
        for (
          void 0 !== a.autoUpdate && (g.autoUpdate = a.autoUpdate),
            a = a.levels,
            k = 0;
          k < a.length;
          k++
        ) {
          h = a[k];
          var l = g.getObjectByProperty("uuid", h.object);
          void 0 !== l && g.addLevel(l, h.distance);
        }
      return g;
    },
  });
  var Yl = {
      UVMapping: 300,
      CubeReflectionMapping: 301,
      CubeRefractionMapping: 302,
      EquirectangularReflectionMapping: 303,
      EquirectangularRefractionMapping: 304,
      CubeUVReflectionMapping: 306,
      CubeUVRefractionMapping: 307,
    },
    Pj = {
      RepeatWrapping: 1e3,
      ClampToEdgeWrapping: 1001,
      MirroredRepeatWrapping: 1002,
    },
    Qj = {
      NearestFilter: 1003,
      NearestMipmapNearestFilter: 1004,
      NearestMipmapLinearFilter: 1005,
      LinearFilter: 1006,
      LinearMipmapNearestFilter: 1007,
      LinearMipmapLinearFilter: 1008,
    };
  Hh.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: Hh,
    isImageBitmapLoader: !0,
    setOptions: function (a) {
      this.options = a;
      return this;
    },
    load: function (a, b, d, e) {
      void 0 === a && (a = "");
      void 0 !== this.path && (a = this.path + a);
      a = this.manager.resolveURL(a);
      var f = this,
        g = vd.get(a);
      if (void 0 !== g)
        return (
          f.manager.itemStart(a),
          setTimeout(function () {
            b && b(g);
            f.manager.itemEnd(a);
          }, 0),
          g
        );
      fetch(a)
        .then(function (h) {
          return h.blob();
        })
        .then(function (h) {
          return createImageBitmap(h, f.options);
        })
        .then(function (h) {
          vd.add(a, h);
          b && b(h);
          f.manager.itemEnd(a);
        })
        .catch(function (h) {
          e && e(h);
          f.manager.itemError(a);
          f.manager.itemEnd(a);
        });
      f.manager.itemStart(a);
    },
  });
  Object.assign(Ih.prototype, {
    moveTo: function (a, b) {
      this.currentPath = new Wb();
      this.subPaths.push(this.currentPath);
      this.currentPath.moveTo(a, b);
      return this;
    },
    lineTo: function (a, b) {
      this.currentPath.lineTo(a, b);
      return this;
    },
    quadraticCurveTo: function (a, b, d, e) {
      this.currentPath.quadraticCurveTo(a, b, d, e);
      return this;
    },
    bezierCurveTo: function (a, b, d, e, f, g) {
      this.currentPath.bezierCurveTo(a, b, d, e, f, g);
      return this;
    },
    splineThru: function (a) {
      this.currentPath.splineThru(a);
      return this;
    },
    toShapes: function (a, b) {
      function d(A) {
        for (var B = [], D = 0, G = A.length; D < G; D++) {
          var I = A[D],
            E = new Pc();
          E.curves = I.curves;
          B.push(E);
        }
        return B;
      }
      function e(A, B) {
        for (var D = B.length, G = !1, I = D - 1, E = 0; E < D; I = E++) {
          var H = B[I],
            M = B[E],
            F = M.x - H.x,
            K = M.y - H.y;
          if (Math.abs(K) > Number.EPSILON) {
            if (
              (0 > K && ((H = B[E]), (F = -F), (M = B[I]), (K = -K)),
              !(A.y < H.y || A.y > M.y))
            )
              if (A.y === H.y) {
                if (A.x === H.x) return !0;
              } else {
                I = K * (A.x - H.x) - F * (A.y - H.y);
                if (0 === I) return !0;
                0 > I || (G = !G);
              }
          } else if (
            A.y === H.y &&
            ((M.x <= A.x && A.x <= H.x) || (H.x <= A.x && A.x <= M.x))
          )
            return !0;
        }
        return G;
      }
      var f = nc.isClockWise,
        g = this.subPaths;
      if (0 === g.length) return [];
      if (!0 === b) return d(g);
      b = [];
      if (1 === g.length) {
        var h = g[0];
        var k = new Pc();
        k.curves = h.curves;
        b.push(k);
        return b;
      }
      var l = !f(g[0].getPoints());
      l = a ? !l : l;
      k = [];
      var m = [],
        n = [],
        p = 0;
      m[p] = void 0;
      n[p] = [];
      for (var t = 0, q = g.length; t < q; t++) {
        h = g[t];
        var v = h.getPoints();
        var u = f(v);
        (u = a ? !u : u)
          ? (!l && m[p] && p++,
            (m[p] = { s: new Pc(), p: v }),
            (m[p].s.curves = h.curves),
            l && p++,
            (n[p] = []))
          : n[p].push({ h: h, p: v[0] });
      }
      if (!m[0]) return d(g);
      if (1 < m.length) {
        a = !1;
        f = [];
        g = 0;
        for (h = m.length; g < h; g++) k[g] = [];
        g = 0;
        for (h = m.length; g < h; g++)
          for (u = n[g], l = 0; l < u.length; l++) {
            p = u[l];
            v = !0;
            for (t = 0; t < m.length; t++)
              e(p.p, m[t].p) &&
                (g !== t && f.push({ froms: g, tos: t, hole: l }),
                v ? ((v = !1), k[t].push(p)) : (a = !0));
            v && k[g].push(p);
          }
        0 < f.length && (a || (n = k));
      }
      f = 0;
      for (g = m.length; f < g; f++)
        for (k = m[f].s, b.push(k), a = n[f], h = 0, u = a.length; h < u; h++)
          k.holes.push(a[h].h);
      return b;
    },
  });
  Object.assign(Jh.prototype, {
    isFont: !0,
    generateShapes: function (a, b) {
      void 0 === b && (b = 100);
      var d = [],
        e = b;
      b = this.data;
      var f = Array.from ? Array.from(a) : String(a).split("");
      e /= b.resolution;
      var g =
        (b.boundingBox.yMax - b.boundingBox.yMin + b.underlineThickness) * e;
      a = [];
      for (var h = 0, k = 0, l = 0; l < f.length; l++) {
        var m = f[l];
        if ("\n" === m) (h = 0), (k -= g);
        else {
          var n = m;
          m = e;
          var p = h,
            t = k,
            q = b,
            v = q.glyphs[n] || q.glyphs["?"];
          if (v) {
            n = new Ih();
            if (v.o) {
              q = v._cachedOutline || (v._cachedOutline = v.o.split(" "));
              for (var u = 0, A = q.length; u < A; )
                switch (q[u++]) {
                  case "m":
                    var B = q[u++] * m + p;
                    var D = q[u++] * m + t;
                    n.moveTo(B, D);
                    break;
                  case "l":
                    B = q[u++] * m + p;
                    D = q[u++] * m + t;
                    n.lineTo(B, D);
                    break;
                  case "q":
                    var G = q[u++] * m + p;
                    var I = q[u++] * m + t;
                    var E = q[u++] * m + p;
                    var H = q[u++] * m + t;
                    n.quadraticCurveTo(E, H, G, I);
                    break;
                  case "b":
                    (G = q[u++] * m + p),
                      (I = q[u++] * m + t),
                      (E = q[u++] * m + p),
                      (H = q[u++] * m + t),
                      (B = q[u++] * m + p),
                      (D = q[u++] * m + t),
                      n.bezierCurveTo(E, H, B, D, G, I);
                }
            }
            m = { offsetX: v.ha * m, path: n };
          } else
            console.error(
              'THREE.Font: character "' +
                n +
                '" does not exists in font family ' +
                q.familyName +
                "."
            ),
              (m = void 0);
          h += m.offsetX;
          a.push(m.path);
        }
      }
      b = 0;
      for (f = a.length; b < f; b++)
        Array.prototype.push.apply(d, a[b].toShapes());
      return d;
    },
  });
  Kh.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: Kh,
    load: function (a, b, d, e) {
      var f = this,
        g = new Nb(this.manager);
      g.setPath(this.path);
      g.setRequestHeader(this.requestHeader);
      g.load(
        a,
        function (h) {
          try {
            var k = JSON.parse(h);
          } catch (l) {
            console.warn(
              "THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."
            ),
              (k = JSON.parse(h.substring(65, h.length - 2)));
          }
          h = f.parse(k);
          b && b(h);
        },
        d,
        e
      );
    },
    parse: function (a) {
      return new Jh(a);
    },
  });
  var Wg,
    Nh = {
      getContext: function () {
        void 0 === Wg &&
          (Wg = new (window.AudioContext || window.webkitAudioContext)());
        return Wg;
      },
      setContext: function (a) {
        Wg = a;
      },
    };
  wg.prototype = Object.assign(Object.create(Ma.prototype), {
    constructor: wg,
    load: function (a, b, d, e) {
      var f = this,
        g = new Nb(f.manager);
      g.setResponseType("arraybuffer");
      g.setPath(f.path);
      g.setRequestHeader(f.requestHeader);
      g.load(
        a,
        function (h) {
          try {
            var k = h.slice(0);
            Nh.getContext().decodeAudioData(k, function (l) {
              b(l);
            });
          } catch (l) {
            e ? e(l) : console.error(l), f.manager.itemError(a);
          }
        },
        d,
        e
      );
    },
  });
  Lh.prototype = Object.assign(Object.create(Ob.prototype), {
    constructor: Lh,
    isHemisphereLightProbe: !0,
    copy: function (a) {
      Ob.prototype.copy.call(this, a);
      return this;
    },
    toJSON: function (a) {
      return Ob.prototype.toJSON.call(this, a);
    },
  });
  Mh.prototype = Object.assign(Object.create(Ob.prototype), {
    constructor: Mh,
    isAmbientLightProbe: !0,
    copy: function (a) {
      Ob.prototype.copy.call(this, a);
      return this;
    },
    toJSON: function (a) {
      return Ob.prototype.toJSON.call(this, a);
    },
  });
  var Rj = new da(),
    Sj = new da();
  Object.assign(lj.prototype, {
    update: function (a) {
      var b = this._cache;
      if (
        b.focus !== a.focus ||
        b.fov !== a.fov ||
        b.aspect !== a.aspect * this.aspect ||
        b.near !== a.near ||
        b.far !== a.far ||
        b.zoom !== a.zoom ||
        b.eyeSep !== this.eyeSep
      ) {
        b.focus = a.focus;
        b.fov = a.fov;
        b.aspect = a.aspect * this.aspect;
        b.near = a.near;
        b.far = a.far;
        b.zoom = a.zoom;
        b.eyeSep = this.eyeSep;
        var d = a.projectionMatrix.clone(),
          e = b.eyeSep / 2,
          f = (e * b.near) / b.focus,
          g = (b.near * Math.tan(xa.DEG2RAD * b.fov * 0.5)) / b.zoom;
        Sj.elements[12] = -e;
        Rj.elements[12] = e;
        e = -g * b.aspect + f;
        var h = g * b.aspect + f;
        d.elements[0] = (2 * b.near) / (h - e);
        d.elements[8] = (h + e) / (h - e);
        this.cameraL.projectionMatrix.copy(d);
        e = -g * b.aspect - f;
        h = g * b.aspect - f;
        d.elements[0] = (2 * b.near) / (h - e);
        d.elements[8] = (h + e) / (h - e);
        this.cameraR.projectionMatrix.copy(d);
      }
      this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(Sj);
      this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(Rj);
    },
  });
  var ie = function (a) {
    this.autoStart = void 0 !== a ? a : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1;
  };
  ie.prototype.start = function () {
    this.oldTime = this.startTime = ("undefined" === typeof performance
      ? Date
      : performance
    ).now();
    this.elapsedTime = 0;
    this.running = !0;
  };
  ie.prototype.stop = function () {
    this.getElapsedTime();
    this.autoStart = this.running = !1;
  };
  ie.prototype.getElapsedTime = function () {
    this.getDelta();
    return this.elapsedTime;
  };
  ie.prototype.getDelta = function () {
    var a = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      var b = ("undefined" === typeof performance ? Date : performance).now();
      a = (b - this.oldTime) / 1e3;
      this.oldTime = b;
      this.elapsedTime += a;
    }
    return a;
  };
  var wd = new w(),
    Tj = new ua(),
    Zl = new w(),
    xd = new w();
  Xb.prototype = Object.create(ha.prototype);
  Xb.prototype.constructor = Xb;
  Xb.prototype.getInput = function () {
    return this.gain;
  };
  Xb.prototype.removeFilter = function () {
    null !== this.filter &&
      (this.gain.disconnect(this.filter),
      this.filter.disconnect(this.context.destination),
      this.gain.connect(this.context.destination),
      (this.filter = null));
    return this;
  };
  Xb.prototype.getFilter = function () {
    return this.filter;
  };
  Xb.prototype.setFilter = function (a) {
    null !== this.filter
      ? (this.gain.disconnect(this.filter),
        this.filter.disconnect(this.context.destination))
      : this.gain.disconnect(this.context.destination);
    this.filter = a;
    this.gain.connect(this.filter);
    this.filter.connect(this.context.destination);
    return this;
  };
  Xb.prototype.getMasterVolume = function () {
    return this.gain.gain.value;
  };
  Xb.prototype.setMasterVolume = function (a) {
    this.gain.gain.setTargetAtTime(a, this.context.currentTime, 0.01);
    return this;
  };
  Xb.prototype.updateMatrixWorld = function (a) {
    ha.prototype.updateMatrixWorld.call(this, a);
    a = this.context.listener;
    var b = this.up;
    this.timeDelta = this._clock.getDelta();
    this.matrixWorld.decompose(wd, Tj, Zl);
    xd.set(0, 0, -1).applyQuaternion(Tj);
    if (a.positionX) {
      var d = this.context.currentTime + this.timeDelta;
      a.positionX.linearRampToValueAtTime(wd.x, d);
      a.positionY.linearRampToValueAtTime(wd.y, d);
      a.positionZ.linearRampToValueAtTime(wd.z, d);
      a.forwardX.linearRampToValueAtTime(xd.x, d);
      a.forwardY.linearRampToValueAtTime(xd.y, d);
      a.forwardZ.linearRampToValueAtTime(xd.z, d);
      a.upX.linearRampToValueAtTime(b.x, d);
      a.upY.linearRampToValueAtTime(b.y, d);
      a.upZ.linearRampToValueAtTime(b.z, d);
    } else
      a.setPosition(wd.x, wd.y, wd.z),
        a.setOrientation(xd.x, xd.y, xd.z, b.x, b.y, b.z);
  };
  Ja.prototype = Object.create(ha.prototype);
  Ja.prototype.constructor = Ja;
  Ja.prototype.getOutput = function () {
    return this.gain;
  };
  Ja.prototype.setNodeSource = function (a) {
    this.hasPlaybackControl = !1;
    this.sourceType = "audioNode";
    this.source = a;
    this.connect();
    return this;
  };
  Ja.prototype.setMediaElementSource = function (a) {
    this.hasPlaybackControl = !1;
    this.sourceType = "mediaNode";
    this.source = this.context.createMediaElementSource(a);
    this.connect();
    return this;
  };
  Ja.prototype.setMediaStreamSource = function (a) {
    this.hasPlaybackControl = !1;
    this.sourceType = "mediaStreamNode";
    this.source = this.context.createMediaStreamSource(a);
    this.connect();
    return this;
  };
  Ja.prototype.setBuffer = function (a) {
    this.buffer = a;
    this.sourceType = "buffer";
    this.autoplay && this.play();
    return this;
  };
  Ja.prototype.play = function (a) {
    void 0 === a && (a = 0);
    if (!0 === this.isPlaying)
      console.warn("THREE.Audio: Audio is already playing.");
    else if (!1 === this.hasPlaybackControl)
      console.warn("THREE.Audio: this Audio has no playback control.");
    else
      return (
        (this._startedAt = this.context.currentTime + a),
        (a = this.context.createBufferSource()),
        (a.buffer = this.buffer),
        (a.loop = this.loop),
        (a.loopStart = this.loopStart),
        (a.loopEnd = this.loopEnd),
        (a.onended = this.onEnded.bind(this)),
        a.start(this._startedAt, this._progress + this.offset, this.duration),
        (this.isPlaying = !0),
        (this.source = a),
        this.setDetune(this.detune),
        this.setPlaybackRate(this.playbackRate),
        this.connect()
      );
  };
  Ja.prototype.pause = function () {
    if (!1 === this.hasPlaybackControl)
      console.warn("THREE.Audio: this Audio has no playback control.");
    else
      return (
        !0 === this.isPlaying &&
          ((this._progress +=
            Math.max(this.context.currentTime - this._startedAt, 0) *
            this.playbackRate),
          !0 === this.loop &&
            (this._progress %= this.duration || this.buffer.duration),
          this.source.stop(),
          (this.source.onended = null),
          (this.isPlaying = !1)),
        this
      );
  };
  Ja.prototype.stop = function () {
    if (!1 === this.hasPlaybackControl)
      console.warn("THREE.Audio: this Audio has no playback control.");
    else
      return (
        (this._progress = 0),
        this.source.stop(),
        (this.source.onended = null),
        (this.isPlaying = !1),
        this
      );
  };
  Ja.prototype.connect = function () {
    if (0 < this.filters.length) {
      this.source.connect(this.filters[0]);
      for (var a = 1, b = this.filters.length; a < b; a++)
        this.filters[a - 1].connect(this.filters[a]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    this._connected = !0;
    return this;
  };
  Ja.prototype.disconnect = function () {
    if (0 < this.filters.length) {
      this.source.disconnect(this.filters[0]);
      for (var a = 1, b = this.filters.length; a < b; a++)
        this.filters[a - 1].disconnect(this.filters[a]);
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else this.source.disconnect(this.getOutput());
    this._connected = !1;
    return this;
  };
  Ja.prototype.getFilters = function () {
    return this.filters;
  };
  Ja.prototype.setFilters = function (a) {
    a || (a = []);
    !0 === this._connected
      ? (this.disconnect(), (this.filters = a), this.connect())
      : (this.filters = a);
    return this;
  };
  Ja.prototype.setDetune = function (a) {
    this.detune = a;
    if (void 0 !== this.source.detune)
      return (
        !0 === this.isPlaying &&
          this.source.detune.setTargetAtTime(
            this.detune,
            this.context.currentTime,
            0.01
          ),
        this
      );
  };
  Ja.prototype.getDetune = function () {
    return this.detune;
  };
  Ja.prototype.getFilter = function () {
    return this.getFilters()[0];
  };
  Ja.prototype.setFilter = function (a) {
    return this.setFilters(a ? [a] : []);
  };
  Ja.prototype.setPlaybackRate = function (a) {
    if (!1 === this.hasPlaybackControl)
      console.warn("THREE.Audio: this Audio has no playback control.");
    else
      return (
        (this.playbackRate = a),
        !0 === this.isPlaying &&
          this.source.playbackRate.setTargetAtTime(
            this.playbackRate,
            this.context.currentTime,
            0.01
          ),
        this
      );
  };
  Ja.prototype.getPlaybackRate = function () {
    return this.playbackRate;
  };
  Ja.prototype.onEnded = function () {
    this.isPlaying = !1;
  };
  Ja.prototype.getLoop = function () {
    return !1 === this.hasPlaybackControl
      ? (console.warn("THREE.Audio: this Audio has no playback control."), !1)
      : this.loop;
  };
  Ja.prototype.setLoop = function (a) {
    if (!1 === this.hasPlaybackControl)
      console.warn("THREE.Audio: this Audio has no playback control.");
    else
      return (
        (this.loop = a),
        !0 === this.isPlaying && (this.source.loop = this.loop),
        this
      );
  };
  Ja.prototype.setLoopStart = function (a) {
    this.loopStart = a;
    return this;
  };
  Ja.prototype.setLoopEnd = function (a) {
    this.loopEnd = a;
    return this;
  };
  Ja.prototype.getVolume = function () {
    return this.gain.gain.value;
  };
  Ja.prototype.setVolume = function (a) {
    this.gain.gain.setTargetAtTime(a, this.context.currentTime, 0.01);
    return this;
  };
  var yd = new w(),
    Uj = new ua(),
    $l = new w(),
    zd = new w();
  tb.prototype = Object.create(Ja.prototype);
  tb.prototype.constructor = tb;
  tb.prototype.getOutput = function () {
    return this.panner;
  };
  tb.prototype.getRefDistance = function () {
    return this.panner.refDistance;
  };
  tb.prototype.setRefDistance = function (a) {
    this.panner.refDistance = a;
    return this;
  };
  tb.prototype.getRolloffFactor = function () {
    return this.panner.rolloffFactor;
  };
  tb.prototype.setRolloffFactor = function (a) {
    this.panner.rolloffFactor = a;
    return this;
  };
  tb.prototype.getDistanceModel = function () {
    return this.panner.distanceModel;
  };
  tb.prototype.setDistanceModel = function (a) {
    this.panner.distanceModel = a;
    return this;
  };
  tb.prototype.getMaxDistance = function () {
    return this.panner.maxDistance;
  };
  tb.prototype.setMaxDistance = function (a) {
    this.panner.maxDistance = a;
    return this;
  };
  tb.prototype.setDirectionalCone = function (a, b, d) {
    this.panner.coneInnerAngle = a;
    this.panner.coneOuterAngle = b;
    this.panner.coneOuterGain = d;
    return this;
  };
  tb.prototype.updateMatrixWorld = function (a) {
    Ja.prototype.updateMatrixWorld.call(this, a);
    if (!0 !== this.hasPlaybackControl || !1 !== this.isPlaying)
      if (
        (this.matrixWorld.decompose(yd, Uj, $l),
        zd.set(0, 0, 1).applyQuaternion(Uj),
        (a = this.panner),
        a.positionX)
      ) {
        var b = this.context.currentTime + this.listener.timeDelta;
        a.positionX.linearRampToValueAtTime(yd.x, b);
        a.positionY.linearRampToValueAtTime(yd.y, b);
        a.positionZ.linearRampToValueAtTime(yd.z, b);
        a.orientationX.linearRampToValueAtTime(zd.x, b);
        a.orientationY.linearRampToValueAtTime(zd.y, b);
        a.orientationZ.linearRampToValueAtTime(zd.z, b);
      } else
        a.setPosition(yd.x, yd.y, yd.z), a.setOrientation(zd.x, zd.y, zd.z);
  };
  var Xg = function (a, b) {
    this.analyser = a.context.createAnalyser();
    this.analyser.fftSize = void 0 !== b ? b : 2048;
    this.data = new Uint8Array(this.analyser.frequencyBinCount);
    a.getOutput().connect(this.analyser);
  };
  Xg.prototype.getFrequencyData = function () {
    this.analyser.getByteFrequencyData(this.data);
    return this.data;
  };
  Xg.prototype.getAverageFrequency = function () {
    for (var a = 0, b = this.getFrequencyData(), d = 0; d < b.length; d++)
      a += b[d];
    return a / b.length;
  };
  Object.assign(Oh.prototype, {
    accumulate: function (a, b) {
      var d = this.buffer,
        e = this.valueSize;
      a = a * e + e;
      var f = this.cumulativeWeight;
      if (0 === f) {
        for (f = 0; f !== e; ++f) d[a + f] = d[f];
        f = b;
      } else (f += b), this._mixBufferRegion(d, a, 0, b / f, e);
      this.cumulativeWeight = f;
    },
    accumulateAdditive: function (a) {
      var b = this.buffer,
        d = this.valueSize,
        e = d * this._addIndex;
      0 === this.cumulativeWeightAdditive && this._setIdentity();
      this._mixBufferRegionAdditive(b, e, 0, a, d);
      this.cumulativeWeightAdditive += a;
    },
    apply: function (a) {
      var b = this.valueSize,
        d = this.buffer;
      a = a * b + b;
      var e = this.cumulativeWeight,
        f = this.cumulativeWeightAdditive,
        g = this.binding;
      this.cumulativeWeightAdditive = this.cumulativeWeight = 0;
      1 > e && this._mixBufferRegion(d, a, b * this._origIndex, 1 - e, b);
      0 < f && this._mixBufferRegionAdditive(d, a, this._addIndex * b, 1, b);
      e = b;
      for (f = b + b; e !== f; ++e)
        if (d[e] !== d[e + b]) {
          g.setValue(d, a);
          break;
        }
    },
    saveOriginalState: function () {
      var a = this.buffer,
        b = this.valueSize,
        d = b * this._origIndex;
      this.binding.getValue(a, d);
      for (var e = b; e !== d; ++e) a[e] = a[d + (e % b)];
      this._setIdentity();
      this.cumulativeWeightAdditive = this.cumulativeWeight = 0;
    },
    restoreOriginalState: function () {
      this.binding.setValue(this.buffer, 3 * this.valueSize);
    },
    _setAdditiveIdentityNumeric: function () {
      for (
        var a = this._addIndex * this.valueSize, b = a + this.valueSize;
        a < b;
        a++
      )
        this.buffer[a] = 0;
    },
    _setAdditiveIdentityQuaternion: function () {
      this._setAdditiveIdentityNumeric();
      this.buffer[this._addIndex * this.valueSize + 3] = 1;
    },
    _setAdditiveIdentityOther: function () {
      for (
        var a = this._origIndex * this.valueSize,
          b = this._addIndex * this.valueSize,
          d = 0;
        d < this.valueSize;
        d++
      )
        this.buffer[b + d] = this.buffer[a + d];
    },
    _select: function (a, b, d, e, f) {
      if (0.5 <= e) for (e = 0; e !== f; ++e) a[b + e] = a[d + e];
    },
    _slerp: function (a, b, d, e) {
      ua.slerpFlat(a, b, a, b, a, d, e);
    },
    _slerpAdditive: function (a, b, d, e, f) {
      f *= this._workIndex;
      ua.multiplyQuaternionsFlat(a, f, a, b, a, d);
      ua.slerpFlat(a, b, a, b, a, f, e);
    },
    _lerp: function (a, b, d, e, f) {
      for (var g = 1 - e, h = 0; h !== f; ++h) {
        var k = b + h;
        a[k] = a[k] * g + a[d + h] * e;
      }
    },
    _lerpAdditive: function (a, b, d, e, f) {
      for (var g = 0; g !== f; ++g) {
        var h = b + g;
        a[h] += a[d + g] * e;
      }
    },
  });
  var am = /[\[\]\.:\/]/g,
    bm = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
    cm = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    dm = /(WCOD+)?/.source.replace("WCOD", bm),
    em = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    fm = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]"),
    gm = new RegExp("^" + cm + dm + em + fm + "$"),
    hm = ["material", "materials", "bones"];
  Object.assign(mj.prototype, {
    getValue: function (a, b) {
      this.bind();
      var d = this._bindings[this._targetGroup.nCachedObjects_];
      void 0 !== d && d.getValue(a, b);
    },
    setValue: function (a, b) {
      for (
        var d = this._bindings,
          e = this._targetGroup.nCachedObjects_,
          f = d.length;
        e !== f;
        ++e
      )
        d[e].setValue(a, b);
    },
    bind: function () {
      for (
        var a = this._bindings,
          b = this._targetGroup.nCachedObjects_,
          d = a.length;
        b !== d;
        ++b
      )
        a[b].bind();
    },
    unbind: function () {
      for (
        var a = this._bindings,
          b = this._targetGroup.nCachedObjects_,
          d = a.length;
        b !== d;
        ++b
      )
        a[b].unbind();
    },
  });
  Object.assign(qb, {
    Composite: mj,
    create: function (a, b, d) {
      return a && a.isAnimationObjectGroup
        ? new qb.Composite(a, b, d)
        : new qb(a, b, d);
    },
    sanitizeNodeName: function (a) {
      return a.replace(/\s/g, "_").replace(am, "");
    },
    parseTrackName: function (a) {
      var b = gm.exec(a);
      if (!b) throw Error("PropertyBinding: Cannot parse trackName: " + a);
      b = {
        nodeName: b[2],
        objectName: b[3],
        objectIndex: b[4],
        propertyName: b[5],
        propertyIndex: b[6],
      };
      var d = b.nodeName && b.nodeName.lastIndexOf(".");
      if (void 0 !== d && -1 !== d) {
        var e = b.nodeName.substring(d + 1);
        -1 !== hm.indexOf(e) &&
          ((b.nodeName = b.nodeName.substring(0, d)), (b.objectName = e));
      }
      if (null === b.propertyName || 0 === b.propertyName.length)
        throw Error(
          "PropertyBinding: can not parse propertyName from trackName: " + a
        );
      return b;
    },
    findNode: function (a, b) {
      if (
        !b ||
        "" === b ||
        "." === b ||
        -1 === b ||
        b === a.name ||
        b === a.uuid
      )
        return a;
      if (a.skeleton) {
        var d = a.skeleton.getBoneByName(b);
        if (void 0 !== d) return d;
      }
      if (a.children) {
        var e = function (f) {
          for (var g = 0; g < f.length; g++) {
            var h = f[g];
            if (h.name === b || h.uuid === b || (h = e(h.children))) return h;
          }
          return null;
        };
        if ((a = e(a.children))) return a;
      }
      return null;
    },
  });
  Object.assign(qb.prototype, {
    _getValue_unavailable: function () {},
    _setValue_unavailable: function () {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3,
    },
    Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
    GetterByBindingType: [
      function (a, b) {
        a[b] = this.node[this.propertyName];
      },
      function (a, b) {
        for (var d = this.resolvedProperty, e = 0, f = d.length; e !== f; ++e)
          a[b++] = d[e];
      },
      function (a, b) {
        a[b] = this.resolvedProperty[this.propertyIndex];
      },
      function (a, b) {
        this.resolvedProperty.toArray(a, b);
      },
    ],
    SetterByBindingTypeAndVersioning: [
      [
        function (a, b) {
          this.targetObject[this.propertyName] = a[b];
        },
        function (a, b) {
          this.targetObject[this.propertyName] = a[b];
          this.targetObject.needsUpdate = !0;
        },
        function (a, b) {
          this.targetObject[this.propertyName] = a[b];
          this.targetObject.matrixWorldNeedsUpdate = !0;
        },
      ],
      [
        function (a, b) {
          for (var d = this.resolvedProperty, e = 0, f = d.length; e !== f; ++e)
            d[e] = a[b++];
        },
        function (a, b) {
          for (var d = this.resolvedProperty, e = 0, f = d.length; e !== f; ++e)
            d[e] = a[b++];
          this.targetObject.needsUpdate = !0;
        },
        function (a, b) {
          for (var d = this.resolvedProperty, e = 0, f = d.length; e !== f; ++e)
            d[e] = a[b++];
          this.targetObject.matrixWorldNeedsUpdate = !0;
        },
      ],
      [
        function (a, b) {
          this.resolvedProperty[this.propertyIndex] = a[b];
        },
        function (a, b) {
          this.resolvedProperty[this.propertyIndex] = a[b];
          this.targetObject.needsUpdate = !0;
        },
        function (a, b) {
          this.resolvedProperty[this.propertyIndex] = a[b];
          this.targetObject.matrixWorldNeedsUpdate = !0;
        },
      ],
      [
        function (a, b) {
          this.resolvedProperty.fromArray(a, b);
        },
        function (a, b) {
          this.resolvedProperty.fromArray(a, b);
          this.targetObject.needsUpdate = !0;
        },
        function (a, b) {
          this.resolvedProperty.fromArray(a, b);
          this.targetObject.matrixWorldNeedsUpdate = !0;
        },
      ],
    ],
    getValue: function (a, b) {
      this.bind();
      this.getValue(a, b);
    },
    setValue: function (a, b) {
      this.bind();
      this.setValue(a, b);
    },
    bind: function () {
      var a = this.node,
        b = this.parsedPath,
        d = b.objectName,
        e = b.propertyName,
        f = b.propertyIndex;
      a ||
        (this.node = a =
          qb.findNode(this.rootNode, b.nodeName) || this.rootNode);
      this.getValue = this._getValue_unavailable;
      this.setValue = this._setValue_unavailable;
      if (a) {
        if (d) {
          var g = b.objectIndex;
          switch (d) {
            case "materials":
              if (!a.material) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
                  this
                );
                return;
              }
              if (!a.material.materials) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                  this
                );
                return;
              }
              a = a.material.materials;
              break;
            case "bones":
              if (!a.skeleton) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                  this
                );
                return;
              }
              a = a.skeleton.bones;
              for (d = 0; d < a.length; d++)
                if (a[d].name === g) {
                  g = d;
                  break;
                }
              break;
            default:
              if (void 0 === a[d]) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
                  this
                );
                return;
              }
              a = a[d];
          }
          if (void 0 !== g) {
            if (void 0 === a[g]) {
              console.error(
                "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
                this,
                a
              );
              return;
            }
            a = a[g];
          }
        }
        g = a[e];
        if (void 0 === g)
          console.error(
            "THREE.PropertyBinding: Trying to update property for track: " +
              b.nodeName +
              "." +
              e +
              " but it wasn't found.",
            a
          );
        else {
          b = this.Versioning.None;
          this.targetObject = a;
          void 0 !== a.needsUpdate
            ? (b = this.Versioning.NeedsUpdate)
            : void 0 !== a.matrixWorldNeedsUpdate &&
              (b = this.Versioning.MatrixWorldNeedsUpdate);
          d = this.BindingType.Direct;
          if (void 0 !== f) {
            if ("morphTargetInfluences" === e) {
              if (!a.geometry) {
                console.error(
                  "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
                  this
                );
                return;
              }
              if (a.geometry.isBufferGeometry) {
                if (!a.geometry.morphAttributes) {
                  console.error(
                    "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
                    this
                  );
                  return;
                }
                void 0 !== a.morphTargetDictionary[f] &&
                  (f = a.morphTargetDictionary[f]);
              } else {
                console.error(
                  "THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",
                  this
                );
                return;
              }
            }
            d = this.BindingType.ArrayElement;
            this.resolvedProperty = g;
            this.propertyIndex = f;
          } else
            void 0 !== g.fromArray && void 0 !== g.toArray
              ? ((d = this.BindingType.HasFromToArray),
                (this.resolvedProperty = g))
              : Array.isArray(g)
              ? ((d = this.BindingType.EntireArray),
                (this.resolvedProperty = g))
              : (this.propertyName = e);
          this.getValue = this.GetterByBindingType[d];
          this.setValue = this.SetterByBindingTypeAndVersioning[d][b];
        }
      } else
        console.error(
          "THREE.PropertyBinding: Trying to update node for track: " +
            this.path +
            " but it wasn't found."
        );
    },
    unbind: function () {
      this.node = null;
      this.getValue = this._getValue_unbound;
      this.setValue = this._setValue_unbound;
    },
  });
  Object.assign(qb.prototype, {
    _getValue_unbound: qb.prototype.getValue,
    _setValue_unbound: qb.prototype.setValue,
  });
  Object.assign(nj.prototype, {
    isAnimationObjectGroup: !0,
    add: function () {
      for (
        var a = this._objects,
          b = this._indicesByUUID,
          d = this._paths,
          e = this._parsedPaths,
          f = this._bindings,
          g = f.length,
          h = void 0,
          k = a.length,
          l = this.nCachedObjects_,
          m = 0,
          n = arguments.length;
        m !== n;
        ++m
      ) {
        var p = arguments[m],
          t = p.uuid,
          q = b[t];
        if (void 0 === q) {
          q = k++;
          b[t] = q;
          a.push(p);
          q = 0;
          for (var v = g; q !== v; ++q) f[q].push(new qb(p, d[q], e[q]));
        } else if (q < l) {
          h = a[q];
          v = --l;
          var u = a[v];
          b[u.uuid] = q;
          a[q] = u;
          b[t] = v;
          a[v] = p;
          t = 0;
          for (u = g; t !== u; ++t) {
            var A = f[t],
              B = A[q];
            A[q] = A[v];
            void 0 === B && (B = new qb(p, d[t], e[t]));
            A[v] = B;
          }
        } else
          a[q] !== h &&
            console.error(
              "THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes."
            );
      }
      this.nCachedObjects_ = l;
    },
    remove: function () {
      for (
        var a = this._objects,
          b = this._indicesByUUID,
          d = this._bindings,
          e = d.length,
          f = this.nCachedObjects_,
          g = 0,
          h = arguments.length;
        g !== h;
        ++g
      ) {
        var k = arguments[g],
          l = k.uuid,
          m = b[l];
        if (void 0 !== m && m >= f) {
          var n = f++,
            p = a[n];
          b[p.uuid] = m;
          a[m] = p;
          b[l] = n;
          a[n] = k;
          k = 0;
          for (l = e; k !== l; ++k) {
            p = d[k];
            var t = p[m];
            p[m] = p[n];
            p[n] = t;
          }
        }
      }
      this.nCachedObjects_ = f;
    },
    uncache: function () {
      for (
        var a = this._objects,
          b = this._indicesByUUID,
          d = this._bindings,
          e = d.length,
          f = this.nCachedObjects_,
          g = a.length,
          h = 0,
          k = arguments.length;
        h !== k;
        ++h
      ) {
        var l = arguments[h].uuid,
          m = b[l];
        if (void 0 !== m)
          if ((delete b[l], m < f)) {
            l = --f;
            var n = a[l],
              p = --g,
              t = a[p];
            b[n.uuid] = m;
            a[m] = n;
            b[t.uuid] = l;
            a[l] = t;
            a.pop();
            n = 0;
            for (t = e; n !== t; ++n) {
              var q = d[n],
                v = q[p];
              q[m] = q[l];
              q[l] = v;
              q.pop();
            }
          } else
            for (
              l = --g, p = a[l], b[p.uuid] = m, a[m] = p, a.pop(), p = 0, n = e;
              p !== n;
              ++p
            )
              (t = d[p]), (t[m] = t[l]), t.pop();
      }
      this.nCachedObjects_ = f;
    },
    subscribe_: function (a, b) {
      var d = this._bindingsIndicesByPath,
        e = d[a],
        f = this._bindings;
      if (void 0 !== e) return f[e];
      var g = this._paths,
        h = this._parsedPaths,
        k = this._objects,
        l = this.nCachedObjects_,
        m = Array(k.length);
      e = f.length;
      d[a] = e;
      g.push(a);
      h.push(b);
      f.push(m);
      d = l;
      for (e = k.length; d !== e; ++d) m[d] = new qb(k[d], a, b);
      return m;
    },
    unsubscribe_: function (a) {
      var b = this._bindingsIndicesByPath,
        d = b[a];
      if (void 0 !== d) {
        var e = this._paths,
          f = this._parsedPaths,
          g = this._bindings,
          h = g.length - 1,
          k = g[h];
        b[a[h]] = d;
        g[d] = k;
        g.pop();
        f[d] = f[h];
        f.pop();
        e[d] = e[h];
        e.pop();
      }
    },
  });
  var La = function (a, b, d, e) {
    this._mixer = a;
    this._clip = b;
    this._localRoot = d || null;
    this.blendMode = e || b.blendMode;
    a = b.tracks;
    b = a.length;
    d = Array(b);
    e = { endingStart: 2400, endingEnd: 2400 };
    for (var f = 0; f !== b; ++f) {
      var g = a[f].createInterpolant(null);
      d[f] = g;
      g.settings = e;
    }
    this._interpolantSettings = e;
    this._interpolants = d;
    this._propertyBindings = Array(b);
    this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null;
    this.loop = 2201;
    this._loopCount = -1;
    this._startTime = null;
    this.time = 0;
    this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1;
    this.repetitions = Infinity;
    this.paused = !1;
    this.enabled = !0;
    this.clampWhenFinished = !1;
    this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0;
  };
  La.prototype.play = function () {
    this._mixer._activateAction(this);
    return this;
  };
  La.prototype.stop = function () {
    this._mixer._deactivateAction(this);
    return this.reset();
  };
  La.prototype.reset = function () {
    this.paused = !1;
    this.enabled = !0;
    this.time = 0;
    this._loopCount = -1;
    this._startTime = null;
    return this.stopFading().stopWarping();
  };
  La.prototype.isRunning = function () {
    return (
      this.enabled &&
      !this.paused &&
      0 !== this.timeScale &&
      null === this._startTime &&
      this._mixer._isActiveAction(this)
    );
  };
  La.prototype.isScheduled = function () {
    return this._mixer._isActiveAction(this);
  };
  La.prototype.startAt = function (a) {
    this._startTime = a;
    return this;
  };
  La.prototype.setLoop = function (a, b) {
    this.loop = a;
    this.repetitions = b;
    return this;
  };
  La.prototype.setEffectiveWeight = function (a) {
    this.weight = a;
    this._effectiveWeight = this.enabled ? a : 0;
    return this.stopFading();
  };
  La.prototype.getEffectiveWeight = function () {
    return this._effectiveWeight;
  };
  La.prototype.fadeIn = function (a) {
    return this._scheduleFading(a, 0, 1);
  };
  La.prototype.fadeOut = function (a) {
    return this._scheduleFading(a, 1, 0);
  };
  La.prototype.crossFadeFrom = function (a, b, d) {
    a.fadeOut(b);
    this.fadeIn(b);
    if (d) {
      d = this._clip.duration;
      var e = a._clip.duration,
        f = d / e;
      a.warp(1, e / d, b);
      this.warp(f, 1, b);
    }
    return this;
  };
  La.prototype.crossFadeTo = function (a, b, d) {
    return a.crossFadeFrom(this, b, d);
  };
  La.prototype.stopFading = function () {
    var a = this._weightInterpolant;
    null !== a &&
      ((this._weightInterpolant = null),
      this._mixer._takeBackControlInterpolant(a));
    return this;
  };
  La.prototype.setEffectiveTimeScale = function (a) {
    this.timeScale = a;
    this._effectiveTimeScale = this.paused ? 0 : a;
    return this.stopWarping();
  };
  La.prototype.getEffectiveTimeScale = function () {
    return this._effectiveTimeScale;
  };
  La.prototype.setDuration = function (a) {
    this.timeScale = this._clip.duration / a;
    return this.stopWarping();
  };
  La.prototype.syncWith = function (a) {
    this.time = a.time;
    this.timeScale = a.timeScale;
    return this.stopWarping();
  };
  La.prototype.halt = function (a) {
    return this.warp(this._effectiveTimeScale, 0, a);
  };
  La.prototype.warp = function (a, b, d) {
    var e = this._mixer,
      f = e.time,
      g = this.timeScale,
      h = this._timeScaleInterpolant;
    null === h &&
      (this._timeScaleInterpolant = h = e._lendControlInterpolant());
    e = h.parameterPositions;
    h = h.sampleValues;
    e[0] = f;
    e[1] = f + d;
    h[0] = a / g;
    h[1] = b / g;
    return this;
  };
  La.prototype.stopWarping = function () {
    var a = this._timeScaleInterpolant;
    null !== a &&
      ((this._timeScaleInterpolant = null),
      this._mixer._takeBackControlInterpolant(a));
    return this;
  };
  La.prototype.getMixer = function () {
    return this._mixer;
  };
  La.prototype.getClip = function () {
    return this._clip;
  };
  La.prototype.getRoot = function () {
    return this._localRoot || this._mixer._root;
  };
  La.prototype._update = function (a, b, d, e) {
    if (this.enabled) {
      var f = this._startTime;
      if (null !== f) {
        b = (a - f) * d;
        if (0 > b || 0 === d) return;
        this._startTime = null;
        b *= d;
      }
      b *= this._updateTimeScale(a);
      d = this._updateTime(b);
      a = this._updateWeight(a);
      if (0 < a)
        switch (
          ((b = this._interpolants),
          (f = this._propertyBindings),
          this.blendMode)
        ) {
          case 2501:
            e = 0;
            for (var g = b.length; e !== g; ++e)
              b[e].evaluate(d), f[e].accumulateAdditive(a);
            break;
          default:
            g = 0;
            for (var h = b.length; g !== h; ++g)
              b[g].evaluate(d), f[g].accumulate(e, a);
        }
    } else this._updateWeight(a);
  };
  La.prototype._updateWeight = function (a) {
    var b = 0;
    if (this.enabled) {
      b = this.weight;
      var d = this._weightInterpolant;
      if (null !== d) {
        var e = d.evaluate(a)[0];
        b *= e;
        a > d.parameterPositions[1] &&
          (this.stopFading(), 0 === e && (this.enabled = !1));
      }
    }
    return (this._effectiveWeight = b);
  };
  La.prototype._updateTimeScale = function (a) {
    var b = 0;
    if (!this.paused) {
      b = this.timeScale;
      var d = this._timeScaleInterpolant;
      if (null !== d) {
        var e = d.evaluate(a)[0];
        b *= e;
        a > d.parameterPositions[1] &&
          (this.stopWarping(),
          0 === b ? (this.paused = !0) : (this.timeScale = b));
      }
    }
    return (this._effectiveTimeScale = b);
  };
  La.prototype._updateTime = function (a) {
    var b = this._clip.duration,
      d = this.loop,
      e = this.time + a,
      f = this._loopCount,
      g = 2202 === d;
    if (0 === a) return -1 === f ? e : g && 1 === (f & 1) ? b - e : e;
    if (2200 === d)
      a: {
        if (
          (-1 === f && ((this._loopCount = 0), this._setEndings(!0, !0, !1)),
          e >= b)
        )
          e = b;
        else if (0 > e) e = 0;
        else {
          this.time = e;
          break a;
        }
        this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1);
        this.time = e;
        this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: 0 > a ? -1 : 1,
        });
      }
    else {
      -1 === f &&
        (0 <= a
          ? ((f = 0), this._setEndings(!0, 0 === this.repetitions, g))
          : this._setEndings(0 === this.repetitions, !0, g));
      if (e >= b || 0 > e) {
        d = Math.floor(e / b);
        e -= b * d;
        f += Math.abs(d);
        var h = this.repetitions - f;
        0 >= h
          ? (this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
            (this.time = e = 0 < a ? b : 0),
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: 0 < a ? 1 : -1,
            }))
          : (1 === h
              ? ((a = 0 > a), this._setEndings(a, !a, g))
              : this._setEndings(!1, !1, g),
            (this._loopCount = f),
            (this.time = e),
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: d,
            }));
      } else this.time = e;
      if (g && 1 === (f & 1)) return b - e;
    }
    return e;
  };
  La.prototype._setEndings = function (a, b, d) {
    var e = this._interpolantSettings;
    d
      ? ((e.endingStart = 2401), (e.endingEnd = 2401))
      : ((e.endingStart = a ? (this.zeroSlopeAtStart ? 2401 : 2400) : 2402),
        (e.endingEnd = b ? (this.zeroSlopeAtEnd ? 2401 : 2400) : 2402));
  };
  La.prototype._scheduleFading = function (a, b, d) {
    var e = this._mixer,
      f = e.time,
      g = this._weightInterpolant;
    null === g && (this._weightInterpolant = g = e._lendControlInterpolant());
    e = g.parameterPositions;
    g = g.sampleValues;
    e[0] = f;
    g[0] = b;
    e[1] = f + a;
    g[1] = d;
    return this;
  };
  Ph.prototype = Object.assign(Object.create(wb.prototype), {
    constructor: Ph,
    _bindAction: function (a, b) {
      var d = a._localRoot || this._root,
        e = a._clip.tracks,
        f = e.length,
        g = a._propertyBindings;
      a = a._interpolants;
      var h = d.uuid,
        k = this._bindingsByRootAndName,
        l = k[h];
      void 0 === l && ((l = {}), (k[h] = l));
      for (k = 0; k !== f; ++k) {
        var m = e[k],
          n = m.name,
          p = l[n];
        if (void 0 === p) {
          p = g[k];
          if (void 0 !== p) {
            null === p._cacheIndex &&
              (++p.referenceCount, this._addInactiveBinding(p, h, n));
            continue;
          }
          p = new Oh(
            qb.create(d, n, b && b._propertyBindings[k].binding.parsedPath),
            m.ValueTypeName,
            m.getValueSize()
          );
          ++p.referenceCount;
          this._addInactiveBinding(p, h, n);
        }
        g[k] = p;
        a[k].resultBuffer = p.buffer;
      }
    },
    _activateAction: function (a) {
      if (!this._isActiveAction(a)) {
        if (null === a._cacheIndex) {
          var b = (a._localRoot || this._root).uuid,
            d = a._clip.uuid,
            e = this._actionsByClip[d];
          this._bindAction(a, e && e.knownActions[0]);
          this._addInactiveAction(a, d, b);
        }
        b = a._propertyBindings;
        d = 0;
        for (e = b.length; d !== e; ++d) {
          var f = b[d];
          0 === f.useCount++ && (this._lendBinding(f), f.saveOriginalState());
        }
        this._lendAction(a);
      }
    },
    _deactivateAction: function (a) {
      if (this._isActiveAction(a)) {
        for (var b = a._propertyBindings, d = 0, e = b.length; d !== e; ++d) {
          var f = b[d];
          0 === --f.useCount &&
            (f.restoreOriginalState(), this._takeBackBinding(f));
        }
        this._takeBackAction(a);
      }
    },
    _initMemoryManager: function () {
      this._actions = [];
      this._nActiveActions = 0;
      this._actionsByClip = {};
      this._bindings = [];
      this._nActiveBindings = 0;
      this._bindingsByRootAndName = {};
      this._controlInterpolants = [];
      this._nActiveControlInterpolants = 0;
      var a = this;
      this.stats = {
        actions: {
          get total() {
            return a._actions.length;
          },
          get inUse() {
            return a._nActiveActions;
          },
        },
        bindings: {
          get total() {
            return a._bindings.length;
          },
          get inUse() {
            return a._nActiveBindings;
          },
        },
        controlInterpolants: {
          get total() {
            return a._controlInterpolants.length;
          },
          get inUse() {
            return a._nActiveControlInterpolants;
          },
        },
      };
    },
    _isActiveAction: function (a) {
      a = a._cacheIndex;
      return null !== a && a < this._nActiveActions;
    },
    _addInactiveAction: function (a, b, d) {
      var e = this._actions,
        f = this._actionsByClip,
        g = f[b];
      void 0 === g
        ? ((g = { knownActions: [a], actionByRoot: {} }),
          (a._byClipCacheIndex = 0),
          (f[b] = g))
        : ((b = g.knownActions), (a._byClipCacheIndex = b.length), b.push(a));
      a._cacheIndex = e.length;
      e.push(a);
      g.actionByRoot[d] = a;
    },
    _removeInactiveAction: function (a) {
      var b = this._actions,
        d = b[b.length - 1],
        e = a._cacheIndex;
      d._cacheIndex = e;
      b[e] = d;
      b.pop();
      a._cacheIndex = null;
      b = a._clip.uuid;
      d = this._actionsByClip;
      e = d[b];
      var f = e.knownActions,
        g = f[f.length - 1],
        h = a._byClipCacheIndex;
      g._byClipCacheIndex = h;
      f[h] = g;
      f.pop();
      a._byClipCacheIndex = null;
      delete e.actionByRoot[(a._localRoot || this._root).uuid];
      0 === f.length && delete d[b];
      this._removeInactiveBindingsForAction(a);
    },
    _removeInactiveBindingsForAction: function (a) {
      a = a._propertyBindings;
      for (var b = 0, d = a.length; b !== d; ++b) {
        var e = a[b];
        0 === --e.referenceCount && this._removeInactiveBinding(e);
      }
    },
    _lendAction: function (a) {
      var b = this._actions,
        d = a._cacheIndex,
        e = this._nActiveActions++,
        f = b[e];
      a._cacheIndex = e;
      b[e] = a;
      f._cacheIndex = d;
      b[d] = f;
    },
    _takeBackAction: function (a) {
      var b = this._actions,
        d = a._cacheIndex,
        e = --this._nActiveActions,
        f = b[e];
      a._cacheIndex = e;
      b[e] = a;
      f._cacheIndex = d;
      b[d] = f;
    },
    _addInactiveBinding: function (a, b, d) {
      var e = this._bindingsByRootAndName,
        f = this._bindings,
        g = e[b];
      void 0 === g && ((g = {}), (e[b] = g));
      g[d] = a;
      a._cacheIndex = f.length;
      f.push(a);
    },
    _removeInactiveBinding: function (a) {
      var b = this._bindings,
        d = a.binding,
        e = d.rootNode.uuid;
      d = d.path;
      var f = this._bindingsByRootAndName,
        g = f[e],
        h = b[b.length - 1];
      a = a._cacheIndex;
      h._cacheIndex = a;
      b[a] = h;
      b.pop();
      delete g[d];
      0 === Object.keys(g).length && delete f[e];
    },
    _lendBinding: function (a) {
      var b = this._bindings,
        d = a._cacheIndex,
        e = this._nActiveBindings++,
        f = b[e];
      a._cacheIndex = e;
      b[e] = a;
      f._cacheIndex = d;
      b[d] = f;
    },
    _takeBackBinding: function (a) {
      var b = this._bindings,
        d = a._cacheIndex,
        e = --this._nActiveBindings,
        f = b[e];
      a._cacheIndex = e;
      b[e] = a;
      f._cacheIndex = d;
      b[d] = f;
    },
    _lendControlInterpolant: function () {
      var a = this._controlInterpolants,
        b = this._nActiveControlInterpolants++,
        d = a[b];
      void 0 === d &&
        ((d = new of(
          new Float32Array(2),
          new Float32Array(2),
          1,
          this._controlInterpolantsResultBuffer
        )),
        (d.__cacheIndex = b),
        (a[b] = d));
      return d;
    },
    _takeBackControlInterpolant: function (a) {
      var b = this._controlInterpolants,
        d = a.__cacheIndex,
        e = --this._nActiveControlInterpolants,
        f = b[e];
      a.__cacheIndex = e;
      b[e] = a;
      f.__cacheIndex = d;
      b[d] = f;
    },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction: function (a, b, d) {
      var e = b || this._root,
        f = e.uuid;
      e = "string" === typeof a ? Mb.findByName(e, a) : a;
      a = null !== e ? e.uuid : a;
      var g = this._actionsByClip[a],
        h = null;
      void 0 === d && (d = null !== e ? e.blendMode : 2500);
      if (void 0 !== g) {
        h = g.actionByRoot[f];
        if (void 0 !== h && h.blendMode === d) return h;
        h = g.knownActions[0];
        null === e && (e = h._clip);
      }
      if (null === e) return null;
      b = new La(this, e, b, d);
      this._bindAction(b, h);
      this._addInactiveAction(b, a, f);
      return b;
    },
    existingAction: function (a, b) {
      var d = b || this._root;
      b = d.uuid;
      d = "string" === typeof a ? Mb.findByName(d, a) : a;
      a = this._actionsByClip[d ? d.uuid : a];
      return void 0 !== a ? a.actionByRoot[b] || null : null;
    },
    stopAllAction: function () {
      for (var a = this._actions, b = this._nActiveActions - 1; 0 <= b; --b)
        a[b].stop();
      return this;
    },
    update: function (a) {
      a *= this.timeScale;
      for (
        var b = this._actions,
          d = this._nActiveActions,
          e = (this.time += a),
          f = Math.sign(a),
          g = (this._accuIndex ^= 1),
          h = 0;
        h !== d;
        ++h
      )
        b[h]._update(e, a, f, g);
      a = this._bindings;
      b = this._nActiveBindings;
      for (d = 0; d !== b; ++d) a[d].apply(g);
      return this;
    },
    setTime: function (a) {
      for (var b = (this.time = 0); b < this._actions.length; b++)
        this._actions[b].time = 0;
      return this.update(a);
    },
    getRoot: function () {
      return this._root;
    },
    uncacheClip: function (a) {
      var b = this._actions;
      a = a.uuid;
      var d = this._actionsByClip,
        e = d[a];
      if (void 0 !== e) {
        e = e.knownActions;
        for (var f = 0, g = e.length; f !== g; ++f) {
          var h = e[f];
          this._deactivateAction(h);
          var k = h._cacheIndex,
            l = b[b.length - 1];
          h._cacheIndex = null;
          h._byClipCacheIndex = null;
          l._cacheIndex = k;
          b[k] = l;
          b.pop();
          this._removeInactiveBindingsForAction(h);
        }
        delete d[a];
      }
    },
    uncacheRoot: function (a) {
      a = a.uuid;
      var b = this._actionsByClip;
      for (e in b) {
        var d = b[e].actionByRoot[a];
        void 0 !== d &&
          (this._deactivateAction(d), this._removeInactiveAction(d));
      }
      var e = this._bindingsByRootAndName[a];
      if (void 0 !== e)
        for (var f in e)
          (a = e[f]), a.restoreOriginalState(), this._removeInactiveBinding(a);
    },
    uncacheAction: function (a, b) {
      a = this.existingAction(a, b);
      null !== a && (this._deactivateAction(a), this._removeInactiveAction(a));
    },
  });
  var Yg = function (a, b) {
    "string" === typeof a &&
      (console.warn("THREE.Uniform: Type parameter is no longer needed."),
      (a = b));
    this.value = a;
  };
  Yg.prototype.clone = function () {
    return new Yg(
      void 0 === this.value.clone ? this.value : this.value.clone()
    );
  };
  Qh.prototype = Object.assign(Object.create(Gb.prototype), {
    constructor: Qh,
    isInstancedInterleavedBuffer: !0,
    copy: function (a) {
      Gb.prototype.copy.call(this, a);
      this.meshPerAttribute = a.meshPerAttribute;
      return this;
    },
    clone: function (a) {
      a = Gb.prototype.clone.call(this, a);
      a.meshPerAttribute = this.meshPerAttribute;
      return a;
    },
    toJSON: function (a) {
      a = Gb.prototype.toJSON.call(this, a);
      a.isInstancedInterleavedBuffer = !0;
      a.meshPerAttribute = this.meshPerAttribute;
      return a;
    },
  });
  Object.defineProperty(Rh.prototype, "needsUpdate", {
    set: function (a) {
      !0 === a && this.version++;
    },
  });
  Object.assign(Rh.prototype, {
    isGLBufferAttribute: !0,
    setBuffer: function (a) {
      this.buffer = a;
      return this;
    },
    setType: function (a, b) {
      this.type = a;
      this.elementSize = b;
      return this;
    },
    setItemSize: function (a) {
      this.itemSize = a;
      return this;
    },
    setCount: function (a) {
      this.count = a;
      return this;
    },
  });
  Object.assign(Sh.prototype, {
    set: function (a, b) {
      this.ray.set(a, b);
    },
    setFromCamera: function (a, b) {
      b && b.isPerspectiveCamera
        ? (this.ray.origin.setFromMatrixPosition(b.matrixWorld),
          this.ray.direction
            .set(a.x, a.y, 0.5)
            .unproject(b)
            .sub(this.ray.origin)
            .normalize(),
          (this.camera = b))
        : b && b.isOrthographicCamera
        ? (this.ray.origin
            .set(a.x, a.y, (b.near + b.far) / (b.near - b.far))
            .unproject(b),
          this.ray.direction.set(0, 0, -1).transformDirection(b.matrixWorld),
          (this.camera = b))
        : console.error("THREE.Raycaster: Unsupported camera type.");
    },
    intersectObject: function (a, b, d) {
      d = d || [];
      Th(a, this, d, b);
      d.sort(oj);
      return d;
    },
    intersectObjects: function (a, b, d) {
      d = d || [];
      if (!1 === Array.isArray(a))
        return (
          console.warn(
            "THREE.Raycaster.intersectObjects: objects is not an Array."
          ),
          d
        );
      for (var e = 0, f = a.length; e < f; e++) Th(a[e], this, d, b);
      d.sort(oj);
      return d;
    },
  });
  var Ad = function (a, b, d) {
    void 0 === a && (a = 1);
    void 0 === b && (b = 0);
    void 0 === d && (d = 0);
    this.radius = a;
    this.phi = b;
    this.theta = d;
    return this;
  };
  Ad.prototype.set = function (a, b, d) {
    this.radius = a;
    this.phi = b;
    this.theta = d;
    return this;
  };
  Ad.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  Ad.prototype.copy = function (a) {
    this.radius = a.radius;
    this.phi = a.phi;
    this.theta = a.theta;
    return this;
  };
  Ad.prototype.makeSafe = function () {
    this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi));
    return this;
  };
  Ad.prototype.setFromVector3 = function (a) {
    return this.setFromCartesianCoords(a.x, a.y, a.z);
  };
  Ad.prototype.setFromCartesianCoords = function (a, b, d) {
    this.radius = Math.sqrt(a * a + b * b + d * d);
    0 === this.radius
      ? (this.phi = this.theta = 0)
      : ((this.theta = Math.atan2(a, d)),
        (this.phi = Math.acos(xa.clamp(b / this.radius, -1, 1))));
    return this;
  };
  var Ae = function (a, b, d) {
    this.radius = void 0 !== a ? a : 1;
    this.theta = void 0 !== b ? b : 0;
    this.y = void 0 !== d ? d : 0;
    return this;
  };
  Ae.prototype.set = function (a, b, d) {
    this.radius = a;
    this.theta = b;
    this.y = d;
    return this;
  };
  Ae.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  Ae.prototype.copy = function (a) {
    this.radius = a.radius;
    this.theta = a.theta;
    this.y = a.y;
    return this;
  };
  Ae.prototype.setFromVector3 = function (a) {
    return this.setFromCartesianCoords(a.x, a.y, a.z);
  };
  Ae.prototype.setFromCartesianCoords = function (a, b, d) {
    this.radius = Math.sqrt(a * a + d * d);
    this.theta = Math.atan2(a, d);
    this.y = b;
    return this;
  };
  var Vj = new L(),
    $a = function (a, b) {
      Object.defineProperty(this, "isBox2", { value: !0 });
      this.min = void 0 !== a ? a : new L(Infinity, Infinity);
      this.max = void 0 !== b ? b : new L(-Infinity, -Infinity);
    };
  $a.prototype.set = function (a, b) {
    this.min.copy(a);
    this.max.copy(b);
    return this;
  };
  $a.prototype.setFromPoints = function (a) {
    this.makeEmpty();
    for (var b = 0, d = a.length; b < d; b++) this.expandByPoint(a[b]);
    return this;
  };
  $a.prototype.setFromCenterAndSize = function (a, b) {
    b = Vj.copy(b).multiplyScalar(0.5);
    this.min.copy(a).sub(b);
    this.max.copy(a).add(b);
    return this;
  };
  $a.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  $a.prototype.copy = function (a) {
    this.min.copy(a.min);
    this.max.copy(a.max);
    return this;
  };
  $a.prototype.makeEmpty = function () {
    this.min.x = this.min.y = Infinity;
    this.max.x = this.max.y = -Infinity;
    return this;
  };
  $a.prototype.isEmpty = function () {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  };
  $a.prototype.getCenter = function (a) {
    void 0 === a &&
      (console.warn("THREE.Box2: .getCenter() target is now required"),
      (a = new L()));
    return this.isEmpty()
      ? a.set(0, 0)
      : a.addVectors(this.min, this.max).multiplyScalar(0.5);
  };
  $a.prototype.getSize = function (a) {
    void 0 === a &&
      (console.warn("THREE.Box2: .getSize() target is now required"),
      (a = new L()));
    return this.isEmpty() ? a.set(0, 0) : a.subVectors(this.max, this.min);
  };
  $a.prototype.expandByPoint = function (a) {
    this.min.min(a);
    this.max.max(a);
    return this;
  };
  $a.prototype.expandByVector = function (a) {
    this.min.sub(a);
    this.max.add(a);
    return this;
  };
  $a.prototype.expandByScalar = function (a) {
    this.min.addScalar(-a);
    this.max.addScalar(a);
    return this;
  };
  $a.prototype.containsPoint = function (a) {
    return a.x < this.min.x ||
      a.x > this.max.x ||
      a.y < this.min.y ||
      a.y > this.max.y
      ? !1
      : !0;
  };
  $a.prototype.containsBox = function (a) {
    return (
      this.min.x <= a.min.x &&
      a.max.x <= this.max.x &&
      this.min.y <= a.min.y &&
      a.max.y <= this.max.y
    );
  };
  $a.prototype.getParameter = function (a, b) {
    void 0 === b &&
      (console.warn("THREE.Box2: .getParameter() target is now required"),
      (b = new L()));
    return b.set(
      (a.x - this.min.x) / (this.max.x - this.min.x),
      (a.y - this.min.y) / (this.max.y - this.min.y)
    );
  };
  $a.prototype.intersectsBox = function (a) {
    return a.max.x < this.min.x ||
      a.min.x > this.max.x ||
      a.max.y < this.min.y ||
      a.min.y > this.max.y
      ? !1
      : !0;
  };
  $a.prototype.clampPoint = function (a, b) {
    void 0 === b &&
      (console.warn("THREE.Box2: .clampPoint() target is now required"),
      (b = new L()));
    return b.copy(a).clamp(this.min, this.max);
  };
  $a.prototype.distanceToPoint = function (a) {
    return Vj.copy(a).clamp(this.min, this.max).sub(a).length();
  };
  $a.prototype.intersect = function (a) {
    this.min.max(a.min);
    this.max.min(a.max);
    return this;
  };
  $a.prototype.union = function (a) {
    this.min.min(a.min);
    this.max.max(a.max);
    return this;
  };
  $a.prototype.translate = function (a) {
    this.min.add(a);
    this.max.add(a);
    return this;
  };
  $a.prototype.equals = function (a) {
    return a.min.equals(this.min) && a.max.equals(this.max);
  };
  var Wj = new w(),
    Zg = new w(),
    Cb = function (a, b) {
      this.start = void 0 !== a ? a : new w();
      this.end = void 0 !== b ? b : new w();
    };
  Cb.prototype.set = function (a, b) {
    this.start.copy(a);
    this.end.copy(b);
    return this;
  };
  Cb.prototype.clone = function () {
    return new this.constructor().copy(this);
  };
  Cb.prototype.copy = function (a) {
    this.start.copy(a.start);
    this.end.copy(a.end);
    return this;
  };
  Cb.prototype.getCenter = function (a) {
    void 0 === a &&
      (console.warn("THREE.Line3: .getCenter() target is now required"),
      (a = new w()));
    return a.addVectors(this.start, this.end).multiplyScalar(0.5);
  };
  Cb.prototype.delta = function (a) {
    void 0 === a &&
      (console.warn("THREE.Line3: .delta() target is now required"),
      (a = new w()));
    return a.subVectors(this.end, this.start);
  };
  Cb.prototype.distanceSq = function () {
    return this.start.distanceToSquared(this.end);
  };
  Cb.prototype.distance = function () {
    return this.start.distanceTo(this.end);
  };
  Cb.prototype.at = function (a, b) {
    void 0 === b &&
      (console.warn("THREE.Line3: .at() target is now required"),
      (b = new w()));
    return this.delta(b).multiplyScalar(a).add(this.start);
  };
  Cb.prototype.closestPointToPointParameter = function (a, b) {
    Wj.subVectors(a, this.start);
    Zg.subVectors(this.end, this.start);
    a = Zg.dot(Zg);
    a = Zg.dot(Wj) / a;
    b && (a = xa.clamp(a, 0, 1));
    return a;
  };
  Cb.prototype.closestPointToPoint = function (a, b, d) {
    a = this.closestPointToPointParameter(a, b);
    void 0 === d &&
      (console.warn(
        "THREE.Line3: .closestPointToPoint() target is now required"
      ),
      (d = new w()));
    return this.delta(d).multiplyScalar(a).add(this.start);
  };
  Cb.prototype.applyMatrix4 = function (a) {
    this.start.applyMatrix4(a);
    this.end.applyMatrix4(a);
    return this;
  };
  Cb.prototype.equals = function (a) {
    return a.start.equals(this.start) && a.end.equals(this.end);
  };
  tf.prototype = Object.create(ha.prototype);
  tf.prototype.constructor = tf;
  tf.prototype.isImmediateRenderObject = !0;
  var Xj = new w();
  je.prototype = Object.create(ha.prototype);
  je.prototype.constructor = je;
  je.prototype.dispose = function () {
    this.cone.geometry.dispose();
    this.cone.material.dispose();
  };
  je.prototype.update = function () {
    this.light.updateMatrixWorld();
    var a = this.light.distance ? this.light.distance : 1e3,
      b = a * Math.tan(this.light.angle);
    this.cone.scale.set(b, b, a);
    Xj.setFromMatrixPosition(this.light.target.matrixWorld);
    this.cone.lookAt(Xj);
    void 0 !== this.color
      ? this.cone.material.color.set(this.color)
      : this.cone.material.color.copy(this.light.color);
  };
  var Xc = new w(),
    $g = new da(),
    ri = new da();
  ke.prototype = Object.create(Za.prototype);
  ke.prototype.constructor = ke;
  ke.prototype.updateMatrixWorld = function (a) {
    var b = this.bones,
      d = this.geometry,
      e = d.getAttribute("position");
    ri.getInverse(this.root.matrixWorld);
    for (var f = 0, g = 0; f < b.length; f++) {
      var h = b[f];
      h.parent &&
        h.parent.isBone &&
        ($g.multiplyMatrices(ri, h.matrixWorld),
        Xc.setFromMatrixPosition($g),
        e.setXYZ(g, Xc.x, Xc.y, Xc.z),
        $g.multiplyMatrices(ri, h.parent.matrixWorld),
        Xc.setFromMatrixPosition($g),
        e.setXYZ(g + 1, Xc.x, Xc.y, Xc.z),
        (g += 2));
    }
    d.getAttribute("position").needsUpdate = !0;
    Za.prototype.updateMatrixWorld.call(this, a);
  };
  le.prototype = Object.create(Qa.prototype);
  le.prototype.constructor = le;
  le.prototype.dispose = function () {
    this.geometry.dispose();
    this.material.dispose();
  };
  le.prototype.update = function () {
    void 0 !== this.color
      ? this.material.color.set(this.color)
      : this.material.color.copy(this.light.color);
  };
  var im = new w(),
    Yj = new S(),
    Zj = new S();
  me.prototype = Object.create(ha.prototype);
  me.prototype.constructor = me;
  me.prototype.dispose = function () {
    this.children[0].geometry.dispose();
    this.children[0].material.dispose();
  };
  me.prototype.update = function () {
    var a = this.children[0];
    if (void 0 !== this.color) this.material.color.set(this.color);
    else {
      var b = a.geometry.getAttribute("color");
      Yj.copy(this.light.color);
      Zj.copy(this.light.groundColor);
      for (var d = 0, e = b.count; d < e; d++) {
        var f = d < e / 2 ? Yj : Zj;
        b.setXYZ(d, f.r, f.g, f.b);
      }
      b.needsUpdate = !0;
    }
    a.lookAt(im.setFromMatrixPosition(this.light.matrixWorld).negate());
  };
  uf.prototype = Object.create(Za.prototype);
  uf.prototype.constructor = uf;
  xg.prototype = Object.create(Za.prototype);
  xg.prototype.constructor = xg;
  var ak = new w(),
    ah = new w(),
    bk = new w();
  ne.prototype = Object.create(ha.prototype);
  ne.prototype.constructor = ne;
  ne.prototype.dispose = function () {
    this.lightPlane.geometry.dispose();
    this.lightPlane.material.dispose();
    this.targetLine.geometry.dispose();
    this.targetLine.material.dispose();
  };
  ne.prototype.update = function () {
    ak.setFromMatrixPosition(this.light.matrixWorld);
    ah.setFromMatrixPosition(this.light.target.matrixWorld);
    bk.subVectors(ah, ak);
    this.lightPlane.lookAt(ah);
    void 0 !== this.color
      ? (this.lightPlane.material.color.set(this.color),
        this.targetLine.material.color.set(this.color))
      : (this.lightPlane.material.color.copy(this.light.color),
        this.targetLine.material.color.copy(this.light.color));
    this.targetLine.lookAt(ah);
    this.targetLine.scale.z = bk.length();
  };
  var yg = new w(),
    cb = new ac();
  vf.prototype = Object.create(Za.prototype);
  vf.prototype.constructor = vf;
  vf.prototype.update = function () {
    var a = this.geometry,
      b = this.pointMap;
    cb.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
    db("c", b, a, cb, 0, 0, -1);
    db("t", b, a, cb, 0, 0, 1);
    db("n1", b, a, cb, -1, -1, -1);
    db("n2", b, a, cb, 1, -1, -1);
    db("n3", b, a, cb, -1, 1, -1);
    db("n4", b, a, cb, 1, 1, -1);
    db("f1", b, a, cb, -1, -1, 1);
    db("f2", b, a, cb, 1, -1, 1);
    db("f3", b, a, cb, -1, 1, 1);
    db("f4", b, a, cb, 1, 1, 1);
    db("u1", b, a, cb, 0.7, 1.1, -1);
    db("u2", b, a, cb, -0.7, 1.1, -1);
    db("u3", b, a, cb, 0, 2, -1);
    db("cf1", b, a, cb, -1, 0, 1);
    db("cf2", b, a, cb, 1, 0, 1);
    db("cf3", b, a, cb, 0, -1, 1);
    db("cf4", b, a, cb, 0, 1, 1);
    db("cn1", b, a, cb, -1, 0, -1);
    db("cn2", b, a, cb, 1, 0, -1);
    db("cn3", b, a, cb, 0, -1, -1);
    db("cn4", b, a, cb, 0, 1, -1);
    a.getAttribute("position").needsUpdate = !0;
  };
  var bh = new za();
  Qc.prototype = Object.create(Za.prototype);
  Qc.prototype.constructor = Qc;
  Qc.prototype.update = function (a) {
    void 0 !== a &&
      console.warn("THREE.BoxHelper: .update() has no longer arguments.");
    void 0 !== this.object && bh.setFromObject(this.object);
    if (!bh.isEmpty()) {
      a = bh.min;
      var b = bh.max,
        d = this.geometry.attributes.position,
        e = d.array;
      e[0] = b.x;
      e[1] = b.y;
      e[2] = b.z;
      e[3] = a.x;
      e[4] = b.y;
      e[5] = b.z;
      e[6] = a.x;
      e[7] = a.y;
      e[8] = b.z;
      e[9] = b.x;
      e[10] = a.y;
      e[11] = b.z;
      e[12] = b.x;
      e[13] = b.y;
      e[14] = a.z;
      e[15] = a.x;
      e[16] = b.y;
      e[17] = a.z;
      e[18] = a.x;
      e[19] = a.y;
      e[20] = a.z;
      e[21] = b.x;
      e[22] = a.y;
      e[23] = a.z;
      d.needsUpdate = !0;
      this.geometry.computeBoundingSphere();
    }
  };
  Qc.prototype.setFromObject = function (a) {
    this.object = a;
    this.update();
    return this;
  };
  Qc.prototype.copy = function (a) {
    Za.prototype.copy.call(this, a);
    this.object = a.object;
    return this;
  };
  wf.prototype = Object.create(Za.prototype);
  wf.prototype.constructor = wf;
  wf.prototype.updateMatrixWorld = function (a) {
    var b = this.box;
    b.isEmpty() ||
      (b.getCenter(this.position),
      b.getSize(this.scale),
      this.scale.multiplyScalar(0.5),
      Za.prototype.updateMatrixWorld.call(this, a));
  };
  xf.prototype = Object.create(yb.prototype);
  xf.prototype.constructor = xf;
  xf.prototype.updateMatrixWorld = function (a) {
    var b = -this.plane.constant;
    1e-8 > Math.abs(b) && (b = 1e-8);
    this.scale.set(0.5 * this.size, 0.5 * this.size, b);
    this.children[0].material.side = 0 > b ? 1 : 0;
    this.lookAt(this.plane.normal);
    yb.prototype.updateMatrixWorld.call(this, a);
  };
  var ck = new w(),
    zg,
    Uh;
  Rc.prototype = Object.create(ha.prototype);
  Rc.prototype.constructor = Rc;
  Rc.prototype.setDirection = function (a) {
    0.99999 < a.y
      ? this.quaternion.set(0, 0, 0, 1)
      : -0.99999 > a.y
      ? this.quaternion.set(1, 0, 0, 0)
      : (ck.set(a.z, 0, -a.x).normalize(),
        this.quaternion.setFromAxisAngle(ck, Math.acos(a.y)));
  };
  Rc.prototype.setLength = function (a, b, d) {
    void 0 === b && (b = 0.2 * a);
    void 0 === d && (d = 0.2 * b);
    this.line.scale.set(1, Math.max(1e-4, a - b), 1);
    this.line.updateMatrix();
    this.cone.scale.set(d, b, d);
    this.cone.position.y = a;
    this.cone.updateMatrix();
  };
  Rc.prototype.setColor = function (a) {
    this.line.material.color.set(a);
    this.cone.material.color.set(a);
  };
  Rc.prototype.copy = function (a) {
    ha.prototype.copy.call(this, a, !1);
    this.line.copy(a.line);
    this.cone.copy(a.cone);
    return this;
  };
  yf.prototype = Object.create(Za.prototype);
  yf.prototype.constructor = yf;
  var gc = Math.pow(2, 8),
    dk = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
    ek = 5 + dk.length,
    hc = { 3e3: 0, 3001: 1, 3002: 2, 3004: 3, 3005: 4, 3006: 5, 3007: 6 },
    si = new he(),
    ti = (function () {
      for (var a = [], b = [], d = [], e = 8, f = 0; f < ek; f++) {
        var g = Math.pow(2, e);
        b.push(g);
        var h = 1 / g;
        4 < f ? (h = dk[f - 8 + 4 - 1]) : 0 == f && (h = 0);
        d.push(h);
        h = 1 / (g - 1);
        g = -h / 2;
        h = 1 + h / 2;
        var k = [g, g, h, g, h, h, g, g, h, h, g, h];
        g = new Float32Array(108);
        h = new Float32Array(72);
        for (var l = new Float32Array(36), m = 0; 6 > m; m++) {
          var n = ((m % 3) * 2) / 3 - 1,
            p = 2 < m ? 0 : -1;
          g.set(
            [
              n,
              p,
              0,
              n + 2 / 3,
              p,
              0,
              n + 2 / 3,
              p + 1,
              0,
              n,
              p,
              0,
              n + 2 / 3,
              p + 1,
              0,
              n,
              p + 1,
              0,
            ],
            18 * m
          );
          h.set(k, 12 * m);
          l.set([m, m, m, m, m, m], 6 * m);
        }
        k = new ka();
        k.setAttribute("position", new pa(g, 3));
        k.setAttribute("uv", new pa(h, 2));
        k.setAttribute("faceIndex", new pa(l, 1));
        a.push(k);
        4 < e && e--;
      }
      return { _lodPlanes: a, _sizeLods: b, _sigmas: d };
    })(),
    Nf = ti._lodPlanes,
    fk = ti._sizeLods,
    ch = ti._sigmas,
    ui = null,
    Bd = (1 + Math.sqrt(5)) / 2,
    Be = 1 / Bd,
    gk = [
      new w(1, 1, 1),
      new w(-1, 1, 1),
      new w(1, 1, -1),
      new w(-1, 1, -1),
      new w(0, Bd, Be),
      new w(0, Bd, -Be),
      new w(Be, 0, Bd),
      new w(-Be, 0, Bd),
      new w(Bd, Be, 0),
      new w(-Bd, Be, 0),
    ],
    rb = function (a) {
      this._renderer = a;
      this._pingPongRenderTarget = null;
      a = new Float32Array(20);
      var b = new w(0, 1, 0);
      this._blurMaterial = new pc({
        name: "SphericalGaussianBlur",
        defines: { n: 20 },
        uniforms: {
          envMap: { value: null },
          samples: { value: 1 },
          weights: { value: a },
          latitudinal: { value: !1 },
          dTheta: { value: 0 },
          mipInt: { value: 0 },
          poleAxis: { value: b },
          inputEncoding: { value: hc[3e3] },
          outputEncoding: { value: hc[3e3] },
        },
        vertexShader: Vh(),
        fragmentShader:
          "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t" +
          Wh() +
          "\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
        blending: 0,
        depthTest: !1,
        depthWrite: !1,
      });
      this._cubemapShader = this._equirectShader = null;
      this._compileMaterial(this._blurMaterial);
    };
  rb.prototype.fromScene = function (a, b, d, e) {
    void 0 === b && (b = 0);
    void 0 === d && (d = 0.1);
    void 0 === e && (e = 100);
    ui = this._renderer.getRenderTarget();
    var f = this._allocateTargets();
    this._sceneToCubeUV(a, d, e, f);
    0 < b && this._blur(f, 0, 0, b);
    this._applyPMREM(f);
    this._cleanup(f);
    return f;
  };
  rb.prototype.fromEquirectangular = function (a) {
    return this._fromTexture(a);
  };
  rb.prototype.fromCubemap = function (a) {
    return this._fromTexture(a);
  };
  rb.prototype.compileCubemapShader = function () {
    null === this._cubemapShader &&
      ((this._cubemapShader = sj()),
      this._compileMaterial(this._cubemapShader));
  };
  rb.prototype.compileEquirectangularShader = function () {
    null === this._equirectShader &&
      ((this._equirectShader = rj()),
      this._compileMaterial(this._equirectShader));
  };
  rb.prototype.dispose = function () {
    this._blurMaterial.dispose();
    null !== this._cubemapShader && this._cubemapShader.dispose();
    null !== this._equirectShader && this._equirectShader.dispose();
    for (var a = 0; a < Nf.length; a++) Nf[a].dispose();
  };
  rb.prototype._cleanup = function (a) {
    this._pingPongRenderTarget.dispose();
    this._renderer.setRenderTarget(ui);
    a.scissorTest = !1;
    Ag(a, 0, 0, a.width, a.height);
  };
  rb.prototype._fromTexture = function (a) {
    ui = this._renderer.getRenderTarget();
    var b = this._allocateTargets(a);
    this._textureToCubeUV(a, b);
    this._applyPMREM(b);
    this._cleanup(b);
    return b;
  };
  rb.prototype._allocateTargets = function (a) {
    var b =
      void 0 === a || 1009 !== a.type
        ? !1
        : 3e3 === a.encoding || 3001 === a.encoding || 3007 === a.encoding;
    b = {
      magFilter: 1003,
      minFilter: 1003,
      generateMipmaps: !1,
      type: 1009,
      format: 1023,
      encoding: b ? a.encoding : 3002,
      depthBuffer: !1,
    };
    var d = qj(b);
    d.depthBuffer = a ? !1 : !0;
    this._pingPongRenderTarget = qj(b);
    return d;
  };
  rb.prototype._compileMaterial = function (a) {
    a = new Qa(Nf[0], a);
    this._renderer.compile(a, si);
  };
  rb.prototype._sceneToCubeUV = function (a, b, d, e) {
    b = new eb(90, 1, b, d);
    d = [1, -1, 1, 1, 1, 1];
    var f = [1, 1, 1, -1, -1, -1],
      g = this._renderer,
      h = g.outputEncoding,
      k = g.toneMapping,
      l = g.getClearColor(),
      m = g.getClearAlpha();
    g.toneMapping = 0;
    g.outputEncoding = 3e3;
    var n = a.background;
    if (n && n.isColor) {
      n.convertSRGBToLinear();
      var p = Math.min(
        Math.max(Math.ceil(Math.log2(Math.max(n.r, n.g, n.b))), -128),
        127
      );
      n = n.multiplyScalar(Math.pow(2, -p));
      g.setClearColor(n, (p + 128) / 255);
      a.background = null;
    }
    for (n = 0; 6 > n; n++)
      (p = n % 3),
        0 == p
          ? (b.up.set(0, d[n], 0), b.lookAt(f[n], 0, 0))
          : 1 == p
          ? (b.up.set(0, 0, d[n]), b.lookAt(0, f[n], 0))
          : (b.up.set(0, d[n], 0), b.lookAt(0, 0, f[n])),
        Ag(e, p * gc, 2 < n ? gc : 0, gc, gc),
        g.setRenderTarget(e),
        g.render(a, b);
    g.toneMapping = k;
    g.outputEncoding = h;
    g.setClearColor(l, m);
  };
  rb.prototype._textureToCubeUV = function (a, b) {
    var d = this._renderer;
    a.isCubeTexture
      ? null == this._cubemapShader && (this._cubemapShader = sj())
      : null == this._equirectShader && (this._equirectShader = rj());
    var e = a.isCubeTexture ? this._cubemapShader : this._equirectShader,
      f = new Qa(Nf[0], e);
    e = e.uniforms;
    e.envMap.value = a;
    a.isCubeTexture ||
      e.texelSize.value.set(1 / a.image.width, 1 / a.image.height);
    e.inputEncoding.value = hc[a.encoding];
    e.outputEncoding.value = hc[b.texture.encoding];
    Ag(b, 0, 0, 3 * gc, 2 * gc);
    d.setRenderTarget(b);
    d.render(f, si);
  };
  rb.prototype._applyPMREM = function (a) {
    var b = this._renderer,
      d = b.autoClear;
    b.autoClear = !1;
    for (var e = 1; e < ek; e++)
      this._blur(
        a,
        e - 1,
        e,
        Math.sqrt(ch[e] * ch[e] - ch[e - 1] * ch[e - 1]),
        gk[(e - 1) % gk.length]
      );
    b.autoClear = d;
  };
  rb.prototype._blur = function (a, b, d, e, f) {
    var g = this._pingPongRenderTarget;
    this._halfBlur(a, g, b, d, e, "latitudinal", f);
    this._halfBlur(g, a, d, d, e, "longitudinal", f);
  };
  rb.prototype._halfBlur = function (a, b, d, e, f, g, h) {
    var k = this._renderer,
      l = this._blurMaterial;
    "latitudinal" !== g &&
      "longitudinal" !== g &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    var m = new Qa(Nf[e], l);
    l = l.uniforms;
    var n = fk[d] - 1;
    n = isFinite(f) ? Math.PI / (2 * n) : (2 * Math.PI) / 39;
    var p = f / n,
      t = isFinite(f) ? 1 + Math.floor(3 * p) : 20;
    20 < t &&
      console.warn(
        "sigmaRadians, " +
          f +
          ", is too large and will clip, as it requested " +
          t +
          " samples when the maximum is set to 20"
      );
    f = [];
    for (var q = 0, v = 0; 20 > v; ++v) {
      var u = v / p;
      u = Math.exp((-u * u) / 2);
      f.push(u);
      0 == v ? (q += u) : v < t && (q += 2 * u);
    }
    for (p = 0; p < f.length; p++) f[p] /= q;
    l.envMap.value = a.texture;
    l.samples.value = t;
    l.weights.value = f;
    l.latitudinal.value = "latitudinal" === g;
    h && (l.poleAxis.value = h);
    l.dTheta.value = n;
    l.mipInt.value = 8 - d;
    l.inputEncoding.value = hc[a.texture.encoding];
    l.outputEncoding.value = hc[a.texture.encoding];
    a = fk[e];
    Ag(
      b,
      3 * Math.max(0, gc - 2 * a),
      (0 === e ? 0 : 2 * gc) + 2 * a * (4 < e ? e - 8 + 4 : 0),
      3 * a,
      2 * a
    );
    k.setRenderTarget(b);
    k.render(m, si);
  };
  oa.create = function (a, b) {
    console.log("THREE.Curve.create() has been deprecated");
    a.prototype = Object.create(oa.prototype);
    a.prototype.constructor = a;
    a.prototype.getPoint = b;
    return a;
  };
  Object.assign(qc.prototype, {
    createPointsGeometry: function (a) {
      console.warn(
        "THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
      );
      a = this.getPoints(a);
      return this.createGeometry(a);
    },
    createSpacedPointsGeometry: function (a) {
      console.warn(
        "THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
      );
      a = this.getSpacedPoints(a);
      return this.createGeometry(a);
    },
    createGeometry: function (a) {
      console.warn(
        "THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead."
      );
      for (var b = new sa(), d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        b.vertices.push(new w(f.x, f.y, f.z || 0));
      }
      return b;
    },
  });
  Object.assign(Wb.prototype, {
    fromPoints: function (a) {
      console.warn(
        "THREE.Path: .fromPoints() has been renamed to .setFromPoints()."
      );
      return this.setFromPoints(a);
    },
  });
  tj.prototype = Object.create(ob.prototype);
  uj.prototype = Object.create(ob.prototype);
  Xh.prototype = Object.create(ob.prototype);
  Object.assign(Xh.prototype, {
    initFromArray: function () {
      console.error("THREE.Spline: .initFromArray() has been removed.");
    },
    getControlPointsArray: function () {
      console.error("THREE.Spline: .getControlPointsArray() has been removed.");
    },
    reparametrizeByArcLength: function () {
      console.error(
        "THREE.Spline: .reparametrizeByArcLength() has been removed."
      );
    },
  });
  uf.prototype.setColors = function () {
    console.error(
      "THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead."
    );
  };
  ke.prototype.update = function () {
    console.error(
      "THREE.SkeletonHelper: update() no longer needs to be called."
    );
  };
  Object.assign(Ma.prototype, {
    extractUrlBase: function (a) {
      console.warn(
        "THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."
      );
      return qi.extractUrlBase(a);
    },
  });
  Ma.Handlers = {
    add: function () {
      console.error(
        "THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead."
      );
    },
    get: function () {
      console.error(
        "THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead."
      );
    },
  };
  Object.assign(vg.prototype, {
    setTexturePath: function (a) {
      console.warn(
        "THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."
      );
      return this.setResourcePath(a);
    },
  });
  Object.assign($a.prototype, {
    center: function (a) {
      console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
      return this.getCenter(a);
    },
    empty: function () {
      console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    },
    isIntersectionBox: function (a) {
      console.warn(
        "THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."
      );
      return this.intersectsBox(a);
    },
    size: function (a) {
      console.warn("THREE.Box2: .size() has been renamed to .getSize().");
      return this.getSize(a);
    },
  });
  Object.assign(za.prototype, {
    center: function (a) {
      console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
      return this.getCenter(a);
    },
    empty: function () {
      console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    },
    isIntersectionBox: function (a) {
      console.warn(
        "THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."
      );
      return this.intersectsBox(a);
    },
    isIntersectionSphere: function (a) {
      console.warn(
        "THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."
      );
      return this.intersectsSphere(a);
    },
    size: function (a) {
      console.warn("THREE.Box3: .size() has been renamed to .getSize().");
      return this.getSize(a);
    },
  });
  Object.assign(Wa.prototype, {
    empty: function () {
      console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty().");
      return this.isEmpty();
    },
  });
  xb.prototype.setFromMatrix = function (a) {
    console.warn(
      "THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."
    );
    return this.setFromProjectionMatrix(a);
  };
  Cb.prototype.center = function (a) {
    console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
    return this.getCenter(a);
  };
  Object.assign(xa, {
    random16: function () {
      console.warn(
        "THREE.Math: .random16() has been deprecated. Use Math.random() instead."
      );
      return Math.random();
    },
    nearestPowerOfTwo: function (a) {
      console.warn(
        "THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."
      );
      return xa.floorPowerOfTwo(a);
    },
    nextPowerOfTwo: function (a) {
      console.warn(
        "THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."
      );
      return xa.ceilPowerOfTwo(a);
    },
  });
  Object.assign(Da.prototype, {
    flattenToArrayOffset: function (a, b) {
      console.warn(
        "THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
      );
      return this.toArray(a, b);
    },
    multiplyVector3: function (a) {
      console.warn(
        "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
      );
      return a.applyMatrix3(this);
    },
    multiplyVector3Array: function () {
      console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
    },
    applyToBufferAttribute: function (a) {
      console.warn(
        "THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."
      );
      return a.applyMatrix3(this);
    },
    applyToVector3Array: function () {
      console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
    },
  });
  Object.assign(da.prototype, {
    extractPosition: function (a) {
      console.warn(
        "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
      );
      return this.copyPosition(a);
    },
    flattenToArrayOffset: function (a, b) {
      console.warn(
        "THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."
      );
      return this.toArray(a, b);
    },
    getPosition: function () {
      console.warn(
        "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
      );
      return new w().setFromMatrixColumn(this, 3);
    },
    setRotationFromQuaternion: function (a) {
      console.warn(
        "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
      );
      return this.makeRotationFromQuaternion(a);
    },
    multiplyToArray: function () {
      console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
    },
    multiplyVector3: function (a) {
      console.warn(
        "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."
      );
      return a.applyMatrix4(this);
    },
    multiplyVector4: function (a) {
      console.warn(
        "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
      );
      return a.applyMatrix4(this);
    },
    multiplyVector3Array: function () {
      console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
    },
    rotateAxis: function (a) {
      console.warn(
        "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
      );
      a.transformDirection(this);
    },
    crossVector: function (a) {
      console.warn(
        "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
      );
      return a.applyMatrix4(this);
    },
    translate: function () {
      console.error("THREE.Matrix4: .translate() has been removed.");
    },
    rotateX: function () {
      console.error("THREE.Matrix4: .rotateX() has been removed.");
    },
    rotateY: function () {
      console.error("THREE.Matrix4: .rotateY() has been removed.");
    },
    rotateZ: function () {
      console.error("THREE.Matrix4: .rotateZ() has been removed.");
    },
    rotateByAxis: function () {
      console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
    },
    applyToBufferAttribute: function (a) {
      console.warn(
        "THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."
      );
      return a.applyMatrix4(this);
    },
    applyToVector3Array: function () {
      console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
    },
    makeFrustum: function (a, b, d, e, f, g) {
      console.warn(
        "THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."
      );
      return this.makePerspective(a, b, e, d, f, g);
    },
  });
  Na.prototype.isIntersectionLine = function (a) {
    console.warn(
      "THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."
    );
    return this.intersectsLine(a);
  };
  ua.prototype.multiplyVector3 = function (a) {
    console.warn(
      "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
    );
    return a.applyQuaternion(this);
  };
  Object.assign(Ta.prototype, {
    isIntersectionBox: function (a) {
      console.warn(
        "THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."
      );
      return this.intersectsBox(a);
    },
    isIntersectionPlane: function (a) {
      console.warn(
        "THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."
      );
      return this.intersectsPlane(a);
    },
    isIntersectionSphere: function (a) {
      console.warn(
        "THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."
      );
      return this.intersectsSphere(a);
    },
  });
  Object.assign(Ga.prototype, {
    area: function () {
      console.warn("THREE.Triangle: .area() has been renamed to .getArea().");
      return this.getArea();
    },
    barycoordFromPoint: function (a, b) {
      console.warn(
        "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
      );
      return this.getBarycoord(a, b);
    },
    midpoint: function (a) {
      console.warn(
        "THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."
      );
      return this.getMidpoint(a);
    },
    normal: function (a) {
      console.warn(
        "THREE.Triangle: .normal() has been renamed to .getNormal()."
      );
      return this.getNormal(a);
    },
    plane: function (a) {
      console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");
      return this.getPlane(a);
    },
  });
  Object.assign(Ga, {
    barycoordFromPoint: function (a, b, d, e, f) {
      console.warn(
        "THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."
      );
      return Ga.getBarycoord(a, b, d, e, f);
    },
    normal: function (a, b, d, e) {
      console.warn(
        "THREE.Triangle: .normal() has been renamed to .getNormal()."
      );
      return Ga.getNormal(a, b, d, e);
    },
  });
  Object.assign(Pc.prototype, {
    extractAllPoints: function (a) {
      console.warn(
        "THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."
      );
      return this.extractPoints(a);
    },
    extrude: function (a) {
      console.warn(
        "THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."
      );
      return new hd(this, a);
    },
    makeGeometry: function (a) {
      console.warn(
        "THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."
      );
      return new jd(this, a);
    },
  });
  Object.assign(L.prototype, {
    fromAttribute: function (a, b, d) {
      console.warn(
        "THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."
      );
      return this.fromBufferAttribute(a, b, d);
    },
    distanceToManhattan: function (a) {
      console.warn(
        "THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
      );
      return this.manhattanDistanceTo(a);
    },
    lengthManhattan: function () {
      console.warn(
        "THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."
      );
      return this.manhattanLength();
    },
  });
  Object.assign(w.prototype, {
    setEulerFromRotationMatrix: function () {
      console.error(
        "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
      );
    },
    setEulerFromQuaternion: function () {
      console.error(
        "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
      );
    },
    getPositionFromMatrix: function (a) {
      console.warn(
        "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
      );
      return this.setFromMatrixPosition(a);
    },
    getScaleFromMatrix: function (a) {
      console.warn(
        "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
      );
      return this.setFromMatrixScale(a);
    },
    getColumnFromMatrix: function (a, b) {
      console.warn(
        "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
      );
      return this.setFromMatrixColumn(b, a);
    },
    applyProjection: function (a) {
      console.warn(
        "THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."
      );
      return this.applyMatrix4(a);
    },
    fromAttribute: function (a, b, d) {
      console.warn(
        "THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."
      );
      return this.fromBufferAttribute(a, b, d);
    },
    distanceToManhattan: function (a) {
      console.warn(
        "THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."
      );
      return this.manhattanDistanceTo(a);
    },
    lengthManhattan: function () {
      console.warn(
        "THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."
      );
      return this.manhattanLength();
    },
  });
  Object.assign(ca.prototype, {
    fromAttribute: function (a, b, d) {
      console.warn(
        "THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."
      );
      return this.fromBufferAttribute(a, b, d);
    },
    lengthManhattan: function () {
      console.warn(
        "THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."
      );
      return this.manhattanLength();
    },
  });
  Object.assign(sa.prototype, {
    computeTangents: function () {
      console.error("THREE.Geometry: .computeTangents() has been removed.");
    },
    computeLineDistances: function () {
      console.error(
        "THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead."
      );
    },
    applyMatrix: function (a) {
      console.warn(
        "THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."
      );
      return this.applyMatrix4(a);
    },
  });
  Object.assign(ha.prototype, {
    getChildByName: function (a) {
      console.warn(
        "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
      );
      return this.getObjectByName(a);
    },
    renderDepth: function () {
      console.warn(
        "THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead."
      );
    },
    translate: function (a, b) {
      console.warn(
        "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
      );
      return this.translateOnAxis(b, a);
    },
    getWorldRotation: function () {
      console.error(
        "THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead."
      );
    },
    applyMatrix: function (a) {
      console.warn(
        "THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."
      );
      return this.applyMatrix4(a);
    },
  });
  Object.defineProperties(ha.prototype, {
    eulerOrder: {
      get: function () {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
        return this.rotation.order;
      },
      set: function (a) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
        this.rotation.order = a;
      },
    },
    useQuaternion: {
      get: function () {
        console.warn(
          "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
        );
      },
      set: function () {
        console.warn(
          "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
        );
      },
    },
  });
  Object.assign(Qa.prototype, {
    setDrawMode: function () {
      console.error(
        "THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
      );
    },
  });
  Object.defineProperties(Qa.prototype, {
    drawMode: {
      get: function () {
        console.error(
          "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."
        );
        return 0;
      },
      set: function () {
        console.error(
          "THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary."
        );
      },
    },
  });
  Object.defineProperties(Se.prototype, {
    objects: {
      get: function () {
        console.warn("THREE.LOD: .objects has been renamed to .levels.");
        return this.levels;
      },
    },
  });
  Object.defineProperty(Yf.prototype, "useVertexTexture", {
    get: function () {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    },
    set: function () {
      console.warn("THREE.Skeleton: useVertexTexture has been removed.");
    },
  });
  Xf.prototype.initBones = function () {
    console.error("THREE.SkinnedMesh: initBones() has been removed.");
  };
  Object.defineProperty(oa.prototype, "__arcLengthDivisions", {
    get: function () {
      console.warn(
        "THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."
      );
      return this.arcLengthDivisions;
    },
    set: function (a) {
      console.warn(
        "THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."
      );
      this.arcLengthDivisions = a;
    },
  });
  eb.prototype.setLens = function (a, b) {
    console.warn(
      "THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."
    );
    void 0 !== b && (this.filmGauge = b);
    this.setFocalLength(a);
  };
  Object.defineProperties(Sa.prototype, {
    onlyShadow: {
      set: function () {
        console.warn("THREE.Light: .onlyShadow has been removed.");
      },
    },
    shadowCameraFov: {
      set: function (a) {
        console.warn(
          "THREE.Light: .shadowCameraFov is now .shadow.camera.fov."
        );
        this.shadow.camera.fov = a;
      },
    },
    shadowCameraLeft: {
      set: function (a) {
        console.warn(
          "THREE.Light: .shadowCameraLeft is now .shadow.camera.left."
        );
        this.shadow.camera.left = a;
      },
    },
    shadowCameraRight: {
      set: function (a) {
        console.warn(
          "THREE.Light: .shadowCameraRight is now .shadow.camera.right."
        );
        this.shadow.camera.right = a;
      },
    },
    shadowCameraTop: {
      set: function (a) {
        console.warn(
          "THREE.Light: .shadowCameraTop is now .shadow.camera.top."
        );
        this.shadow.camera.top = a;
      },
    },
    shadowCameraBottom: {
      set: function (a) {
        console.warn(
          "THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."
        );
        this.shadow.camera.bottom = a;
      },
    },
    shadowCameraNear: {
      set: function (a) {
        console.warn(
          "THREE.Light: .shadowCameraNear is now .shadow.camera.near."
        );
        this.shadow.camera.near = a;
      },
    },
    shadowCameraFar: {
      set: function (a) {
        console.warn(
          "THREE.Light: .shadowCameraFar is now .shadow.camera.far."
        );
        this.shadow.camera.far = a;
      },
    },
    shadowCameraVisible: {
      set: function () {
        console.warn(
          "THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead."
        );
      },
    },
    shadowBias: {
      set: function (a) {
        console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
        this.shadow.bias = a;
      },
    },
    shadowDarkness: {
      set: function () {
        console.warn("THREE.Light: .shadowDarkness has been removed.");
      },
    },
    shadowMapWidth: {
      set: function (a) {
        console.warn(
          "THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."
        );
        this.shadow.mapSize.width = a;
      },
    },
    shadowMapHeight: {
      set: function (a) {
        console.warn(
          "THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."
        );
        this.shadow.mapSize.height = a;
      },
    },
  });
  Object.defineProperties(pa.prototype, {
    length: {
      get: function () {
        console.warn(
          "THREE.BufferAttribute: .length has been deprecated. Use .count instead."
        );
        return this.array.length;
      },
    },
    dynamic: {
      get: function () {
        console.warn(
          "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
        );
        return 35048 === this.usage;
      },
      set: function () {
        console.warn(
          "THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."
        );
        this.setUsage(35048);
      },
    },
  });
  Object.assign(pa.prototype, {
    setDynamic: function (a) {
      console.warn(
        "THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."
      );
      this.setUsage(!0 === a ? 35048 : 35044);
      return this;
    },
    copyIndicesArray: function () {
      console.error(
        "THREE.BufferAttribute: .copyIndicesArray() has been removed."
      );
    },
    setArray: function () {
      console.error(
        "THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
      );
    },
  });
  Object.assign(ka.prototype, {
    addIndex: function (a) {
      console.warn(
        "THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."
      );
      this.setIndex(a);
    },
    addAttribute: function (a, b, d) {
      console.warn(
        "THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."
      );
      return (b && b.isBufferAttribute) || (b && b.isInterleavedBufferAttribute)
        ? "index" === a
          ? (console.warn(
              "THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."
            ),
            this.setIndex(b),
            this)
          : this.setAttribute(a, b)
        : (console.warn(
            "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
          ),
          this.setAttribute(a, new pa(b, d)));
    },
    addDrawCall: function (a, b, d) {
      void 0 !== d &&
        console.warn(
          "THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."
        );
      console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
      this.addGroup(a, b);
    },
    clearDrawCalls: function () {
      console.warn(
        "THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."
      );
      this.clearGroups();
    },
    computeTangents: function () {
      console.warn(
        "THREE.BufferGeometry: .computeTangents() has been removed."
      );
    },
    computeOffsets: function () {
      console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
    },
    removeAttribute: function (a) {
      console.warn(
        "THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."
      );
      return this.deleteAttribute(a);
    },
    applyMatrix: function (a) {
      console.warn(
        "THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."
      );
      return this.applyMatrix4(a);
    },
  });
  Object.defineProperties(ka.prototype, {
    drawcalls: {
      get: function () {
        console.error(
          "THREE.BufferGeometry: .drawcalls has been renamed to .groups."
        );
        return this.groups;
      },
    },
    offsets: {
      get: function () {
        console.warn(
          "THREE.BufferGeometry: .offsets has been renamed to .groups."
        );
        return this.groups;
      },
    },
  });
  Object.defineProperties(sf.prototype, {
    maxInstancedCount: {
      get: function () {
        console.warn(
          "THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."
        );
        return this.instanceCount;
      },
      set: function (a) {
        console.warn(
          "THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."
        );
        this.instanceCount = a;
      },
    },
  });
  Object.defineProperties(Sh.prototype, {
    linePrecision: {
      get: function () {
        console.warn(
          "THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."
        );
        return this.params.Line.threshold;
      },
      set: function (a) {
        console.warn(
          "THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."
        );
        this.params.Line.threshold = a;
      },
    },
  });
  Object.defineProperties(Gb.prototype, {
    dynamic: {
      get: function () {
        console.warn(
          "THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."
        );
        return 35048 === this.usage;
      },
      set: function (a) {
        console.warn(
          "THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."
        );
        this.setUsage(a);
      },
    },
  });
  Object.assign(Gb.prototype, {
    setDynamic: function (a) {
      console.warn(
        "THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."
      );
      this.setUsage(!0 === a ? 35048 : 35044);
      return this;
    },
    setArray: function () {
      console.error(
        "THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers"
      );
    },
  });
  Object.assign(bc.prototype, {
    getArrays: function () {
      console.error(
        "THREE.ExtrudeBufferGeometry: .getArrays() has been removed."
      );
    },
    addShapeList: function () {
      console.error(
        "THREE.ExtrudeBufferGeometry: .addShapeList() has been removed."
      );
    },
    addShape: function () {
      console.error(
        "THREE.ExtrudeBufferGeometry: .addShape() has been removed."
      );
    },
  });
  Object.assign(Jc.prototype, {
    dispose: function () {
      console.error("THREE.Scene: .dispose() has been removed.");
    },
  });
  Object.defineProperties(Yg.prototype, {
    dynamic: {
      set: function () {
        console.warn(
          "THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead."
        );
      },
    },
    onUpdate: {
      value: function () {
        console.warn(
          "THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."
        );
        return this;
      },
    },
  });
  Object.defineProperties(ra.prototype, {
    wrapAround: {
      get: function () {
        console.warn("THREE.Material: .wrapAround has been removed.");
      },
      set: function () {
        console.warn("THREE.Material: .wrapAround has been removed.");
      },
    },
    overdraw: {
      get: function () {
        console.warn("THREE.Material: .overdraw has been removed.");
      },
      set: function () {
        console.warn("THREE.Material: .overdraw has been removed.");
      },
    },
    wrapRGB: {
      get: function () {
        console.warn("THREE.Material: .wrapRGB has been removed.");
        return new S();
      },
    },
    shading: {
      get: function () {
        console.error(
          "THREE." +
            this.type +
            ": .shading has been removed. Use the boolean .flatShading instead."
        );
      },
      set: function (a) {
        console.warn(
          "THREE." +
            this.type +
            ": .shading has been removed. Use the boolean .flatShading instead."
        );
        this.flatShading = 1 === a;
      },
    },
    stencilMask: {
      get: function () {
        console.warn(
          "THREE." +
            this.type +
            ": .stencilMask has been removed. Use .stencilFuncMask instead."
        );
        return this.stencilFuncMask;
      },
      set: function (a) {
        console.warn(
          "THREE." +
            this.type +
            ": .stencilMask has been removed. Use .stencilFuncMask instead."
        );
        this.stencilFuncMask = a;
      },
    },
  });
  Object.defineProperties(Oc.prototype, {
    metal: {
      get: function () {
        console.warn(
          "THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."
        );
        return !1;
      },
      set: function () {
        console.warn(
          "THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead"
        );
      },
    },
  });
  Object.defineProperties(Nc.prototype, {
    transparency: {
      get: function () {
        console.warn(
          "THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."
        );
        return this.transmission;
      },
      set: function (a) {
        console.warn(
          "THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."
        );
        this.transmission = a;
      },
    },
  });
  Object.defineProperties(sb.prototype, {
    derivatives: {
      get: function () {
        console.warn(
          "THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
        );
        return this.extensions.derivatives;
      },
      set: function (a) {
        console.warn(
          "THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."
        );
        this.extensions.derivatives = a;
      },
    },
  });
  Object.assign(Ne.prototype, {
    clearTarget: function (a, b, d, e) {
      console.warn(
        "THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."
      );
      this.setRenderTarget(a);
      this.clear(b, d, e);
    },
    animate: function (a) {
      console.warn(
        "THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."
      );
      this.setAnimationLoop(a);
    },
    getCurrentRenderTarget: function () {
      console.warn(
        "THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."
      );
      return this.getRenderTarget();
    },
    getMaxAnisotropy: function () {
      console.warn(
        "THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."
      );
      return this.capabilities.getMaxAnisotropy();
    },
    getPrecision: function () {
      console.warn(
        "THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."
      );
      return this.capabilities.precision;
    },
    resetGLState: function () {
      console.warn(
        "THREE.WebGLRenderer: .resetGLState() is now .state.reset()."
      );
      return this.state.reset();
    },
    supportsFloatTextures: function () {
      console.warn(
        "THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
      );
      return this.extensions.get("OES_texture_float");
    },
    supportsHalfFloatTextures: function () {
      console.warn(
        "THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
      );
      return this.extensions.get("OES_texture_half_float");
    },
    supportsStandardDerivatives: function () {
      console.warn(
        "THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
      );
      return this.extensions.get("OES_standard_derivatives");
    },
    supportsCompressedTextureS3TC: function () {
      console.warn(
        "THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
      );
      return this.extensions.get("WEBGL_compressed_texture_s3tc");
    },
    supportsCompressedTexturePVRTC: function () {
      console.warn(
        "THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
      );
      return this.extensions.get("WEBGL_compressed_texture_pvrtc");
    },
    supportsBlendMinMax: function () {
      console.warn(
        "THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
      );
      return this.extensions.get("EXT_blend_minmax");
    },
    supportsVertexTextures: function () {
      console.warn(
        "THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."
      );
      return this.capabilities.vertexTextures;
    },
    supportsInstancedArrays: function () {
      console.warn(
        "THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
      );
      return this.extensions.get("ANGLE_instanced_arrays");
    },
    enableScissorTest: function (a) {
      console.warn(
        "THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."
      );
      this.setScissorTest(a);
    },
    initMaterial: function () {
      console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
    },
    addPrePlugin: function () {
      console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
    },
    addPostPlugin: function () {
      console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
    },
    updateShadowMap: function () {
      console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
    },
    setFaceCulling: function () {
      console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
    },
    allocTextureUnit: function () {
      console.warn(
        "THREE.WebGLRenderer: .allocTextureUnit() has been removed."
      );
    },
    setTexture: function () {
      console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
    },
    setTexture2D: function () {
      console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
    },
    setTextureCube: function () {
      console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
    },
    getActiveMipMapLevel: function () {
      console.warn(
        "THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."
      );
      return this.getActiveMipmapLevel();
    },
  });
  Object.defineProperties(Ne.prototype, {
    shadowMapEnabled: {
      get: function () {
        return this.shadowMap.enabled;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."
        );
        this.shadowMap.enabled = a;
      },
    },
    shadowMapType: {
      get: function () {
        return this.shadowMap.type;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."
        );
        this.shadowMap.type = a;
      },
    },
    shadowMapCullFace: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
        );
      },
      set: function () {
        console.warn(
          "THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead."
        );
      },
    },
    context: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."
        );
        return this.getContext();
      },
    },
    vr: {
      get: function () {
        console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr");
        return this.xr;
      },
    },
    gammaInput: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
        );
        return !1;
      },
      set: function () {
        console.warn(
          "THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."
        );
      },
    },
    gammaOutput: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
        );
        return !1;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."
        );
        this.outputEncoding = !0 === a ? 3001 : 3e3;
      },
    },
    toneMappingWhitePoint: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
        );
        return 1;
      },
      set: function () {
        console.warn(
          "THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."
        );
      },
    },
  });
  Object.defineProperties(Ui.prototype, {
    cullFace: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
        );
      },
      set: function () {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead."
        );
      },
    },
    renderReverseSided: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
        );
      },
      set: function () {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead."
        );
      },
    },
    renderSingleSided: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
        );
      },
      set: function () {
        console.warn(
          "THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead."
        );
      },
    },
  });
  Object.defineProperties(Db.prototype, {
    wrapS: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
        return this.texture.wrapS;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
        this.texture.wrapS = a;
      },
    },
    wrapT: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
        return this.texture.wrapT;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
        this.texture.wrapT = a;
      },
    },
    magFilter: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
        );
        return this.texture.magFilter;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."
        );
        this.texture.magFilter = a;
      },
    },
    minFilter: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
        );
        return this.texture.minFilter;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."
        );
        this.texture.minFilter = a;
      },
    },
    anisotropy: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
        );
        return this.texture.anisotropy;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."
        );
        this.texture.anisotropy = a;
      },
    },
    offset: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderTarget: .offset is now .texture.offset."
        );
        return this.texture.offset;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderTarget: .offset is now .texture.offset."
        );
        this.texture.offset = a;
      },
    },
    repeat: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
        );
        return this.texture.repeat;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderTarget: .repeat is now .texture.repeat."
        );
        this.texture.repeat = a;
      },
    },
    format: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderTarget: .format is now .texture.format."
        );
        return this.texture.format;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderTarget: .format is now .texture.format."
        );
        this.texture.format = a;
      },
    },
    type: {
      get: function () {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
        return this.texture.type;
      },
      set: function (a) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
        this.texture.type = a;
      },
    },
    generateMipmaps: {
      get: function () {
        console.warn(
          "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
        );
        return this.texture.generateMipmaps;
      },
      set: function (a) {
        console.warn(
          "THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."
        );
        this.texture.generateMipmaps = a;
      },
    },
  });
  Object.defineProperties(Ja.prototype, {
    load: {
      value: function (a) {
        console.warn(
          "THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead."
        );
        var b = this;
        new wg().load(a, function (d) {
          b.setBuffer(d);
        });
        return this;
      },
    },
    startTime: {
      set: function () {
        console.warn("THREE.Audio: .startTime is now .play( delay ).");
      },
    },
  });
  Xg.prototype.getData = function () {
    console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
    return this.getFrequencyData();
  };
  Hd.prototype.updateCubeMap = function (a, b) {
    console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
    return this.update(a, b);
  };
  Sc.crossOrigin = void 0;
  Sc.loadTexture = function (a, b, d, e) {
    console.warn(
      "THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead."
    );
    var f = new lg();
    f.setCrossOrigin(this.crossOrigin);
    a = f.load(a, d, void 0, e);
    b && (a.mapping = b);
    return a;
  };
  Sc.loadTextureCube = function (a, b, d, e) {
    console.warn(
      "THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead."
    );
    var f = new jg();
    f.setCrossOrigin(this.crossOrigin);
    a = f.load(a, d, void 0, e);
    b && (a.mapping = b);
    return a;
  };
  Sc.loadCompressedTexture = function () {
    console.error(
      "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
    );
  };
  Sc.loadCompressedTextureCube = function () {
    console.error(
      "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
    );
  };
  "undefined" !== typeof __THREE_DEVTOOLS__ &&
    __THREE_DEVTOOLS__.dispatchEvent(
      new CustomEvent("register", { detail: { revision: "120" } })
    );
  r.ACESFilmicToneMapping = 4;
  r.AddEquation = 100;
  r.AddOperation = 2;
  r.AdditiveAnimationBlendMode = 2501;
  r.AdditiveBlending = 2;
  r.AlphaFormat = 1021;
  r.AlwaysDepth = 1;
  r.AlwaysStencilFunc = 519;
  r.AmbientLight = qg;
  r.AmbientLightProbe = Mh;
  r.AnimationClip = Mb;
  r.AnimationLoader = Bh;
  r.AnimationMixer = Ph;
  r.AnimationObjectGroup = nj;
  r.AnimationUtils = Va;
  r.ArcCurve = ge;
  r.ArrayCamera = Tf;
  r.ArrowHelper = Rc;
  r.Audio = Ja;
  r.AudioAnalyser = Xg;
  r.AudioContext = Nh;
  r.AudioListener = Xb;
  r.AudioLoader = wg;
  r.AxesHelper = yf;
  r.AxisHelper = function (a) {
    console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");
    return new yf(a);
  };
  r.BackSide = 1;
  r.BasicDepthPacking = 3200;
  r.BasicShadowMap = 0;
  r.BinaryTextureLoader = function (a) {
    console.warn(
      "THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."
    );
    return new kg(a);
  };
  r.Bone = uh;
  r.BooleanKeyframeTrack = fg;
  r.BoundingBoxHelper = function (a, b) {
    console.warn(
      "THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."
    );
    return new Qc(a, b);
  };
  r.Box2 = $a;
  r.Box3 = za;
  r.Box3Helper = wf;
  r.BoxBufferGeometry = Bc;
  r.BoxGeometry = Fd;
  r.BoxHelper = Qc;
  r.BufferAttribute = pa;
  r.BufferGeometry = ka;
  r.BufferGeometryLoader = ug;
  r.ByteType = 1010;
  r.Cache = vd;
  r.Camera = ac;
  r.CameraHelper = vf;
  r.CanvasRenderer = function () {
    console.error("THREE.CanvasRenderer has been removed");
  };
  r.CanvasTexture = Te;
  r.CatmullRomCurve3 = ob;
  r.CineonToneMapping = 3;
  r.CircleBufferGeometry = ce;
  r.CircleGeometry = nf;
  r.ClampToEdgeWrapping = 1001;
  r.Clock = ie;
  r.ClosedSplineCurve3 = tj;
  r.Color = S;
  r.ColorKeyframeTrack = gg;
  r.CompressedTexture = Qd;
  r.CompressedTextureLoader = Ch;
  r.ConeBufferGeometry = mf;
  r.ConeGeometry = lf;
  r.CubeCamera = Hd;
  r.CubeGeometry = Fd;
  r.CubeReflectionMapping = 301;
  r.CubeRefractionMapping = 302;
  r.CubeTexture = kc;
  r.CubeTextureLoader = jg;
  r.CubeUVReflectionMapping = 306;
  r.CubeUVRefractionMapping = 307;
  r.CubicBezierCurve = Sb;
  r.CubicBezierCurve3 = dc;
  r.CubicInterpolant = dg;
  r.CullFaceBack = 1;
  r.CullFaceFront = 2;
  r.CullFaceFrontBack = 3;
  r.CullFaceNone = 0;
  r.Curve = oa;
  r.CurvePath = qc;
  r.CustomBlending = 5;
  r.CustomToneMapping = 5;
  r.CylinderBufferGeometry = oc;
  r.CylinderGeometry = ld;
  r.Cylindrical = Ae;
  r.DataTexture = bd;
  r.DataTexture2DArray = Id;
  r.DataTexture3D = Jd;
  r.DataTextureLoader = kg;
  r.DecrementStencilOp = 7683;
  r.DecrementWrapStencilOp = 34056;
  r.DefaultLoadingManager = jj;
  r.DepthFormat = 1026;
  r.DepthStencilFormat = 1027;
  r.DepthTexture = Ue;
  r.DirectionalLight = pg;
  r.DirectionalLightHelper = ne;
  r.DiscreteInterpolant = eg;
  r.DodecahedronBufferGeometry = Vd;
  r.DodecahedronGeometry = $e;
  r.DoubleSide = 2;
  r.DstAlphaFactor = 206;
  r.DstColorFactor = 208;
  r.DynamicBufferAttribute = function (a, b) {
    console.warn(
      "THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."
    );
    return new pa(a, b).setUsage(35048);
  };
  r.DynamicCopyUsage = 35050;
  r.DynamicDrawUsage = 35048;
  r.DynamicReadUsage = 35049;
  r.EdgesGeometry = be;
  r.EdgesHelper = function (a, b) {
    console.warn(
      "THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."
    );
    return new Za(
      new be(a.geometry),
      new Ya({ color: void 0 !== b ? b : 16777215 })
    );
  };
  r.EllipseCurve = Ib;
  r.EqualDepth = 4;
  r.EqualStencilFunc = 514;
  r.EquirectangularReflectionMapping = 303;
  r.EquirectangularRefractionMapping = 304;
  r.Euler = hb;
  r.EventDispatcher = wb;
  r.ExtrudeBufferGeometry = bc;
  r.ExtrudeGeometry = hd;
  r.Face3 = ad;
  r.Face4 = function (a, b, d, e, f, g, h) {
    console.warn(
      "THREE.Face4 has been removed. A THREE.Face3 will be created instead."
    );
    return new ad(a, b, d, f, g, h);
  };
  r.FaceColors = 1;
  r.FileLoader = Nb;
  r.FlatShading = 1;
  r.Float32Attribute = function (a, b) {
    console.warn(
      "THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."
    );
    return new ea(a, b);
  };
  r.Float32BufferAttribute = ea;
  r.Float64Attribute = function (a, b) {
    console.warn(
      "THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."
    );
    return new He(a, b);
  };
  r.Float64BufferAttribute = He;
  r.FloatType = 1015;
  r.Fog = Hf;
  r.FogExp2 = Gf;
  r.Font = Jh;
  r.FontLoader = Kh;
  r.FrontSide = 0;
  r.Frustum = xb;
  r.GLBufferAttribute = Rh;
  r.GLSL1 = "100";
  r.GLSL3 = "300 es";
  r.GammaEncoding = 3007;
  r.Geometry = sa;
  r.GeometryUtils = {
    merge: function (a, b, d) {
      console.warn(
        "THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."
      );
      if (b.isMesh) {
        b.matrixAutoUpdate && b.updateMatrix();
        var e = b.matrix;
        b = b.geometry;
      }
      a.merge(b, e, d);
    },
    center: function (a) {
      console.warn(
        "THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."
      );
      return a.center();
    },
  };
  r.GreaterDepth = 6;
  r.GreaterEqualDepth = 5;
  r.GreaterEqualStencilFunc = 518;
  r.GreaterStencilFunc = 516;
  r.GridHelper = uf;
  r.Group = Gc;
  r.HalfFloatType = 1016;
  r.HemisphereLight = mg;
  r.HemisphereLightHelper = me;
  r.HemisphereLightProbe = Lh;
  r.IcosahedronBufferGeometry = Ud;
  r.IcosahedronGeometry = Ze;
  r.ImageBitmapLoader = Hh;
  r.ImageLoader = fe;
  r.ImageUtils = Sc;
  r.ImmediateRenderObject = tf;
  r.IncrementStencilOp = 7682;
  r.IncrementWrapStencilOp = 34055;
  r.InstancedBufferAttribute = tg;
  r.InstancedBufferGeometry = sf;
  r.InstancedInterleavedBuffer = Qh;
  r.InstancedMesh = Zf;
  r.Int16Attribute = function (a, b) {
    console.warn(
      "THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."
    );
    return new Fe(a, b);
  };
  r.Int16BufferAttribute = Fe;
  r.Int32Attribute = function (a, b) {
    console.warn(
      "THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."
    );
    return new Ge(a, b);
  };
  r.Int32BufferAttribute = Ge;
  r.Int8Attribute = function (a, b) {
    console.warn(
      "THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."
    );
    return new Ce(a, b);
  };
  r.Int8BufferAttribute = Ce;
  r.IntType = 1013;
  r.InterleavedBuffer = Gb;
  r.InterleavedBufferAttribute = Kc;
  r.Interpolant = Hb;
  r.InterpolateDiscrete = 2300;
  r.InterpolateLinear = 2301;
  r.InterpolateSmooth = 2302;
  r.InvertStencilOp = 5386;
  r.JSONLoader = function () {
    console.error("THREE.JSONLoader has been removed.");
  };
  r.KeepStencilOp = 7680;
  r.KeyframeTrack = lb;
  r.LOD = Se;
  r.LatheBufferGeometry = ae;
  r.LatheGeometry = kf;
  r.Layers = $b;
  r.LensFlare = function () {
    console.error(
      "THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js"
    );
  };
  r.LessDepth = 2;
  r.LessEqualDepth = 3;
  r.LessEqualStencilFunc = 515;
  r.LessStencilFunc = 513;
  r.Light = Sa;
  r.LightProbe = Ob;
  r.LightShadow = fc;
  r.Line = yb;
  r.Line3 = Cb;
  r.LineBasicMaterial = Ya;
  r.LineCurve = Ab;
  r.LineCurve3 = Tb;
  r.LineDashedMaterial = rd;
  r.LineLoop = $f;
  r.LinePieces = 1;
  r.LineSegments = Za;
  r.LineStrip = 0;
  r.LinearEncoding = 3e3;
  r.LinearFilter = 1006;
  r.LinearInterpolant = of;
  r.LinearMipMapLinearFilter = 1008;
  r.LinearMipMapNearestFilter = 1007;
  r.LinearMipmapLinearFilter = 1008;
  r.LinearMipmapNearestFilter = 1007;
  r.LinearToneMapping = 1;
  r.Loader = Ma;
  r.LoaderUtils = qi;
  r.LoadingManager = Ah;
  r.LogLuvEncoding = 3003;
  r.LoopOnce = 2200;
  r.LoopPingPong = 2202;
  r.LoopRepeat = 2201;
  r.LuminanceAlphaFormat = 1025;
  r.LuminanceFormat = 1024;
  r.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 };
  r.Material = ra;
  r.MaterialLoader = sg;
  r.Math = xa;
  r.MathUtils = xa;
  r.Matrix3 = Da;
  r.Matrix4 = da;
  r.MaxEquation = 104;
  r.Mesh = Qa;
  r.MeshBasicMaterial = Kb;
  r.MeshDepthMaterial = Ec;
  r.MeshDistanceMaterial = Fc;
  r.MeshFaceMaterial = function (a) {
    console.warn(
      "THREE.MeshFaceMaterial has been removed. Use an Array instead."
    );
    return a;
  };
  r.MeshLambertMaterial = pd;
  r.MeshMatcapMaterial = qd;
  r.MeshNormalMaterial = od;
  r.MeshPhongMaterial = Oc;
  r.MeshPhysicalMaterial = Nc;
  r.MeshStandardMaterial = cc;
  r.MeshToonMaterial = nd;
  r.MinEquation = 103;
  r.MirroredRepeatWrapping = 1002;
  r.MixOperation = 1;
  r.MultiMaterial = function (a) {
    void 0 === a && (a = []);
    console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
    a.isMultiMaterial = !0;
    a.materials = a;
    a.clone = function () {
      return a.slice();
    };
    return a;
  };
  r.MultiplyBlending = 4;
  r.MultiplyOperation = 0;
  r.NearestFilter = 1003;
  r.NearestMipMapLinearFilter = 1005;
  r.NearestMipMapNearestFilter = 1004;
  r.NearestMipmapLinearFilter = 1005;
  r.NearestMipmapNearestFilter = 1004;
  r.NeverDepth = 0;
  r.NeverStencilFunc = 512;
  r.NoBlending = 0;
  r.NoColors = 0;
  r.NoToneMapping = 0;
  r.NormalAnimationBlendMode = 2500;
  r.NormalBlending = 1;
  r.NotEqualDepth = 7;
  r.NotEqualStencilFunc = 517;
  r.NumberKeyframeTrack = de;
  r.Object3D = ha;
  r.ObjectLoader = vg;
  r.ObjectSpaceNormalMap = 1;
  r.OctahedronBufferGeometry = fd;
  r.OctahedronGeometry = Ye;
  r.OneFactor = 201;
  r.OneMinusDstAlphaFactor = 207;
  r.OneMinusDstColorFactor = 209;
  r.OneMinusSrcAlphaFactor = 205;
  r.OneMinusSrcColorFactor = 203;
  r.OrthographicCamera = he;
  r.PCFShadowMap = 1;
  r.PCFSoftShadowMap = 2;
  r.PMREMGenerator = rb;
  r.ParametricBufferGeometry = Sd;
  r.ParametricGeometry = Ve;
  r.Particle = function (a) {
    console.warn("THREE.Particle has been renamed to THREE.Sprite.");
    return new Qe(a);
  };
  r.ParticleBasicMaterial = function (a) {
    console.warn(
      "THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."
    );
    return new Rb(a);
  };
  r.ParticleSystem = function (a, b) {
    console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
    return new Pd(a, b);
  };
  r.ParticleSystemMaterial = function (a) {
    console.warn(
      "THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."
    );
    return new Rb(a);
  };
  r.Path = Wb;
  r.PerspectiveCamera = eb;
  r.Plane = Na;
  r.PlaneBufferGeometry = cd;
  r.PlaneGeometry = Je;
  r.PlaneHelper = xf;
  r.PointCloud = function (a, b) {
    console.warn("THREE.PointCloud has been renamed to THREE.Points.");
    return new Pd(a, b);
  };
  r.PointCloudMaterial = function (a) {
    console.warn(
      "THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."
    );
    return new Rb(a);
  };
  r.PointLight = og;
  r.PointLightHelper = le;
  r.Points = Pd;
  r.PointsMaterial = Rb;
  r.PolarGridHelper = xg;
  r.PolyhedronBufferGeometry = zb;
  r.PolyhedronGeometry = We;
  r.PositionalAudio = tb;
  r.PropertyBinding = qb;
  r.PropertyMixer = Oh;
  r.QuadraticBezierCurve = Ub;
  r.QuadraticBezierCurve3 = ec;
  r.Quaternion = ua;
  r.QuaternionKeyframeTrack = pf;
  r.QuaternionLinearInterpolant = hg;
  r.REVISION = "120";
  r.RGBADepthPacking = 3201;
  r.RGBAFormat = 1023;
  r.RGBAIntegerFormat = 1033;
  r.RGBA_ASTC_10x10_Format = 37819;
  r.RGBA_ASTC_10x5_Format = 37816;
  r.RGBA_ASTC_10x6_Format = 37817;
  r.RGBA_ASTC_10x8_Format = 37818;
  r.RGBA_ASTC_12x10_Format = 37820;
  r.RGBA_ASTC_12x12_Format = 37821;
  r.RGBA_ASTC_4x4_Format = 37808;
  r.RGBA_ASTC_5x4_Format = 37809;
  r.RGBA_ASTC_5x5_Format = 37810;
  r.RGBA_ASTC_6x5_Format = 37811;
  r.RGBA_ASTC_6x6_Format = 37812;
  r.RGBA_ASTC_8x5_Format = 37813;
  r.RGBA_ASTC_8x6_Format = 37814;
  r.RGBA_ASTC_8x8_Format = 37815;
  r.RGBA_BPTC_Format = 36492;
  r.RGBA_ETC2_EAC_Format = 37496;
  r.RGBA_PVRTC_2BPPV1_Format = 35843;
  r.RGBA_PVRTC_4BPPV1_Format = 35842;
  r.RGBA_S3TC_DXT1_Format = 33777;
  r.RGBA_S3TC_DXT3_Format = 33778;
  r.RGBA_S3TC_DXT5_Format = 33779;
  r.RGBDEncoding = 3006;
  r.RGBEEncoding = 3002;
  r.RGBEFormat = 1023;
  r.RGBFormat = 1022;
  r.RGBIntegerFormat = 1032;
  r.RGBM16Encoding = 3005;
  r.RGBM7Encoding = 3004;
  r.RGB_ETC1_Format = 36196;
  r.RGB_ETC2_Format = 37492;
  r.RGB_PVRTC_2BPPV1_Format = 35841;
  r.RGB_PVRTC_4BPPV1_Format = 35840;
  r.RGB_S3TC_DXT1_Format = 33776;
  r.RGFormat = 1030;
  r.RGIntegerFormat = 1031;
  r.RawShaderMaterial = pc;
  r.Ray = Ta;
  r.Raycaster = Sh;
  r.RectAreaLight = rg;
  r.RedFormat = 1028;
  r.RedIntegerFormat = 1029;
  r.ReinhardToneMapping = 2;
  r.RepeatWrapping = 1e3;
  r.ReplaceStencilOp = 7681;
  r.ReverseSubtractEquation = 102;
  r.RingBufferGeometry = $d;
  r.RingGeometry = jf;
  r.SRGB8_ALPHA8_ASTC_10x10_Format = 37851;
  r.SRGB8_ALPHA8_ASTC_10x5_Format = 37848;
  r.SRGB8_ALPHA8_ASTC_10x6_Format = 37849;
  r.SRGB8_ALPHA8_ASTC_10x8_Format = 37850;
  r.SRGB8_ALPHA8_ASTC_12x10_Format = 37852;
  r.SRGB8_ALPHA8_ASTC_12x12_Format = 37853;
  r.SRGB8_ALPHA8_ASTC_4x4_Format = 37840;
  r.SRGB8_ALPHA8_ASTC_5x4_Format = 37841;
  r.SRGB8_ALPHA8_ASTC_5x5_Format = 37842;
  r.SRGB8_ALPHA8_ASTC_6x5_Format = 37843;
  r.SRGB8_ALPHA8_ASTC_6x6_Format = 37844;
  r.SRGB8_ALPHA8_ASTC_8x5_Format = 37845;
  r.SRGB8_ALPHA8_ASTC_8x6_Format = 37846;
  r.SRGB8_ALPHA8_ASTC_8x8_Format = 37847;
  r.Scene = Jc;
  r.SceneUtils = {
    createMultiMaterialObject: function () {
      console.error(
        "THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js"
      );
    },
    detach: function () {
      console.error(
        "THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js"
      );
    },
    attach: function () {
      console.error(
        "THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js"
      );
    },
  };
  r.ShaderChunk = Ba;
  r.ShaderLib = Pb;
  r.ShaderMaterial = sb;
  r.ShadowMaterial = md;
  r.Shape = Pc;
  r.ShapeBufferGeometry = kd;
  r.ShapeGeometry = jd;
  r.ShapePath = Ih;
  r.ShapeUtils = nc;
  r.ShortType = 1011;
  r.Skeleton = Yf;
  r.SkeletonHelper = ke;
  r.SkinnedMesh = Xf;
  r.SmoothShading = 2;
  r.Sphere = Wa;
  r.SphereBufferGeometry = id;
  r.SphereGeometry = hf;
  r.Spherical = Ad;
  r.SphericalHarmonics3 = pb;
  r.Spline = Xh;
  r.SplineCurve = Vb;
  r.SplineCurve3 = uj;
  r.SpotLight = ng;
  r.SpotLightHelper = je;
  r.Sprite = Qe;
  r.SpriteMaterial = Lc;
  r.SrcAlphaFactor = 204;
  r.SrcAlphaSaturateFactor = 210;
  r.SrcColorFactor = 202;
  r.StaticCopyUsage = 35046;
  r.StaticDrawUsage = 35044;
  r.StaticReadUsage = 35045;
  r.StereoCamera = lj;
  r.StreamCopyUsage = 35042;
  r.StreamDrawUsage = 35040;
  r.StreamReadUsage = 35041;
  r.StringKeyframeTrack = ig;
  r.SubtractEquation = 101;
  r.SubtractiveBlending = 3;
  r.TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
  r.TangentSpaceNormalMap = 0;
  r.TetrahedronBufferGeometry = Td;
  r.TetrahedronGeometry = Xe;
  r.TextBufferGeometry = Zd;
  r.TextGeometry = gf;
  r.Texture = Oa;
  r.TextureLoader = lg;
  r.TorusBufferGeometry = Xd;
  r.TorusGeometry = cf;
  r.TorusKnotBufferGeometry = Wd;
  r.TorusKnotGeometry = bf;
  r.Triangle = Ga;
  r.TriangleFanDrawMode = 2;
  r.TriangleStripDrawMode = 1;
  r.TrianglesDrawMode = 0;
  r.TubeBufferGeometry = gd;
  r.TubeGeometry = af;
  r.UVMapping = 300;
  r.Uint16Attribute = function (a, b) {
    console.warn(
      "THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."
    );
    return new Zc(a, b);
  };
  r.Uint16BufferAttribute = Zc;
  r.Uint32Attribute = function (a, b) {
    console.warn(
      "THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."
    );
    return new $c(a, b);
  };
  r.Uint32BufferAttribute = $c;
  r.Uint8Attribute = function (a, b) {
    console.warn(
      "THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."
    );
    return new De(a, b);
  };
  r.Uint8BufferAttribute = De;
  r.Uint8ClampedAttribute = function (a, b) {
    console.warn(
      "THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."
    );
    return new Ee(a, b);
  };
  r.Uint8ClampedBufferAttribute = Ee;
  r.Uniform = Yg;
  r.UniformsLib = fa;
  r.UniformsUtils = Ri;
  r.UnsignedByteType = 1009;
  r.UnsignedInt248Type = 1020;
  r.UnsignedIntType = 1014;
  r.UnsignedShort4444Type = 1017;
  r.UnsignedShort5551Type = 1018;
  r.UnsignedShort565Type = 1019;
  r.UnsignedShortType = 1012;
  r.VSMShadowMap = 3;
  r.Vector2 = L;
  r.Vector3 = w;
  r.Vector4 = ca;
  r.VectorKeyframeTrack = ee;
  r.Vertex = function (a, b, d) {
    console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
    return new w(a, b, d);
  };
  r.VertexColors = 2;
  r.VideoTexture = xh;
  r.WebGL1Renderer = th;
  r.WebGLCubeRenderTarget = Cc;
  r.WebGLMultisampleRenderTarget = dh;
  r.WebGLRenderTarget = Db;
  r.WebGLRenderTargetCube = function (a, b, d) {
    console.warn(
      "THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."
    );
    return new Cc(a, d);
  };
  r.WebGLRenderer = Ne;
  r.WebGLUtils = Vi;
  r.WireframeGeometry = Rd;
  r.WireframeHelper = function (a, b) {
    console.warn(
      "THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."
    );
    return new Za(
      new Rd(a.geometry),
      new Ya({ color: void 0 !== b ? b : 16777215 })
    );
  };
  r.WrapAroundEnding = 2402;
  r.XHRLoader = function (a) {
    console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
    return new Nb(a);
  };
  r.ZeroCurvatureEnding = 2400;
  r.ZeroFactor = 200;
  r.ZeroSlopeEnding = 2401;
  r.ZeroStencilOp = 0;
  r.sRGBEncoding = 3001;
  Object.defineProperty(r, "__esModule", { value: !0 });
});
