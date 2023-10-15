import { useState,useEffect } from 'react'
import book from '../assets/book.png'
import brush from '../assets/brush.png'
import bid from '../assets/bid.png'
import profile1 from '../assets/profile1.jpg'
import bgProfile1 from '../assets/bgProfile1.png'
import peachy from '../assets/peach.png'
import leaves from '../assets/tea-leaf.png'
import topup from '../assets/add.png'
import withdraw from '../assets/minus.png'

export default function Profile() {
   
    const[name,setName] = useState("Peachy");
    const[username,setUser] = useState("MasterPeach");
    const[descript,setDescript] = useState(`Welcome to MasterPeach`);
    const[leaf,setLeaf] = useState(999999);
    const[peach,setPeach] = useState(999999);

    {/*--------- Button ColorState ---------*/}
    const[tabState, setTabState] = useState(0);
    useEffect(() => {
        const workart = document.getElementById("WorkArt");
        const collect = document.getElementById("Collect");
        const auction = document.getElementById("MyBid");
        const icon1 = document.getElementById("Brush");
        const icon2 = document.getElementById("Book");
        const icon3 = document.getElementById("hBid");
        const text1 = document.getElementById("tWA");
        const text2 = document.getElementById("tC");
        const text3 = document.getElementById("tA");
        if (tabState == 0){
            workart.style.backgroundColor = "#CF594D";
            icon1.style.backgroundColor = "#FD997F";
            text1.style.color = "#F9E3E0";

            collect.style.backgroundColor = "#FFEEE1";
            icon2.style.backgroundColor = "#FFE1CB";
            text2.style.color = "#0F0C0C";

            auction.style.backgroundColor = "#FFEEE1";
            icon3.style.backgroundColor = "#FFE1CB";
            text3.style.color = "#0F0C0C";
        } else if (tabState == 1){
            workart.style.backgroundColor = "#FFEEE1";
            icon1.style.backgroundColor = "#FFE1CB";
            text1.style.color = "#0F0C0C";
            
            collect.style.backgroundColor = "#CF594D";
            icon2.style.backgroundColor = "#FD997F";
            text2.style.color = "#F9E3E0";
            
            auction.style.backgroundColor = "#FFEEE1";
            icon3.style.backgroundColor = "#FFE1CB";
            text3.style.color = "#0F0C0C"
        } else if (tabState == 2){
            workart.style.backgroundColor = "#FFEEE1";
            icon1.style.backgroundColor = "#FFE1CB";
            text1.style.color = "#0F0C0C";
 
            collect.style.backgroundColor = "#FFEEE1";
            icon2.style.backgroundColor = "#FFE1CB";
            text2.style.color = "#0F0C0C";

            auction.style.backgroundColor = "#CF594D";
            icon3.style.backgroundColor = "#FD997F";
            text3.style.color = "#F9E3E0";
        }
    },[tabState])

    return (
        <div className="container">
            <div className='d-flex justify-content-center align-items-center gap-5'>
                <div id="Profile" className='d-flex row' 
                style={{backgroundColor:"#FFF6F5", width:"380px", height:"485px", border: "solid 2px #0F0C0C", boxShadow: "2px 2px #0F0C0C", borderRadius: "45px"}}>
                    {/*-------------------- Header + Image Profile ----------------------*/}
                    <div className='col-12 p-0 m-0' 
                    style={{height:"40%", borderBottom:"solid 3px black", backgroundImage:`url(${bgProfile1})`, backgroundSize:"cover", borderRadius:"43px 43px 0px 0px"}}>
                        <div className='d-flex p-0 m-0' style={{backgroundColor:"#FFE1CB", width:"120px", height:"120px", borderRadius:"50%", border:"solid 3px #0F0C0C",  
                        position:"relative", left:"30px", top:"120px"}}> 
                            <img className='img-fluid' src={profile1} alt="Profile Pic" style={{borderRadius : "50%", width:"100%", height:"auto"}}/>
                        </div>
                    </div>
                    {/*-------------------- Profile detail ----------------------*/}
                    <div className='col-12' style={{height:"38%", width:"100%", padding:"0px 30px 0px 30px"}}>
                        <h5 className='' style={{fontSize:"28px", marginBottom:"5px", fontWeight:"bold"}}>{name}</h5>
                        <h6 style={{fontSize:"12px" ,color:"#896F6F", marginBottom:"10px"}}>@{username} ◦ 520 followers ◦ 50 following</h6>
                        <div className='d-flex' style={{backgroundColor:"#FBE6E3", width:"100%", height:"80px", borderRadius:"15px", padding:"10px", marginBottom:"15px"}}>
                            <h6 style={{fontSize:"12px" ,color:"#896F6F" }}>{descript}</h6>
                        </div>
                        <div className='d-flex justify-content-around align-items-center' style={{background:"linear-gradient(to right, #FF9C7D, #F5C6F7)", width:"100%", height:"55px", borderRadius:"20px"}}>
                            <h6 className='d-flex align-items-center m-0 p-0'>
                                <img className='img-fluid' src={peachy} alt="peach icon"style={{width:"1.5rem", marginRight:"8px"}}/>
                                {peach}
                                <img className='img-fluid' src={withdraw} alt="minus icon"style={{width:"1rem", marginLeft:"8px"}}/>
                            </h6>
                            <h6 className='d-flex align-items-center m-0 p-0'>
                                <img className='img-fluid' src={leaves} alt="leaf icon"style={{width:"1.5rem", marginRight:"8px"}}/>
                                {leaf} 
                                <img className='img-fluid' src={topup} alt="add icon"style={{width:"1rem", marginLeft:"8px"}}/>
                            </h6>
                        </div>
                    </div>          
                </div>
            
                <div id="Picture" className='d-flex'
                style={{backgroundColor:"#FBCAC482", width:"750px", height:"515px", borderRadius: "25px"}} >   
                    <header className='container d-flex p-4 gap-4'>
                        {/* --------- Artwork button --------------------------------------------------*/}
                        <button id="WorkArt" className='d-flex justify-content-center align-items-center' 
                        onClick={()=>{
                            setTabState(0);
                        }}
                        onMouseOver={(event)=>{
                            if (tabState != 0) {
                                event.currentTarget.style.backgroundColor = "#F0988F";
                                const icon = document.getElementById("Brush");
                                icon.style.backgroundColor = "#FFC5B6";
                                const text = document.getElementById("tWA");
                                text.style.color = "#0F0C0C";
                            }
                        }}
                        onMouseLeave={(event) =>{
                            if (tabState != 0) {
                                event.currentTarget.style.backgroundColor = "#FFEEE1";
                                const icon = document.getElementById("Brush");
                                icon.style.backgroundColor = "#FFE1CB";
                                const text = document.getElementById("tWA");
                                text.style.color = "#0F0C0C";
                            }
                        }}  
                        style={{backgroundColor:"#FFEEE1", width:"170px", height:"60px", border: "solid 3px #0F0C0C", boxShadow: "2px 2px #0F0C0C", borderRadius: "45px"}}>                       
                            <div id="Brush" className='d-flex justify-content-center align-items-center p-1 me-2' 
                            style={{backgroundColor:"#FFE1CB" , width:"42px" , height:"42px", borderRadius:"50%", border:"solid 2px #0F0C0C"}}>
                                <img className='img-fluid' src={brush} alt="Brush Pic" style={{maxWidth: "27px", height:"27px"}} />
                            </div>
                            <h5 id="tWA" className='m-0'>Artwork</h5>
                        </button>
                        {/* --------- Collection button -----------------------------------------------*/}
                        <button id="Collect" className='d-flex justify-content-center align-items-center'
                        onClick={()=>{
                            setTabState(1);
                        }}
                        onMouseOver={(event)=>{
                            if (tabState != 1) {
                                event.currentTarget.style.backgroundColor = "#F0988F";
                                const icon = document.getElementById("Book");
                                icon.style.backgroundColor = "#FFC5B6";
                                const text = document.getElementById("tC");
                                text.style.color = "#0F0C0C";
                            }
                        }}
                        onMouseLeave={(event) =>{
                            if (tabState != 1) {
                                event.currentTarget.style.backgroundColor = "#FFEEE1";
                                const icon = document.getElementById("Book");
                                icon.style.backgroundColor = "#FFE1CB";
                                const text = document.getElementById("tC");
                                text.style.color = "#0F0C0C";
                            }
                        }}  
                        style={{backgroundColor:"#FFEEE1", width:"170px", height:"60px", border: "solid 3px #0F0C0C", boxShadow: "2px 2px #0F0C0C", borderRadius: "45px"}}>
                            <div id="Book" className='d-flex justify-content-center align-items-center p-1 me-2' 
                            style={{backgroundColor:"#FFE1CB", width:"42px" , height:"42px",  borderRadius:"50%", border:"solid 2px #0F0C0C"}}>
                                <img className='img-fluid' src={book} alt="Book Pic" style={{maxWidth: "27px", height:"27px"}} /> 
                            </div>   
                            <h5 id="tC" className='m-0'>Collection</h5>
                        </button>
                        {/* --------- Auction button ------------------------------------------------*/}
                        <button id="MyBid" className='d-flex justify-content-center align-items-center'
                        onClick={()=>{
                            setTabState(2);
                        }}
                        onMouseOver={(event)=>{
                            if (tabState != 2) {
                                event.currentTarget.style.backgroundColor = "#F0988F";
                                const icon = document.getElementById("hBid");
                                icon.style.backgroundColor ="#FFC5B6";
                                const text = document.getElementById("tA");
                                text.style.color = "#0F0C0C";
                            }
                        }}
                        onMouseLeave={(event) =>{
                            if (tabState != 2) {
                                event.currentTarget.style.backgroundColor = "#FFEEE1";
                                const icon = document.getElementById("hBid");
                                icon.style.backgroundColor = "#FFE1CB";
                                const text = document.getElementById("tA");
                                text.style.color = "#0F0C0C";
                            }
                        }}  
                        style={{backgroundColor:"#FFEEE1", width:"170px", height:"60px", border: "solid 3px #0F0C0C", boxShadow: "2px 2px #0F0C0C", borderRadius: "45px"}}>
                            <div id="hBid" className='d-flex justify-content-center align-items-center p-1 me-2' 
                            style={{backgroundColor:"#FFE1CB", width:"42px", height:"42px", borderRadius:"50%", border:"solid 2px #0F0C0C"}}>
                                <img className='img-fluid' src={bid} alt="Bid Pic" style={{maxWidth: "27px", height:"27px"}} /> 
                            </div>
                            <h5 id="tA" className='m-0'>Auction</h5>
                        </button>
                    </header>

                </div>
            </div>
        </div>
    )
}