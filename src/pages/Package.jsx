import PackageFetch from "./PackageFetch"
export default function Package() {
return(
       
        <section>
            <div class="Body-package">
            <h3> Here is your list of packages</h3>
       <ul class="item">
       <li class="t1">Package Id</li>
       <li class="t2" >Sender</li>
       <li class="t2">Status</li>
       
       <li class="t3">Location</li>
       <li class="t3">ETA</li>

       </ul>
    

      
       <PackageFetch/>
       </div>
    </section>

       
    )
}
