

const App = () => {

  const cateogaries = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    }
  ]

  return (
    <div className="cateogaries-container">
      {cateogaries.map(({ title }) => (
        <div className="cateogary-container">
          <div className="background-image"/>
          <div className="cateogary-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
