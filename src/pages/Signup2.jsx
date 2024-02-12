import form3 from "../assets/form3.jpg";
import Datepicker from "../component/Datepicker";
import DropzoneComponent from "../component/DropzoneComponent";
import { Link } from "react-router-dom";

const Signup2 = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div
        className="w-80 h-80 bg-white mx-auto flex flex-col lg:flex-row rounded-2xl shadow-2xl max-lg:max-h-max"
        style={{ width: "85%", height: "85%" }}
      >
        <div className="w-full lg:w-1/2 p-6 flex flex-col items-center justify-center">
          <img
            src={form3}
            alt="Placeholder"
            className="w-full h-full object-cover"
            style={{ width: "90%", height: "90%" }}
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 bg-white rounded-lg flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-4 max-sm:text-center">
            Sign Up
          </h2>
          <br />
          <form className="w-full md:w-full">
            <div className="mb-8 flex items-center">
              <select
                id="countries"
                className="w-2/5 px-4 py-2 border rounded-md focus:outline-none  focus:border-slate-500  border-gray-300"
              >
                <option selected className="text-gray-400">
                  Choose your country
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="GB">United Kingdom</option>
                <option value="JP">Japan</option>
                <option value="AU">Australia</option>
                <option value="IT">Italy</option>
                <option value="ES">Spain</option>
                <option value="NL">Netherlands</option>
                <option value="CH">Switzerland</option>
                <option value="CN">China</option>
                <option value="KR">South Korea</option>
                <option value="RU">Russia</option>
                <option value="BR">Brazil</option>
                <option value="MX">Mexico</option>
                <option value="SE">Sweden</option>
                <option value="BE">Belgium</option>
                <option value="AT">Austria</option>
                <option value="NO">Norway</option>
                <option value="DK">Denmark</option>
                <option value="IN">India</option>
                <option value="SG">Singapore</option>
                <option value="IE">Ireland</option>
                <option value="PL">Poland</option>
                <option value="AR">Argentina</option>
                <option value="FI">Finland</option>
                <option value="CL">Chile</option>
                <option value="PT">Portugal</option>
                <option value="CZ">Czech Republic</option>
                <option value="ZA">South Africa</option>
                <option value="GR">Greece</option>
                <option value="MY">Malaysia</option>
                <option value="HU">Hungary</option>
                <option value="AE">United Arab Emirates</option>
                <option value="TH">Thailand</option>
                <option value="HK">Hong Kong</option>
                <option value="TR">Turkey</option>
                <option value="PH">Philippines</option>
                <option value="ID">Indonesia</option>
                <option value="IL">Israel</option>
                <option value="NZ">New Zealand</option>
                <option value="RO">Romania</option>
                <option value="EG">Egypt</option>
                <option value="SA">Saudi Arabia</option>
                <option value="PK">Pakistan</option>
                <option value="UA">Ukraine</option>
                <option value="BD">Bangladesh</option>
                <option value="CO">Colombia</option>
              </select>

              <Datepicker />
            </div>
            <div className="mb-8 flex items-center">
              <select
                id="genders"
                className="w-2/5 px-4 py-2 border rounded-md focus:outline-none focus:border-slate-500 border-gray-300"
              >
                <option value="" className="text-gray-400">
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nonbinary">Non-binary</option>
                <option value="transgender">Transgender</option>
                <option value="genderqueer">Genderqueer</option>
                <option value="genderfluid">Genderfluid</option>
                <option value="agender">Agender</option>
                <option value="bigender">Bigender</option>
                <option value="demiboy">Demiboy</option>
                <option value="demigirl">Demigirl</option>
                <option value="genderflux">Genderflux</option>
                <option value="pangender">Pangender</option>
                <option value="two-spirit">Two-Spirit</option>
                <option value="other">Other</option>
              </select>

              <select
                id="pronouns"
                className="w-2/5 px-4 py-2 ml-5 border rounded-md focus:outline-none focus:border-slate-500 border-gray-300"
              >
                <option value="" style={{ color: "#718096" }}>
                  Choose your pronouns
                </option>
                <option value="she/her/hers">She/her/hers</option>
                <option value="he/him/his">He/him/his</option>
                <option value="they/them/theirs">They/them/theirs</option>
                <option value="ze/hir/hirs">Ze/hir/hirs</option>
                <option value="ze/zir/zirs">Ze/zir/zirs</option>
                <option value="ze/zem/zems">Ze/zem/zems</option>
                <option value="ey/em/eir">Ey/em/eir</option>
                <option value="ve/ver/vis">Ve/ver/vis</option>
                <option value="xe/xem/xyr">Xe/xem/xyr</option>
                <option value="per/pers/perself">Per/pers/perself</option>
                <option value="faer/faers/faerself">Faer/faers/faerself</option>
                <option value="ne/nem/nir">Ne/nem/nir</option>
                <option value="co/co/cos">Co/co/cos</option>
                <option value="e/em/eir">E/em/eir</option>
                <option value="ae/aer/aers">Ae/aer/aers</option>
                <option value="hu/hum/hus">Hu/hum/hus</option>
                <option value="thon/thons/thonself">Thon/thons/thonself</option>
                <option value="yo/yos/yoself">Yo/yos/yoself</option>
                <option value="vey/ver/vers">Vey/ver/vers</option>
                <option value="zie/zim/zir">Zie/zim/zir</option>
              </select>
            </div>
            <div className="mb-8 flex items-center">
              <textarea
                id="message"
                rows="4"
                className="w-full resize-none px-4 py-2 border rounded-md focus:outline-none
                focus:border-blue-500 border-gray-300"
                placeholder="Tell us more about yourself..."
              ></textarea>
            </div>
            <DropzoneComponent />
            <Link to="/signin">
            <button
              type="submit"
              className="w-2/5 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 flex max-sm:items-center justify-center"
            >
              Sign Up
            </button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
