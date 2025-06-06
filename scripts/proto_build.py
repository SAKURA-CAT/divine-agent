#!/usr/bin/env python
"""Compile proto files to python and go files."""

import os

import grpc_tools  # type: ignore
from grpc_tools import protoc  # type: ignore

proto_root = os.path.join(os.path.dirname(grpc_tools.__file__), "_proto")

# messages
for proto_file in [
    "common/v1/common.proto",
    "trace/v1/trace.proto",
    "metric/v1/metric.proto",
]:
    ret = protoc.main(
        (
            "",
            "-I",
            proto_root,
            "-I",
            ".",
            "--python_out=.",
            "--pyi_out=.",
            "--go_out=.",
            f"divi/proto/{proto_file}",
        )
    )
    assert not ret

# grpc service
for proto_file in [
    "core/health/v1/health_service.proto",
]:
    ret = protoc.main(
        (
            "",
            "-I",
            proto_root,
            "-I",
            ".",
            "--python_out=.",
            "--pyi_out=.",
            "--grpc_python_out=.",
            "--go_out=.",
            "--go-grpc_out=.",
            f"divi/proto/{proto_file}",
        )
    )
    assert not ret
