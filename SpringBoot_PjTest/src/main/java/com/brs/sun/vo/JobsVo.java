package com.brs.sun.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class JobsVo {

	private String jobId;
	private String jobTitle;
	private int minSalary;
	private int maxSalary;
	private int seq;
}
