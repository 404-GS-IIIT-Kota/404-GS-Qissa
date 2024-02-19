import form3 from "../assets/form3.jpg";
import Datepicker from "../component/Datepicker";
import DropzoneComponent from "../component/DropzoneComponent";
import { Link } from "react-router-dom";

const Signup2 = () => {
  return (
    <div className="sm:h-screen  flex items-center justify-center bg-gray-200">
      <div
        className="my-5 w-80 h-80 bg-white mx-auto flex flex-col lg:flex-row rounded-2xl shadow-2xl max-lg:max-h-max"
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
          <form className="w-full md:w-full ">
            <div className="mb-8 flex max-sm:flex-col max-sm:gap-5">
              <select
                id="countries"
                className="w-2/5 px-4 py-2 border rounded-md focus:outline-none  focus:border-slate-500  border-gray-300 max-sm:w-full"
              >
                <option selected className="text-gray-400 ">
                  Choose your country
                </option>
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BR">Brazil</option>
                <option value="BN">Brunei</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="CV">Cabo Verde</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CD">Congo (Congo-Brazzaville)</option>
                <option value="CG">Congo (Congo-Kinshasa)</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote d'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="SZ">Eswatini (fmr. Swaziland)</option>
                <option value="ET">Ethiopia</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GR">Greece</option>
                <option value="GD">Grenada</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HN">Honduras</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar (formerly Burma)</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="KP">North Korea</option>
                <option value="MK">North Macedonia</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestine State</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="QA">Qatar</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="RW">Rwanda</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="KR">South Korea</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syria</option>
                <option value="TW">Taiwan</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VA">Vatican City</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Vietnam</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>

              <Datepicker />
            </div>
            <div className="mb-8 flex items-center max-sm:flex-col max-sm:gap-5">
              <select
                id="genders"
                className="w-2/5 max-sm:w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-500 border-gray-300"
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
                className="w-2/5 max-sm:w-full  max-sm:ml-0 px-4 py-2 ml-5 border rounded-md focus:outline-none focus:border-slate-500 border-gray-300"
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
                className="w-2/5 max-sm:w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 flex max-sm:items-center justify-center"
              >
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup2;
