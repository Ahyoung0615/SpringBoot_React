package com.brs.sun.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brs.sun.model.service.JobsService;
import com.brs.sun.vo.JobsVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("api/")
@RequiredArgsConstructor
@CrossOrigin(origins = "")
public class JobsController {

	private final JobsService service;
	
	@GetMapping("/")
	public String jobsTest(Model model) {
		log.info("JobsController jobsTest");
		
		List<JobsVo> list = service.selectAll();
		model.addAttribute("jobList", list);
		return "index.jsp";
	}
	
	@GetMapping("jobsList")
	public List<JobsVo> jobReact(){
		
		return null;
	}
}
