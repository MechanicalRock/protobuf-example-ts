#!/bin/bash
set -euo pipefail

# Compile with ts-gen-protoc
OUT_DIR_TS_GEN_PROTOC="./generated/using-ts-protoc-gen"
protoc \
    --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts" \
    --js_out="import_style=commonjs,binary:${OUT_DIR_TS_GEN_PROTOC}" \
    --ts_out="${OUT_DIR_TS_GEN_PROTOC}" \
    src/proto/*.proto

# Compile with ts-proto
OUT_DIR_TS_PROTO="./generated/using-ts-proto"
protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_out="${OUT_DIR_TS_PROTO}" \
    src/proto/*.proto
