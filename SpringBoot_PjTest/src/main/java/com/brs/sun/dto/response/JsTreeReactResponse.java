package com.brs.sun.dto.response;

import java.util.ArrayList;
import java.util.List;

public class JsTreeReactResponse {

	private final String id;
	private final String text;
	private final List<JsTreeReactResponse> children;
	
	public JsTreeReactResponse(String id, String text) {
		super();
		this.id = id;
		this.text = text;
		this.children = new ArrayList<JsTreeReactResponse>();
	}

	public String getId() {
		return id;
	}

	public String getText() {
		return text;
	}

	public List<JsTreeReactResponse> getChildren() {
		return children;
	}
	
}
