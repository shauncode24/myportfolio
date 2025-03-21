import SkillsIcon from "./SkillsIcons";
import SkillGroups from "./SkillGroups";
import html5Icon from '../assets/html5.svg';


function Skills () {
    return(
        <div id = "skills-dev" className="skills-dev">
            <div className="skills-title">My Skillset</div>
            <div className="skills-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in vestibulum ipsum. Praesent imperdiet accumsan semper.
            </div>
            <div className="skills-display">
                <SkillGroups skillsarr = {["https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/html-5.svg", "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/css-3.svg", "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/javascript.svg", "https://static-00.iconduck.com/assets.00/bootstrap-icon-2048x1668-ej5js338.png"]} unique = "0" classmain = "1" dur = "1" del = "0.5"/>
                <SkillGroups skillsarr = {["https://raw.githubusercontent.com/grommet/grommet-icons/d1caa51527742aa18cfa23ea9dd5525c38e04601/public/img/reactjs.svg"]}  unique = "4" classmain = "2" dur = "1.4" del = "0.8"/>
                <SkillGroups skillsarr = {["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png", "https://seekvectors.com/files/download/234b110fb32958f68f318e13c7a0610e.png"]} unique = "5" classmain = "3" dur = "1.8" del = "1.1"/> 
                <SkillGroups skillsarr = {["https://raw.githubusercontent.com/vscode-icons/vscode-icons/ee0ddff592270def6cca218ef2fc097c305be0fd/icons/file_type_python.svg", "https://cdn-icons-png.flaticon.com/512/152/152760.png", "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/c.svg", "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/c-plusplus.svg"]} unique = "7" classmain = "4" dur = "2.2" del = "1.4"/>
                <SkillGroups skillsarr = {["https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/github-icon.svg", "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/git-icon.svg"]} unique = "11" classmain = "5" dur = "2.6" del = "1.7"/>
                <SkillGroups skillsarr = {["https://static-00.iconduck.com/assets.00/mysql-original-wordmark-icon-2048x1064-jfbaqrzh.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"]} unique = "13" classmain = "6" dur = "3" del = "2"/>                                      

            </div>
        </div>
    );
}

export default Skills;