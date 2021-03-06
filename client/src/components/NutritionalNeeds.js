import React, { useState } from 'react'
import InputDropdown from './helpers/InputDropdown'
import InputText from './helpers/InputText'
import RecipeCard from './helpers/RecipeCard'
import { 
	sortBy as sortByConsts, 
	recipeCount as recipeCountConsts, 
	matchCategoryWithDb,
	separateInputString } from './helpers/Consts'
import '../style/RestrictionsAndNeeds.css'

const NutritionalNeeds = () => {

	const [nutritions, setNutritions] = useState('')
	const [recipeCount, setRecipeCount] = useState(recipeCountConsts.options[0])
	const [sortBy, setSortBy] = useState(sortByConsts.options[0])
	const [recipes, setRecipes] = useState([])

	const fetchResults = () => {
		const separatedIngredients = separateInputString(nutritions)
		const params = new URLSearchParams()

		separatedIngredients.forEach(item =>
			params.append('nutritions[]', item))

		params.append('recipeCount', recipeCount)
		console.log(sortBy)
		console.log(matchCategoryWithDb(sortBy))
		params.append('sortBy', matchCategoryWithDb(sortBy))

		fetch('/nutritions?' + params)
			.then(res => {
				const json = res.json()
				return json
			})
			.then(data => {
				setRecipes(data)
			})
			.catch(e => {
				console.log(e)
				return alert('Something went wrong while fetching result')
			})
	}

	return (
		<div className='NutritionalNeeds'>
			<div className='inputs'>
				<InputText
					name='nutritions'
					title={'Max amount of sugar, sodium, protein, saturated fat, and total fat to include'}
					onInputChange={setNutritions}
					placeholder='Ex: 20, 10, 40, 5, 10 for sugar, sodium, protein, saturated fat and total fat respectively...' />
				<InputDropdown
					name='recipe-count'
					title={recipeCountConsts.title}
					onSelectionChange={setRecipeCount}
					options={recipeCountConsts.options} />
				<InputDropdown
					name='sort-by'
					title={sortByConsts.title}
					onSelectionChange={setSortBy}
					options={sortByConsts.options} />
				<div className='button' onClick={e => fetchResults()}>Find</div>
			</div>
			<div className='results-container'>
				{recipes.map((recipe, i) =>
					<div key={`recipe-${i}`}>
						<RecipeCard recipe={recipe}/>
						<br />
					</div>
				)}
			</div>
		</div>
	)
}

export default NutritionalNeeds;