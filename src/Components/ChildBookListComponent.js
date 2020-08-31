import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

// class ChildBookListComponent extends Component {
//  static contextType = ThemeContext
// render() {

//                         const {isLightTheme, light, dark } = this.context
//                         console.log(isLightTheme,light,dark)
//                         const theme  = isLightTheme? light : dark
//                         return <div>
//                         <ul>
//                             <li className="book-list" style={{background:theme.bg}}>The thousand splendid suns</li>
//                             <li className="book-list" style = {{color:theme.syntax}}>Palace of Illusions</li>
//                             <li className="book-list">Power of Subconscious mind</li>
//                         </ul>
//     </div> 
// }
// }

// class ChildBookListComponent extends Component {

//     render() {
//         <ThemeContext.consumer>{(context) => {
//             const { isLightTheme, light, dark } = context
//             console.log(isLightTheme, light, dark)
//             const theme = isLightTheme ? light : dark
//             return <div>
//                 <ul>
//                     <li className="book-list" style={{ background: theme.bg }}>The thousand splendid suns</li>
//                     <li className="book-list" style={{ color: theme.syntax }}>Palace of Illusions</li>
//                     <li className="book-list">Power of Subconscious mind</li>
//                 </ul>
//             </div>
//         }}</ThemeContext.consumer>
//     }
// }

const ChildBookListComponent = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    console.log(isLightTheme,light,dark)
    const theme  = isLightTheme? light : dark
    return <div>
                        <ul>
                            <li className="book-list" style={{background:theme.bg}}>The thousand splendid suns</li>
                            <li className="book-list" style = {{color:theme.syntax}}>Palace of Illusions</li>
                            <li className="book-list">Power of Subconscious mind</li>
                        </ul>
    </div> 
}

export default ChildBookListComponent