import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BKG_IMG } from "../utils/constants";
const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-20">
            <img src={ BKG_IMG} alt="img"/>  </div>
            <GptSearchBar />
            <GptSuggestions/>
       
        </div>
    )
}
export default GptSearch;