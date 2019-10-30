import React from "react";

class IsItSpringYet extends React.Component {
    handlePageChange() {
        const url = "https://www.idokep.hu/tavasz";
        window.open(url, '_blank');
    }

    render() {
        return(
           <div className={"ibox"} >
               <div className={"ibox-content"} id={"smaller"}>
                   <div className={"text-center"}>
                       <div className={"m-b-md"}>
                            <div className={"m-xs"}>
                               <button onClick={this.handlePageChange} id={"sun"} className={"btn btn-primary btn-circle btn-lg"}>
                                   <i className={"fa fa-sun-o"}></i>
                               </button>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
        )
    }
}

export default IsItSpringYet;