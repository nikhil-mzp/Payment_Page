import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import img1 from "./img/image.png";
import upi from "./img/upi.png";
import img2 from "./img/wallets.png";
// import wallet from "./img/download3.png"
import img4 from "./img/cards.png";
import img3 from "./img/netbanking.png";
import paytm from "./img/paytem.png";
import img5 from "./img/rupay.png";
import sbilogo from "./img/sbilogo.png";


function App() {
  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  const [Mobile, setMobile] = useState(null);
  const [address, setaddress] = useState("");
  const [City, setCity] = useState("");
  const [state, setstate] = useState("");
  const [pin, setpin] = useState(null);
  const [upicheck, setupicheck] = useState(false);
  const [sbicheck, setsbicheck] = useState(false);
  const [paytmcheck, setpaytmcheck] = useState(false);
  const [Card, checkCard] = useState(false);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [CVV, setCVV] = useState(null);
  const [cardnum, setCardNUm] = useState(null);
  const [upiId, setupiId] = useState(null);
  // const [age, setAge] = useState("");
  const [image, setImage] = useState(null);
const [coupon,setcoupon]=useState(false)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App md:mx-36 md:my-20 mx-3 my-5 ">
      <div className="flex justify-between items-center text-xl">
        <h1 className="font-semibold font-serif">SparkTech</h1> <h2>Cancel</h2>
      </div>
      <section className="flex md:flex-row flex-col py-4 px-5 bg-[#A020F0] justify-center gap-5 ">
        <div className="leftSec md:w-1/2 flex flex-col gap-10">
          <div>
            <h3 className="pb-5 text-2xl font-bold">BILLING ADDRESS</h3>
            <form className="flex justify-center flex-col gap-5">
              <TextField
                classname="w-full bg-slate-100"
                style={{ background: "white"}}
                id="outlined-basic"
                label="Enter name"
                variant="outlined"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <TextField
                classname="w-full bg-state-100"
                style={{ background: "white" }}
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                value={Mobile}
                type="number"
                onChange={(e) => setMobile(e.target.value)}
              />
              <TextField
                classname="w-full bg-slate-100"
                style={{ background: "white" }}
                id="outlined-basic"
                label="Enter Email"
                variant="outlined"
                value={email}
                onChange={(e) => setmail(e.target.value)}
              />
              <TextField
                classname="w-full bg-slate-100"
                style={{ background: "white" }}
                id="outlined-basic"
                label="Address"
                variant="outlined"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
              <TextField
                classname="w-full bg-slate-100"
                style={{ background: "white" }}
                id="outlined-basic"
                label="City"
                variant="outlined"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
              <div className="flex justify-center flex-row gap-4 items-center">
                <div className="flex flex-col  w-1/2">
                  <InputLabel id="demo-simple-select-label">State/Union Territory</InputLabel>
                  <Select
                    className="w-full bg-slate-100"
                    style={{ background: "white" }}
                    labelId="state"
                    id="demo-simple-select"
                    value={state}
                    label=""
                    onChange={(e) => setstate(e.target.value)}
                  >
                    <MenuItem value={10}>Choose State</MenuItem>
                    {["Andhra Pradesh",  "Arunachal Pradesh",
                    "Assam",
                    "Bihar",
                    "Chhattisgarh",
                    "Goa",
                    "Gujarat",
                    "Haryana",
                    "Himachal Pradesh",
                    "Jharkhand",
                    "Karnataka",
                    "Kerala",
                    "Madhya Pradesh",
                    "Maharashtra",
                    "Manipur",
                    "Meghalaya",
                    "Mizoram",
                    "Nagaland",
                    "Odisha",
                    "Punjab",
                    "Rajasthan",
                    "Sikkim",
                    "Tamil Nadu",
                    "Telangana",
                    "Tripura",
                    "Uttar Pradesh",
                    "Uttarakhand",
                    "West Bengal",
                    "Andaman and Nicobar Islands",
                    "Chandigarh",
                    "Dadra and Nagar Haveli and Daman and Diu",
                    "Jammu and Kashmir",
                    "Ladakh",
                    "Lakshadweep",
                    "Delhi",
                    "Puducherry"].map(
                      (data, i) => {
                        return (
                          <MenuItem key={i} value={data}>
                            {data}
                          </MenuItem>
                        );
                      }
                    )}
                  </Select>
                </div>
                <div className="flex flex-col w-1/2">
                  <InputLabel id="demo-simple-select-label">
                    Pin Code
                  </InputLabel>
                  <TextField
                    id="outlined-number"
                    style={{ background: "white" }}
                    label=""
                    type="number"
                    value={pin}
                    onChange={(e) => setpin(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
          <div>
            <h3 className="pb-5 text-2xl font-bold">PAYMENT</h3>
            <form className="flex justify-center flex-col gap-5">
              <div className="w-full">
                <div className="flex  justify-between items-center p-2.5 rounded-md border border-2 border-slate-200 border-red-50 " style={{background:"white", border:"1px solid black", borderRadius:"13px"}}>
                  <div
                    onClick={() => checkCard(!Card)}
                    className="flex gap-5 font-semibold items-center"
                  >
                    <label className="circular-checkbox ">
                      <input
                        style={{ background: "white" }}
                        type="checkbox"
                        checked={Card}
                        onChange={(e) => checkCard(e.target.value)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <img
                      className="border border-black rounded-md "
                      src={img4}
                      width="50"
                    />
                    Credit/Debit Card 
                  </div>
                  <div>
                  <img src={img5} width="50" style={{ marginLeft: "150px" }} />
                  </div>
                  <div>
                    <img src={img1} width="50" />
                  </div>
                </div>
                <div className={`${Card ? " " : "hidden"} rounded-md p-2 bg-slate-100 `}>
                  <select
                    classname="mt-5 cards"
                    style={{ background: "white" }}
                  >
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                  </select>
                  <div className="mt-5 flex justify-between gap-5">
                    <TextField
                      style={{ background: "white", width: "50%" }}
                      classname=" bg-slate-100"
                      id="outlined-basic"
                      label="Card Number"
                      variant="outlined"
                      value={Mobile}
                      type="number"
                      onChange={(e) => setCardNUm(e.target.value)}
                    />
                    <TextField
                      style={{ background: "white", width: "50%", borderRadius:"1.4%" }}
                      classname="w-full bg-slate-100"
                      id="outlined-basic"
                      label="Exp Month"
                      variant="outlined"
                      value={Mobile}
                      type="number"
                      onChange={(e) => setMonth(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-5 justify-between">
                    <div className="flex flex-col w-1/2">
                      <InputLabel id="demo-simple-select-label">
                        Exp Year
                      </InputLabel>
                      <Select
                        style={{ background: "white" }}
                        className="w-full bg-slate-100"
                        labelId="state"
                        id="demo-simple-select"
                        value={year}
                        label=""
                        onChange={(e) => setYear(e.target.value)}
                      >
                        <MenuItem value={10}>Choose Year</MenuItem>
                        {[2050, 2049, 2048, 2047, 2046, 2045, 2044, 2043, 2042,
                        2041, 2040, 2039, 2038, 2037, 2036, 2035, 2034, 2033,
                        2032, 2031, 2030, 2029, 2028, 2027, 2026, 2025, 2024,].map((data, i) => {
                          return (
                            <MenuItem key={i} value={data}>
                              {data}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </div>
                    <div className="w-1/2">
                      <InputLabel id="demo-simple-select-label">CVV</InputLabel>
                      <TextField
                        style={{ background: "white", width: "100%" }}
                        classname="w-full bg-slate-100"
                        id="outlined-basic"
                        label=""
                        variant="outlined"
                        value={CVV}
                        type="number"
                        onChange={(e) => setCVV(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center p-2.5 rounded-md border border-2 border-slate-200 border-red-50 " style={{background:"white", border:"1px solid black", borderRadius:"13px"}}>
                  <div
                    onClick={() => setupicheck(!upicheck)}
                    className="flex  gap-5 font-semibold items-center"
                  >
                    <label className="circular-checkbox ">
                      <input
                        style={{ background: "white" }}
                        type="checkbox"
                        checked={upicheck}
                        onChange={(e) => setupicheck(e.target.value)}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <img
                      className="border border-black rounded-md "
                      src={upi}
                      width="50"
                    />
                    UPI
                  </div>
                  <div>
                    <img src={upi} width="50" />
                  </div>
                </div>
                <div
                  className={`${upicheck ? " " : "hidden"} p-2 rounded-md bg-slate-100 `}
                >
                  <form className="flex justify-center flex-col gap-5">
                    <TextField
                      classname="w-full bg-slate-100"
                      style={{ background: "white" }}
                      id="outlined-basic"
                      label="UPI ID "
                      type="number"
                      variant="outlined"
                      value={upiId}
                      onChange={(e) => setupiId(e.target.value)}
                    />
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      {image && (
                        <div className="border">
                          <img
                            src={image}
                            alt="Selected"
                            style={{ maxWidth: "100%", maxHeight: "300px" }}
                          />
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-md border border-2 border-slate-200 border-red-50 " style={{background:"white", border:"1px solid black", borderRadius:"13px"}}>
                <div
                  onClick={() => setsbicheck(!sbicheck)}
                  className="flex gap-5 font-semibold items-center "
                >
                  <label className="circular-checkbox ">
                    <input
                      style={{ background: "white" }}
                      type="checkbox"
                      checked={sbicheck}
                      onChange={(e) => setsbicheck(e.target.value)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <img
                    className="border border-black rounded-md "
                    src={img3}
                    width="50"
                  />
                  Net Banking
                </div>
                <div>
                  <img src={sbilogo} width="50" />
                </div>
              </div>
              <div className={`${sbicheck?" ":"hidden"}  bg-slate-100`}>
                <div >
                  <div >
                    <InputLabel id="demo-simple-select-label" style={{marginLeft:"22px"}}>
                      Choose Bank
                    </InputLabel>
                    <Select
                      className="w-full"
                      labelId="state"
                      id="demo-simple-select"
                      value={year}
                      style={{marginRight: "-26px" ,
                      marginLeft: "22px",
                      width: "50%",
                      marginBottom: "10px"}}
                      label=""
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <MenuItem value={10}>Choose Your Bank...</MenuItem>
                      {["Airtel Payment Bank", "Axis Bank", "Bank of Baroda", "Bank of India", "Canara Bank", "Central Bank of India", "HDFC Bank", "ICICI Bank", "Indian bank", "IndusInd Bank", "Punjab & Sind Bank", "Panjab National Bank", "State Bank of India", "Union Bank of India" ].map((data, i) => {
                        return (
                          <MenuItem key={i} value={data} style={{width: "300px"}}>
                            {data}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-md border border-2 border-slate-200 border-red-50 " style={{background:"white", border:"1px solid black", borderRadius:"13px",  height:"66px"}}>
                <div
                  onClick={() => setpaytmcheck(!paytmcheck)}
                  className="flex gap-5 font-semibold items-center"
                >
                  <label className="circular-checkbox ">
                    <input
                      style={{ background: "white" }}
                      type="checkbox"
                      checked={paytmcheck}
                      onChange={(e) => setpaytmcheck(e.target.value)}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <img
                    className="border border-black rounded-md "
                    src={img2}
                    width="50"
                  />
                  Mobile Wallets
                </div>
                <div>
                  <img src={paytm} width="50" />
                </div>
              </div>
              <div className={`${paytmcheck?" ":"hidden"}  bg-slate-100 `}>
                <div >
                  <div >
                    <InputLabel id="demo-simple-select-label" style={{marginLeft:"22px"}}>
                      Choose Mobile Wallets
                    </InputLabel>
                    <Select
                      className="w-full"
                      labelId="state"
                      id="demo-simple-select"
                      value={year}
                      style={{marginRight: "-26px" ,
                      marginLeft: "22px",
                      width: "50%",
                      marginBottom: "10px"}}
                      label=""
                      onChange={(e) => setYear(e.target.value)}>
                      <MenuItem value={10}>Choose Your Wallet...</MenuItem>
                      {["Amazon Pay", "Bharat Pay", "Google Pay","Paytm", "Phone Pay" ].map((data, i) => {
                        return (
                          <MenuItem key={i} value={data} style={{width: "300px"}}>
                            {data}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </form>
          </div>
        </div>
        <div className="rightSec md:w-1/2 flex flex-col gap-14 md:m-10 m-2 rounded-2xl p-10"  style={{background:"wheat"}}>
          <div className=" flex flex-col gap-5">
            <h3 className=" text-2xl font-bold">SUMMARY</h3>
            <div>
              <div className="flex font-normal justify-between items-center">
                <p >Original Price:</p> <p>$3,099</p>
              </div>
              <div className="my-2 bg-slate-900 h-[1px] text-slate-900"></div>
              <div className="font-[500] flex justify-between items-center">
                <p>Total:</p> <p>$3,099</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <p class="text-sm font-bold bg-[#A020F0] rounded-lg p-2.5 cursur-pointer" onClick={()=>setcoupon(!coupon)}>Apply Coupon</p>
            </div>
            <div className={`${coupon?"flex":"hidden"} gap-2`}>
              <input className="w-full p-2"/>
              <button className="text-lg font-semibold bg-[#A020F0] rounded-lg p-2 text-[#f3f4f5] m-2">Apply</button>
              <button onClick={()=>setcoupon(false)} className={` text-lg font-semibold bg-[#A020F0] rounded-lg p-2 text-[#f3f4f5] m-2`}>Cancel</button>
            </div>
            <p className="text-sm font-bold">By completing your purchase you agree to these Terms of Service.</p>
            <button className="text-2xl font-semibold bg-[#A020F0] rounded-lg p-2.5 text-[#f3f4f5]">Proceed To Checkout</button>
          </div>
        </div>
      </section>
        <div style={{textAlign:"center"}}>
          SparkTech@Allrightreserved
        </div>
    </div>
  );
}

export default App;
