const React = require('react')

function Index (props) {
    const engineers = props.engineers
    return (
          <div>
            <h1>Index Page</h1>
            <ul>
                {
                   engineers.map((engineer) => {
                    return (<li>This is engineer <a href={`/engineers/${engineer.id}`}>{engineer.name}</a> of the specialty {engineer.specialty}</li>)
                   }) 
                }
            </ul>
        </div>
    )
}

module.exports=Index