//import { Destination } from "../models/Destination";
import "./Entry.css";

type EntryProps = {
    //destination: Destination
    img: {
        src: string
        alt: string
    },
    country: string,
    googleMapsLink: string,
    title: string,
    dates: string,
    text: string
};

export default function Entry({img, country, googleMapsLink, title, dates, text}: EntryProps) {
    return (
        <article className='journal-entry'>
            <div className='destination-image-container'>
                <img src={img.src} alt={img.alt} className="destination-image" />
            </div>
            <div className="destination-info-container">
                <img src="/src/assets/marker.svg" alt="map marker icon" className='marker'/>
                <span className='destination-country'>{country}</span>
                <a href={googleMapsLink} className="map-link" target="_blank">View on Google Maps</a>
                <h2 className='destination-name'>
                    {`Visit ${title} on your next trip`}
                </h2>
                <p className='travel-dates'>{dates}</p>
                <p className='description'>{text}</p>
            </div>            
        </article>
    );
}