import React,{useState} from "react";

//Icons
import {FaBook,FaLightbulb,FaListUl,FaChartPie,FaFolderOpen,FaFileInvoice,FaTags,FaChartLine,FaBookOpen} from "react-icons/fa";
import {IoMdBriefcase} from "react-icons/io";
import {FaGears,FaBrain,FaIndustry} from "react-icons/fa6";

//Images
import Economics from "../assets/economics.jpg"

const nameandicon=[["Case Interview Guide",<FaBrain/>],["Case Competition Guide",<FaLightbulb/>],["180 Data Capsule",<IoMdBriefcase/>],["Case Studies",<FaFolderOpen/>],["Project Briefs",<FaFileInvoice/>],["Industry Reports",<FaIndustry/>],["Research Reports",<FaChartPie/>],["Policy Reports",<FaBook/>],["Data Reports",<FaChartLine/>],["Frameworks",<FaGears className="text-5xl -mb-4"/>],["Revenue Models",<FaTags/>]];
const Options=()=>{
    let count=0,flag=true;
    const option=nameandicon.map((item,i)=>{
        count++;
        if(count<3){
            flag=true;
        } else {
            flag=false;
            if(count==5){
                count=0;
            }
        }
        return ( 
    <a href={"#"+item[0].replaceAll(" ","-").toLowerCase()} 
        className={`${flag ? "text-secondary w-2/5 hover:bg-secondary hover:text-white ": "text-white w-[30%] min-w-min mx-2 bg-secondary hover:bg-white hover:text-main "}
        text-2xl inline-block mx-2 my-3 h-40 rounded-3xl shadow-xl mx-3/5 text-center hover:scale-[103%] hover:xs:scale-100 transition-all duration-300 hover:transition-all hover:duration-300`}>
        <div className="flex justify-center mt-8 mb-4 text-3xl">{item[1]}</div>
        {item[0]}
    </a>)});
    return (
    <>  
        <div className="inline-block w-full">{option}</div>
    </>);
}
//Function to create a new post
const post=function(topic,img,date,content){
    return {topic:topic,image:img,date:date,content:content};
}
//Dictionary/Object containing the title and its corresponding posts 
let topics=nameandicon.map((item)=>({title:item[0],posts:[post("hello hello hello hello hello hello",Economics,"14 Jan 2024","1 happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy  happy aaaaaa aaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaa aaaaa aaaaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaa aaaaaaa aaaaaa aaaaaa aaaaaaa aaaaaa aaaaaaaaa aaaaa aaa aaaaaaaa aaaaa aaaaaaaaaaaaaaaaaaaaa aa"),post("hello hello hello hello hello hello",Economics,"14 Jan 2024","2 happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy"),post("hello hello hello hello hello hello",Economics,"14 Jan 2024","3 happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy"),post("4 hello hello hello hello hello hello",Economics,"14 Jan 2024","happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy"),post("5 hello hello hello hello hello hello",Economics,"14 Jan 2024","happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy happy")]}));
//To add posts/content use the below function
const newcontent=function(title,t,i,d,c){
    topics.find(o=>{
    if(o.title===title){
        o.posts.append(post(t,i,d,c));
    }
    })
}
const Sectionpage=(props)=>{
    const noOfPosts=props.posts.length;
    const [[start,end],setDisplay]=useState([0,noOfPosts<=3 ? noOfPosts : 3]);

    /*constructor(props) {
        super(props);
        this.state={
            display:props.posts.length<=3 ? props.posts : props.posts.slice(0,3),
            pages:props.posts.length%3==0 ? Array.from({length: Math.floor(props.posts.length/3)}, (_, i) => i + 1):Array.from({length:Math.floor(props.posts.length/3)+1}, (_, i) => i + 1),
            currentPage:1,
        }
        this.displayPosts=this.displayPosts.bind(this);    
    }*/
    const displayPosts=(i)=>{
        setDisplay([(i-1)*3, noOfPosts>=i*3 ? i*3 : noOfPosts]);
    }
    return (
        <div id={props.title.toLowerCase().replaceAll(" ","-")} className="my-16">
            <p className="text-5xl font-bold text-gray-700 h-1/6 py-4">{props.title.toUpperCase()}</p>
            <div className="justify-start justify-items-center flex flex-col w-full md:flex-row md:px-12 relative md:space-x-20 overflow-auto delay-300 animate-[pulse_1s_ease-in-out_1]">
                {props.posts.slice(start,end).map((item)=>
                    <div className="group md:w-[30%] min-w-80 my-6 max-h-screen sm:w-full rounded-xl shadow-xl overflow-hidden">
                        <div className="relative w-full h-64 md:h-[40%] rounded-t-xl overflow-hidden">
                            <img src={item.image} className=" relative w-full object-fit"/>
                            <p className= "absolute top-0 justify-center items-center flex flex-col w-full h-full text-5xl text-main backdrop-brightness-50 invisible transition-all duration-300 group-hover:visible group-hover:transition-all group-hover:ease-in group-hover:duration-100 cursor-pointer" >     <FaBookOpen/> 
                            </p>
                        </div>
                        <p className="font-bold text-3xl text-left pl-2 relative cursor-pointer">{item.topic}</p>
                        <p className="text-md text-left pl-2 text-main">{item.date}</p>
                        <p className="text-justify p-2">{item.content}</p>
                    </div>)}
            </div>
            <div className="flex justify-end pr-6 bg-transparent">
                {start==0?"":<p className="text-primary w-6 font-extrabold hover:cursor-pointer" onClick={()=>{setDisplay((a)=>[a[0]-3,a[0]])}}>{"<<"}</p>}
                {(noOfPosts%3==0 ? Array.from({length: noOfPosts/3}, (_, i) => i + 1):Array.from({length:noOfPosts/3+1}, (_, i) => i + 1)).map((item)=>
                    <p className={`${(start/3+1)==item ? "text-main animate-[ping_1s_ease-in-out_1]":"text-primary"} hover:cursor-pointer w-4 font-bold text-lg`} onClick={()=>displayPosts(item)}>{item}</p>
                )}
                {end==noOfPosts?"":<p className="text-primary w-6 font-extrabold hover:cursor-pointer" onClick={()=>{setDisplay((a)=>[a[1],noOfPosts>=(a[1]+3)?3:noOfPosts])}}>{">>"}</p>}
            </div>
        </div>
    );
}
const Contents=()=>{
    const section=topics.map((item)=>(
        <Sectionpage title={item.title} posts={item.posts} />
    ));
    return <div className=" flex flex-col space-y-8 md:space-y-12">{section}</div>;
}
export const  Resources=()=>{
    return (
        <div className="p border-black border-solid border-2 text-center justify-items-center">
        <p className="text-5xl font-bold my-2 mb-4">Resources & Publications</p>
        <Options/>
        <Contents/>
        </div>
    );
}