import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BKG_IMG } from "../utils/constants";

const GptSearch = () => {

    return (
        <div>
            <div className="fixed -z-20">
            <img className="h-screen md:h-auto object-cover" src={ BKG_IMG} alt="img"/>  </div>
            <div className="">
            <GptSearchBar />
            <GptSuggestions/>
           </div>
            
       
        </div>
    )
}
export default GptSearch;