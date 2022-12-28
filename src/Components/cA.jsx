import { contacts  } from "../models/contacts";
import CompoB from "./cB";

const CompoA = () => {

    const defaultCompA = new contacts('Angel', 'Cervantes', 'angel.munmun@outlook.com', true);

    return (
        <div>  
          <h1>
            Your info:
          </h1>
          <div>
            <CompoB contacts={ defaultCompA }></CompoB>
          </div>
        </div>
    );
};

export default CompoA;
