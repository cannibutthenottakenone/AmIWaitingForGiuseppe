const baseurl = ".."

const images = [
"binoculars-gc83f358ec_1920.jpg",
"binoculars-gd926183b2_1920.jpg",
"nature-ge7774f87a_1920.jpg",
"people-g6cac8c50e_1920.jpg",
"stalk-ga8443a83b_1920.jpg",
"telescope-gff1153149_1920.jpg",
"tower-viewer-g1e6ff1f06_1920.jpg",
"viewpoint-g03720780b_1920.jpg"
]
let selectedImage = images[Math.round(Math.random()*(images.length-1))]

document.body.style.backgroundImage=`url('${baseurl}/resources/images/${selectedImage}')`