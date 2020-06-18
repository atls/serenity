{{/* vim: set filetype=mustache: */}}

{{/*
Expand the name of the chart.
*/}}
{{- define "static-app.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Certificate name.
*/}}
{{- define "static-app.certname" -}}
{{- printf "%s" .Values.endpoints.hostname | replace "." "-" -}}
{{- end -}}

{{/*
Certificate secret name.
*/}}
{{- define "static-app.tlsname" -}}
{{- printf "%s-tls" .Values.endpoints.hostname | replace "." "-" -}}
{{- end -}}
