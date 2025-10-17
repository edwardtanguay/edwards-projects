from qtools import *
import pytest
import string

def test_generate_short_uuid_length():
    """Test that the UUID has the correct length"""
    uuid = qstr.generate_short_uuid()
    assert len(uuid) == 6

def test_generate_short_uuid_charset():
    """Test that the UUID only contains allowed characters"""
    uuid = qstr.generate_short_uuid()
    allowed_chars = string.ascii_letters + string.digits
    assert all(char in allowed_chars for char in uuid)

def test_generate_short_uuid_uniqueness():
    """Test that multiple UUIDs are likely to be unique"""
    uuids = {qstr.generate_short_uuid() for _ in range(100)}
    assert len(uuids) == 100  # very small chance of duplicate