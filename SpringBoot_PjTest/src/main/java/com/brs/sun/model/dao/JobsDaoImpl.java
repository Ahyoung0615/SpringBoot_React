package com.brs.sun.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.brs.sun.vo.JobsVo;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class JobsDaoImpl implements JobsDao {

	private final SqlSessionTemplate template;
	
	@Override
	public List<JobsVo> selectAll() {
		return template.selectList("com.brs.sun.model.dao.JobsDaoImpl.selectAll");
	}

}
