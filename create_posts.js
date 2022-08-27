
function load_posts(json, dst) {
    fetch('/post_button.html')
        .then(request => request.text())
        .then(blog_button => {
            // Fetching the devlogs json
            fetch(json)
                .then(request => request.json())
                .then(data => {
                    // Creating the devlogs
                    data.posts.forEach(element => {
                        let devButtonStr = blog_button
                            .replace(">name", `>${element.name}`)
                            .replace("path", element.path);

                        if (element.pinned) {
                            document.getElementById(`pinned-${dst}`).insertAdjacentHTML('beforeend', devButtonStr)
                        } else {
                            document.getElementById(dst).insertAdjacentHTML('beforeend', devButtonStr)
                        }
                    })
            })
    })
}