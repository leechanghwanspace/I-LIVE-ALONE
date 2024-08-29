package com.ILA.Ilivealone.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class PageController {

    //main에서 들어가는 페이지
    @RequestMapping(value = "/about", method = RequestMethod.GET)
    public String showAboutPage() {
        return "about";
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String showSearchPage() {
        return "search";
    }

    @RequestMapping(value = "/search_region", method = RequestMethod.GET)
    public String showSearchRegionPage() {
        return "search_region";
    }


    //about에서 들어가는 페이지
    @RequestMapping(value = "/place", method = RequestMethod.GET)
    public String showPlacePage() {
        return "place";
    }

    @RequestMapping(value = "/info", method = RequestMethod.GET)
    public String showInfoPage() {
        return "info";
    }


    //place 에서 들어가는 페이지
    @RequestMapping(value = "/daiso", method = RequestMethod.GET)
    public String showDasioPage() {
        return "daiso";
    }

    @RequestMapping(value = "/cafe", method = RequestMethod.GET)
    public String showCafePage() {
        return "cafe";
    }

    @RequestMapping(value = "/restaurant", method = RequestMethod.GET)
    public String showRestaurantPage() {
        return "restaurant";
    }

    @RequestMapping(value = "/laundry_room", method = RequestMethod.GET)
    public String showLaundryRoomPage() {
        return "laundry_room";
    }

    @RequestMapping(value = "/convenience_store", method = RequestMethod.GET)
    public String showConvenienceStorePage() {
        return "convenience_store";
    }

    //info에서 들어가는 페이지
    @RequestMapping(value = "/hospital", method = RequestMethod.GET)
    public String showHospitalPage() {
        return "hospital";
    }

    @RequestMapping(value = "/subway_station", method = RequestMethod.GET)
    public String showSubwayStationPage() {
        return "subway_station";
    }

    @RequestMapping(value = "/recommended_youtuber", method = RequestMethod.GET)
    public String showRecommendedYoutuberPage() {
        return "recommended_youtuber";
    }

    @RequestMapping(value = "/community", method = RequestMethod.GET)
    public String showCommunityPage() {
        return "community";
    }

    @RequestMapping(value = "/regional_portal", method = RequestMethod.GET)
    public String showRegionalPortalPage() {
        return "regional_portal";
    }


}
