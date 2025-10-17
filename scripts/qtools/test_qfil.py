import os
import pytest
from qtools import *

# Test helper function to create temporary files
def create_temp_file(tmp_path, content):
	file_path = tmp_path / "test_file.txt"
	file_path.write_text(content)
	return str(file_path)

def test_get_lines_from_file_normal_case(tmp_path):
	"""Test normal case with a file containing multiple lines."""
	content = "line1\nline2\nline3"
	file_path = create_temp_file(tmp_path, content)
	result = qfil.get_lines_from_file(file_path)
	assert result == ["line1", "line2", "line3"]

def test_get_lines_from_file_empty_file(tmp_path):
	"""Test with an empty file."""
	file_path = create_temp_file(tmp_path, "")
	
	result = qfil.get_lines_from_file(file_path)
	assert result == [""]  # split('\n') on empty string returns ['']

def test_get_lines_from_file_with_whitespace(tmp_path):
	"""Test that lines are properly stripped."""
	content = "  line1  \n\tline2\t\n  \nline3  "
	file_path = create_temp_file(tmp_path, content)
	
	result = qfil.get_lines_from_file(file_path)
	assert result == ["line1", "line2", "", "line3"]

def test_get_lines_from_file_nonexistent_file():
	"""Test that non-existent file raises RuntimeError."""
	with pytest.raises(RuntimeError) as excinfo:
		qfil.get_lines_from_file("nonexistent_file.txt")
	assert "Failed to read file" in str(excinfo.value)

def test_get_lines_from_file_with_utf8(tmp_path):
	"""Test that UTF-8 encoding works correctly."""
	content = "hëllö\nwörld"
	file_path = tmp_path / "test_utf8.txt"
	
	# Write with explicit UTF-8 encoding
	file_path.write_text(content, encoding="utf-8")
	
	result = get_lines_from_file(str(file_path))
	assert result == ["hëllö", "wörld"]

def test_get_lines_from_file_single_line(tmp_path):
	"""Test file with single line and no newline."""
	content = "single line"
	file_path = create_temp_file(tmp_path, content)
	
	result = qfil.get_lines_from_file(file_path)
	assert result == ["single line"]

def test_get_lines_from_file_trailing_newline(tmp_path):
	"""Test file with trailing newline."""
	content = "line1\nline2\n"
	file_path = create_temp_file(tmp_path, content)
	
	result = qfil.get_lines_from_file(file_path)
	assert result == ["line1", "line2", ""]