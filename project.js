let blogs = []

let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

function addProject(event) {

    event.preventDefault()

    let project     = document.getElementById('input-project-name').value
    let start       = document.getElementById('input-start-time').value
    let end         = document.getElementById('input-end-time').value
    let description = document.getElementById('input-description').value
    let getIcon1    = document.getElementById('node-js')
    let getIcon2    = document.getElementById('react-js')
    let getIcon3    = document.getElementById('javascript')
    let getIcon4    = document.getElementById('php')

    var printIcon   = ""

    if (getIcon1.checked == true) {
        printIcon += '<img class="me-2 mt-2 mb-1" value="node" id="node" src="assets/nodejs.png" alt="nodejs">'
    }
    if (getIcon2.checked == true) {
        printIcon += '<img class="me-2 mt-2 mb-1" value="react" id="react" src="assets/reactjs.png" alt="react-js">'
    }
    if (getIcon3.checked == true) {
        printIcon += '<img class="me-2 mt-2 mb-1" value="javascript" id="javascript" src="assets/javascript.png" alt="javascript">'
    }
    if (getIcon4.checked == true) {
        printIcon += '<img class="me-2 mt-2 mb-1" value="php" id="php" src="assets/php.png" alt="PHP">'
    }
    let files       = document.getElementById('input-myfile')

    files = URL.createObjectURL(files.files[0])

    let newProject = {
        author: 'Muhammad Nur Ilham',
        projectName: project,
        start: start,
        end: end,
        description: description,
        checkbox: printIcon,
        // technologies: technologies,
        files: files,
        postedAt: new Date()
    }

    blogs.push(newProject)

    renderBlog()
}

function renderBlog() {

    let projectCard = document.getElementById('my-project-app')

    projectCard.innerHTML = `
    <div class="col-md-4 mb-3 mt-2">
        <div class="card-app h-100">
            <img src="assets/logo1.jpg" class="card-img-top" alt="logo-1">
            <div class="row-md-4 card-body">
            <h5 class="card-title">
                <a class="text-decoration-none text-dark" href="project-detail.html">DumbWays Mobile App</a>
            </h5>
            <p class="card-time fw-light">durasi : 3 bulan</p>
            <p class="me-2 card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-icon ms-3 mb-3">
                <img class="me-2 mt-2 mb-1" value="node" id="node" src="assets/nodejs.png" alt="nodejs">
                <img class="me-2 mt-2 mb-1" value="react" id="react" src="assets/reactjs.png" alt="react-js">
                <img class="me-2 mt-2 mb-1" value="javascript" id="javascript" src="assets/javascript.png" alt="javascript">
                <img class="me-2 mt-2 mb-1" value="php" id="php" src="assets/php.png" alt="PHP">
            </div>
            <div class="row justify-content-center mb-2">
                <div class="col-6">
                    <button class="btn-edit ms-2" type="button">Edit</button>
                </div>
                <div class="col-6">
                    <button class="btn-delete me-1" type="button">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-3 mt-2">
        <div class="card-app h-100">
            <img src="assets/logo2.jpg" class="card-img-top" alt="logo-2">
            <div class="card-body">
                <h5 class="card-title">
                    <a class="text-decoration-none text-dark" href="project-detail.html">DumbGram Mobile App</a>
                </h5>
                <p class="card-time fw-light">durasi : 3 bulan</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-icon ms-3 mb-3">
                <img class="me-2 mt-2 mb-1" value="node" id="node" src="assets/nodejs.png" alt="nodejs">
                <img class="me-2 mt-2 mb-1" value="react" id="react" src="assets/reactjs.png" alt="react-js">
                <img class="me-2 mt-2 mb-1" value="javascript" id="javascript" src="assets/javascript.png" alt="javascript">
                <img class="me-2 mt-2 mb-1" value="php" id="php" src="assets/php.png" alt="PHP">
            </div>
            <div class="row justify-content-center mb-2">
                <div class="col-6">
                    <button class="btn-edit ms-2" type="button">Edit</button>
                </div>
                <div class="col-6">
                    <button class="btn-delete me-1" type="button">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-3 mt-2">
        <div class="card-app h-100">
            <img src="assets/logo4.jpg" class="card-img-top" alt="logo-3">
            <div class="card-body">
                <h5 class="card-title">
                    <a class="text-decoration-none text-dark" href="project-detail.html">DumbsApp Mobile</a>
                </h5>
                <p class="card-time fw-light">durasi : 3 bulan</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-icon ms-3 mb-3">
                <img class="me-2 mt-2 mb-1" value="node" id="node" src="assets/nodejs.png" alt="nodejs">
                <img class="me-2 mt-2 mb-1" value="react" id="react" src="assets/reactjs.png" alt="react-js">
                <img class="me-2 mt-2 mb-1" value="javascript" id="javascript" src="assets/javascript.png" alt="javascript">
                <img class="me-2 mt-2 mb-1" value="php" id="php" src="assets/php.png" alt="PHP">
            </div>
            <div class="row justify-content-center mb-2">
                <div class="col-6">
                    <button class="btn-edit ms-2" type="button">Edit</button>
                </div>
                <div class="col-6">
                    <button class="btn-delete me-1" type="button">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-4 mt-2">
        <div class="card-app h-100">
            <img src="assets/logo3.jpg" class="card-img-top" alt="logo-4">
            <div class="card-body">
                <h5 class="card-title">
                    <a class="text-decoration-none text-dark" href="project-detail.html">Covid Tracking Mobile App</a>
                </h5>
                <p class="card-time fw-light">durasi : 3 bulan</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-icon ms-3 mb-3">
                <img class="me-2 mt-2 mb-1" value="node" id="node" src="assets/nodejs.png" alt="nodejs">
                <img class="me-2 mt-2 mb-1" value="react" id="react" src="assets/reactjs.png" alt="react-js">
                <img class="me-2 mt-2 mb-1" value="javascript" id="javascript" src="assets/javascript.png" alt="javascript">
                <img class="me-2 mt-2 mb-1" value="php" id="php" src="assets/php.png" alt="PHP">
            </div>
            <div class="row justify-content-center mb-2">
                <div class="col-6">
                    <button class="btn-edit ms-2" type="button">Edit</button>
                </div>
                <div class="col-6">
                    <button class="btn-delete me-1" type="button">Delete</button>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 mb-4 mt-2">
        <div class="card-app h-100">
            <img src="assets/logo5.jpg" class="card-img-top" alt="logo-5">
            <div class="card-body">
                <h5 class="card-title">
                    <a class="text-decoration-none text-dark" href="project-detail.html">DumbBook Mobile App</a>
                </h5>
                <p class="card-time fw-light">durasi : 3 bulan</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-icon ms-3 mb-3">
                <img class="me-2 mt-2 mb-1" value="node" id="node" src="assets/nodejs.png" alt="nodejs">
                <img class="me-2 mt-2 mb-1" value="react" id="react" src="assets/reactjs.png" alt="react-js">
                <img class="me-2 mt-2 mb-1" value="javascript" id="javascript" src="assets/javascript.png" alt="javascript">
                <img class="me-2 mt-2 mb-1" value="php" id="php" src="assets/php.png" alt="PHP">
            </div>
            <div class="row justify-content-center mb-2">
                <div class="col-6">
                    <button class="btn-edit ms-2" type="button">Edit</button>
                </div>
                <div class="col-6">
                    <button class="btn-delete me-1" type="button">Delete</button>
                </div>
            </div>
        </div>
    </div>
    `

    // looping
    for (let i = 0; i < blogs.length; i++) {
    projectCard.innerHTML += `
        <div class="col-4 mb-4 mt-2">
            <div class="card-app h-100">
                <img src="${blogs[i].files}" class="card-img-top" alt="logo-1">
                <div class="card-body">
                    <h5 class="card-title">
                        <a class="text-decoration-none text-dark" href="project-detail.html">
                        ${blogs[i].projectName}
                        </a>
                    </h5>
                    <p class="card-time fw-light">durasi : ${getDistanceMonth(blogs[i].start, blogs[i].end)}</p>
                    <p class="card-text">${blogs[i].description}</p>
                </div>
                <div class="card-icon ms-3 mb-3">
                    ${blogs[i].checkbox}
                </div>
                <div class="row justify-content-center mb-2">
                    <div class="col-6">
                        <button class="btn-edit ms-2" type="button">Edit</button>
                    </div>
                    <div class="col-6">
                        <button class="btn-delete me-1" type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

// function getTechnologies() {
//     let checkbox = document.getElementsByName('tech')
//     let tech = "";

//     for (let i = 0; i < checkbox.length; i++) {
//         if(checkbox[i].checked) {
//             tech = tech + checkbox[i].value +", ";
//         }
//     }
//     document.getElementById('input-list-checkbox').innerText = tech.replace(/,\s*$/,"");
// }

// function getTechnologies() {
//     let getIcon1    = document.getElementById('node-js')
//     let getIcon2    = document.getElementById('react-js')
//     let getIcon3    = document.getElementById('javascript')
//     let getIcon4    = document.getElementById('php')

//     var printIcon   = ""

//     if (getIcon1.checked == true) {
//         printIcon += '<img class="me-2 mt-2 mb-1" value="node" id="node" src="assets/nodejs.png" alt="nodejs">'
//     }
//     if (getIcon2.checked == true) {
//         printIcon += '<img class="me-2 mt-2 mb-1" value="react" id="react" src="assets/reactjs.png" alt="react-js">'
//     }
//     if (getIcon3.checked == true) {
//         printIcon += '<img class="me-2 mt-2 mb-1" value="javascript" id="javascript" src="assets/javascript.png" alt="javascript">'
//     }
//     if (getIcon4.checked == true) {
//         printIcon += '<img class="me-2 mt-2 mb-1" value="php" id="php" src="assets/php.png" alt="PHP">'
//     }
// }

function getFullTime(time) {
    let date          = time.getDate()
    let monthIndex    = time.getMonth()
    let year          = time.getFullYear()

    let hours         = time.getHours()
    let minutes       = time.getMinutes()

    let fullTime      = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
    
    return fullTime
}

function getDistanceMonth(start,end) {
    let countStart  = new Date(start)
    let countEnd    = new Date(end)

    let months  = (countStart.getFullYear() - countEnd.getFullYear())*12
    months -= countStart.getMonth();
    months += countEnd.getMonth();
    return months <= 0 ? 0 : months + ' bulan' 
    // ( ? dan : Ini disebut Operator Bersyarat (yang merupakan operator ternary ). 
    // Ini memiliki bentuk condition:? value-if-true: value-if-false 
    // Pikirkan ?sebagai "lalu" dan :sebagai "lain".)
    // return months + ' bulan'
}