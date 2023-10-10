import {Match} from "../Models/Matches.js"
import {Teams} from "../Models/Teams.js"
import { Posts } from "../Models/Posts.js";


export class matchController{
    static showCreatePage = async(req,res)=>{
        const {eventId} = req.params;
        const teams = await Teams.find({eventId});
        res.render("createMatch",{
            eventId,
            teams
        }) 
    }

    static create = async (req, res) => {
        try {
            const { date } = req.body;
            const parsedDate = new Date(date);
    
            const day = parsedDate.getDate().toString().padStart(2, '0');
            const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
            const year = parsedDate.getFullYear();
    
            const formattedDate = `${day}-${month}-${year}`;
    
            const newMatch = await Match.create({ ...req.body, date: formattedDate });
    
            if (newMatch) {
                res.redirect("/api/matches");
            }
        } catch (error) {
            res.render("createMatch", {
                errorMessage: error.message
            });
        }
    }
    
    static showMatches = async(req,res)=>{
        const posts = await Posts.find({type:"event"})
        res.render("ShowMatches",{
            posts
        }) 
    }

    static showEventMatches = async(req,res)=>{
        const {eventId} = req.params;
        const matches = await Match.find({eventId});
        res.render("showEventsMatches",{
            matches
        }) 
    }
}