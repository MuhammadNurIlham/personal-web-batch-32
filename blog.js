let blogs = []

function addBlog(event) {

    event.preventDafeult()

    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let image = document.getElementById('input-blog-image').files[0];

    image = URL.createObjectURL(image) //create url image

    // variabel blog
    let blog = {
        title: title,
        content: content,
        image: image,
        author: 'Muhammad Nur Ilham',
        postedAt: new Date()
    }

    // variable blogs push method adds new items to the end of an array blog
    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="" />
          </div>
        <div class="blog-content">
            <div class="btn-group">
              <a class="btn-edit text-decoration-none text-dark" href="#">Edit Post</a>
              <a class="btn-post text-decoration-none text-light" href="#">Post Blog</a>
            </div>
            <h1>
              <a class="text-decoration-none text-dark" href="blog-detail.html">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a>
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>
            <p class="text-end text-secondary">1 Hours ago</p>
        </div>
    </div>
    `

    for (let i = 0; i < blogs.length; i++) {
        blogContainer.innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <a class="btn-edit text-decoration-none text-dark" href="#">Edit Post</a>
              <a class="btn-post text-decoration-none text-light" href="#">Post Blog</a>
            </div>
            <h1>
              <a class="text-decoration-none text-dark" 
              href="blog-detail.html">
                ${blogs[i].title}
              </a>
            </h1>
            <div class="detail-blog-content">
                ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
            </div>
            <p>
                ${blogs[i].content}
            </p>
            <p class="text-end text-secondary">
            ${getDistanceTime(blogs[i].postedAt)}
            </p>
          </div>
        </div>`
    }

}

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

function getFullTime(time) {
  let date  = time.getDate()
  let monthIndex  = time.getMonth()

  let year  = time.getFullYear()

  let hours = time.getHours()
  let minutes = time.getMinutes()

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

  return fullTime
}

function getDistanceTime(time) {
  let timeNow = new Date()
  let timeBlog  = new Date(time)

  let distance = timeNow - timeBlog // milliseconds

  let dayDistance = Math.floor(distance / (23 * 60 * 60 * 1000)) //convert to day

  if (dayDistance !=0) {
    return dayDistance + ' day ago'
  } else {
    let hourDistance = Math.floor(distance / (60 * 60 * 1000)) //convert to hours
    if (hourDistance !=0) {
      return hourDistance + ' hours ago'
    } else {
      let minuteDistance = Math.floor(distance / (60 * 1000))
      if (minuteDistance !=0) {
        return minuteDistance + ' minute ago'
      } else {
        let secondDistance = Math.floor(distance / 1000)
        return secondDistance + ' seconds ago'
      }
    }
  }
}

// render blog dengan interval 1 detik / 1000 miliseconds
// setInterval(function() {
//   renderBlog()
// }, 1000)