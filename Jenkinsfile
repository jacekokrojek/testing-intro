node {
    cleanWs()
}

node {
    stage 'Clone repo'
    git branch: 'master',
    credentialsId: 'bitbucket-jacek-https',
    url: 'https://bitbucket.org/testarmydev/ob-performance/src/master/'
}

node {   
	properties(
		[
			parameters([string(defaultValue: '80', name: 'vu'), string(defaultValue: '1800', name: 'duration')])
		]
	)
    stage 'Run test'
		sh "jmeter -n -t performance-test.jmx -l ${params.vu}_results.csv -j ${params.vu}_jmeter.log -e -o ${params.vu}_results -JInitAndResp_Threads=${params.vu} -JInitAndResp_Duration=${params.duration}" 
    step([$class: 'ArtifactArchiver', artifacts: '**/*results.csv, **/*jmeter.log, **/*_results/**/*, recording*.xml'])   
}
