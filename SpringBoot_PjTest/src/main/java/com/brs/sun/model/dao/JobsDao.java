package com.brs.sun.model.dao;

import java.util.List;

import com.brs.sun.vo.JobsVo;

public interface JobsDao {

	public List<JobsVo> selectAll();
}
