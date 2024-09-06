export const GridCharacters = ({characters}) => {
    return (
      <>
        <div className="d-flex flex-row row row-cols-6">
          {characters &&
            characters.map((char) => (
              <div key={char.id}>
                <h3 className="text-center">{char.name}</h3>
                <img 
                  style={{ width: '13rem', borderColor: 'black' }} 
                  className="img-thumbnail" 
                  src={`${char.thumbnail.path}.${char.thumbnail.extension}`} 
                  alt={char.name} 
                />
              </div>
            ))
          }
        </div>
      </>
    );
  }
  