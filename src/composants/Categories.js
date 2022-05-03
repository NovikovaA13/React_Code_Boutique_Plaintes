function Categories({ categories, activeCategory, setActiveCategory }) {

      return <div className='my-categories'>
            <select name='categories' className='my-categories-select'
                    onChange={(e) => setActiveCategory(e.target.value)}>
                  <option>---</option>
                  {
                        categories.map((category) => {
                              return (<option key={category} value={category}>{category}</option>);
                        })
                  }
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
      </div>;
}

export default Categories;