import React, {Component} from 'react'
import "./Articles.css"
import ArticleForm from './ArticleForm'
import ArticleDetail from './ArticleDetail'



export default class Articles extends Component {



    render() {
        return (
        <div>
            <ArticleForm {...this.props}/>

        {this.props.articles.map(article => <ArticleDetail key= {article.id} article = {article}{...this.props}/>)}

            Hi Articles
        </div>
        )
    }
}

// import React, { Component } from 'react'
// import "./Articles.css"

// export default class AnimalList extends Component {
//     render () {
//         return (
//             <React.Fragment>
//             <div className="animalButton animals">
//                 <button type="button"
//                         onClick={()=> this.props.history.push("/animals/new")}
//                         className="btn btn-success">
//                     Admit Animal
//                 </button>
//             </div>
//             <section className="animals">
//             {
//                 this.props.animals.map(animal =>
//                     <div key={animal.id} className="card">
//                         <div className="card-body">
//                             <h5 className="card-title">
//                                 <img src={dog} className="icon--dog" alt="doggos"/>
//                                 {animal.name}
//                                 <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
//                                 <button
//                                     onClick={() => this.props.deleteAnimal(animal.id)}
//                                     className="card-link">Euthanize</button>
//                             </h5>
//                         </div>
//                     </div>
//                 )
//             }
//             </section>
//             </React.Fragment>
//         )
//     }
// }