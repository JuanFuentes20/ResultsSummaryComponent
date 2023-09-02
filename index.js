fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    const categories = document.querySelector('.categories')
data.forEach(category => {
    const listElement = document.createElement('li')
    const listDiv = document.createElement('div')
    listDiv.classList.add('category')

    const iconAndCategoryName = document.createElement('div')

    const icon = document.createElement('img')
    icon.src = category.icon
    icon.alt = "Icon"
    icon.classList.add('icon')

    iconAndCategoryName.appendChild(icon)

    const score = document.createElement('div')
    score.style.display = 'flex'
    score.style.flexDirection = 'row'


    const categoryName = document.createElement('p')
    categoryName.innerText = category.category
    iconAndCategoryName.appendChild(categoryName)
    const categoryScore = document.createElement('p')
    categoryScore.innerText = category.score
    categoryScore.style.fontWeight = 600
    categoryScore.style.color = 'black'
    const totalScore = document.createElement('p')
    totalScore.innerText = '/ 100'
    totalScore.style.fontWeight = 400
    totalScore.style.color = '#D3D3D3'

    score.appendChild(categoryScore)
    score.appendChild(totalScore)
    listDiv.appendChild(iconAndCategoryName)
    listDiv.appendChild(score)
    listElement.appendChild(listDiv)
    
    
    
    categories.appendChild(listElement)
})

  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });