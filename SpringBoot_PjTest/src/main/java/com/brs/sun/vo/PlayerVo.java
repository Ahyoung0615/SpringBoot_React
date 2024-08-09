package com.brs.sun.vo;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PlayerVo {

	private String playerId;
	private String playerName;
	private String teamId;
	private String ePlayerName;
	private String nickname;
	private String joinYyyy;
	private String position;
	private int backNo;
	private String nation;
	private Date birthDate;
	private String solar;
	private int height;
	private int weight;
}
