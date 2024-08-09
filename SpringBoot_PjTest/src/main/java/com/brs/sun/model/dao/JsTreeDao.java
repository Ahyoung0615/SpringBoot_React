package com.brs.sun.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.brs.sun.vo.PlayerVo;
import com.brs.sun.vo.StadiumVo;
import com.brs.sun.vo.TeamVo;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class JsTreeDao {

	private final SqlSessionTemplate template;
	
	public List<StadiumVo> getStadium(){
		return template.selectList("com.brs.sun.model.dao.JsTreeDao.stadiumTable");
	}
	
	public List<TeamVo> getTeam(){
		return template.selectList("com.brs.sun.model.dao.JsTreeDao.teamTable");
	}
	
	public List<PlayerVo> getPlayer(){
		return template.selectList("com.brs.sun.model.dao.JsTreeDao.playerTable");
	}
}
