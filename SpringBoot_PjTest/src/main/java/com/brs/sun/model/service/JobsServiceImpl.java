package com.brs.sun.model.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.brs.sun.model.dao.JobsDao;
import com.brs.sun.vo.JobsVo;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class JobsServiceImpl implements JobsService {

	private final JobsDao dao;
	
	@Override
	public List<JobsVo> selectAll() {
		log.info("JobsServiceImpl selectAll");
		return dao.selectAll();
	}

}
