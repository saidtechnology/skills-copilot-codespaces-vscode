function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modules/members/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm' ,
        BiquadFilterNode: true,
        scope: {
            member: '='
        }
    };
}