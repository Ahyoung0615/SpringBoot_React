package com.brs.sun.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brs.sun.dto.response.JsTreeReactResponse;
import com.brs.sun.dto.response.JsTreeResponse;
import com.brs.sun.model.dao.JsTreeDao;
import com.brs.sun.vo.PlayerVo;
import com.brs.sun.vo.StadiumVo;
import com.brs.sun.vo.TeamVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
public class JsTreeController {

	private final JsTreeDao dao;
	
	@GetMapping("/tree")
	public List<JsTreeResponse> getTree(){
		
		log.info("geTree GetMapping");
//		<a href="https://www.flaticon.com/free-icons/atmospheric" title="atmospheric icons">Atmospheric icons created by Manuel Viveros - Flaticon</a>
		
		List<JsTreeResponse> jsList = new ArrayList<JsTreeResponse>();
		
//		List<StadiumVo> stadium = dao.getStadium();
//		for (StadiumVo stadiumVo : stadium) {
//			jsList.add(new JsTreeResponse(stadiumVo.getStadiumId(), stadiumVo.getStadiumName(), "#", "./img/pikachu.png"));
//		}
		
		List<TeamVo> team = dao.getTeam();
		for (TeamVo teamVo : team) {
			jsList.add(new JsTreeResponse(teamVo.getTeamId(), teamVo.getTeamName(), "#", "./img/sun.png"));
		}
		
		List<PlayerVo> player = dao.getPlayer();
		for (PlayerVo playerVo : player) {
			jsList.add(new JsTreeResponse(playerVo.getPlayerId(), playerVo.getPlayerName(), playerVo.getTeamId(), "./img/pikachu.png"));
		}
		
		return jsList;
	}
	
	@GetMapping("/reactTree")
	public List<JsTreeReactResponse> getReactTree(){

		// id, text, children
		List<JsTreeReactResponse> jsList = new ArrayList<JsTreeReactResponse>();
		
		List<StadiumVo> stadiumList = dao.getStadium();
		List<TeamVo> teamList = dao.getTeam();
		List<PlayerVo> playerList = dao.getPlayer();
		
		for (StadiumVo stadiumVo : stadiumList) {
			JsTreeReactResponse stadium = new JsTreeReactResponse(stadiumVo.getStadiumId(), stadiumVo.getStadiumName());
			for (TeamVo teamVo : teamList) {
				JsTreeReactResponse team = new JsTreeReactResponse(teamVo.getTeamId(), teamVo.getTeamName());
				for (PlayerVo playerVo : playerList) {
					JsTreeReactResponse player = new JsTreeReactResponse(playerVo.getPlayerId(), playerVo.getPlayerName());
					if(teamVo.getTeamId().equals(playerVo.getTeamId())) {
						team.getChildren().add(player);
					}
				}
				if(stadiumVo.getStadiumId().equals(teamVo.getStadiumId())) {
					stadium.getChildren().add(team);
				}
			}
			jsList.add(stadium);
		}
		
		return jsList;
	}
	
	@PostMapping("/receive-array")
    public String receiveArray(@RequestBody List<String> data) {
        // 받은 데이터를 처리하는 로직을 여기에 작성
		log.info("result: {}", data);
        // 응답 반환
        return "ok";
    }
}

	
/*
 * list -> map -> list -> map

stadium
id : stadiumId
text : stadiumName
children : team

team 
id : teamId
text : teamName
children : player

player
id : playerId
text : playerName
children : -
 * 
 * List<JsTree> list = new Arraylist
for (스타디움) {
    JsTree stadium = new JsTree ~
    for (팀) {
        JsTree team = new JsTree ~
        for (플레이어) {
            JsTree player = new JsTree ~
            if (team.getId().equals(player.getTeamId())) {
                team.getChildren().add(player);
            }
        }

        if (stadiumJsTree.getId().equals(team.getStadiumId())) {
            stadiumJsTree.getChildren().add(team);
        }
    }

    list.add(stadium);
}*/
