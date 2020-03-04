import {Http} from "../utils/http.js";
class LikeModel extends Http{
  //post建好后要完善
  like(behavior, index,category){
    console.log(behavior,index,category)
    let url = behavior == "like" ? "/like" :"/like/cancel";
    this.request({
      url:url,
      method:"POST"
    })
  }
  //post建好后要完善
  getClassicLikeStatus(artId, category,sCallback){
    this.request({
      url: `classic/${category}/${artId}/favor`,
      success:(res)=>(
        sCallback(res.data)
      )
    })

  }
}
export {
  LikeModel
};