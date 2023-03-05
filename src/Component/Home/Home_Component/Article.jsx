


export const Article = ({ arrow, text3, intro, info }) => {
    return (
        <div className="contain1">
                      <div className="btn-info">
                        <h1 className='uppercase'>{intro}</h1>
                        
                        <div className="arrow">
                        <h3>{text3}</h3>
                        {arrow}
                        </div>
                        
                      </div>
                          <div className="text">
                            <p>{info}</p>
                          </div>
                    </div>
    )
}